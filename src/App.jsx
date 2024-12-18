// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Components
import ProductionsList from "./components/ProductionsList.jsx";
import Header from "./components/Header.jsx";

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
            <Header />

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
