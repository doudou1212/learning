import React from 'react';
import styled from "styled-components";

const CardLeft = styled.div`
  width: 200px;
  height: 100px;
  background-color: #B0F566;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  margin: 20px auto;
  width: 1000px;
  height: 100px;
  border: 3px dashed #efefef;
  border-radius: 5px;
`

const ApplicationCard = () => {
  return (<Card><CardLeft>Application Card</CardLeft></Card>)
}


const ApplicationList = (props) => {
  console.log("the props are", props)
  return (
    <>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
    </>
  );
}

export default ApplicationList
