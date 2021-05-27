import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import ProductsGridHolder from "./ProductsGridHolder"
import ProductsList from "./ProductsList"
import { MOBILE_SIZE } from "../../../config"
import { FaBorderAll, FaBars } from "react-icons/fa"

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const ProductCards = () => {
  const { t } = useTranslation();
  const [listMode, setListMode] = useState(false)

  return (
    <Wrap>
      <Container>
        <ProductsTitleWrap>
          <ProductsTitle>{t('productCategories:Juices')}</ProductsTitle>
          <ProductsDescription>{t('productCategories:JuicyBits')}</ProductsDescription>
        </ProductsTitleWrap>

        <DisplayIconsWrap onClick={() => setListMode(!listMode)}>
          <FaBars color={listMode ? undefined : "grey" } style={{ cursor: "pointer", fontSize: "1.5em", padding: "8px" }}/>
          <FaBorderAll color={listMode ? "grey" : undefined} style={{ cursor: "pointer", fontSize: "1.5em", padding: "8px" }}/>
        </DisplayIconsWrap>
      </Container>

      {listMode ?
        <ProductsList />
        :        
        <ProductsGridHolder />
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
const ProductsTitle = styled.div`
  font-size: 1.4em;
  font-weight: 700;
`;
const ProductsDescription = styled.div`
  font-size: 0.9em;
  font-weight: 500;
`;

export default ProductCards
