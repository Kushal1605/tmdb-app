import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres";
import useGenre from "../../Hooks/useGenre";

const Movies = () => {
        const[page, setPage] = useState(1);
        const [content, setContent] = useState([]);
        const[numOfPages, setNumOfPages] = useState([]);
        const [selectedGenres, setSelectedGenres] = useState([]);
        const [genres, setGenres] = useState([]);
        const genreforURL = useGenre(selectedGenres)
        const fetchMovies = async() => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreforURL}`
            );
            // console.log(data)
            setContent(data.results);
            // setNumOfPages(data.total_pages);     //==> Throws Error!
            setNumOfPages(500);              
        };
        useEffect(() => {
            fetchMovies();
        }, [page, genreforURL]);
    return (
        <div>
            <span className = 'pageTitle'>Movies</span>
             
            <div className="trending"> 
                {
                    content && content.map((c) => (
                        <SingleContent 
                        key = {c.id} 
                        poster = {c.poster_path} 
                        title = {c.title || c.name} 
                        date = {c.first_air_date || c.release_date} 
                        media_type = 'movie' 
                        vote_average = {c.vote_average}
                        />
                    ))
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage = {setPage} numOfPages={numOfPages}/>
            )}
            
        </div>
    )
}
export default Movies