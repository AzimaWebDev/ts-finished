import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {getActorSliceDetail} from "../../store/ActionCreator";
import ActorMovie from "./ActorMovie/ActorMovie";

const ActorDetail = () => {
    const {actor} = useAppSelector(s => s.ActorSliceDetail)
    const dispatch = useAppDispatch()
    const {Id} = useParams()
    // console.log(actor)

    const [more,setMore] = useState(300)
    const printText:any = (text:number[]) => {
        if (more === 300){
            setMore(text.length)
        }else {
            setMore(300)
        }
    }


    useEffect(() => {
        dispatch(getActorSliceDetail(Id))
    }, [Id])
    return (
        <div className='container'>
            <div className='flex items-start my-10'>
                    <img width={350}
                         className='border-4 box-shadow'
                         src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${actor.profile_path}`} alt=""/>
                <div className='ml-10'>
                    <h1 className='text-3xl py-2'>{actor.name}</h1>
                    <h3 className='text-2xl'>Биография</h3>
                    <p className='text-1xl'> {actor.biography && actor.biography.slice(0,more)}</p>
                    {
                        actor.biography && actor.biography.length > 300 && <span className='cursor-pointer text-blue-700' onClick={printText}>{more === 300 ? 'view more' : 'close'}</span>
                    }
                    <h3>{actor.popularity }</h3>

                </div>
            </div>
            <div>
                <p className='text-2xl text-black my-4'>Известность за</p>
                <ActorMovie/>

            </div>
        </div>
    );
};

export default ActorDetail;