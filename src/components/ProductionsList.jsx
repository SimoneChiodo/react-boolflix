// Context Datas
import { useMoviesContext } from "../contexts/MoviesContext";

// Components
import ProductionsCard from "./ProductionsCard";

export default function ProductionsList({ productions }) {
    // Destrutturo le variabili dal contesto
    const { selectedGenre } = useMoviesContext();

    let productionCounter = 0;

    return (
        <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 gy-4">
            {/* Ciclo ogni produzione */}
            {productions.map((production) => {
                // Se il filtro-genere è: ON
                if (selectedGenre == -1) {
                    //Aumento il contatore
                    productionCounter++;

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
                        //Aumento il contatore
                        productionCounter++;

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

            {/* SE non ho stampato nessuna produzione, informo l'utente che non ho trovato nessun risultato */}
            {productionCounter === 0 && (
                <h3 className="text-lg-start">Nessun risultato trovato...</h3>
            )}
        </div>
    );
}
