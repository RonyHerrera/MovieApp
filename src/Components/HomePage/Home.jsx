import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/DataContext'

import ListCard from './ListCard'
import NavBar from './NavBar'

function Home() {

    const { MovieDataAll, LoadSearchMovie, SearchMovie, setSerchMovie } = useContext(DataContext)
    const [ListCardDynamic, setListCardDynamic] = useState(<ListCard />);


    const funtSearchMovie = (nameMovie) => {
        if (nameMovie) {
            LoadSearchMovie(nameMovie);
            setTimeout(() => {
                setListCardDynamic(<ListCard title='Search Movie' datos={SearchMovie} />);
            }, 0);
        } else {
            setSerchMovie([]);
            setTimeout(() => {
                setListCardDynamic(<ListCard />);
            }, 0);
        }
    }

    return (
        <div>
            <NavBar />

            <div className="row me-0"
                style={{ height: "78vh", background: `url(${'https://image.tmdb.org/t/p/w1280' + MovieDataAll[0]?.backdrop_path}) center center / cover` }}>

                <div className="col-12 "></div>

                <div className="col-12 col-md-6 p-5 text-white">
                    <h1>Dune</h1>
                    <p>
                        Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding,
                        must
                        travel to the
                        most dangerous planet in the universe to ensure the future of his family and his people. As
                        malevolent
                        forces explode
                        into conflict over the planet's exclusive supply of the most precious resource in existence-a
                        commodity
                        capable of
                        unlocking humanity's greatest potential-only those who can conquer their fear will survive.
                    </p>
                </div>

            </div>

            <div className="px-3 py-4 bg-dark">
                <input onChange={(e) => funtSearchMovie(e.target.value.trim())} type="text" className="form-control fs-3 text-white col-6 px-lg-4" style={{ background: "#353535", borderRadius: "20px", border: "none" }}
                    placeholder="Search Movie" />
            </div>

            {ListCardDynamic}


        </div>
    )
}

export default Home;