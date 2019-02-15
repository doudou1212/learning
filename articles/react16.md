# React16
https://reactjs.org/blog/2017/09/26/react-v16.0.html

## New features
### new render types   
react 16 中，支持strings和fragments  
 
1. fragments   
使用场景：希望一个component中返回多个element
```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
而在react 15中，如果想返回多个element，那么就要用<div>包一下，但这个div其实在dom结构上并没有什么用。(motivation：在table中).   
[react16](https://codesandbox.io/s/z68x5l9pwl)   
[react15](https://codesandbox.io/s/37w141vv6) 

2. strings   
react16中，可以return一个number或者string，number和string会直接g插入到dom中（number在dom中是一个string）   
使用场景：如果这个component只是做一些格式转化的事情，那么可以直接return string   、

react15中，如果return type是一个string，则会有error：   
```
A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object. ```

### error handling
error boundary 就一个普通的component，里面带有`componentDidCatch` lifecyle method.
