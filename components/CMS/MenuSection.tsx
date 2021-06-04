import React from 'react'
import styled from 'styled-components'
import MenuOption from "./MenuOption"
import { FaEdit, FaEllipsisV } from "react-icons/fa"
import { TABLETS_SIZE } from "../../config"
import { ProductStructure, SectionsStructure } from '../../interfaces'

type Props = {
  openedMenuTitle: string,
  products: ProductStructure[] ,
  handleOpenSection(sectionType: string, productTitle?:string): void;
  openedSectionsList: SectionsStructure,
}

const MenuSection = ({ openedMenuTitle, products, handleOpenSection, openedSectionsList }: Props) => {

  return (
    <Wrap style={
      openedSectionsList.newProductSectionOpen || openedSectionsList.editProductSectionOpen ? 
      { width: "300px", flexShrink: 0 } : undefined}
    >
      <Header>
        {openedMenuTitle}
        <div>
          <StyledEditIcon onClick={() => handleOpenSection("newProductSectionOpen")}/>
          <FaEllipsisV />
        </div>
      </Header>

      {products.map((product, i) => {
        return <MenuOption key={i} product={product} handleOpenSection={handleOpenSection}/>
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
const StyledEditIcon = styled(FaEdit)`
  cursor: pointer;
  font-size: 17px;
  margin-right: 25px;
`;

export default MenuSection
