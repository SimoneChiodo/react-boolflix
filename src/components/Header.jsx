// Context Datas
import { useRef } from "react";
import { useMoviesContext } from "../contexts/MoviesContext";

export default function Header() {
    // Destrutturo le variabili dal contesto
    const { setSearch, setSelectedGenre } = useMoviesContext();

    // Uso useRef per gestire il riferimento all'input
    const inputRef = useRef(null);

    // Gestione Form della Seachbar
    const handleSearchbarSubmit = (event) => {
        // Prevengo il ricaricamento della pagina
        event.preventDefault();

        // Aggiorno la variabile globale
        setSearch(inputRef.current.value);
    };

    // Gestione Form del Dropdown del genere
    function handleGenreChange(e) {
        setSelectedGenre(e.target.value);
    }

    return (
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
                    <div className="right-header d-flex align-items-center justify-content-space">
                        <div className="d-flex align-items-center me-5">
                            {/* Dropdown Genre */}
                            <label
                                htmlFor="genreDropdown"
                                className="form-label text-light m-0 pe-2"
                            >
                                Genere:
                            </label>
                            <select
                                id="genreDropdown"
                                className="form-select"
                                defaultValue=""
                                onChange={handleGenreChange}
                            >
                                <option value="">...</option>
                                <option value="28">Azione</option>
                                <option value="12">Avventura</option>
                                <option value="16">Animazione</option>
                                <option value="35">Commedia</option>
                                <option value="80">Crimine</option>
                                <option value="99">Documentario</option>
                                <option value="18">Drammatico</option>
                                <option value="10751">Per Famiglie</option>
                                <option value="14">Fantasy</option>
                                <option value="36">Storico</option>
                                <option value="27">Horror</option>
                                <option value="10402">Musical</option>
                                <option value="9648">Mistero</option>
                                <option value="10749">Romantico</option>
                                <option value="878">Science Fiction</option>
                                <option value="10770">TV Movie</option>
                                <option value="53">Thriller</option>
                                <option value="10752">Guerra</option>
                                <option value="37">Western</option>
                            </select>
                        </div>

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
    );
}
