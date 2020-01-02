import React from 'react';
import styled from "styled-components";

const AboutUs = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  transform: translate(-50%, 50%)
`

// const About = () => <AboutUs>Welcome to rent customer!</AboutUs>
class About extends React.Component {
  componentDidMount() {
    console.log("About component did mount")
  }

  componentDidUpdate() {
    console.log("About component did update")
  }

  render() {
    return (<AboutUs>Welcome to rent customer!</AboutUs>)
  }
}
export default About
