import { PDFViewer, Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import * as React from 'react';

export interface PDFProps {
  
}
// var View: any;
// var Text: any;

const PDF: React.SFC<PDFProps> = () => {
  return (
    <div>

      <View>
        <Text>Saskaita Faktura</Text>
        <Text>Sutarties Nr. 21/05-04</Text>
        <Text>2021-05-04</Text>
      </View>
      {/* <PDFViewer>
        <Document>
          <Page size="A4" style={styles.pageWrap}>
            <View style={styles.invoiceTitleWrap}>
              <Text style={{ fontSize: 24 }}>Saskaita Faktura</Text>
              <Text>Sutarties Nr. 21/05-04</Text>
              <Text>2021-05-04</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer> */}
    </div>
  );
}

export default PDF;