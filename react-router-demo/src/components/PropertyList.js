import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const CardLeft = styled.div`
  width: 200px;
  height: 150px;
  background-color: #5CC9F5;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  margin: 20px auto;
  width: 1000px;
  height: 150px;
  border: 3px dashed #efefef;
  border-radius: 5px;
`

const PropertyCard = () => {
  return (<Card><CardLeft>Property Card</CardLeft></Card>)
}


const PropertyList = () => {
  return (
    <>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <Link to="/applications/10">
        <PropertyCard/>
      </Link>
    </>
  );
}

export default PropertyList
