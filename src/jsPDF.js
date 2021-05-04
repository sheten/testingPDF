import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const pdf = new jsPDF();

var img = new Image;
img.onload = function () {
  pdf.addImage(this, 10, 10);
  pdf.text("Hello world!", 10, 10);
  pdf.text("Hello world! Džiugas Šablauskas", 10, 10);
  pdf.save("two-by-four.pdf");
};
img.crossOrigin = "";  // for demo as we are at different origin than image
img.src = "//i.imgur.com/QJ4AJXKb.jpg";  // some random imgur image