// Context Datas
import { useMoviesContext } from "../contexts/MoviesContext";

// Components
import ProductionsCard from "./ProductionsCard";

export default function ProductionsList({ productions }) {
    // Destrutturo le variabili dal contesto
    const { selectedGenre } = useMoviesContext();

    return (
        <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 gy-4">
            {/* Ciclo ogni produzione */}
            {productions.map((production) => {
                // Se il filtro-genere è: ON
                if (selectedGenre == -1) {
                    // Stampo la produzione
                    return (
                        <ProductionsCard
                            key={production.id}
                            production={production}
                        />
                    );
                }
                // Se il filtro-genere è: OFF
                else {
                    // Controllo anche se la produzione contiene il genere
                    if (
                        production.genre_ids.includes(parseInt(selectedGenre))
                    ) {
                        // Stampo la produzione
                        return (
                            <ProductionsCard
                                key={production.id}
                                production={production}
                            />
                        );
                    }
                    // ALTRIMENTI NON stampo la produzione
                    else {
                        return null;
                    }
                }
            })}
        </div>
    );
}
