import React, { useState } from 'react'
import styled from 'styled-components'
import { FaUpload } from "react-icons/fa"
import { ProductStructure } from '../../../interfaces'

type Props = {
  product: ProductStructure,
  handleFormSubmit(product: ProductStructure, e?: any): void;
}

const ProductForm = ({ product, handleFormSubmit }: Props) => {
  const [formData, setFormData] = useState({
    id: product.id,
    title: product.title,
    description: product.description,
    amount: product.amount,
    price: product.price,
  })

  const updateState = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(Object.values(formData))
  };


  return (
    <Form onSubmit={(e: any) => { 
      // e.preventDefault();
      handleFormSubmit(formData, e)
     }}>
        <Container>
          <ItemWrap>
            <Label>Title</Label>
          <Input name="title" value={formData.title} onChange={updateState} />
          </ItemWrap>

          <ItemWrap>
            <Label>Add Image</Label>
            <ImageBox>
              <FaUpload size={40} style={{ cursor: "pointer" }} />
            </ImageBox>
          </ItemWrap>

          <ItemWrap>
            <Label>Description</Label>
          <Textarea name="description" value={formData.description} onChange={updateState} />
          </ItemWrap>

          <ItemWrap>
            <Label>Amount</Label>
          <Input name="amount" value={formData.amount} onChange={updateState} />
          </ItemWrap>

          <ItemWrap>
            <Label>Price</Label>
          <Input name="price" value={formData.price} onChange={updateState} />
          </ItemWrap>
        </Container>

        <PublishWrap>
          <Publish value="Publish" type="submit" />
        </PublishWrap>
      </Form>
  )
}

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
  ${`width: calc(100% - 26px);`}
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

export default ProductForm
