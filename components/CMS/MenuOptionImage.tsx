import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { storage } from "../../utils/firebase";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  imageTitle: string,
}

const MenuOptionImage = ({ imageTitle }: Props) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {
    if (!image) {
      downloadImage();
    }
  })
  const downloadImage = async () => {
    setImage(await storage.ref().child(imageTitle).getDownloadURL())
  }

  return (
    <a target="_blank" href={image}>
      {image ? <Img src={image} alt="Image"/> : <ClipLoader size={20} />}
    </a>
    // image ? <Img src={image} alt="Image" /> : <ClipLoader size={50} />
  )
}

const Img = styled.img`
  border-radius: 3px;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export default MenuOptionImage
