import React from 'react';
import styled from "styled-components";

const Button  = styled.button`
  background: "white";
  disabled: ${props => props.disabled};
  color: clack;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid violet;
  border-radius: 7px;  
  outline: 0; 
  &:hover {
    border: 2px solid indigo;
  }
`

export default Button;
