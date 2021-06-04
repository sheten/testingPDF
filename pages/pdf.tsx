import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next'

import { invoiceContentStructure } from "../interfaces"
import { invoiceContentData } from "../utils/pdf-sample-data"

import PDF from "../components/PDF";

export interface PDFProps {
  invoiceContent: invoiceContentStructure
}

const HOC_PDF = ({ invoiceContent }: PDFProps) => {
  const [isClient, setIsClient] = useState(false)  
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return ( 
    <div style={{height: "100vh"}}>
      {isClient && (
        <PDF invoiceContent={invoiceContent}/>
      )}
    </div>
   );
}

export const getStaticProps: GetStaticProps = async () => {
  const invoiceContent: invoiceContentStructure = invoiceContentData
  return { props: { invoiceContent } }
}

export default HOC_PDF;