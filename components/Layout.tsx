import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { DESKTOPS_SIZE, LAPTOPS_SIZE, TABLETS_SIZE, MOBILE_SIZE, LAYOUT_PADDING } from "../config"

type Props = {
  children?: ReactNode
}

const DLayout = ({ children }: Props) => (
  <LayoutWrap>
    {children}
  </LayoutWrap> 
)

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: open sans;
  font-weight: 600;
  margin: 0 auto;
  padding: 0 ${LAYOUT_PADDING}px;
  width: ${DESKTOPS_SIZE - LAYOUT_PADDING * 2}px;

  @media (max-width: ${DESKTOPS_SIZE}px) {
    width: ${LAPTOPS_SIZE - LAYOUT_PADDING * 2}px;
  }
  @media (max-width: ${LAPTOPS_SIZE}px) {
    width: ${TABLETS_SIZE - LAYOUT_PADDING * 2}px;
  }
  @media (max-width: ${TABLETS_SIZE}px) {
    width: auto;
  }
`;

export default DLayout
