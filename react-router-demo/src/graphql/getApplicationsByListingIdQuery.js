import gql from "graphql-tag"

const GET_APPLICATIONS_BY_LISTING_ID = gql`
  {
    applicationsByListingId(listingId:"123") {
      id
      listingId
      startDate
      status
      tenants {
        id
        name
        income
        rentalCheck {
          reference
          checkList {
            paidOnTime
            bondBackInFull
            recommendReference
          }
        }
        thirdCheck
        inspectionCheck
        employmentCheck {
          checkList {
            confirmEmployment
            confirmEmploymentLength
            recommendReference
          }
        }
        incomeCheck {
          checkStatus 
        }
      }
      leaseLength
    }
  }
`

export default GET_APPLICATIONS_BY_LISTING_ID
