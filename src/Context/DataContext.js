import React, { createContext } from 'react';
import useFetch from '../Hooks/useFetch';

const DataContext = createContext();

function DataContextC({ children }) {

    const { MovieDataAll, LoadMovieData, LoadMovieSimilary, LoadSearchMovie, SearchMovie, MovieData, SimilaryMovie, LoadMovieDataAll, setSerchMovie } = useFetch();

    const data = {
        MovieDataAll,
        LoadMovieData,
        LoadMovieSimilary,
        LoadMovieDataAll,
        LoadSearchMovie,
        MovieData,
        SimilaryMovie,
        SearchMovie,
        setSerchMovie
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext };
export default DataContextC;
