import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import ProductHolder from "./ProductHolder"
import { TABLETS_SIZE, MOBILE_SIZE } from "../../../config"

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const ProductCards = () => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <ItemsTitleWrap>
        <ItemsTitle>{t('productCategories:Juices')}</ItemsTitle>
        <ItemsDescription>{t('productCategories:JuicyBits')}</ItemsDescription>
      </ItemsTitleWrap>

      <ProductHolder />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
  }
`;
const ItemsTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 15px 0;
  width: 100%;
`;
const ItemsTitle = styled.div`
  font-size: 1.4em;
  font-weight: 700;
`;
const ItemsDescription = styled.div`
  font-size: 0.9em;
  font-weight: 500;
`;

export default ProductCards
