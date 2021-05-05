import React, { Component } from 'react'
import styled from "styled-components";

import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'

import OctoCatImage from '../Assets/rock.jpg'

const styleH1 = {
  fontSize: '15px',
  textAlign: 'center',
  color: 'red'
};

const invisibleStyle = {
  display: 'none',
};

export default class App extends Component {
  render() {
    const properties = { header: 'Acme' }
    const head = [["ID", "Name", "Country"]]
    const body = [
      [1, "Shaw", "Tanzania"],
      [2, "Nelson", "Kazakhstan"],
      [3, "Garcia", "Madagascar"],
    ]
    return (
      <React.Fragment>
        <PDF
          properties={properties}
          preview={true}
        >
          <Text x={78} y={40} size={15}>Sąskaita Faktūra</Text>
          <Text x={85} y={46} size={13}>Sutarties Nr. 21/05-04</Text>
          <Text x={95} y={52} size={13}>2021.05.04</Text>

          <Text x={30} y={70} size={15}>Pardavejas:</Text>
          <Text x={30} y={79} size={13}>Imones Pavadinimas</Text>
          <Text x={30} y={85} size={13}>Imones Kodas</Text>
          <Text x={30} y={91} size={13}>Imones Adresas</Text>
          <Text x={30} y={97} size={13}>a.s. LT** **** **** **** ****,</Text>
          <Text x={30} y={103} size={13}>Banko Pavadinimas</Text>

          <Text x={130} y={80} size={15}>Pirkejas:</Text>
          <Text x={130} y={89} size={13}>Vardaitis Pavardaitis</Text>
          <Text x={130} y={95} size={13}>Asmens Kodas</Text>
          <Text x={130} y={101} size={13}>Adresas</Text>

          <Text x={30} y={230} size={15}>Suma zodziais: Du simtai popieriniu pinigu</Text>
          <Text x={30} y={236} size={15}>Saskaita israse: Imones Pavadinimas</Text>

          <Text x={30} y={270} size={13}>Kontaktai pasiteiravimui: ImonesPastas@pastas.lt</Text>
          {/* <Image src={OctoCatImage} x={15} y={40} width={180} height={180} />  */}
          {/* <AddPage /> */}
          {/* <Table
            head={head}
            body={body}
          /> */}
          {/* <AddPage format='a6' orientation='l' />
          <Text x={10} y={10} color='red'>Sample</Text>
          <Line x1={20} y1={20} x2={60} y2={20} />
          <AddPage />  */}
          {/* <Html sourceById='page' /> */}
        </PDF>
        <Container id="page" style={invisibleStyle}>
          <h1 style={styleH1}>Source Html</h1>
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
          <p style={{width: "50px"}}>
            <strong>Dviratis</strong> su 3 ratais yra transporto priemone su 3 ratais ar tu tai Žinojai?
          </p>
        </Container>
      </React.Fragment>
    )
  }
}

const Container = styled.div`
  align-items: center;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  
`;
const Div = styled.div``;
const H1 = styled.h1``;
const StyledImage = styled.img`
  height: 100px;
  width: 100px;
`;
const P = styled.p`
  margin-top: 200%;
`;