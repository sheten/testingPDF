import React, { useState } from "react";
import Select from "react-select";
import { FilterableSelectOptionsStructure, FilterableSelectionStructure } from '../../interfaces'

type Props = {
  options: FilterableSelectOptionsStructure,
  handleOptionSelect: (selection: string) => void,
  productCategory?: string,
}

const FilterableSelect = ({ options, handleOptionSelect, productCategory }: Props) => {
  const structurisedProductCategory: FilterableSelectionStructure = { value: productCategory ? productCategory : "", label: productCategory ? productCategory : "" }
  const [selectedOption, setSelectedOption] = useState<FilterableSelectionStructure>(structurisedProductCategory);

  const handleChange = (selectedOption: FilterableSelectionStructure) => {
    setSelectedOption(selectedOption)
    handleOptionSelect(selectedOption.value);
  };
  return(
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  )
}

export default FilterableSelect;
