import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBoxOpen, FaListAlt, FaSmile, FaMapMarkerAlt, FaRainbow, FaUsers, FaFire } from "react-icons/fa"
import { TABLETS_SIZE, MOBILE_SIZE } from "../../config"

type Props = {
  handleOpenSection(sectionType: string, productTitle: string): void;
}

const Menu = ({ handleOpenSection }: Props) => {
  const [openedSection, setOpenedSection] = useState(null)

  const handleClick = (e: any) => {
    if (e.target.innerText === openedSection) {
      setOpenedSection(null)
      handleOpenSection("menuCategorySectionOpen", e.target.innerText)
    } else {
      setOpenedSection(e.target.innerText)
      handleOpenSection("menuCategorySectionOpen", e.target.innerText)
    }
  }

  const openedSectionColor = { backgroundColor: "#3F76FC" }
  return (
    <Wrap style={openedSection ? undefined : { width: "100%" }}>
      <Header>
        CMS Inc.
      </Header>

      <MenuWrap>
        <MenuOption style={openedSection === "Products" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaBoxOpen /></IconWrap>
          Products
        </MenuOption>
        <MenuOption style={openedSection === "Websites" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaListAlt /></IconWrap>
          Websites
        </MenuOption>
        <MenuOption style={openedSection === "Ads" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaSmile /></IconWrap>
          Ads
        </MenuOption>
        <MenuOption style={openedSection === "Popup Shop" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaMapMarkerAlt /></IconWrap>
          Popup Shop
        </MenuOption>
        <MenuOption style={openedSection === "Brand" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaRainbow /></IconWrap>
          Brand
        </MenuOption>
        <MenuOption style={openedSection === "Social" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaUsers /></IconWrap>
          Social
        </MenuOption>
        <MenuOption style={openedSection === "Swag" ? openedSectionColor : undefined} onClick={(e) => handleClick(e)}>
          <IconWrap><FaFire /></IconWrap>
          Swag
        </MenuOption>
      </MenuWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  border-right: 1px solid rgba(232, 232, 232, 1);
  flex-shrink: 0;
  position: relative;
  height: 100%;
  width: 300px !important;
  @media (max-width: ${TABLETS_SIZE}px) {
    width: 200px !important;
  }
  @media (max-width: ${MOBILE_SIZE}px) {
    display: none;
  }
`;
const Header = styled.div`
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  display: flex;
  height: 17px;
  padding: 16px;
`;
const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
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
const IconWrap = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 8px;
  font-size: 20px;
  width: 40px;
`;

export default Menu
