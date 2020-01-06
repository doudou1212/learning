const {gql} = require("apollo-server")

const typeDefs = gql`
  type Query {
    applicationsByListingId(listingId: ID!): [Application]!
    applicationDetailsById(applicationId: ID!): Application!
  }
  
  type Application {
    id: ID!
    listingId: ID!
    status: String!
    tenants: [Tenant!]!
    leaseLength: String!
    startDate: String! 
  }
  
  type Tenant {
    id: ID!
    name: String!
    isPrimary: Boolean!
    email: String
    phone: String
    income: String
    otherIncome: String
    rentToIncome: String
    thirdCheck: Boolean
    inspectionCheck: Boolean
    rentalCheck: RentalCheck
    employmentCheck: EmploymentCheck
    incomeCheck: IncomeCheck  
  }
  
  type RentalCheck {
    reference: String
    checkList: RentalCheckList
  }
  
  type RentalCheckList {
    paidOnTime: Boolean
    bondBackInFull: Boolean
    recommendReference: Boolean
  }
  
  type EmploymentCheck {
    reference: String
    checkList: EmploymentCheckList
  }
  
  type EmploymentCheckList {
    confirmEmployment: Boolean
    confirmEmploymentLength: Boolean
    recommendReference: Boolean
  }
  
  type IncomeCheck {
    checkStatus: Boolean
  }
`

module.exports = typeDefs
