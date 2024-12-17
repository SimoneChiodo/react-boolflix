// Components
import ProductionsCard from "./ProductionsCard";

export default function ProductionsList({ productions }) {
    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 gy-4">
                {productions.map((production) => {
                    console.log(production);

                    return (
                        <ProductionsCard
                            key={production.id}
                            production={production}
                        />
                    );
                })}
            </div>
        </div>
    );
}
