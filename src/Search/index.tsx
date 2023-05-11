import React, {useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {fetchingSearch} from "../store/ActionCreator";
import {useAppSelector} from "../hooks/useAppSelector";
import "./index.scss"


const Search = () => {
    const{movieName} = useParams()
    const dispatch = useAppDispatch()
    const {search} = useAppSelector(state => state.SearchSlice)
    const {valueS} = useAppSelector(state => state.popularSlice)

    useEffect(()=>{
        dispatch(fetchingSearch(valueS,movieName))
    },[valueS,movieName])

    return (
        <div id="search flex">
            <div className="search-top wrap flex   flex-wrap wrap ">
                {
                    search.map((el,idx)=> (
                        <div>
                            <img width={250}
                                 className='my-10 px-1  flex flex-wrap border-solid bg-blend-color-dodge'
                                 src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h1

                                className='px-2 py-2 text-1xl w-[200px]'
                            >{el.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;