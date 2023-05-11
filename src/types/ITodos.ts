export interface IMovies{
    id: number
    title: string
    poster_path: string
    name: string
}

export interface IPopularDetail {
    id: number
    page: number
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: false
    vote_average: number
    backdrop_path: string
    original_language: string
    original_title: string
    status:string

}

export interface ITopDetail{
    id: number
    page: number
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: false
    vote_average: number
    backdrop_path: string
    original_language: string
    original_title: string
    status:string
}
export interface IActor{
    id: number
    name:string
    surname:string
    profile_path:string

}

export interface IHome{
    title: string
}

export interface ActorDetail{
    id: number
    page: number
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: false
    vote_average: number
    backdrop_path: string
    original_language: string
    original_title: string
    status:string
}

export interface IActorMovie{
    id: number
    page: number
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: false
    vote_average: number
    backdrop_path: string
    original_language: string
    original_title: string
    status:string
}

export interface ISearch{
    id:number
    name: string
    poster_path:string
    title:string
}