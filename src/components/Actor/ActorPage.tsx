import {useAppSelector} from "../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { getAction } from "../../store/ActionCreator";
import Slider from "react-slick"
import "./index.scss"
import {NavLink} from "react-router-dom";

const ActorPage = () => {
    const {users, loader, error} = useAppSelector(s => s.ActorSlice)
    // console.log(users)
    const dispatch = useAppDispatch()
    const {movieId} = useParams()
    // console.log(movieId)

    useEffect(()=>{
        dispatch(getAction(movieId))
    },[movieId])

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    }
    return(
        <div id="actorPage">
                <div className="actorPage container">
                    <h1 className='text-black text-3xl my-10'>В главных ролях</h1>
                    <Slider {...settings}>
                        {
                            users.map(el => (
                                <div>
                                    <div className="actorPage-top ">
                                        <img  className=' rounded-bl-full border-double border-2 border-sky-600 ' width={250} src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`} alt="" />
                                    </div>
                                    <NavLink to={`/details/movies/${el.id}`}>
                                        <h1 className='text-2xl my-8 '>{el.name}</h1>
                                    </NavLink>

                                </div>
                            ))
                        }
                    </Slider>

                </div>


        </div>
    )
}
export default ActorPage;