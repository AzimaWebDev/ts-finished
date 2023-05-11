import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import { FetchingPopular} from "../../store/ActionCreator";
import "./index.scss"



const MoviesPopular = () => {
    const {movies, error, loader,} = useAppSelector((state) => state.moviesReducer)

    const {valueS} = useAppSelector((state) => state.popularSlice)

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(FetchingPopular(valueS))
    }, [valueS])
    return (
        <div className='flex flex-wrap  '>
            {
                movies.map(el => (
                    <div className='movie my-20 mx-5 '>
                        <Link to={`/details/movie/${el.id}`}>
                            <img  width={250} className='flex flex-wrap border-solid bg-blend-color-dodge'  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}  alt=""/>
                        </Link>
                        <h1   className='px-2 py-2 text-1xl w-[200px]'>{el.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default MoviesPopular