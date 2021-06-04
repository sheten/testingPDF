import React from 'react'
import styled from 'styled-components'
import MenuOptionImage from "./MenuOptionImage"
import { ProductStructure } from '../../interfaces'

type Props = {
  product: ProductStructure,
  handleOpenSection(sectionType: string, productTitle?: string): void;
}

const MenuOption = ({ product, handleOpenSection }: Props) => {

  return (
    <Wrap key={product.title} onClick={() => handleOpenSection("editProductSectionOpen", product.title)}>
      <ImageWrap>
        <MenuOptionImage imageTitle={product.imageTitle}/>
      </ImageWrap>
      {product.title}
    </Wrap>
  )
}
const Wrap = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 300;
  &:hover {
    background-color: rgba(232, 232, 232, 1);
  }
`;
const ImageWrap = styled.div`
  margin-right: 8px;
`;

export default MenuOption
