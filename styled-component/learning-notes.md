# Styled Component

## Motivation

## Basic

#### passed props

可以给styled-component pass props

见 example1

#### extending styles

用法：`styled(SomeComponent)`

可以用来在已有的component上，加上自己custom的样式 （example2）

场景1： 已经存在一个styled component，需要一个新的styled 
component，且该
component与原有的component相比，只是有一些样式的改动

```
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
render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

场景2：已经有了一个component，但是这个component并不是styled component，是react component + style sheet

依然可以用 `styled(SomeComponent)` 进行extending style，但是要注意一下两点：

1. 要确保 SomeComponent 将 className pass 给了dom
2. 注意优先级, 不确定css 文件和styled component中样式谁先加载，所以有可能style expending后的样式被原来的css override

#### as

example3

既可以 as 成一个别的 tag， 也可以 as 成别的react component

```
const Component = styled.div`
  color: red;
`;

render(
  <Component
    as="button"
    onClick={() => alert('It works!')}
  >
    Hello World!
  </Component>
)
```

#### passed props

如果 styled target是一个html element，那么任何 known html attributes都会被自动的应用到 dom 上。反之则不会。

example4

#### pseudoelements, pseudoselectors, and nesting

example5

可以像平时使用sass一样，使用伪类、伪选择器、嵌套.

但是需要注意，&永远代表的是main component
(似乎一个&，都会在dom上加一个class)

.attrs()

chainable method, 可以attache一些props到styled component上。只接受两种类型的参数：
1. 除了function以外的任何参数。这些属性会被merge到component已经存在的props上.（似乎并不会override掉component原有的props）
2. 接受一个function，这个function会接受props，并将props merge到component原有的props中

还可以利用&提升优先级

#### animation

example6

keyframes 可以用来定义动画

如果想要share animation，那么必须要用css helper
```
const rotate = keyframes``

// ❌ This will throw an error!
const styles = `
  animation: ${rotate} 2s linear infinite;
`;

// ✅ This will work as intended
const styles = css`
  animation: ${rotate} 2s linear infinite;
`
```

css helper 用于从 template literal 中生成css,如果 template literal中用到function，则必须用该helper，如果没有helper，可以不用。

note: react-native 不支持keyframes

## Advance

#### Theming

<ThemeProvider>可以通过将theme传递给它的子component (example7)

你也可以传递一个function给theme prop， 这个function会接受来自parent theme的数据

可以使用withTheme,在react component中拿到theme。否则只能在styled component中得到theme

还可以使用useContext在react component中拿到theme (example8)

#### Refs

如果ref  被pass给了一个html element，那么ref就是该element
如果ref 被pass给了一个react element，那么ref就是react component instance

```
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          this.inputRef.current.focus()
        }}
      />
    );
  }
}
render(
  <Form />
);
```

#### Security
不要使用user input作为style

```
const userInput = '/api/withdraw-funds'

const ArbitraryComponent = styled.div`
  background: url(${userInput});
  /* More styles here... */
`
```

#### Avoiding conflicts with third-party styles and scripts

(此处用new frontend的例子)
如果有一个已经存在的样式

```
body.my-body button {
  padding: 24px;
}
```

此时再写一个styled component

```javascript 1.8
styled.button`
  padding: 16px;
`
```
那么styled component的优先级就会比较低。
可以使用 [babel-plugin-styled-components-css-namespace加namespace](https://github.com/QuickBase/babel-plugin-styled-components-css-namespace)。
例如，有一个namespace `#my-widget`,那么任何在id="my-widget"中的优先级都会比较高。
```
"babel": {
  "plugins": [
    ["@quickbaseoss/babel-plugin-styled-components-css-namespace", {"cssNamespace": ".specific .moreSpecific .reallySpecific"}],
    "styled-components"
  ]
}
```

#### Tagged Template Literals

```javascript 1.8
const aVar = 'good'

// These are equivalent:
fn`this is a ${aVar} day`
fn(['this is a ', ' day'], aVar)
```

#### Server Side Rendering 

demo: `node ./src/server/bootstrap.js`

styled component可以给ssr增加style

```javascript 1.8
const sheet = new ServerStyleSheet()
try {
  const html = renderToString(sheet.collectStyles(<YourApp />))
  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
} catch (error) {
  // handle error
  console.error(error)
} finally {
  sheet.seal()
}
```

除了 `sheet.collectStyles` 也可以用``StyleSheetManager``

其中， `sheet.getStyleTags()` 可以得到 `style` 标签, 需要自己将style tag和自己的ssr内容相结合。

#### Streaming Rendering

demo: server_try_stream.js

``ReactDOMServer.renderToNodeStream``可以发射一个被style wrap的 stream。

```javascript 1.8
// typically you'd want to write some preliminary HTML, since React doesn't handle this
res.write('<html><head><title>Test</title></head><body>')

const Heading = styled.h1`
  color: red;
`

const sheet = new ServerStyleSheet()
const jsx = sheet.collectStyles(<Heading>Hello SSR!</Heading>)
const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx))

// you'd then pipe the stream into the response object until it's done
stream.pipe(
  res,
  { end: false }
)

// and finalize the response with closing HTML
stream.on('end', () => res.end('</body></html>'))
```

#### Style Objects

应用场景： 已经有了一些style object，但是希望变成styled component

```javascript 1.8
// Static object
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});
// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));
render(
  <div>
    <Box />
    <PropsBox background="blue" />
  </div>
);
```

## 一些推荐

#### How can I override styles with higher specificity?

```javascript
const MyStyledComponent = styled(AlreadyStyledComponent)`
  &&& {
    color: palevioletred;
    font-weight: bold;
  }
`
```

```css
.MyStyledComponent-asdf123.MyStyledComponent-asdf123.MyStyledComponent-asdf123 {
  color: palevioletred;
  font-weight: bold;
}
```

#### Why do my DOM nodes have two classes?
.sc-fVOeaW static class name, 即使一个styled component没有被attach任何的styled，也会有这个class，表明这是一个styled 
component，方便在devtool中查看。

.fVOeaW 没有sc这样的前缀，dynamic class name，attach了style，每一个element的dynamic class name都不一样

#### When to use attrs?
当你希望一个styled component的所有instance上都有某些固定的attr时，可以将这些attr attach到styled component上
