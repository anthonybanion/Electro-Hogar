import { useSearch } from "../../contexts/SearchContext"

const SearchProduct = () => {
    const { search, setSearch } = useSearch();

    return (
        <div className="flex justify-center my-4 mx-3">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-400 text-sm lg:text-base rounded-md px-4 py-2 w-full max-w-md"
            />
        </div>
    )
}

export default SearchProduct