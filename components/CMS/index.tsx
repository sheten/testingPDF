import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuCategory from "./MenuSection"
import Menu from "./Menu"
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"
import { firestore } from "../../utils/firebase";
import { useAppDispatch } from '../../redux/hooks'
import { addCategories } from '../../redux/productSlice'
import { ProductStructure, ProductsStructure, SectionsStructure, CategoriesStructure } from '../../interfaces'
import ClipLoader from "react-spinners/ClipLoader";

const CMSHome = () => {
  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<ProductsStructure>([])
  const [editableProduct, setEditableProduct] = useState<ProductStructure>()
  const [openedMenuTitle, setopenedMenuTitle] = useState<string>("")
  const [productsUpdated, setProductsUpdated] = useState<boolean>(true)
  const [editableProductTitle, setEditableProductTitle] = useState<string>("")
  const [openedSectionsList, setOpenedSectionsList] = useState<SectionsStructure>({
    menuCategorySectionOpen: false,
    newProductSectionOpen: false,
    editProductSectionOpen: false,
  })

  useEffect(() => {
    // if (products.length === 0) {
    fetchFirebaseProducts()
    fetchFirebaseCategories()
    // }
  }, [])
  
  async function fetchFirebaseProducts() {
    var firestoreProducts: ProductsStructure = []
    const productsSnapshot = await firestore.collection("Products").get();
    productsSnapshot.docs.forEach((snap) => firestoreProducts.push(snap.data() as any))
    setProducts(firestoreProducts)
  }
  async function fetchFirebaseCategories() {
    var firestoreCategories: CategoriesStructure = []
    const categoriesSnapshot = await firestore.collection("Categories").get();
    categoriesSnapshot.docs.forEach((snap) => { firestoreCategories.push(snap.data() as any) });
    dispatch(addCategories(firestoreCategories))
  }
  async function updateProducts() {
    setProductsUpdated(false)
    await fetchFirebaseProducts();
    setOpenedSectionsList({ ...openedSectionsList, newProductSectionOpen: false, editProductSectionOpen: false})
    // Set to empty string to avoid double-click to open editable product bug.
    setEditableProductTitle("")
    setProductsUpdated(true)
  }

  const handleOpenSection = (sectionType: string, productTitle: string) => {
    console.log("CATCHING")
    if (sectionType === "menuCategorySectionOpen") {
      if (productTitle === openedMenuTitle || !openedMenuTitle) setOpenedSectionsList({ ...openedSectionsList, menuCategorySectionOpen: !openedSectionsList.menuCategorySectionOpen })
      setopenedMenuTitle(productTitle)
    } 
    else if (sectionType === "newProductSectionOpen") {
      // Checking if one has already been opened and if it is just switching between items
      openedSectionsList.editProductSectionOpen ? 
      setOpenedSectionsList({ ...openedSectionsList, editProductSectionOpen: false, newProductSectionOpen: !openedSectionsList.newProductSectionOpen })
      :
      setOpenedSectionsList({ ...openedSectionsList, newProductSectionOpen: !openedSectionsList.newProductSectionOpen })
    } 
    else if (sectionType === "editProductSectionOpen") {
      console.log("MIAU", openedSectionsList)
      // Storing currently editable product data into state to pass for children component
        const editableProduct = products.find((product: ProductStructure) => product.title === productTitle);
        setEditableProduct(editableProduct)
        

      // Checking if one has already been opened and if it is just switching between items
      if (openedSectionsList.newProductSectionOpen) {
        setOpenedSectionsList({ ...openedSectionsList, editProductSectionOpen: !openedSectionsList.editProductSectionOpen, newProductSectionOpen: false })
      } 
      else {
        if (productTitle === editableProductTitle || editableProductTitle === "") setOpenedSectionsList({ ...openedSectionsList, editProductSectionOpen: !openedSectionsList.editProductSectionOpen })
      }
      
      {productTitle !== editableProductTitle || editableProductTitle === "" ? setEditableProductTitle(productTitle) : setEditableProductTitle("")}
    }
  }

  return (
    <Wrap>
      <style jsx global>{`body{margin: 0px;}`}</style>
      <Header>Next E-commerce CMS</Header>

      <ContentWrap>        
        <Menu handleOpenSection={handleOpenSection}/>
        {productsUpdated ? 
          <>
            {openedSectionsList.menuCategorySectionOpen ? <MenuCategory openedMenuTitle={openedMenuTitle} openedSectionsList={openedSectionsList} products={products} handleOpenSection={handleOpenSection} /> : null}
            {openedSectionsList.newProductSectionOpen ? <NewProduct updateProducts={updateProducts} /> : null}
            {openedSectionsList.editProductSectionOpen && editableProduct ? <EditProduct updateProducts={updateProducts} editableProductTitle={editableProductTitle} productProps={editableProduct} /> : null}
          </>
          : 
          <LoaderWrap>
            <ClipLoader size={50} />
          </LoaderWrap>
        }
      </ContentWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: open sans;
  height: 100vh;
  width: 100%;
`;
const Header = styled.div`
  align-items: center;
  background-color: #121923;
  color: white;
  display: flex;
  height: 34px;
  padding: 8px;
  padding-left: 20px;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  ${ `height: calc(100% - 50px);`}
  width: 100%;
`;
const LoaderWrap = styled.div`
  align-items: center;
  display: flex;  
  ${`height: calc(100% - 50px);`}
  justify-content: center;
  width: 100%;
`;

export default CMSHome
