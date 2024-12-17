// Components
import ProductionsCard from "./ProductionsCard";

export default function ProductionsList({ productions }) {
    return (
        <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 gy-4">
            {productions.map((production) => (
                <ProductionsCard key={production.id} production={production} />
            ))}
        </div>
    );
}
