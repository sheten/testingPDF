import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import styled from "styled-components";

import Logo from "../Assets/rock.jpg"

function generatePDF() {
  const pdf = new jsPDF();  

  // Title of Invoice
  pdf.setFontSize(18);
  pdf.text("Saskaita Faktura", 83, 40);
  pdf.setFontSize(13);
  pdf.text("Sutarties Nr. 21/05-04", 85, 46);
  pdf.text("2021-05-04", 95, 52);

  pdf.setLanguage("lt")
  // Seller Details
  pdf.setFontSize(15);
  pdf.text("Pardavejas", 28, 70);
  pdf.setFontSize(12);
  pdf.text("Imones Pavadinimas", 30, 79);
  pdf.text("Imones Kodas", 30, 85);
  pdf.text("Imones Adresas", 30, 91);
  pdf.text("A.s LT** **** **** **** ****,", 30, 97);
  pdf.text("Banko Pavadinimas", 30, 103);

  // Buyer Details
  pdf.setFontSize(15);
  pdf.text("Pirkejas", 128, 70);
  pdf.setFontSize(12);
  pdf.text("Vardaitis Pavardaitis", 130, 79);
  pdf.text("Asmens Kodas", 130, 85);
  pdf.text("Adresas", 130, 91);

  // Table of Sold Content
  const tableTitles = [
    ['Eil. Nr.', 'Pavadinimas', 'Mat. vnt.', 'Kiekis gramais', 'Kaina Eur', 'Suma Eur']
  ]
  const tableContent = [
    ['1', 'Kieti Riesutai', '2', '200', '7', '14'],
    ['2', 'Minksti Riesutai', '3', '1200', '10', '30'],
    ['3', 'Random Riesutai', '1', '700', '12', '12'],
  ]
  pdf.autoTable({
    theme: 'grid',
    headStyles: { textColor: "black", fillColor: "white", lineWidth: 0.3, lineColor: "black" },
    bodyStyles: { textColor: "black", fillColor: "white", lineWidth: 0.3, lineColor: "black"},
    margin: { top: 120, right: 30, left: 30},
    head: tableTitles,
    body: tableContent,
  })
  
  // Money Sum in Words 
  const rowsAmount = tableContent.length +1;
  const startTextFrom = rowsAmount*8 + 130
  pdf.setFontSize(12);
  pdf.text("Suma zodziais: Du simtai popieriniu pinigu", 30, startTextFrom);
  pdf.text("Saskaita israse: Imones Pavadinimas", 30, startTextFrom+6);

  // Contant Information
  pdf.setFontSize(9);
  pdf.text("Kontaktai pasiteiravimui: imonespastas@pastas.lt", 30, 270);

  var logo = new Image;
  logo.onload = function () {
    pdf.addImage(this, 160, 10);
    pdf.save("two-by-four.pdf");
  };
  logo.src = "//i.imgur.com/QJ4AJXKb.jpg";
}

const PDFButton = () => (
  <Button type="button" onClick={() => generatePDF()}>Create PDF</Button>
);

const Button = styled.button`
  background-color: rgb(168, 170, 23);
  border: 3px solid grey;
  border-radius: 10px;
  color: black;
  padding: 10px;
`;

export default PDFButton;