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

export type ProductsStoreStructure = {
  productsList: ProductsStructure,
  categoriesList: string[],
}
export type ProductsStructure = ProductStructure[]
export type ProductStructure = {
  id: string,
  title: string, 
  imageTitle: string,
  category: string,
  description: string, 
  amount: number, 
  price: number, 
}
export type SectionsStructure = {
  menuCategorySectionOpen: boolean, 
  newProductSectionOpen: boolean, 
  editProductSectionOpen: boolean 
}
export type CategoriesStructure = string[]
export type FilterableSelectOptionsStructure = FilterableSelectionStructure[]
export type FilterableSelectionStructure = { 
  value: string, label: string 
}