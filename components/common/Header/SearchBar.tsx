import React from 'react'
import styled from "styled-components";
import { useTranslation } from 'next-i18next'
import { FaSearch } from "react-icons/fa";
import { MOBILE_SIZE } from "../../../config"

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <SearchWrap>
      <StyledFaSearch />
      {t('search:Search')}
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  align-items: center;
  border: 2px solid grey;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  margin: 1% 0;
  width: 300px;
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 80%;
  }
`;
const StyledFaSearch = styled(FaSearch)`
  margin: 0 10px;
`;

export default SearchBar
