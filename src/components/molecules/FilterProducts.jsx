import { useSearch } from "../../contexts/SearchContext";

const filteredProducts = () => {
    const { order, setOrder, category, setCategory } = useSearch();

    return (
        <div className="flex justify-center text-xs md:text-sm lg:text-base my-4 mx-3 gap-3">
         
        </div>
    )
}

export default filteredProducts