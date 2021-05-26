import { 
  User,
  invoiceContentStructure,
  invoiceDataStructure,
  sellerDataStructure,
  buyerDataStructure,  
  tableContentStructure,
  finalSumStructure,
} from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]
const invoiceData: invoiceDataStructure = { 
  title: "Saskaita Faktura", 
  number: "Sutarties Nr. 21/05-4", 
  date: "2021.05.11",
  currency: "Eur",
};
const sellerData: sellerDataStructure = { 
  title: "Pardavejas:", 
  companyName: "MB \"Abrikosas\"", 
  companyCode: 305421134,
  companyAddress: "Lauru sodu 1-oji g. 80",
  bankNumber: "A.s LT** **** **** **** ****",
  bankName: "AB Swedbank",
};
const buyerData: buyerDataStructure = {
  title: "Pirkėjas:",
  nameSurname: "Vardas Pavarde",
  personalID: 32520202020,
  address: "Adresas",
};
const invoiceTableTitlesData: string[] = ['Number', 'Title', 'Amount', 'Price', 'Sum'];
const tableContentData: tableContentStructure[] = [
  { number: 1, name: "Riesutai", amount: 300, price: "7Eur", sum: 20 },
  { number: 2, name: "Riesutas", amount: 450, price: "14Eur", sum: 22 },
  { number: 3, name: "Riesutaz", amount: 100, price: "4Eur", sum: 18 },
];
const finalSumData: finalSumStructure = {
  title: "Is viso: ",
  sum: parseFloat((12.20).toFixed(2)),
  sumInWordsTitle: "Suma zodziais: ",
  sumInWords: "Penkiasdesimt euru",
  invoiceWrittenByTitle: "Saskaita israse: ",
  invoiceWrittenBy: "Shetten Dziugys",
}

export const invoiceContentData: invoiceContentStructure = {
  invoiceData,
  sellerData,
  buyerData,
  invoiceTableTitlesData,
  tableContentData,
  finalSumData,
}