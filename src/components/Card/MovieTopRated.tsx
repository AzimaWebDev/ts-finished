import React, { useEffect } from 'react'
import { useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import { FetchingTopRated} from "../../store/ActionCreator";
import { Link } from 'react-router-dom'

const MoviesTopRated = () => {
    const {users} = useAppSelector((state) => state.TopRatedSlice )
    const dispatch = useAppDispatch()
    console.log(users);



    useEffect(()=> {
        dispatch(FetchingTopRated())
    }, [])
    return (
        <div className='flex flex-wrap'>
            {
                users.map(el => (
                    <div className=' topRated mx-20 my-5'>
                        <Link to={`/details/movie/${el.id}`}>
                            <img width={230} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
                        </Link>

                        <h1 className='px-2 py-2 text-1xl w-[200px]'>{el.title}</h1>

                    </div>
                ))
            }
        </div>
    )
}

export default MoviesTopRated