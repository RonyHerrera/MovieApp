import React, { Fragment, useContext } from 'react'
import NavBar from './NavBar'
import { DataContext } from '../../Context/DataContext';
import { useHistory } from 'react-router';
import ListCard from './ListCard';

import img from '..//../assets/noimage.jpg'

function Detail() {

    const { MovieData, LoadMovieSimilary, LoadMovieData } = useContext(DataContext);
    const history = useHistory();

    (() => {
        if (history.action === 'POP') {
            LoadMovieData(history?.location?.pathname.substring(1));
            LoadMovieSimilary(history?.location?.pathname.substring(1))
        }
    })();

    return (

        <Fragment>

            <NavBar />
            <div
                style={{ background: `url(${MovieData?.backdrop_path ? 'https://image.tmdb.org/t/p/w1280/' + MovieData?.backdrop_path : img}) center center / cover` }}>

                <div className="p-3 text-white ps-5 navbar" style={{ background: "rgba(0, 0, 0, 0.732)" }}>
                    <h5><span className="p-3 nav-link d-inline" onClick={() => history.push('/')}>Home</span>{'>'}<span className="p-3">{MovieData?.title}</span></h5>
                </div>

                <div className="py-5 px-4 p-md-5">
                    <div className="row"
                        style={{ height: "100%", width: "100%", borderRadius: "20px", background: "rgba(0, 0, 0, 0.632)", margin: "0px" }}>

                        <img className="col-12 col-md-6 col-lg-4 p-0 ms-0" src={MovieData?.poster_path ? 'https://image.tmdb.org/t/p/w780/' + MovieData?.poster_path : img} alt="..."
                            style={{ borderRadius: "20px" }} />

                        <div className="col-12 col-md-6 col-lg-8 text-white p-5">
                            <h2>{MovieData?.title}</h2>
                            <p>{MovieData?.overview}</p>

                            <p className="fs-4">RATING: <span className="p-1" style={{ borderRadius: '30px', background: 'yellow', color: 'black' }}>{MovieData?.vote_average}</span></p>
                            <p className="fs-4">GENRES: {MovieData?.genres?.map(item => '[' + item.name + '] ')}</p>

                        </div>

                    </div>
                </div>


            </div>

            <div className="row p-3 text-center bg-dark text-white justify-content-around me-0">
                <h4 style={{ background: "#353535", borderRadius: "20px" }} className="col-12 col-md-3 p-3">Date: {MovieData?.release_date}</h4>
                <h4 style={{ background: "#353535", borderRadius: "20px" }} className="col-12 col-md-3 p-3">Budget: ${parseInt(MovieData?.budget).toLocaleString("en")}</h4>
                <h4 style={{ background: "#353535", borderRadius: "20px" }} className="col-12 col-md-3 p-3">Revenue: ${parseInt(MovieData?.revenue).toLocaleString("en")}</h4>
            </div>

            <ListCard />

        </Fragment>
    )
}

export default Detail
