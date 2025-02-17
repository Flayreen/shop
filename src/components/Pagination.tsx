import React from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {setCurrentPage} from "../store/slices/productsSlice.ts";

interface IPagination {
    countPages: number;
    currentPage: number;
}

const Pagination: React.FC<IPagination> = ({countPages, currentPage}) => {
    const dispatch = useDispatch<AppDispatch>();
    const pages = Array.from({ length: countPages }, (_, index) => index + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                {pages.map((page) => (
                    <li key={page}>
                        <span
                            aria-current={page === currentPage ? "page" : undefined}
                            className={`flex items-center justify-center px-4 h-10 leading-tight ${page === currentPage
                                ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            }`}
                            onClick={() => dispatch(setCurrentPage(page))}
                        >
                            {page}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;