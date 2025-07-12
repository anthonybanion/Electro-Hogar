import { useSearch } from "../../contexts/SearchContext";

const filteredProducts = () => {
    const { order, setOrder, category, setCategory } = useSearch();

    return (
        <div className="flex justify-center text-xs md:text-sm lg:text-base my-4 mx-3 gap-3">
            <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}>
                <option value="">Ordenar por precio</option>
                <option value="asc">Precio ascendente</option>
                <option value="desc">Precio descendente</option>
            </select>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="">Categoría</option>
                <option value="Remera">Remeras</option>
                <option value="Pantalon">Pantalones</option>
            </select>
        </div>
    )
}

export default filteredProducts