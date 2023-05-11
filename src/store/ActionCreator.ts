import axios from "axios"
import {AppDispatch} from "."
import {Apikey} from "../Apikey/Apikey"
import MoviePopular from "../components/Card/MoviePopular";
import {getMovies, getMoviesError, getMoviesSuccess} from "./Reducers/MovieSlice"
import {getTopRated, getTopRatedError, getTopRatedSuccess} from "./Reducers/TopRatedSlice"
import {fetchingDetail, fetchingDetailSuccess, fetchingDetailError} from "./Reducers/PopularSlice"
import {fetchingActorDetail, fetchingActorError, fetchingActorSuccess} from "./Reducers/ActorSlice"
import {getActorDetail, getActorDetailSuccess, getActorDetailError} from "./Reducers/ActorDetailSlice"
import {getTopDetail, getTopDetailError, getTopDetailSuccess} from "./Reducers/TopRatedDetail";
import {getActorsDetail, getActorsSuccess, getActorsError} from './Reducers/ActorMovieSlice'
import {fetSearch, fetSearchError, fetSearchSuccess} from "./Reducers/SearchSlice";

export const FetchingPopular = (lan: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getMovies())
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${lan}&page=1`)
            const {data} = await response
            dispatch(getMoviesSuccess(data.results))
        } catch (err: any) {
            dispatch(getMoviesError(err.message))
        }
    }
}


export const FetchingTopRated = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getTopRated())
            const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=en-US&page=1`)
            const {data} = await response
            dispatch(getTopRatedSuccess(data.results))
        } catch (err: any) {
            dispatch(getTopRatedError(err.message))
        }
    }
}


export const getDetail = (movieId: string | undefined, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingDetail(movieId))
            const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=${lan}`)
            dispatch(fetchingDetailSuccess(response.data))
        } catch (e: any) {
            dispatch(fetchingDetailError(e.message))
        }
    }
}


export const fetTopDetail = (movieId: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getTopDetail(movieId))
            const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=en-US&page=1`)
            dispatch(getTopDetailSuccess(response.data))
        } catch (e: any) {
            dispatch(getTopDetailError(e.message))
        }
    }
}

export const getAction = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Apikey}&language=en-US`)
            dispatch(fetchingActorSuccess(response.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorError(e.message))
        }
    }
}


export const getActorSliceDetail = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${Apikey}&language=en-US`)
            dispatch(getActorDetailSuccess(response.data))
        } catch (err: any) {
            dispatch(getActorDetailError(err.message))
        }
    }
}

export const getActorsMovie = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getActorsDetail)
            const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Apikey}&language=en-US`)
            dispatch(getActorsSuccess(response.data.cast))
        } catch (e: any) {
            dispatch(getActorsError(e.message))
        }
    }
}

export const fetchingSearch = (lan: string, movieName: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetSearch(movieName))
            const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${movieName}&language=${lan}`)
            const {data} = response
            dispatch(fetSearchSuccess(data.results))
        } catch (e: any) {
            dispatch(fetSearchError(e.message))
        }
    }
}



