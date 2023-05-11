import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {Link, useParams} from "react-router-dom";
import {getActorsMovie} from "../../../store/ActionCreator";
import Slider from "react-slick"
import './index.scss'
import {ActorsSlice} from "../../../store/Reducers/ActorMovieSlice";

const ActorMovie = () => {
    const {actor} = useAppSelector(state => state.ActorsSlice)
    const dispatch = useAppDispatch()
    console.log(actor)
    const {Id} = useParams()

    useEffect(() => {
        dispatch(getActorsMovie(Id))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };
    return (
        <div>
            <div>
                <Slider {...settings}>
                    {
                        actor.map(el => (
                            <div className='mx-5 my-4'>
                                <Link to={`/details/movie/${el.id}`}>
                                    <img width={200} className=' swiper border-double border-2 border-sky-600 '
                                         src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/>
                                </Link>
                                <h1>{el.title}</h1>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default ActorMovie;