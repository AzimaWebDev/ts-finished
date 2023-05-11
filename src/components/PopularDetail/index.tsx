

import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getDetail } from '../../store/ActionCreator'
import { useEffect } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { url } from 'inspector'
import {VscBookmark} from "react-icons/vsc"
import {VscChecklist} from "react-icons/vsc"
import {VscHeartFilled} from "react-icons/vsc"
import {VscStarFull} from "react-icons/vsc"
import ActionPage from '../Actor/ActorPage'
import ActorPage from "../Actor/ActorPage";
import "./index.scss"
const PopularDetail = () => {
    const {popular,error,loader , valueS} = useAppSelector((state) => state.popularSlice)
    const {movieId} = useParams()
    // console.log(popular)
    const dispatch = useAppDispatch()
    console.log(popular)

    useEffect(() => {
        dispatch(getDetail(movieId,valueS))
    }, [movieId,valueS])

    return (
        <>
            <div className='detail' style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${popular.backdrop_path})`,
            }}>
                <div className='py-[50px] flex items-start container '>
                    <img className='flex w-[270px] absolute z-10' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${popular.backdrop_path}`} alt="" />
                    <div className='flex-col ml-[10%]  my-4 z-20 relative w-[600px] left-[20%]'>
                        <h2 className='text-3xl text-white ' >{popular.title}</h2>
                        <p className=' text-white my-4'>{popular.release_date}</p>
                        <h1 className='text-gray-400'>{popular.popularity}</h1>
                        <div className='flex items-center my-4'>
                            <span className=' detail-circle'>67%</span>
                            <div className='flex items-center ml-6' >
                                <div className='icon '> <VscBookmark className='text-white'/></div>

                                <div className='icon'> <VscChecklist/></div>

                                <div className='icon '><VscHeartFilled/> </div>

                                <div className='icon'> <VscStarFull/></div>

                            </div>
                        </div>
                        <span className='text-gray-200  text-lg '>{popular.overview}</span>

                    </div>
                </div>
            </div>

            <ActorPage/>
        </>

    )
}

export default PopularDetail