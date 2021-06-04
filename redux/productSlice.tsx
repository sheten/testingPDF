import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsStoreStructure, ProductsStructure, CategoriesStructure } from "../interfaces"

const initialState: ProductsStoreStructure = {
  productsList: [],
  categoriesList: [],
}

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDummyData: (state) => {
      state.productsList = [{ id: "s", title: "title", imageTitle: "", category: "Nuts", description: "desc", amount: 200, price: 100}]
    },

    addProducts: (state, action: PayloadAction<ProductsStructure>) => {
      state.productsList = action.payload
    },

    addCategories: (state, action: PayloadAction<CategoriesStructure>) => {
      state.categoriesList = action.payload
    },
  },
})

export const { setDummyData, addProducts, addCategories } = counterSlice.actions

export default counterSlice.reducer