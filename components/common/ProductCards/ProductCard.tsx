import React from 'react'
import styled from "styled-components";
import { useTranslation } from 'next-i18next'

import { DESKTOPS_SIZE, LAPTOPS_SIZE, TABLETS_SIZE, MOBILE_SIZE, DESKTOPS_PRODUCT_SIZE, LAPTOPS_PRODUCT_SIZE, TABLETS_PRODUCT_SIZE, DEFAULT_PRODUCT_SIZE } from "../../../config"

const ProductCard = () => {
  const { t } = useTranslation();

  return (
    <ProductWrap>
      <ImageWrap>

      </ImageWrap>

      <InfoWrap>
        <InfoTextWrap>
          <div>{t('product:Title')}</div>
          <div>{t('product:Price')}</div>
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
  height: 300px;
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
`;
const ImageWrap = styled.div`
  background-color: grey;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 220px;
  width: 100%;
`;
const InfoWrap = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  height: 80px;
  width: 100%;
`;
const InfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 20px;
`;

export default ProductCard
