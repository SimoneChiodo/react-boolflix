import { useState, useRef } from "react";

// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Components
import ProductionsList from "./components/ProductionsList.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./assets/App.css";

// Bootstrap JS
import * as bootstrap from "bootstrap";

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
                <nav
                    className="navbar navbar-expand-lg border-bottom border-body bg-dark p-0"
                    data-bs-theme="dark"
                >
                    <div className="container-fluid py-2 px-4">
                        {/* Left Header */}
                        <a className="navbar-brand fs-1 text-danger" href="#">
                            <b>BOOLFLIX</b>
                        </a>

                        {/* Right Header */}
                        <div className="right-header">
                            {/* Links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                              </li> */}
                            </ul>
                            {/* Searchbar */}
                            <form onSubmit={handleSearchbarSubmit}>
                                <div>
                                    <input
                                        className="me-2"
                                        type="text"
                                        ref={inputRef}
                                    />
                                    <input type="submit" value="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div className="container">
                    <div className="film-container py-4">
                        <h2 className="text-center text-light pb-2">FILM:</h2>
                        {movies.length > 0 ? (
                            <ProductionsList
                                key="movies-list"
                                productions={movies}
                            />
                        ) : (
                            <h3>Nessun risultato trovato...</h3>
                        )}
                    </div>

                    <div className="film-container py-5">
                        <h2 className="text-center text-light pb-2">SERIES:</h2>
                        {series.length > 0 ? (
                            <ProductionsList
                                key="series-list"
                                productions={series}
                            />
                        ) : (
                            <h3>Nessun risultato trovato...</h3>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
