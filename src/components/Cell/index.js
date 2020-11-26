import React, { useState } from "react";

// Styles
import { Container, InputCell } from "./styles";

export default function Cell({ columnType, value, onChangeValue, onBlur }) {
  const [error, setError] = useState(null);

  const cellValidations = () => {
    if (!value) {
      setError("Required");
    } else {
      setError(null);
      switch (columnType) {
        case "number":
          // Fractional, positive and negative numbers
          if (/^-?(0|[1-9]\d*)(\.\d+)?$/.test(value)) {
            setError(null);
          } else {
            setError("Invalid");
          }
          break;

        case "text":
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
