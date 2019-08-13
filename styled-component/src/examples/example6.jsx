import React from "react"
import styled, {css, keyframes} from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const RotateAnimation = () =>
  (
    <Rotate>&lt; 💅 &gt;</Rotate>
  )


const complexMixin = css`
  color: ${props => (props.whiteColor ? 'white' : 'black')}
`
const complexMixinWithoutFunction = `color: pink`
const StyledComp = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.complex ? complexMixin : complexMixinWithoutFunction)};
`

export const Comp = () =>
  (
    <>
      <StyledComp>styled comp</StyledComp>
      <StyledComp complex> black styled comp</StyledComp>
      <StyledComp complex whiteColor> white styled comp</StyledComp>
    </>
  )
