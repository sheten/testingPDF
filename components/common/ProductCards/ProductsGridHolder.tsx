import React from 'react'
import styled from 'styled-components'
import Product from "./ProductCard"

import { DESKTOPS_SIZE, LAPTOPS_SIZE, TABLETS_SIZE, MOBILE_SIZE, GAP_BETWEEN_PRODUCTS } from "../../../config"

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const items = ["Riesutas", "Slyva", "Razina", "Vaisius", "Abrikosas"]

const ProductsGridHolder = () => (
  <ProductsWrap>
    {items.map((item) => {
      return <Product key={item}/>
    })}
  </ProductsWrap>
)

const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${GAP_BETWEEN_PRODUCTS}px;
  margin: 0 auto;

  @media (max-width: ${DESKTOPS_SIZE}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${LAPTOPS_SIZE}px) {
    grid-template-columns: repeat(2, 1fr);S
  }
  @media (max-width: ${TABLETS_SIZE}px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
  }
`;

export default ProductsGridHolder
