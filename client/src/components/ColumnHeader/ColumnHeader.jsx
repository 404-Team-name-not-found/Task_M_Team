import React from 'react'
import { StyledColumnHeader, StyledIndicator, StyledTitle, StyledCounter } from './ColumnHeader.styled';

export default function ColumnHeader({ title, color, number }) {
    return (
        <StyledColumnHeader>
            <StyledIndicator color={color} />
            <StyledTitle>{title}</StyledTitle>
            <StyledCounter>{number}</StyledCounter>
        </StyledColumnHeader>
    );
}
