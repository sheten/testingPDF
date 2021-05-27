import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuCategory from "./MenuCategory"
import Menu from "./Menu"
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"
import { firestore } from "../../utils/firebase";
import { ProductStructure } from '../../interfaces'
// import { COLOR_BLUE } from "../../config"

const CMSHome = () => {
  const [products, setProducts] = useState([])
  const [editableProduct, setEditableProduct] = useState<ProductStructure>()
  const [openedMenuCategoryTitle, setOpenedMenuCategoryTitle] = useState<string>("")
  const [openedEditProductTitle, setOpenedEditProductTitle] = useState<string>("")
  const [openedSectionsList, setOpenedSectionsList] = useState<sectionsStructure>({
    menuCategorySectionOpen: false,
    newProductSectionOpen: false,
    editProductSectionOpen: false,
  })
  type sectionsStructure = { menuCategorySectionOpen: boolean, newProductSectionOpen: boolean, editProductSectionOpen: boolean }

  useEffect(() => {
    if (products.length === 0) {
      fetchFirebaseData()
    }
  })

  async function fetchFirebaseData() {
    var productsList: any = []
    const snapshot = await firestore.collection("Products").get();
    snapshot.docs.forEach((doc) => productsList.push(doc.data()));
    setProducts(productsList)
  }

  const handleOpenSection = (sectionType: string, productTitle: string) => {
    if (sectionType === "menuCategorySectionOpen") {
      productTitle === openedMenuCategoryTitle || !openedMenuCategoryTitle? setOpenedSectionsList({ ...openedSectionsList, menuCategorySectionOpen: !openedSectionsList.menuCategorySectionOpen }) : null
      setOpenedMenuCategoryTitle(productTitle)
    } 
    else if (sectionType === "newProductSectionOpen") {
      // Checking if one has already been opened and if it is just switching between items
      if (openedSectionsList.editProductSectionOpen) { setOpenedSectionsList({ ...openedSectionsList, editProductSectionOpen: !openedSectionsList.editProductSectionOpen}) }
      setOpenedSectionsList({ ...openedSectionsList, newProductSectionOpen: !openedSectionsList.newProductSectionOpen })
    } 
    else if (sectionType === "editProductSectionOpen") {
      // Storing currently editable product data into state to pass for children component
      const editableProduct = products.find((product: ProductStructure) => product.title === productTitle);
      setEditableProduct(editableProduct)
      console.log(editableProduct)


      // Checking if one has already been opened and if it is just switching between items
      // if (openedSectionsList.newProductSectionOpen) { setOpenedSectionsList({ ...openedSectionsList, newProductSectionOpen: !openedSectionsList.newProductSectionOpen }) }      
      if (openedEditProductTitle === ""){
        setOpenedSectionsList({ ...openedSectionsList, editProductSectionOpen: !openedSectionsList.editProductSectionOpen })
        setOpenedEditProductTitle(productTitle)
      } else if (productTitle === openedEditProductTitle) {
        setOpenedSectionsList({ ...openedSectionsList, editProductSectionOpen: !openedSectionsList.editProductSectionOpen })
        setOpenedEditProductTitle("")
      } else if (productTitle !== openedEditProductTitle){
        setOpenedEditProductTitle(productTitle)
      }
    }
  }

  return (
    <Wrap>
      <style jsx global>{`body{margin: 0px;}`}</style>
      <Header>Next E-commerce CMS</Header>

      <ContentWrap>
        <Menu handleOpenSection={handleOpenSection}/>
        {openedSectionsList.menuCategorySectionOpen ? <MenuCategory currentMenuCategorySection={openedMenuCategoryTitle} newProductSectionOpen={openedSectionsList.newProductSectionOpen} products={products} handleOpenSection={handleOpenSection} /> : null}
        {openedSectionsList.newProductSectionOpen ? <NewProduct /> : null}
        {openedSectionsList.editProductSectionOpen && editableProduct ? <EditProduct openedEditProductTitle={openedEditProductTitle} productProps={editableProduct} /> : null}
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

export default CMSHome
