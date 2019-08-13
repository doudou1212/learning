import React from "react"
import styled, {createGlobalStyle} from "styled-components"

const Button = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`

export const Thing = () =>
  (
    <Button>Hello world!</Button>
  )


//.attrs
const ComplexButton = styled.div.attrs((/* props */) => ({tabIndex: 3}))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

export const ComplexThing = () => (
  <>
    <ComplexButton tabIndex="0">Hello world!</ComplexButton>
    <ComplexButton>How ya doing?</ComplexButton>
    <ComplexButton className="something">The sun is shining...</ComplexButton>
    <div>Pretty nice day today.</div>
    <ComplexButton>Don't you think?</ComplexButton>
    <div className="something-else">
      <ComplexButton>Splendid.</ComplexButton>
    </div>
  </>
)

const TryThing = styled.div`
  &&{
    color: blue;
    }
`

const GlobalStyle = createGlobalStyle`
  div${TryThing} {
    color: red;
  }
`

export const FinalThing = () =>
  (
    <>
      <GlobalStyle/>
      <TryThing>guess my color</TryThing>
    </>
  )


const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export const InputWithAttrs = () =>
  (
    <>
      <Input placeholder="A small text input"/>
      <br/>
      <Input placeholder="A bigger text input" size="2em"/> //should not be em here
    </>
  )
