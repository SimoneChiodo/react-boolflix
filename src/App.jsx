import { useState, useRef } from "react";

// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Custom CSS
import "./assets/App.css";

function App() {
    // Destrutturo le variabili dal contesto
    const { movies, series, search, setSearch } = useMoviesContext();

    // Uso useRef per gestire il riferimento all'input
    const inputRef = useRef(null);

    // Gestione Form della Seachbar
    const handleSearchbarSubmit = (event) => {
        // Prevengo il ricaricamento della pagina
        event.preventDefault();

        // Aggiorno la variabile globale
        setSearch(inputRef.current.value);

        alert(inputRef.current.value);
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
        </>
    );
}

export default App;
