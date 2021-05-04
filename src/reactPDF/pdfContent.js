import React, { Component } from 'react'
import styled from "styled-components";

import OctoCatImage from '../Assets/Profile.png'

export default class App extends Component {
  render() {
    return (
      <Div id="page">
        <H1>Source Html</H1>
        <p>
          <strong>lorem ipsumLorem </strong>Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        {/* <StyledImage src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" alt="Image"/> */}
      </Div>
    )
  }
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  width: 100%;
`;
const Div = styled.div``;
const H1 = styled.h1``;
const StyledImage = styled.img`
  height: 100px;
  width: 100px;
`;