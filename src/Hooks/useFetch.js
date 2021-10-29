import { useEffect, useState } from 'react';


let defaultMovieDataAll = [];
const defaultMovieData = {};
let pageLoadMovieDataAll = 1;
let pageLoadMovieSimilary = 1;

function useFetch() {

    const [MovieDataAll, setMovieDataAll] = useState(defaultMovieDataAll);
    const [MovieData, setMovieData] = useState(defaultMovieData);
    const [SimilaryMovie, setSimilaryMovie] = useState([]);
    const [SearchMovie, setSerchMovie] = useState([]);



    const LoadMovieDataAll = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d004c2400c5a4a3fc48ab89744d945a4&language=en-US&page=${pageLoadMovieDataAll}`)
            .then(res => res.json())
            .then(data => {
                defaultMovieDataAll = [...data.results];
                setMovieDataAll(pageLoadMovieDataAll === 1 ? [...defaultMovieDataAll, ...MovieDataAll] : [...MovieDataAll, ...defaultMovieDataAll]);
                pageLoadMovieDataAll += 1;
            })
            .catch(err => console.log(err));
    }

    const LoadMovieData = (id) => {
        pageLoadMovieSimilary = 1;
        fetch(`https://api.themoviedb.org/3/movie/${id || 831405}?api_key=d004c2400c5a4a3fc48ab89744d945a4&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovieData(data);
            })
            .catch(err => console.log(err));
    }

    const LoadMovieSimilary = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id || 831405}/similar?api_key=d004c2400c5a4a3fc48ab89744d945a4&language=en-US&page=${pageLoadMovieSimilary}`)
            .then(res => res.json())
            .then(data => {
                setSimilaryMovie(pageLoadMovieSimilary > 1 ? [...SimilaryMovie, ...data.results] : [...data.results]);
                pageLoadMovieSimilary += 1;
            })
            .catch(err => console.log(err));
    }

    const LoadSearchMovie = (name) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d004c2400c5a4a3fc48ab89744d945a4&language=en-US&query=${name}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                setSerchMovie([...data.results]);
            })
            .catch(err => console.log(err));
    }



    useEffect(() => {
        LoadMovieDataAll();
    }, [])



    return (
        {
            MovieDataAll,
            LoadMovieData,
            LoadMovieSimilary,
            LoadMovieDataAll,
            LoadSearchMovie,
            SearchMovie,
            MovieData,
            SimilaryMovie,
            setSerchMovie
        }
    )
}

export default useFetch
