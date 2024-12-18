import { createContext, useContext, useEffect, useState } from "react";

const apiMoviesUrl = "https://api.themoviedb.org/3";

// Creo il contesto
const MoviesContext = createContext();

// Esporto il Provider
export const MoviesContextProvider = ({ children }) => {
    //Creo le variabili da condividere
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(-1);

    const dataToExport = {
        movies,
        series,
        selectedGenre,
        setSearch,
        setSelectedGenre,
    };

    function searchProductions() {
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
        fetch(
            `${apiMoviesUrl}/search/movie?query=${search}&language=it-IT`,
            options
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.results.length > 0) {
                    setMovies(data.results);
                }
            })
            .catch((err) => console.error(err));

        //Richiesta API, per cercare le serie
        fetch(
            `${apiMoviesUrl}/search/tv?query=${search}&language=it-IT`,
            options
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.results.length > 0) {
                    const newData = data.results.map((e) => ({
                        id: e.id,
                        title: e.name,
                        original_title: e.original_name,
                        original_language: e.original_language,
                        vote_average: e.vote_average,
                        poster_path: e.poster_path,
                        genre_ids: e.genre_ids,
                    }));

                    setSeries(newData);
                }
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        searchProductions();
    }, [search]);
    useEffect(() => {
        searchProductions();
    }, [selectedGenre]);

    return (
        <MoviesContext.Provider value={dataToExport}>
            {children}
        </MoviesContext.Provider>
    );
};

// Esporto lo "use" per i consumers
export const useMoviesContext = () => useContext(MoviesContext);
