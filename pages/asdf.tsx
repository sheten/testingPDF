import { PDFViewer, Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import * as React from 'react';

export interface PDFProps {
  
}
 
const PDF: React.SFC<PDFProps> = () => {
  return ( 
    <div>
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.pageWrap}>

          {GridActivator ?
            <View style={styles.gridContainer}>
              <View style={styles.HG}>
                {H_Amount.map((index) => {
                  return <Text key={index} style={styles.HGP}> </Text>
                })}
              </View>

              <View style={styles.VG}>
                {V_Amount.map((index) => {
                  return <Text key={index} style={styles.VGP}> </Text>
                })}
              </View>
            </View>
            :
            <></>
          }

          <Image src={Rock} alt="image" style={styles.logoImage} />
          <View style={styles.invoiceTitleWrap}>
            <Text style={{ fontSize: 24 }}>Saskaita Faktura</Text>
            <Text>Sutarties Nr. 21/05-04</Text>
            <Text>2021-05-04</Text>
          </View>

          <View style={styles.accountsDetailsWrap}>
            <View style={styles.sellerDetailsWrap}>
              <Text style={styles.accountTitle}>Pardavejas:</Text>
              <Text>{imonesPavadinimas}</Text>
              <Text>Imones Kodas</Text>
              <Text>Imones Adresas</Text>
              <Text>A.s LT** **** **** **** ****,</Text>
              <Text>Banko Pavadinimas</Text>
            </View>

            <View style={styles.buyerDetailsWrap}>
              <Text style={styles.accountTitle}>Pirkejas:</Text>
              <Text>Vardas Pavarde</Text>
              <Text>Asmens Kodas</Text>
              <Text>Asmens Adresas</Text>
            </View>
          </View>

          <View style={styles.tableWrap}>
            <View style={styles.tableTitlesWrap}>
              {tableTitles.map((item, index) => {
                return <Text key={index} style={styles.tableTitles}>{item}</Text>
              })}
            </View>

            <View style={styles.tableContentWrap}>
              {tableContent.map((item) => {
                return (
                  <View key={item.number} style={styles.contentRow}>
                    <Text style={styles.tableContent}>{item.number}</Text>
                    <Text style={styles.tableContent}>{item.name}</Text>
                    <Text style={styles.tableContent}>{item.amount}</Text>
                    <Text style={styles.tableContent}>{item.price}</Text>
                    <Text style={styles.tableContent}>{item.sum}</Text>
                  </View>
                )
              })}
            </View>

            <View style={styles.totalSumWrap}>
              <Text style={styles.totalSumTitle}>Total Sum:</Text>
              <Text style={styles.totalSumAmount}>57,12Eur</Text>
            </View>
          </View>

          <View style={styles.sumInWordsWrap}>
            <Text>Suma zodziais: Du simtai popieriniu pinigu</Text>
            <Text>Saskaita israse: {imonesPavadinimas}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
    </div>
   );
}
 
export default PDF;