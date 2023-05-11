import React, {useState} from 'react';
import LOGO from '../../Image/logo.svg'
import "./index.scss"

import { Link, NavLink,useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {getValue} from "../../store/Reducers/PopularSlice";
import {upDate} from "../../store/Reducers/PopularSlice"

const Header = () => {
    const [result,setResult] = useState('')
    const navigate = useNavigate()
    const{mode} = useAppSelector(s => s.popularSlice)
    const dispatch = useAppDispatch()
    const {valueS} = useAppSelector(s => s.popularSlice)
    console.log(valueS)
    const handleChange = (e: any) => {
        dispatch(getValue(e.target.value))
    }

    // const changeTheme = (e) => setResult(e.target.value)
    const navigateToValue = () => {
        if (result.trim() !== ''){
            navigate(`/movies/search/${result}`)
        }
        setResult('')
    }
    return (
        <div id='header'>
            <div className='header container mx-10'>
                <img src={LOGO} width={200} alt=""/>


                <div className='header--nav '>
                    <NavLink className='header--nav__text ' to='/'>Home</NavLink>
                    <NavLink  className='header--nav__text'  to={'/popular'}>Popular</NavLink>
                    <NavLink  className='header--nav__text' to={'/topRated'}>TopRated</NavLink>
                </div>

                <div className="search-movies">
                    <input onChange={(e) => navigate(`/movies/search/${e.target.value}`)} type="text"  className="input"/>
                    <button onClick={navigateToValue}>search</button>
                </div>



                <div className='header--btn flex '>
                    <div>
                        <button onClick={() => dispatch(upDate(!mode))}
                                className=" btn py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light
                        </button>

                    </div>
                    <select id="countries" onChange={handleChange}
                            className="bg-gray-50 items-center border-gray-300 text-gray-900 text-sm rounded-lg` focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="usa">english</option>
                        <option value="ru">Russian</option>
                        <option value="FR">France</option>
                        <option value="GE">Germany</option>
                    </select>

                </div>
            </div>
        </div>
    );
};

export default Header;