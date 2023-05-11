import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MoviesTopRated from "./components/Card/MovieTopRated";
import MoviesPopular from "./components/Card/MoviePopular";
import PopularDetail from './components/PopularDetail';
import ActorDetail from "./components/Actor/ActorDetail";
import TopRatedDetail from "./components/TopRatedDetail";
import {useAppSelector} from "./hooks/useAppSelector";
import Search from "./Search";

// import Todos from './components/todos';

function App() {
    const {mode} = useAppSelector(s => s.popularSlice)
  return (
      <div style={{
          background:mode ? "black" : "white",
          color:mode ? "white" : "black"
      }}>
        <Header/>
        <Routes>
          <Route path={'/popular'} element={<MoviesPopular/>}/>
          <Route path={'/popular'} element={<MoviesPopular/>}/>
          <Route path={'/topRated'} element={<MoviesTopRated/>}/>
          <Route path={'/details/movie/:movieId'} element={<PopularDetail/>}/>
          <Route path={'/details/movie/:movieId'} element={<TopRatedDetail/>}/>
          <Route path={'/details/movies/:Id'} element={<ActorDetail/>}/>
           <Route path={'/movies/search/:movieName'} element={<Search/>}/>
        </Routes>
      </div>
  );
}

export default App;

