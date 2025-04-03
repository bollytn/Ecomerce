import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./actGetCategories";

interface ICategoriesState {
    records: { id: number, title: string, prefix: string, img: string }[]
    loading: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: null | string;
}

const initialState: ICategoriesState = {
    records: [],
    loading: 'idle',
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        // Add your reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(actGetCategories.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(actGetCategories.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.records = action.payload;
            })
            .addCase(actGetCategories.rejected, (state, action) => {
                state.loading = 'failed';
                if (action.payload && typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.error = 'An error occurred while fetching categories.';
                }

            });
    }
});

export { actGetCategories }
export default categoriesSlice.reducer;