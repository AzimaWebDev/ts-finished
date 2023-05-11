

import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {fetTopDetail, getDetail} from '../../store/ActionCreator'
import { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import {VscBookmark, VscChecklist, VscHeartFilled, VscStarFull} from "react-icons/vsc";
import ActorPage from "../Actor/ActorPage";

const TopRatedDetail = () => {
    const {topRated,error,loader } = useAppSelector((state) => state.TopRatedDetail)
    const {movieId} = useParams()
    console.log(topRated)
    const dispatch = useAppDispatch()
    console.log(topRated)

    useEffect(() => {
        dispatch(fetTopDetail(movieId))
    }, [])

    return (
        <>
            <div className='detail   ' style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${topRated.backdrop_path})`,
            }}>
                <div className='py-[50px] flex items-start container '>
                    <img className='flex w-[270px] absolute ' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${topRated.backdrop_path}`} alt="" />
                    <div className='flex-col ml-[10%] my-4'>
                        <h2 className='text-3xl text-white ' >{topRated.title}</h2>
                        <p className=' text-white my-4'>{topRated.release_date}</p>
                        <h1 className='text-gray-400'>{topRated.popularity}</h1>
                        <div className='flex items-center my-4'>
                            <span className=' detail-circle'>67%</span>
                            <div className='flex items-center ml-6' >
                                <div className='icon '> <VscBookmark className='text-white'/></div>

                                <div className='icon'> <VscChecklist/></div>

                                <div className='icon '><VscHeartFilled/> </div>

                                <div className='icon'> <VscStarFull/></div>

                            </div>
                        </div>
                        <span className='text-gray-200 text-xl '>{topRated.overview}</span>

                    </div>
                </div>
            </div>

            <ActorPage/>
        </>

    )
}

export default TopRatedDetail