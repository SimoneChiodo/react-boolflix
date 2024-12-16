import { createContext, useContext, useState } from "react";

const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_SEARCH_URL;

// Creo il contesto
const MoviesContext = createContext();

// Esporto il Provider
export const MoviesContextProvider = ({ children }) => {
    //Creo le variabili da condividere
    const [movies, setMovies] = useState(["Test1", "Test2"]);
    const [series, setSeries] = useState(["Test3", "Test4"]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("");

    function Search() {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjQ4NmQ0ZjBiMWZmNTUyOTQ4NTAzOWQwYzQ3NWY0NyIsIm5iZiI6MTczNDM0ODA0OC4xOTcsInN1YiI6IjY3NjAwZDEwMjBiZTUzNzU3MmVlNDE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CpQUDoogXuQWqzvxpYAkV1q9zrvS-M86MiMWWuCrouQ",
            },
        };

        fetch(`${apiUrl}movie?query=${search}`, options)
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.error(err));
    }

    return (
        <MoviesContext.Provider value={{ movies, series, search, setSearch }}>
            {children}
        </MoviesContext.Provider>
    );
};

// Esporto lo "use" per i consumers
export const useMoviesContext = () => useContext(MoviesContext);
