import React from 'react'

import movielogo from '../../assets/react-movie-logo.5de5919a.svg';
import tmdblogo from '../../assets/tmdb_logo.30cd724b.svg';

function NavBar() {
    return (
        <div className="navbar bg-dark d-block">
            <div className="row pe-3 m-0">
                <div className="row col justify-content-start">
                    <img className="col-10 col-8-md col-lg-6 " src={movielogo} alt={movielogo}
                        style={{ height: "50px" }} />
                </div>
                <div className="row col justify-content-end">
                    <img className="col-10 col-8-md col-lg-6" src={tmdblogo} alt={tmdblogo}
                        style={{ height: "50px" }} />
                </div>
            </div>
        </div>
    )
}

export default NavBar
