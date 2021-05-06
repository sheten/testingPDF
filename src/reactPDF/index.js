
import { PDFViewer, Document, Page, Text, View, Image,StyleSheet } from '@react-pdf/renderer';
import "./grid.css"
import Rock from "../Assets/rock.jpg"

const GridActivator= true;
const H_Amount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; // 800px
const V_Amount = [1,2,3,4,5,6,7,8,9,10,11]; // 550px

const PDF = () => (
  <PDFViewer style={{ width: "600px", height: "900px" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={Rock} alt="image" style={styles.rockImage} />
          <Text> IMAGE TEXT</Text>
        </View>

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
      </Page>
    </Document>
  </PDFViewer>
);

// Create styles
const styles = StyleSheet.create({
  rockImage: {
    width: "300px",
    height: "300px",
    position: "relative",
    zIndex: 3,
  },
  gridContainer: {
    height: "841px",
    width: "594px",
    position: "absolute",
  },
  HG: {
    display: "flex",
    flexDirection: "column",
    height: "840px",
    position: "absolute",
    width: "594px",
  },
  VG: {
    display: "flex",
    flexDirection: "row",
    height: "840px",
    position: "absolute",
    width: "594px",
  },
  HGP: {
    border: "1px solid red",
    height: "50px",
  },
  VGP: {
    border: "1px solid red",
    height: "840px",
    width: "50px",
  }
});

export default PDF;