import React, { useState, useRef, useEffect  } from 'react'
import styled from 'styled-components'
import { FaUpload } from "react-icons/fa"
import { storage } from "../../utils/firebase";
import { useAppSelector } from '../../redux/hooks'
import { ProductStructure, FilterableSelectOptionsStructure } from '../../interfaces'
import FilterableSelect from '../common/FilterableSelect';

type Props = {
  product: ProductStructure,
  handleFormSubmit(product: ProductStructure, e?: any): void;
}

const ProductForm = ({ product, handleFormSubmit }: Props) => {
  const reduxCategories = useAppSelector((state) => state.products.categoriesList)
  const [formData, setFormData] = useState({
    id: product.id,
    title: product.title,
    imageTitle: product.imageTitle,
    category: product.category,
    description: product.description,
    amount: product.amount,
    price: product.price,
  })
  const [imageState, setImageState] = useState<string>()
  const [options, setOptions] = useState<FilterableSelectOptionsStructure>([])
  const imageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (product.imageTitle.length > 0 && !imageState) downloadImage()
    if (options.length === 0) structureCategoriesOptions()
  })

  const structureCategoriesOptions = () => {
    const optionsArray: FilterableSelectOptionsStructure = [];
    reduxCategories.map((category) => { optionsArray.push({ value: category.title, label: category.title }) })
    setOptions(optionsArray)
  }
  const downloadImage = async () => {
    setImageState(await storage.ref().child(product.imageTitle).getDownloadURL())
  }

  const handleImageChange = async (e: any) => {
    const image = e.target.files[0]
    var fileRef = storage.ref().child(image.name)
    const imageUrl = URL.createObjectURL(image);
    setFormData({ ...formData, imageTitle: image.name });
    setImageState(imageUrl);
    await fileRef.put(image).then(() => console.log("Image Sent to Storage Succesfully"))
  }

  const handleUpload = (e: any) => {
    e.preventDefault();
    if (imageInputRef && imageInputRef.current) imageInputRef.current.click();
  }
  const updateFormData = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOptionSelect = (selection: string) => {
    setFormData({ ...formData, category: selection });
  };

  return (
    <Form onSubmit={(e: any) => {handleFormSubmit(formData, e)}}>
        <Container>
          <ItemWrap>
            <Label>Title</Label>
          <Input name="title" value={formData.title} onChange={updateFormData} />
          </ItemWrap>

          <React.Fragment>
            <input ref={imageInputRef} type="file" onChange={handleImageChange} style={{ display: "none" }} />

            <ItemWrap>
              <Label>Add Image</Label>
              <ImageBox onClick={handleUpload}>
                {imageState
                  ?
                  <ImagePreview src={imageState} />
                  :
                  <FaUpload size={40} style={{ cursor: "pointer" }} />
                }
              </ImageBox>
            </ItemWrap>
          </React.Fragment>

          <ItemWrap>
            <Label>Category</Label>
            <FilterableSelect handleOptionSelect={handleOptionSelect} productCategory={product.category} options={options}/>
          </ItemWrap>

          <ItemWrap>
            <Label>Description</Label>
            <Textarea name="description" value={formData.description} onChange={updateFormData} />
          </ItemWrap>

          <ItemWrap>
            <Label>Amount</Label>
            <Input name="amount" value={formData.amount} onChange={updateFormData} />
          </ItemWrap>

          <ItemWrap>
            <Label>Price</Label>
            <Input name="price" value={formData.price} onChange={updateFormData} />
          </ItemWrap>
        </Container>

        <PublishWrap>
          <Publish value="Publish" type="submit" />
        </PublishWrap>
      </Form>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 15px 0;
  position: relative;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
`;
const ItemWrap = styled.div`
  margin-bottom: 20px;
  width: 80%;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;
const ImagePreview = styled.img`
  cursor: pointer;
  display: flex;
  max-height: fill-available;
  justify-content: center;
  max-width: 375px;
  @media (max-width: 768px) {
    height: 175px;
    width: 285px;
  }
  @media (max-width: 380px) {
    height: 122px;
    width: 199px;
  }
`;
const Input = styled.input`
  border: 1px solid #95A3B9;
  padding: 7px 12px;  
  ${`width: calc(100% - 26px);`}
`;
const ImageBox = styled.div`
  align-items: center;
  background-color: #C0C0C0;
  border-radius: 7px;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 100%;
`;
const Textarea = styled.textarea`
  border: 1px solid #95A3B9;
  padding: 7px 12px;  
  ${`width: calc(100% - 26px);`}
`;

// PUBLISH 
const PublishWrap = styled.div`
  align-items: center;
  bottom: 0px;
  border-top: 1px solid rgba(232, 232, 232, 1);
  display: flex;
  height: 80px;
  justify-content: flex-end;
  padding: 0 12px;
  position: relative;
  ${`width: calc(100% - 24px);`}
`;
const Publish = styled.input`
  background-color: #4DA35D;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  height: 30px;
  width: 150px;
`;

export default ProductForm
