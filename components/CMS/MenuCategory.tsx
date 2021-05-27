import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FaEdit, FaEllipsisV } from "react-icons/fa"
import { TABLETS_SIZE } from "../../config"
import { ProductStructure } from '../../interfaces'

type Props = {
  currentMenuCategorySection: string,
  products: ProductStructure[] ,
  handleOpenSection(sectionType: string, productTitle?:string): void;
  newProductSectionOpen: boolean,
}

const MenuCategory = ({ currentMenuCategorySection, products, handleOpenSection, newProductSectionOpen }: Props) => {

  return (
    <Wrap style={newProductSectionOpen ? { width: "300px", flexShrink: 0 } : undefined}>
      <Header>
        {currentMenuCategorySection}
        <div>
          <StyledEditIcon onClick={() => handleOpenSection("newProductSectionOpen")}/>
          <FaEllipsisV />
        </div>
      </Header>

      {products.map((product) => {
        return(
          <MenuOption key={product.title} onClick={() => handleOpenSection("editProductSectionOpen", product.title)}>
            <ImageWrap>
              <Image src="/logo.png" alt="Image" width={40} height={40} />
            </ImageWrap>
            {product.title}
          </MenuOption>
        )
      })}
    </Wrap>
  )
}

const Wrap = styled.div`
  border-right: 1px solid rgba(232, 232, 232, 1);
  width: 100%;
  @media (max-width: ${TABLETS_SIZE}px) {
    width: 200px !important;
  }
`;
const Header = styled.div`
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  display: flex;
  flex-direction: row;
  height: 17px;
  justify-content: space-between;
  padding: 16px;
`;
const MenuOption = styled.div`
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
const StyledEditIcon = styled(FaEdit)`
  cursor: pointer;
  font-size: 17px;
  margin-right: 25px;
`;

export default MenuCategory
