import { useState, useRef } from "react";

// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Components
import MoviesList from "./components/MoviesList.jsx";

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
                <h1>FILM:</h1>
                <MoviesList key="movies-list" movies={movies} />

                <h1>SERIES:</h1>
                <MoviesList key="series-list" movies={series} />
            </main>
        </>
    );
}

export default App;
