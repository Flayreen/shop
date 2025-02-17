import {ProductDTO} from "../../models/products.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ErrorResponse} from "react-router-dom";


interface ProductState {
    products: ProductDTO[];
    isLoading: boolean;
    currentPage: number;
    itemsPerPage: number;
    countPages: number;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 10,
    countPages: 0,
}

export const fetchProducts = createAsyncThunk<
    ProductDTO[],
    void,
    { rejectValue: ErrorResponse }
>(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            return await response.json();
        } catch (error: any) {
            return rejectWithValue({
                status: error.response.status,
                data: error.response.data,
                statusText: error.response.statusText,
            });
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.countPages = state.products.length / state.itemsPerPage;
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const { setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;