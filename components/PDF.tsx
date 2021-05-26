// import Image from 'next/image'
import React from 'react';

import { PDFViewer, Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

import { invoiceContentStructure, tableContentStructure } from "../interfaces"
// import Rock from "../public/images/"
// import font from "../public/fonts/";

export interface Props {
  invoiceContent: invoiceContentStructure
}

const gridActivator = false;

// Register font
Font.register({ family: 'Roboto', src: font, format: "truetype" });

const PDF = ({ invoiceContent }: Props) => {
  return (
    <PDFViewer style={styles.pdfWrap}>
      <Document>
        <Page size="A4">
          {gridActivator ?
            <View style={styles.gridContainer}>
              {[...Array(20)].map((index) => {
                return (
                  <Text key={index} style={styles.HGP}> </Text>
                )
              })}

              <View style={styles.VG}>
                {[...Array(20)].map((index) => {
                  return <Text key={index} style={styles.VGP}> </Text>
                })}
              </View>
            </View>
            :
            null
          }

          <div style={styles.logoImage}>
            {/* <Image src={Rock}/> */}
          </div>
          <View style={styles.invoiceTitleWrap}>
            <Text style={{ fontSize: 24 }}>{invoiceContent.invoiceData.title}</Text>
            <Text>{invoiceContent.invoiceData.number}</Text>
            <Text>{invoiceContent.invoiceData.date}</Text>
          </View>

          <View style={styles.accountsDetailsWrap}>
            <View style={styles.sellerDetailsWrap}>
              <Text style={styles.accountTitle}>{invoiceContent.sellerData.title}</Text>
              <Text>{invoiceContent.sellerData.companyName}</Text>
              <Text>{invoiceContent.sellerData.companyCode}</Text>
              <Text>{invoiceContent.sellerData.companyAddress}</Text>
              <Text>{invoiceContent.sellerData.bankNumber}</Text>
              <Text>{invoiceContent.sellerData.bankName}</Text>
            </View>

            <View style={styles.buyerDetailsWrap}>
              <Text style={styles.accountTitle}>{invoiceContent.buyerData.title}</Text>
              <Text>{invoiceContent.buyerData.nameSurname}</Text>
              <Text>{invoiceContent.buyerData.personalID}</Text>
              <Text>{invoiceContent.buyerData.address}</Text>
            </View>
          </View>

          <View style={styles.tableWrap}>
            <View style={styles.tableTitlesWrap}>
              {invoiceContent.invoiceTableTitlesData.map((item, index) => {
                return <Text key={index} style={styles.tableTitles}>{item}</Text>
              })}
            </View>

            <View style={styles.tableContentWrap}>
              {invoiceContent.tableContentData.map((item: tableContentStructure) => {
                return (
                  <View key={item.number} style={styles.contentRow}>
                    <Text style={styles.tableContent}>{item.number}</Text>
                    <Text style={styles.tableContent}>{item.name}</Text>
                    <Text style={styles.tableContent}>{item.amount}</Text>
                    <Text style={styles.tableContent}>{item.price}</Text>
                    <Text style={styles.tableContent}>{item.sum}{invoiceContent.invoiceData.currency}</Text>
                  </View>
                )
              })}
            </View>

            <View style={styles.totalSumWrap}>
              <Text style={styles.totalSumTitle}>{invoiceContent.finalSumData.title}</Text>
              <Text style={styles.totalSumAmount}>{invoiceContent.finalSumData.sum}{invoiceContent.invoiceData.currency}</Text>
            </View>
          </View>

          <View style={styles.sumInWordsWrap}>
            <Text>{invoiceContent.finalSumData.sumInWordsTitle}{invoiceContent.finalSumData.sumInWords}</Text>
            <Text>{invoiceContent.finalSumData.invoiceWrittenByTitle}{invoiceContent.finalSumData.invoiceWrittenBy}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

// Create styles
const styles = StyleSheet.create({
  container: {
    height: "100vh !important",
  },
  pdfWrap: {
    backgroundColor: "green",
    fontSize: 15,
    height: "100%",
    width: "100%",
  },

  // LOGO
  logoImage: {
    position: "absolute",
    right: "25px",
    top: "25px",
    height: "50px",
    width: "50px",
    zIndex: 3,
  },

  // INVOICE TITLE
  invoiceTitleWrap: {
    alignItems: "center",
    color: "black",
    display: "flex",
    margin: "75px 0 0 200px",
    width: "200px",
  },

  // SELLER/BUYER DETAILS
  accountsDetailsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  accountTitle: {
    fontSize: 20,
    marginBottom: "7px",
  },
  sellerDetailsWrap: {
    marginLeft: "50px",
    width: "240px",
  },
  buyerDetailsWrap: {
    width: "240px",
  },

  //TABLE 
  tableWrap: {
    border: "1px solid black",
    margin: "50px 0 0 50px",
    width: "500px",
  },
  tableTitlesWrap: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  tableContentWrap: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  tableTitles: {
    border: "1px solid black",
    flex: 1,
    padding: "5px",
  },
  tableContent: {
    border: "1px solid black",
    flex: 1,
    padding: "3px 5px",
  },
  totalSumWrap: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
  },
  totalSumTitle: {
    flex: 4,
    padding: "3px 25px", // Horizontal padding 25px, is a sum of other rows paddings since upper rows has padding 5px.
    textAlign: "right",
  },
  totalSumAmount: {
    borderLeft: "2px solid black",
    flex: 1,
    padding: "3px 5px",
  },

  // SUM IN WORDS
  sumInWordsWrap: {
    margin: "30px 0 0 50px",
  },

  // GRID
  gridContainer: {
    height: "841px",
    width: "594px",
    position: "absolute",
  },
  HG: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  VG: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  HGP: {
    border: "1px solid red",
    height: "5%",
  },
  VGP: {
    border: "1px solid red",
    height: "100%",
    width: "5%",
  }
});

export default PDF;