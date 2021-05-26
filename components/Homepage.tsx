import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { getUsers } from "../utils/firebaseUsers"

import HeaderHolder from "./common/Header"
import ProductCards from "./common/ProductCards"

// type Props = {
//   children?: ReactNode
//   title?: string
// }


const Homepage = () => {
  const { t } = useTranslation();
  
  const runFunction = () => {
    console.log("Clicked");
    getUsers();
  }

  return (
    <Wrap>
      <HeaderHolder navbar={true} searchBar={true} title={t('pageSettings:Title')} />

      <ProductCards />

      <footer onClick={runFunction}>
        <hr />
        <span>Dziugas</span>
      </footer>
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default Homepage
