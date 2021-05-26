import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Header from "./Header"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

type Props = {
  title?: string,
  navbar?: boolean,
  searchBar?: boolean,
}

const HeaderHolder = ({ title, navbar, searchBar }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <HeaderWrap>
      <Header />
      { navbar ? <Navbar /> : null }
      { searchBar ? <SearchBar /> : null }
    </HeaderWrap>
  </>
)

const HeaderWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
`;

export default HeaderHolder
