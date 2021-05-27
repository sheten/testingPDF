// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}


//PDF
export type invoiceContentStructure = {
  invoiceData: invoiceDataStructure,
  sellerData: sellerDataStructure,
  buyerData: buyerDataStructure,
  invoiceTableTitlesData: string[],
  tableContentData: tableContentStructure[],
  finalSumData: finalSumStructure,
}
export type invoiceDataStructure = {
  title: string,
  number: string,
  date: string,
  currency: string,
}
export type sellerDataStructure = {
  title: string,
  companyName: string,
  companyCode: number,
  companyAddress: string,
  bankNumber: string,
  bankName: string,
}
export type buyerDataStructure = {
  title: string,
  nameSurname: string,
  personalID: number,
  address: string,
}
export type tableContentStructure = {
  number: number,
  name: string,
  amount: number,
  price: string,
  sum: number,
}
export type finalSumStructure = {
  title: string,
  sum: number,
  sumInWordsTitle: string,
  sumInWords: string,
  invoiceWrittenByTitle: string,
  invoiceWrittenBy: string,
}

// CMS
export type ProductStructure = {
  id: string | undefined,
  title: string, 
  description: string, 
  amount: number, 
  price: number, 
}