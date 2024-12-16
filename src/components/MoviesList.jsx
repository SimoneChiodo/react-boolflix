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
                    <FontAwesomeIcon className="color-yellow" icon={faStar} />
                ))}
            </div>
        );
    }

    return (
        <ul>
            {Array.isArray(movies) &&
                movies.map((movie) => (
                    <li key={movie.id}>
                        <img
                            src={`${apiMoviesUrl}/w154${movie.poster_path}`}
                            alt=""
                        />
                        Titolo: {movie.title || movie.name}; Titolo Originale:
                        {movie.original_title || movie.original_name}; Lingua
                        originale: {movie.original_language + " "}
                        <img
                            src={`${apiFlagsUrl}/us.png`}
                            alt="country-flag"
                            width="28"
                        />
                        ; Voto:
                        {voteToStars(movie.vote_average)}
                    </li>
                ))}
        </ul>
    );
}
