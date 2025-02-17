import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {fetchProducts} from "../store/slices/productsSlice.ts";
import ProductCard from "../components/ProductCard.tsx";
import {ProductDTO} from "../models/products.ts";
import Pagination from "../components/Pagination.tsx";
import InputSearch from "../components/InputSearch.tsx";

const getPaginationProducts = (currentPage: number, productsPerPage: number, products: ProductDTO[]): ProductDTO[] => {
    const start: number = (currentPage - 1) * productsPerPage;
    const end: number = start + productsPerPage;
    return products.slice(start, end)
}

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {products, currentPage, itemsPerPage, countPages} = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const sliceProducts: ProductDTO[] = getPaginationProducts(currentPage, itemsPerPage, products);

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="flex justify-center items-center ">
                    <InputSearch/>
                </div>
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                    {sliceProducts.map((product: ProductDTO) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center ">
                    <Pagination
                        currentPage={currentPage}
                        countPages={countPages}
                    />
                </div>
            </div>
        </section>
 )};

export default Home;