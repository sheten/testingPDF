import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { storage } from "../../../utils/firebase";

import { DESKTOPS_SIZE, LAPTOPS_SIZE, TABLETS_SIZE, MOBILE_SIZE, SUPER_SMALL_SIZE, DESKTOPS_PRODUCT_SIZE, LAPTOPS_PRODUCT_SIZE, TABLETS_PRODUCT_SIZE, DEFAULT_PRODUCT_SIZE } from "../../../config"
import { ProductStructure } from "../../../interfaces"

type Props = {
  product: ProductStructure
}

const ProductCard = ({ product }: Props) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {  
    if (!image) downloadImage();
  })
  const downloadImage = async () => {
    setImage(await storage.ref().child(product.imageTitle).getDownloadURL())
  }

  return (
    <ProductWrap>
      <ImageWrap>
        {image ? <Img src={image} /> : <ClipLoader size={50} />}
      </ImageWrap>

      <InfoWrap>
        <InfoTextWrap>
          <div>{product.title}</div>
          <div>{product.price}</div>
        </InfoTextWrap>
      </InfoWrap>
    </ProductWrap>
  );
};

const ProductWrap = styled.div`
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 3px grey;
  display: flex;
  flex-direction: column;
  height: auto;
  width: ${DEFAULT_PRODUCT_SIZE}px;

  @media (max-width: ${DESKTOPS_SIZE}px) {
    width: ${DESKTOPS_PRODUCT_SIZE}px;
  }
  @media (max-width: ${LAPTOPS_SIZE}px) {
    width: ${LAPTOPS_PRODUCT_SIZE}px;
  }
  @media (max-width: ${TABLETS_SIZE}px) {
    width: ${TABLETS_PRODUCT_SIZE}px;
  }
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
  }
  @media (max-width: ${SUPER_SMALL_SIZE}px) {
    height: 150px;
  }
`;
const ImageWrap = styled.div`
  align-items: center;
  background-color: grey;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  height: 220px;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;
const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
`;
const InfoWrap = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  height: 80px;
  width: 100%;
  @media (max-width: ${SUPER_SMALL_SIZE}px) {
    height: 50px;
  }
`;
const InfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 20px;
  @media (max-width: ${SUPER_SMALL_SIZE}px) {
    padding: 0 0 0 12px;
  }
`;

export default ProductCard
