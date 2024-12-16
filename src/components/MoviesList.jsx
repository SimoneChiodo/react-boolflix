const apiFlagsUrl = import.meta.env.VITE_COUNTRYFLAGS_API_URL;
const apiMoviesUrl = import.meta.env.VITE_THEMOVIEDB_API_IMAGE_URL;

// FontAwesome Icons
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MoviesList({ movies }) {
    function voteToStars(vote) {
        const newVote = Math.ceil((vote * 5) / 10); // Trasformo il voto da una base di 10 a una base di 5 & lo arrotondo per eccesso

        return (
            <div className="stars-container">
                {Array.from({ length: newVote }, (_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        className="color-yellow"
                        icon={faStar}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 gy-4">
                {movies.map((movie) => (
                    <div className="col" key={movie.id}>
                        <img
                            src={`${apiMoviesUrl}/w185${movie.poster_path}`}
                            alt="movie-image"
                        />
                        <div className="description d-none">
                            Titolo: {movie.title || movie.name}; Titolo
                            Originale:{" "}
                            {movie.original_title || movie.original_name};
                            Lingua originale: {movie.original_language + " "}
                            <img
                                src={`${apiFlagsUrl}/us.png`}
                                alt="country-flag"
                                width="28"
                            />
                            ; Voto: {voteToStars(movie.vote_average)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
