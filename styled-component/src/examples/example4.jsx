import React from "react"
import styled from "styled-components"

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Inputs = () =>
  (
    <>
      <Input defaultValue="@probablyup" type="text"/>
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple"/>
    </>
  )
