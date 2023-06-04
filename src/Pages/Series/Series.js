import { useEffect, useState } from "react";
import useGenres from "../../Hooks/useGenre";
import axios from "axios";
import Genres from "../../Components/Genres";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";

const Series = () => {

    const[page, setPage] = useState(1);
        const [content, setContent] = useState([]);
        const[numOfPages, setNumOfPages] = useState([]);
        const [selectedGenres, setSelectedGenres] = useState([]);
        const [genres, setGenres] = useState([]);
        const genreforURL = useGenres(selectedGenres)
        const fetchSeries = async() => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreforURL}`
            );
            // console.log(data)
            setContent(data.results);
            // setNumOfPages(data.total_pages);     //==> Throws Error!
            setNumOfPages(500);              
        };
        useEffect(() => {
            window.scroll(0, 0)
            fetchSeries();
            // eslint-disable-next-line
        }, [page, genreforURL]);
    return (
        <div>
            <span className = 'pageTitle'>Series</span>
            <Genres
                type = 'tv'
                genres={genres}
                setSelectedGenres={setSelectedGenres}
                selectedGenres={selectedGenres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending"> 
                {
                    content && content.map((c) => (
                        <SingleContent 
                        id = {c.id}
                        key = {c.id} 
                        poster = {c.poster_path} 
                        title = {c.title || c.name} 
                        date = {c.first_air_date || c.release_date} 
                        media_type = 'tv' 
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
export default Series