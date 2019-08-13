import React from "react"
import styled from "styled-components"
import ButtonWithStyleSheet from "./ButtonWithStyleSheet"

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const OrangeButton = styled(ButtonWithStyleSheet)`
  &.add-priority {
    color: orange;
    border-color: orange;
    background-color: white;
  }
`

const StyledButtons = () => (
  <>
    <Button>Normal Button</Button>
    <ButtonWithStyleSheet >Style Sheet Button</ButtonWithStyleSheet>
    <TomatoButton>Tomato Button</TomatoButton>
    <OrangeButton className="add-priority">Orange Button</OrangeButton>
  </>
)

export default StyledButtons
