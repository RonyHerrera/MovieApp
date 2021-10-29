import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import { useHistory } from 'react-router';
import Card from './Card'

function ListCard() {

    const { SimilaryMovie, LoadMovieSimilary } = useContext(DataContext);
    const history = useHistory();

    const LoadSimilary = () => {
        LoadMovieSimilary(history?.location?.pathname.substring(1));
    }

    return (
        <div className="mx-0 my-0 mt-5 px-sm-5">

            <h1>Simalary Movie</h1>

            <div className="row p-1 mx-0 my-0">
                {
                    SimilaryMovie.map((movie, index) => <Card movie={movie} key={movie.id + index} />)
                }
            </div>
            <div className="row justify-content-center p-5">
                <button onClick={LoadSimilary} className="btn btn-dark fs-3 col-7 col-sm-5 col-md-3 col-lg-3" style={{ borderRadius: '20px' }}>Load More</button>
            </div>
        </div>
    )
}

export default ListCard
