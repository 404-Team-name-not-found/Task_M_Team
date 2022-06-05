import React from "react";
import {
  StyledColumnHeader,
  StyledIndicator,
  StyledTitle,
  StyledCounter,
} from "./ColumnHeader.styled";

export default function ColumnHeader({ title, color, number, onchange }) {
  return (
    <StyledColumnHeader>
      <StyledIndicator color={color} />
      <StyledTitle onChange={onchange} type="text" value={title} />
      <StyledCounter>{number}</StyledCounter>
    </StyledColumnHeader>
  );
}
