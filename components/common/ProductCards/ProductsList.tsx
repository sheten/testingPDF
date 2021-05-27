import React from 'react'
import styled from 'styled-components'
import Product from "./ProductCard"

import { DESKTOPS_SIZE, LAPTOPS_SIZE, TABLETS_SIZE, MOBILE_SIZE, GAP_BETWEEN_PRODUCTS } from "../../../config"

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const titles = [ "Produktas", "Kaina", "Kiekis", "papildomas","papildomas"]
const items = [
  { title: "Riesutas", price: "2Eur", amount: "200g" },
  { title: "Bananas", price: "1Eur", amount: "120g" },
  { title: "Razina", price: "3.50Eur", amount: "250g" },
  { title: "Obuolys", price: "7.50Eur", amount: "450g" },
  { title: "Slyva", price: "10Eur", amount: "120g" },
  { title: "Abrikosas", price: "7Eur", amount: "220g" },
  { title: "Uoga", price: "2.5Eur", amount: "100g" },
  { title: "Citrina", price: "5Eur", amount: "500g" },
  { title: "Kriause", price: "6Eur", amount: "300g" },
]

const ProductsList = () => (
  <Table>
    <thead>
      <tr>
      {titles.map((title) => {
        return <th key={title} style={{fontWeight: 400}}>{title}</th>
      })}
      </tr>
    </thead>

    <tbody>
      {items.map((item) => {
        return (
          <tr key={item.title}>
            <BodyItem>{item.title}</BodyItem>
            <BodyItem>{item.price}</BodyItem>
            <BodyItem>{item.amount}</BodyItem>
          </tr>
        )
      })}
    </tbody>
  </Table>
)

const Table = styled.table`
  border: 1px solid black;
  width: 100%;
`;
const BodyRow = styled.tr`
  border: 1px solid black;
`;
const BodyItem = styled.td`
  padding: 10px 0;
`;

export default ProductsList
