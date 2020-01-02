import React from 'react';
import styled from "styled-components";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import PropertyList from "./PropertyList";
import ApplicationList from "./ApplicationList";
import About from "./About";

const Header = styled.header`
  height: 80px;
  background-color: #F78AE0;
`

const Footer = styled.footer`
  height: 100px;
  width: 100%;
  background-color: #6638F0;
  position: fixed;
  bottom: 0;
`

const Nav = styled.nav`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 36px;
`

const ActiveStyle = {
  fontWeight: "bold",
  color: "#F78AE0"
}

const Navigator = () => {
  return (
    <Nav>
      <NavLink exact to="/" activeStyle={ActiveStyle}>Home</NavLink>
      <NavLink exact to="/properties" activeStyle={ActiveStyle}>Properties</NavLink>
      <NavLink exact to="/applications" activeStyle={ActiveStyle}>Applications</NavLink>
      <NavLink exact to="/about" activeStyle={ActiveStyle}>About</NavLink>
    </Nav>
  )
}

const CustomRoute = () => {
  return (
    <>
      <Route exact path="/properties" component={PropertyList}/>
      <Route exact path="/applications" component={ApplicationList}/>
      <Route exact path="/applications/:id" component={ApplicationList}/>
      <Route exact strict path="/about" component={About}/>
      {/*<Route exact strict path="/about" component={() => About}/>*/}
      {/*<Route exact strict path="/about" render={() => <About/>}/>*/}
    </>
  )
}


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Navigator/>
        <CustomRoute/>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
