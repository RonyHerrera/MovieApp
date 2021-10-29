import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DataContext } from '../../Context/DataContext';
import './style.css'
import DefauldImg from '..//../assets/noimage.jpg'

function Card({ movie }) {

    const { LoadMovieSimilary, LoadMovieData } = useContext(DataContext);
    const history = useHistory();

    const redired = () => {
        history.push(`/${movie.id}`);
        LoadMovieData(movie.id)
        LoadMovieSimilary(movie.id);
        window.scroll(0, 0);
    }

    function imgload(e) {
        e.target.parentElement.childNodes[0].classList.add('download');
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2 p-1">
            <div onClick={redired} className='caja' style={{ height: "350px", borderRadius: "20px", background: `url(${movie.poster_path ? 'https://image.tmdb.org/t/p/w780' + movie.poster_path : DefauldImg}) center center / cover` }}>
                <div className="lds-dual-ring loader"></div>
                <img onLoad={imgload} className="d-none" src={movie.poster_path ? 'https://image.tmdb.org/t/p/w780' + movie.poster_path : DefauldImg} alt='movie' />
            </div>
        </div>
    )
}


export default Card
