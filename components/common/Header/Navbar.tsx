import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { useTranslation } from 'next-i18next'

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <NavWrap>
      <Link href="/">
        <A>{t('nav:Home')}</A>
      </Link>
      <Link href="/about">
        <A>{t('nav:Shop')}</A>
      </Link>
      <Link href="/about">
        <A>{t('nav:About')}</A>
      </Link>
    </NavWrap>
  )
}

const NavWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0 20px 0;
  width: 100%;
`; 
const A = styled.a`
  margin: 0 20px;
`;

export default Navbar
