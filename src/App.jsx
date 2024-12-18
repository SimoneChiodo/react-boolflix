// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Components
import ProductionsList from "./components/ProductionsList.jsx";
import Header from "./components/Header.jsx";

// FontAwesome Icons
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./assets/App.css";

// Bootstrap JS
import * as bootstrap from "bootstrap";

function App() {
    // Destrutturo le variabili dal contesto
    const { movies, series } = useMoviesContext();

    return (
        <>
            {/* Il Wrapper contiene una classe che permette la centratura del testo nella pagina, in caso di mancata ricerca */}
            <div
                className={
                    "wrapper " +
                    (!(movies.length > 0) && !(series.length > 0)
                        ? "d-flex flex-column h-100hv"
                        : "")
                }
            >
                <Header />

                <main className="h-100">
                    {/* Se ci sono film o serie */}
                    {movies.length > 0 && series.length > 0 ? (
                        <div className="container">
                            {/* Stampo i film */}
                            <div className="film-container py-4">
                                {/* Sezione - Header */}
                                <h2 className="text-center text-light pb-2">
                                    FILM:
                                </h2>

                                {/* Sezione - Body */}
                                <ProductionsList
                                    key="movies-list"
                                    productions={movies}
                                />
                            </div>

                            {/* Stampo le serie */}
                            <div className="film-container py-5">
                                {/* Sezione - Header */}
                                <h2 className="text-center text-light pb-2">
                                    SERIES:
                                </h2>

                                {/* Sezione - Body */}
                                <ProductionsList
                                    key="series-list"
                                    productions={series}
                                />
                            </div>
                        </div>
                    ) : (
                        // Se non ci sono film e nemmeno serie tv
                        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                            <FontAwesomeIcon
                                key="no-film-and-series"
                                icon={faFilm}
                                size="10x"
                            />
                            <h1 className="text-full-screen mt-3">
                                Non hai ancora cercato nulla...
                            </h1>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}

export default App;
