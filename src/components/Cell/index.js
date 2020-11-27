import React, { useState } from "react";

// Libraries
import moment from "moment";

// Styles
import { Container, InputCell } from "./styles";

export default function Cell({ columnType, isRequired, value, onChangeValue }) {
  const [error, setError] = useState(null);

  const cellValidations = () => {
    if (!value && isRequired) {
      setError("Required");
    } else {
      setError(null);
      switch (columnType) {
        case "number":
          if (isNaN(value)) {
            setError("Invalid");
          } else {
            setError(null);
          }
          break;

        case "date":
          if (moment(value, "DD/MM/YYYY", true).isValid() || value === "") {
            setError(null);
          } else {
            setError("Invalid");
          }
          break;

        case "select":
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      <InputCell
        title={error}
        error={error}
        type="text"
        value={value}
        onChange={onChangeValue}
        onBlur={() => cellValidations()}
      />
    </Container>
  );
}
