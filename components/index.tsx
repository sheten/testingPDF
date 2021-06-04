import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../redux/hooks';
import { fetchFirebaseProducts, fetchFirebaseCategories } from '../redux/productSlice';

import HeaderHolder from "./common/Header"
import Products from "./common/Products"


const Homepage = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFirebaseProducts());
    dispatch(fetchFirebaseCategories());
  }, [])

  return (
    <Wrap>
      <HeaderHolder navbar={true} searchBar={true} title={t('pageSettings:Title')} />

      <Products />

      {/* <footer onClick={fetchProducts}>
        <hr />
        <span>Dziugas</span>
      </footer> */}
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
