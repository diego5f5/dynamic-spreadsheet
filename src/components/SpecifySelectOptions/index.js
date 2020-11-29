import React, { useState } from "react";

// Styles
import {
  Container,
  AddItemSection,
  ItemInput,
  AddItemButton,
  OptionsListContainer,
  OptionItemSection,
  ItemName,
  RemoveIcon,
} from "./styles";

// Component to handle the creation and removal of possible items for the selection fields
const SpecifySelectOptions = ({ setSelectOptions }) => {
  const [currentName, setCurrentName] = useState("");
  const [optionsArray, setOptionsArray] = useState([]);

  // When the user clicks the delete button, then that item is removed from the list
  const handleRemoveItem = (index) => {
    const auxData = [...optionsArray];
    auxData.splice(index, 1);
    setOptionsArray(auxData);
    setSelectOptions(auxData);
  };

  return (
    <Container>
      <AddItemSection>
        <ItemInput
          value={currentName}
          onChange={(e) => setCurrentName(e.currentTarget.value)}
          placeholder="Item Name"
        />
        <AddItemButton
          active={currentName}
          disabled={!currentName}
          title="Add Item"
          onClick={() => {
            setOptionsArray([...optionsArray, currentName]);
            setSelectOptions([...optionsArray, currentName]);
            setCurrentName("");
          }}
        >
          +
        </AddItemButton>
      </AddItemSection>

      <OptionsListContainer>
        {optionsArray && optionsArray.length !== 0
          ? optionsArray.map((option, index) => (
              <OptionItemSection key={index}>
                <ItemName>{option}</ItemName>
                <RemoveIcon
                  title="Remove this item"
                  onClick={() => handleRemoveItem(index)}
                />
              </OptionItemSection>
            ))
          : null}
      </OptionsListContainer>
    </Container>
  );
};

export default SpecifySelectOptions;
