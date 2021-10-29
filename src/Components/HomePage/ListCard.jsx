import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import Card from './Card'

function ListCard({ title, datos }) {

    const { MovieDataAll, LoadMovieDataAll } = useContext(DataContext)

    return (
        <div className="mx-0 my-0 mt-5 px-sm-5">

            <h1>{title || 'Popular Movies'}</h1>

            <div className="row p-1 mx-0 my-0">
                {
                    !title ?
                        MovieDataAll.map((movie, index) => <Card movie={movie} key={`${JSON.stringify(movie.id) + JSON.stringify(index)}`} />)
                        :
                        datos.map((movie, index) => <Card movie={movie} key={`${JSON.stringify(movie.id) + JSON.stringify(index)}`} />)
                }
            </div>

            <div className="row justify-content-center p-5 ">
                <button onClick={LoadMovieDataAll} className="btn btn-dark fs-3 col-7 col-sm-5 col-md-3 col-lg-3" style={{ borderRadius: '20px' }}>Load More</button>
            </div>

        </div>
    )
}

export default ListCard
