import { createContext, useContext, useState } from "react";

const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_URL;

// Creo il contesto
const MoviesContext = createContext();

// Esporto il Provider
export const MoviesContextProvider = ({ children }) => {
    //Creo le variabili da condividere
    const [movies, setMovies] = useState(["Test1", "Test2"]);
    const [series, setSeries] = useState(["Test3", "Test4"]);
    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState([]);

    return (
        <MoviesContext.Provider value={{ movies: movies, series: series }}>
            {children}
        </MoviesContext.Provider>
    );
};

// Esporto lo "use" per i consumers
export const useMoviesContext = () => useContext(MoviesContext);
