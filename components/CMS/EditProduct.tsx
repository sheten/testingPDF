import React from 'react'
import styled from 'styled-components'
import ProductForm from './ProductForm'
import { firestore } from "../../utils/firebase";
import { ProductStructure } from '../../interfaces'

type Props = {
  editableProductTitle: string,
  productProps: ProductStructure,
  updateProducts: () => void,
}

const EditProduct = ({ editableProductTitle, productProps, updateProducts }: Props) => {

  const handleFormSubmit = (product: ProductStructure, e: any) => {
    e.preventDefault();
    if (product.id && product.title && product.imageTitle && product.category && product.description && product.amount && product.price) {
      firestore
        .collection("Products")
        .doc(product.id)
        .update({
          title: product.title,
          imageTitle: product.imageTitle,
          category: product.category,
          description: product.description,
          amount: product.amount,
          price: product.price,
        })
        .then(() => {
          updateProducts();
          alert("Details Updated!");
        });
    } else {
      alert("Please fill every field!");
    }
  };


  return (
    <Wrap>
      <Header>
        {editableProductTitle}
      </Header>
      
      <ProductForm handleFormSubmit={handleFormSubmit} product={productProps} />
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
  ${`width: calc(100% - 32px);`}
`;

export default EditProduct
