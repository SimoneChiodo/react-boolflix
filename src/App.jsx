import { useState, useRef } from "react";

const apiFlagsUrl = import.meta.env.VITE_COUNTRYFLAGS_API_URL;

// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Custom CSS
import "./assets/App.css";

function App() {
    // Destrutturo le variabili dal contesto
    const { movies, series, setSearch } = useMoviesContext();

    // Uso useRef per gestire il riferimento all'input
    const inputRef = useRef(null);

    // Gestione Form della Seachbar
    const handleSearchbarSubmit = (event) => {
        // Prevengo il ricaricamento della pagina
        event.preventDefault();

        // Aggiorno la variabile globale
        setSearch(inputRef.current.value);
    };

    return (
        <>
            <header>
                <form onSubmit={handleSearchbarSubmit}>
                    <div>
                        <input type="text" ref={inputRef} />
                        <input type="submit" value="Search" />
                    </div>
                </form>
            </header>

            <main>
                <ul>
                    {Array.isArray(movies) &&
                        movies.map((movie) => (
                            <li key={movie.id}>
                                Titolo: {movie.title}; Titolo Originale:
                                {movie.original_title}; Lingua originale:{" "}
                                {movie.original_language + " "}
                                <img
                                    src={`${apiFlagsUrl}/us.png`}
                                    alt="country-flag"
                                    width="28"
                                />
                                ; Voto:
                                {movie.vote_average}
                            </li>
                        ))}
                </ul>
            </main>
        </>
    );
}

export default App;
