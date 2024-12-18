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

    function translateGenre(genres) {
        let output = "";

        for (let i = 0; i < genres.length; i++) {
            if (genres[i] === 28) output += "Azione";
            if (genres[i] === 12) output += "Avventura";
            if (genres[i] === 16) output += "Animazione";
            if (genres[i] === 35) output += "Commedia";
            if (genres[i] === 80) output += "Crimine";
            if (genres[i] === 99) output += "Documentario";
            if (genres[i] === 18) output += "Drammatico";
            if (genres[i] === 10751) output += "Per Famiglie";
            if (genres[i] === 14) output += "Fantasy";
            if (genres[i] === 36) output += "Storico";
            if (genres[i] === 27) output += "Horror";
            if (genres[i] === 10402) output += "Musical";
            if (genres[i] === 9648) output += "Mistero";
            if (genres[i] === 10749) output += "Romantico";
            if (genres[i] === 878) output += "Sci-Fi";
            if (genres[i] === 10770) output += "TV Movie";
            if (genres[i] === 53) output += "Thriller";
            if (genres[i] === 10752) output += "Guerra";
            if (genres[i] === 37) output += "Western";
            if (genres[i] === 10759) output += "Azione & Avventura";
            if (genres[i] === 10762) output += "Per Bambini";
            if (genres[i] === 10763) output += "News";
            if (genres[i] === 10764) output += "Storie Vere";
            if (genres[i] === 10765) output += "Sci-Fi & Fantasy";
            if (genres[i] === 10766) output += "Soap Opera";
            if (genres[i] === 10767) output += "Discussioni";
            if (genres[i] === 10768) output += "Guerra & Politica";
            if (genres[i] === 37) output += "Western";

            if (i + 1 !== genres.length) output += ", ";
        }

        return output;
    }

    return (
        <div className="col position-relative" key={production.id}>
            {/* Poster */}
            <div className="card-image d-flex justify-content-center align-items-center">
                <img
                    src={`${apiMoviesUrl}/w300${production.poster_path}`}
                    alt={`POSTER - ${production.title}`}
                />
            </div>

            {/* Description */}
            <ul className="card-description position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center px-2">
                <li>
                    <b>Titolo:</b>
                </li>
                <li className="pb-3">{production.title}</li>
                <li>
                    <b>Titolo originale:</b>
                </li>
                <li className="pb-3">{production.original_title}</li>
                <li>
                    <b>Generi:</b>
                </li>
                <li className="pb-3">
                    {production.genre_ids.length > 0 ? (
                        translateGenre(production.genre_ids)
                    ) : (
                        <i className="text-small">nessuno</i>
                    )}
                </li>
                <li>
                    <b>Lingua:</b>
                </li>
                <li className="pb-3">
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
                <li>
                    {production.genre_ids.length > 0 ? (
                        voteToStars(production.vote_average)
                    ) : (
                        <i className="text-small">nessuno</i>
                    )}
                </li>
            </ul>
        </div>
    );
}
