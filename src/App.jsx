import { useState } from "react";

// Context Datas
import { useMoviesContext } from "./contexts/MoviesContext";

// Custom CSS
import "./assets/App.css";

function App() {
    // console.log(useMoviesContext());

    const { movies, series } = useMoviesContext();
    console.log(movies, series);

    return <></>;
}

export default App;
