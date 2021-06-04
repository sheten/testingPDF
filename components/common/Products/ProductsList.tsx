import React from 'react'
import styled from 'styled-components'
import { ProductsStructure } from "../../../interfaces"

type Props = {
  products: ProductsStructure,
}

const titles = ["Produktas", "Kaina", "Kiekis"]
// const items = [ { title: "Riesutas", price: "2Eur", amount: "200g" }, { title: "Bananas", price: "1Eur", amount: "120g" }, { title: "Razina", price: "3.50Eur", amount: "250g" }, { title: "Obuolys", price: "7.50Eur", amount: "450g" }, { title: "Slyva", price: "10Eur", amount: "120g" }, { title: "Abrikosas", price: "7Eur", amount: "220g" }, { title: "Uoga", price: "2.5Eur", amount: "100g" }, { title: "Citrina", price: "5Eur", amount: "500g" }, { title: "Kriause", price: "6Eur", amount: "300g" }, ]

const ProductsList = ({products}: Props) => {
  return (
    <TableWrap>
      <Thead>
        <tr>
          {titles.map(title => (
            <td key={title}>
              <Title>
                {title}
              </Title>
            </td>
          ))}
        </tr>
      </Thead>

      <tbody>
        {products.map(({ title, price, amount }, i) => (
          <ProductWrap key={i}>
            <td>
              <Product>{title}</Product>
            </td>
            <td>
              <Product>{price}</Product>
            </td>
            <td>
              <Product>{amount}</Product>
            </td>
          </ProductWrap>
        ))}
      </tbody>
    </TableWrap>
  )
        }

const TableWrap = styled.table`
  min-width: 760px;
  width: 100%;
  tbody {
    tr {
      :nth-child(2n) {
        background: #f4f4f4;
      }
    }
  }
`;
const Thead = styled.thead`
  color: whitesmoke;
  background-color: #696969;
`;
const Title = styled.div`
  color: whitesmoke;
  font-family: "CeraProRegular", sans-serif;
  font-size: 14px;
  line-height: 15px;
  padding: 15px 10px 15px 30px;
  position: relative;
  text-decoration: none;
  width: max-content;
`;
const ProductWrap = styled.tr`
  padding: 15px 10px 15px 30px;
  &:hover {
    text-decoration: underline;
  }
`;
const Product = styled.div`
  color: #443e3e;
  cursor: pointer;
  font-family: "CeraProRegular", sans-serif;
  font-size: 15px;
  line-height: 15px;
  padding: 15px 10px 15px 30px;
  position: relative;
`;

export default ProductsList
