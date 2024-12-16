import { createContext, useContext, useEffect, useState } from "react";

const apiMoviesUrl = import.meta.env.VITE_THEMOVIEDB_API_SEARCH_URL;

// Creo il contesto
const MoviesContext = createContext();

// Esporto il Provider
export const MoviesContextProvider = ({ children }) => {
    //Creo le variabili da condividere
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("");

    useEffect(() => {
        // Opzioni dell'Header
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjQ4NmQ0ZjBiMWZmNTUyOTQ4NTAzOWQwYzQ3NWY0NyIsIm5iZiI6MTczNDM0ODA0OC4xOTcsInN1YiI6IjY3NjAwZDEwMjBiZTUzNzU3MmVlNDE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CpQUDoogXuQWqzvxpYAkV1q9zrvS-M86MiMWWuCrouQ",
            },
        };

        //Richiesta API, per cercare i film
        fetch(`${apiMoviesUrl}/movie?query=${search}&language=it-IT`, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.results.length > 0) {
                    setMovies(data.results);
                }
            })
            .catch((err) => console.error(err));

        //Richiesta API, per cercare le serie
        fetch(`${apiMoviesUrl}/tv?query=${search}&language=it-IT`, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.results.length > 0) {
                    setSeries(data.results);
                }
            })
            .catch((err) => console.error(err));
    }, [search]);

    return (
        <MoviesContext.Provider value={{ movies, series, setSearch }}>
            {children}
        </MoviesContext.Provider>
    );
};

// Esporto lo "use" per i consumers
export const useMoviesContext = () => useContext(MoviesContext);
