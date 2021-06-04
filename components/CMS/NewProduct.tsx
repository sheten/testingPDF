import React from 'react'
import styled from 'styled-components'
import { firestore } from "../../utils/firebase";
import ProductForm from './ProductForm'
import { ProductStructure } from '../../interfaces'

type Props = {
  updateProducts: () => void,
}


const NewProduct = ({ updateProducts }: Props) => {
  const formData: ProductStructure = {
    id: "",
    title: "",
    imageTitle: "",
    category: "",
    description: "",
    amount: 0,
    price: 0,
  }

  const handleFormSubmit = (product: ProductStructure, e: any) => {
    e.preventDefault();
    if (product.title && product.imageTitle && product.category && product.description && product.amount && product.price) {
      var newProduct = firestore.collection("Products").doc();
      
      newProduct.set({
        id: newProduct.id,
        title: product.title,
        imageTitle: product.imageTitle,
        category: product.category,
        description: product.description,
        amount: product.amount,
        price: product.price,
      })
        .then(() => {
          updateProducts();
        alert("Details Submitted!");
      });
    } else {
      alert("Please fill every field!");
    }
  };

  return (
    <Wrap>
      <Header>
        New Product...
      </Header>

      <ProductForm handleFormSubmit={handleFormSubmit} product={formData} />
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Header = styled.div`
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  display: flex;
  height: 17px;
  padding: 16px;
  position: relative;
  ${ `width: calc(100% - 32px);`}
`;

export default NewProduct
