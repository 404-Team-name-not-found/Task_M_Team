import React from 'react'
import { StyledButton } from './Button.styled'
export default function Button(props) {
  return (
    <StyledButton 
    disabled={props.disabled}
    width={props.width}
    height={props.height}
    >
        {props.children}
    </StyledButton>
  )
}
