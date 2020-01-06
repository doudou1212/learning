import React from "react"
import styled from "styled-components"
import {useQuery} from "@apollo/react-hooks"
import GET_APPLICATIONS_BY_LISTING_ID from "../graphql/getApplicationsByListingIdQuery"

const Tenant = styled.div`
  width: 200px;
  height: 100px;
  background-color: #B0F566;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LeaseLength = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StartDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Income = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const IncomeCheck = styled.div`
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
  display: flex;
`

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  transform: translate(-50%, 50%)
`

const Header = styled.div`
  height: 50px;
  margin: 20px auto;
  width: 1000px;
  display: flex;
`

const TenantName = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`

const InfoHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ApplicationCard = ({startDate, tenants, leaseLength}) => {
  console.log("333", startDate, tenants)
  return (
    <>
      <Card>
        <Tenant>{tenants[0].name}</Tenant>
        <Info>
          <LeaseLength>{leaseLength}</LeaseLength>
          <StartDate>{startDate}</StartDate>
          <Income>{tenants[0].income}</Income>
          <IncomeCheck>{tenants[0].incomeCheck.checkStatus}</IncomeCheck>
        </Info>
      </Card>
    </>
  )
}

const ApplicationHeader = () => {
  return (
    <Header>
      <TenantName>name</TenantName>
      <InfoHeader>
        <InfoHeaderItem>lease</InfoHeaderItem>
        <InfoHeaderItem>start date</InfoHeaderItem>
        <InfoHeaderItem>income</InfoHeaderItem>
        <InfoHeaderItem>income check</InfoHeaderItem>
      </InfoHeader>
    </Header>
  )
}

const ApplicationList = (props) => {
  console.log("the props are", props)
  const variables = {
    listingId: "123"
  }
  const {loading, error, data} = useQuery(GET_APPLICATIONS_BY_LISTING_ID, {variables})
  if (loading) {
    return <Loading>Data is loading...</Loading>
  }
  if (data) {
    console.log("dagta is ", data)
    return (
      <>
        <ApplicationHeader/>
        {
          data.applicationsByListingId.map(application => (<ApplicationCard {...application}/>))
        }
      </>
    )
  }
}

export default ApplicationList
