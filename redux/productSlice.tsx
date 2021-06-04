import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ProductsStoreStructure, ProductsStructure, ProductStructure, CategoriesStructure, CategoryStructure } from "../interfaces"
import { firestore } from "../utils/firebase";

const initialState: ProductsStoreStructure = {
  productsList: [],
  categoriesList: [],
}

export const fetchFirebaseProducts = createAsyncThunk('fetchFirebaseData',
  async function fetchFirebaseProducts() {
    var firestoreProducts: ProductsStructure = []
    const productsSnapshot = await firestore.collection("Products").get();
    productsSnapshot.docs.forEach((snap) => firestoreProducts.push(snap.data() as ProductStructure));
    return firestoreProducts;
  }
)

export const fetchFirebaseCategories = createAsyncThunk('fetchFirebaseCategories',
  async function fetchFirebaseCategories() {
    var firestoreCategories: CategoriesStructure = []
    const categoriesSnapshot = await firestore.collection("Categories").get();
    categoriesSnapshot.docs.forEach((snap) => { firestoreCategories.push(snap.data() as CategoryStructure) });
    return firestoreCategories
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDummyData: (state) => {
      state.productsList = [{ id: "s", title: "title", imageTitle: "", category: "Nuts", description: "desc", amount: 200, price: 100 }]
    },
    addProducts: (state, action: PayloadAction<ProductsStructure>) => {
      state.productsList = action.payload
    },
    addCategories: (state, action: PayloadAction<CategoriesStructure>) => {
      state.categoriesList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFirebaseProducts.fulfilled, (state, action: PayloadAction<ProductsStructure>) => {
      state.productsList = action.payload
    })
    builder.addCase(fetchFirebaseCategories.fulfilled, (state, action: PayloadAction<CategoriesStructure>) => {
      state.categoriesList = action.payload
    })
  }
})

export const { setDummyData, addProducts, addCategories } = productSlice.actions

export default productSlice.reducer