import SearchProduct from "../molecules/SearchProduct";
import FilterProducts from "../molecules/FilterProducts";
import Shop from "../organisms/Shop"
import DefaultLayout from "../uiTemplates/DefaultLayout"

const Products = () => {

    return (
        <DefaultLayout>
            <SearchProduct />
            <FilterProducts />
            <Shop />
        </DefaultLayout>
    )
}

export default Products