import React, { useState } from "react";

// Libraries
import moment from "moment";

// Styles
import { Container, SelectCell, SelectOption, InputCell } from "./styles";

export default function Cell({
  columnType,
  isRequired,
  value,
  onChangeValue,
  selectOptions,
}) {
  const [error, setError] = useState(null);

  /* 
    Cell Validations:
    If the column was specified as required and value is empty, then we set the error like "Required";
    If the column isn't required and value isn't empty, then we validate according to the type and define the specific error;
  */
  const cellValidations = () => {
    if (!value && isRequired) {
      setError("Required");
    } else {
      setError(null);
      switch (columnType) {
        case "number":
          if (isNaN(value)) {
            setError("Invalid. Must be a number");
          } else {
            setError(null);
          }
          break;

        case "date":
          if (moment(value, "MM/DD/YYYY", true).isValid() || value === "") {
            setError(null);
          } else {
            setError("Invalid. Must be a date: mm/dd/yyyy");
          }
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      {/* if the column type is equal to "select", then we use the html element <select>, if not, we use the element <input> for the other types */}
      {columnType === "select" ? (
        <SelectCell
          error={error}
          title={error}
          value={value}
          onChange={onChangeValue}
          onBlur={() => cellValidations()}
        >
          <SelectOption value=""></SelectOption>
          {selectOptions.length !== 0 &&
            selectOptions.map((option, index) => (
              <SelectOption key={index} value={index}>
                {option}
              </SelectOption>
            ))}
        </SelectCell>
      ) : (
        <InputCell
          error={error}
          title={error}
          type="text"
          value={value}
          onChange={onChangeValue}
          onBlur={() => cellValidations()}
        />
      )}
    </Container>
  );
}
