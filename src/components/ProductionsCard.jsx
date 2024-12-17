const apiMoviesUrl = "https://image.tmdb.org/t/p";

// FontAwesome Icons
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductionsCard({ production }) {
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

    function findFlag(country) {
        if (country === "en") country = "GB";
        if (country === "ja") country = "JP";

        return `https://flagsapi.com/${country.toUpperCase()}/shiny/64.png`;
    }

    return (
        <div className="col position-relative" key={production.id}>
            {/* Poster */}
            <img
                src={`${apiMoviesUrl}/w185${production.poster_path}`}
                alt={`POSTER - ${production.title}`}
            />

            {/* Description */}
            <ul className="card-description position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center px-1">
                <li>
                    <b>Titolo:</b>
                </li>
                <li className="pb-2">{production.title}</li>
                <li>
                    <b>Titolo originale:</b>
                </li>
                <li className="pb-2">{production.original_title}</li>
                <li>
                    <b>Lingua:</b>
                </li>
                <li className="pb-2">
                    {
                        <img
                            src={findFlag(production.original_language)}
                            alt={`${production.original_language.toUpperCase()}-FLAG`}
                            width="28"
                        />
                    }
                </li>
                <li>
                    <b>Voto:</b>
                </li>
                <li>{voteToStars(production.vote_average)}</li>
            </ul>
        </div>
    );
}
