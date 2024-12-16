import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Contexts
import { MoviesContextProvider } from "./contexts/MoviesContext";

// Components
import App from "./App.jsx";

// Custom CSS
import "./assets/index.css";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <MoviesContextProvider>
        <App />
    </MoviesContextProvider>
    // </StrictMode>
);
