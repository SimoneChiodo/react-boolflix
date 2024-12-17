const apiFlagsUrl = "https://flagpedia.net/data/flags/h80";
const apiMoviesUrl = "https://image.tmdb.org/t/p";

// FontAwesome Icons
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductionsList({ productions }) {
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
                {productions.map((production) => (
                    <div className="col" key={production.id}>
                        <img
                            src={`${apiMoviesUrl}/w185${production.poster_path}`}
                            alt="movie-image"
                        />
                        <ul className="description d-none">
                            <li>Titolo: {production.title}</li>
                            <li>
                                Titolo Originale:
                                {production.original_title}
                            </li>
                            <li>
                                Lingua originale:{" "}
                                {production.original_language + " "}
                                <img
                                    src={`${apiFlagsUrl}/us.png`}
                                    alt="country-flag"
                                    width="28"
                                />
                            </li>
                            <li>
                                Voto: {voteToStars(production.vote_average)}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
