import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";

import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { locale } from "../../../utils/locale"

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const Header = () => {
  const [language, setLanguage] = useState("en")

  const handleLanguageChange = () => {
    locale.changeLanguage(locale.language === 'en' ? 'lt' : 'en')
    locale.language === 'en' ? setLanguage("en") : setLanguage("lt")
  }

  return (
    <HeaderWrap>
      <ChangeLanguageWrap onClick={() => handleLanguageChange()}>
        <FaMapMarkerAlt /> {language === 'lt' ?  "LT" : "EN"}
      </ChangeLanguageWrap>

      <Link href={"/CMS"}>
        <a>
          <Image src="/logo.png" alt="Logo Image" width={50} height={50} />
        </a>
      </Link>

      <StyledCart />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 10%;
  justify-content: space-between;
  margin: 1% 0;
  width: 100%;
`;
const ChangeLanguageWrap = styled.div`
  cursor: pointer;
`;
const StyledCart = styled(FaShoppingCart)`
  cursor: pointer;
  height: 22px;
  width: 22px;
`;

export default Header
