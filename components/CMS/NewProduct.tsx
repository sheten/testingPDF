import React, { useState } from 'react'
import styled from 'styled-components'
import { firestore } from "../../utils/firebase";
import ProductForm from './common/ProductForm'
import { ProductStructure } from '../../interfaces'


const NewProduct = () => {
  const [formData, setFormData] = useState<ProductStructure>({
    id: "",
    title: "",
    description: "",
    amount: 0,
    price: 0,
  })

  const handleFormSubmit = (product: ProductStructure, e: any) => {
    e.preventDefault();
    if (product.title && product.description && product.amount && product.price) {
      var newProduct = firestore.collection("Products").doc();
      newProduct.set({
        id: newProduct.id,
        title: product.title,
        description: product.description,
        amount: product.amount,
        price: product.price,
      })
      .then(() => {
        alert("Details Submitted!")
      });
    } else {
      alert("Please fill every field!")
    }
  };
  // const updateProductField = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

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

// PRODUCT FORM
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 15px 0;
  position: relative;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
`;
const ItemWrap = styled.div`
  margin-bottom: 20px;
  width: 80%;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;
const Input = styled.input`
  border: 1px solid #95A3B9;
  padding: 7px 12px;  
  ${ `width: calc(100% - 26px);`}
`;
const ImageBox = styled.div`
  align-items: center;
  background-color: #C0C0C0;
  border-radius: 7px;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 100%;
`;
const Textarea = styled.textarea`
  border: 1px solid #95A3B9;
  padding: 7px 12px;  
  ${`width: calc(100% - 26px);`}
`; 

// PUBLISH 
const PublishWrap = styled.div`
  align-items: center;
  bottom: 0px;
  border-top: 1px solid rgba(232, 232, 232, 1);
  display: flex;
  height: 80px;
  justify-content: flex-end;
  padding: 0 12px;
  position: relative;
  ${`width: calc(100% - 24px);`}
`;
const Publish = styled.input`
  background-color: #4DA35D;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  height: 30px;
  width: 150px;
`;

export default NewProduct
