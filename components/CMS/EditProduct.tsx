import React from 'react'
import styled from 'styled-components'
import ProductForm from './common/ProductForm'
import { firestore } from "../../utils/firebase"; 
import { ProductStructure } from '../../interfaces'

type Props = {
  openedEditProductTitle: string,
  productProps: ProductStructure,
}

const EditProduct = ({ openedEditProductTitle, productProps }: Props) => {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   amount: NaN,
  //   price: NaN,
  // })

  const handleFormSubmit = (product: ProductStructure, e: any) => {
    e.preventDefault();
    console.log("PRODUCT:  " + Object.values(product))

    if (product.title && product.description && product.amount && product.price) {
      firestore
        .collection("Products")
        .doc(product.id)
        .update({
          title: product.title,
          description: product.description,
          amount: product.amount,
          price: product.price,
        })
        .then(() => {
          alert("Details Updated!")
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
        {openedEditProductTitle}
      </Header>

      <ProductForm handleFormSubmit={handleFormSubmit} product={productProps}/>
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
