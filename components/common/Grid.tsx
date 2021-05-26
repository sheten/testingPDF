import React from 'react'
import styled from 'styled-components'

const Grid = () => (
  <GridWrap>
    <HorizontalGridWrap>
      {[...Array(20)].map((index) => {
        return <HGL key={index}> </HGL>
      })}
    </HorizontalGridWrap>

    <VerticalGridWrap>
      {[...Array(20)].map((index) => {
        return <VGL key={index}> </VGL>
      })}
    </VerticalGridWrap>
  </GridWrap>
)

const GridWrap = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;
const HorizontalGridWrap = styled.div`
  display: flex;
  flexDirection: column;
  flex-wrap: wrap;
  height: 100%;
  position: absolute;
  width: 100%;
`;
const VerticalGridWrap = styled.div`
  display: flex;
  flexDirection: row;
  height: 100%;
  position: absolute;
  width: 100%;
`;
const HGL = styled.div`
  border: 1px solid red;
  height: 5%;
  width: 100%;
`;
const VGL = styled.div`
  border: 1px solid red;
  height: 100%;
  width: 5%;
`;

export default Grid