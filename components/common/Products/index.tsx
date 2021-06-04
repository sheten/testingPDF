import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useAppSelector } from '../../../redux/hooks'
import { FaBorderAll, FaBars } from "react-icons/fa"
import { FilterableSelectOptionsStructure, ProductStructure } from '../../../interfaces'
import ClipLoader from "react-spinners/ClipLoader";
import ProductsGridHolder from "./ProductsGridHolder"
import ProductsList from "./ProductsList"
import FilterableSelect from "../FilterableSelect"

const ProductCards = () => {
  const { t } = useTranslation();
  const reduxProducts = useAppSelector((state) => state.products.productsList)
  const reduxCategories = useAppSelector((state) => state.products.categoriesList)
  const [categoriesOptions, setCategoriesOptions] = useState<FilterableSelectOptionsStructure>([])
  const [filteredProducts, setProductsFilter] = useState <ProductStructure[]>([])
  const [listMode, setListMode] = useState<boolean>(false)
  const [emptyProductsList, setEmptyProductsList] = useState<boolean>(false)

  useEffect(() => {
    if (categoriesOptions.length === 0 && reduxCategories.length !== 0 ) structureCategoriesOptions()
  })

  const structureCategoriesOptions = () => {
    var reduxOptions: FilterableSelectOptionsStructure = [];
    reduxCategories.map((category) => { reduxOptions.push({ value: category.title, label: category.title }) })
    var options = [...reduxOptions, { value: "All Items", label: "All Items" }];
    setCategoriesOptions(options)
  }
  const handleProductsFilter = (selection: string) => {
    var filtered = reduxProducts.filter((product) => { return product.category === selection; });    
    filtered.length === 0 && selection !== "All Items" ? setEmptyProductsList(true) : setEmptyProductsList(false)
    setProductsFilter(filtered)
  }

  return (
    <Wrap>
      <Container>
        <ProductsTitleWrap>
          <ProductsTitle>{t('productCategories:Juices')}</ProductsTitle>
          <ProductsDescription>{t('productCategories:JuicyBits')}</ProductsDescription>
          <FilterableSelect handleOptionSelect={handleProductsFilter} options={categoriesOptions} />
        </ProductsTitleWrap>
        
        <DisplayIconsWrap onClick={() => setListMode(!listMode)}>
          <IconStyleWrap>
            <FaBars color={listMode ? undefined : "grey" }/>
          </IconStyleWrap>
          <IconStyleWrap>
            <FaBorderAll color={listMode ? "grey" : undefined}  />
          </IconStyleWrap>
        </DisplayIconsWrap>
      </Container> 
      
      {reduxProducts ?
        emptyProductsList ?
          <NoProductsTextWrap>No Products...</NoProductsTextWrap>
          :
          <>
            <div style={listMode ? { display: "flex", width: "100%" } : { display: "none" }}>
              <ProductsList products={filteredProducts.length !== 0 ? filteredProducts: reduxProducts} />
            </div>
              
            <div style={listMode ? { display: "none" } : { display: "flex", width: "100%" }}>
              <ProductsGridHolder products={filteredProducts.length !== 0 ? filteredProducts : reduxProducts} />
            </div>
          </>          
        :
        <LoaderWrap>
          <ClipLoader size={50} />
        </LoaderWrap>
      }       
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0 15px 0;
  width: 100%;
`;
const ProductsTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const DisplayIconsWrap = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
`;
const IconStyleWrap = styled.div`
  cursor: pointer;
  font-size: 1.5em;
  padding: 8px;
`;
const ProductsTitle = styled.div`
  font-size: 1.4em;
  font-weight: 700;
`;
const ProductsDescription = styled.div`
  font-size: 0.9em;
  font-weight: 500;
`;
const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`; 
const NoProductsTextWrap = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5em;
  font-weight: 500;
  justify-content: center;
`;

export default ProductCards
