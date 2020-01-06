import React from "react"
import styled from "styled-components"
import {BrowserRouter, NavLink, Route} from "react-router-dom"
import {ApolloProvider} from "@apollo/react-hooks"
import PropertyList from "./components/PropertyList"
import ApplicationList from "./components/ApplicationList"
import ApplicationDetails from "./components/ApplicationDetails"
import createClient from "./graphql/createClient"

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
      <NavLink exact to="/application-details" activeStyle={ActiveStyle}>Application Details</NavLink>
    </Nav>
  )
}

const CustomRoute = () => {
  return (
    <>
      <Route exact path="/properties" component={PropertyList}/>
      <Route exact path="/applications" component={ApplicationList}/>
      <Route exact path="/applications/:id" component={ApplicationList}/>
      <Route exact strict path="/application-details" component={ApplicationDetails}/>
    </>
  )
}


function App() {
  return (
    <>
      <Header/>
      <ApolloProvider client={createClient()}>
        <BrowserRouter>
          <Navigator/>
          <CustomRoute/>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
