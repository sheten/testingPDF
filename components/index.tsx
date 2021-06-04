import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { firestore } from "../utils/firebase"; 
import { useAppDispatch } from '../redux/hooks'
import { addProducts, addCategories } from '../redux/productSlice'
import { ProductsStructure, ProductStructure, CategoriesStructure } from "../interfaces"

import HeaderHolder from "./common/Header"
import Products from "./common/Products"


const Homepage = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation();

  useEffect(() => {
    // if (products.length === 0) {
    fetchFirebaseProducts()
    fetchFirebaseCategories()
    // }
  }, [])

  async function fetchFirebaseProducts() {
    var firestoreProducts: ProductsStructure = []
    const productsSnapshot = await firestore.collection("Products").get();
    productsSnapshot.docs.forEach((snap) => firestoreProducts.push(snap.data() as ProductStructure));   
    dispatch(addProducts(firestoreProducts))
  }
  async function fetchFirebaseCategories() {
    var firestoreCategories: CategoriesStructure = []
    const categoriesSnapshot = await firestore.collection("Categories").get();
    categoriesSnapshot.docs.forEach((snap) => { firestoreCategories.push(snap.data() as any) });
    dispatch(addCategories(firestoreCategories))
  }


  return (
    <Wrap>
      <HeaderHolder navbar={true} searchBar={true} title={t('pageSettings:Title')} />

      <Products />

      {/* <footer onClick={fetchProducts}>
        <hr />
        <span>Dziugas</span>
      </footer> */}
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default Homepage
