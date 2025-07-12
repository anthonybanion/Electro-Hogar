import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("");
    const [category, setCategory] = useState("");

    return (
        <SearchContext.Provider
            value={{ search, setSearch, order, setOrder, category, setCategory }}>
            {children}
        </SearchContext.Provider>);
}

export function useSearch() {
    return useContext(SearchContext);
}