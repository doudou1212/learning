const getApplicationsByListingId = async (_, {listingId}, {dataSources: {ApplicationsAPI}}) => {
  const data = await ApplicationsAPI.getApplicationsByListingId(listingId)
  const jsonData = JSON.parse(data)
  return jsonData.message.applications
}

const getApplicationDetailsByApplicationId = async (_, {applicationId}, {dataSources: {ApplicationsAPI}}) => {
  const data = await ApplicationsAPI.getApplicationById(applicationId)
  const jsonData = JSON.parse(data)
  return jsonData.message
}

const resolvers = {
  Query: {
    applicationsByListingId: getApplicationsByListingId,
    applicationDetailsById: getApplicationDetailsByApplicationId
  },
  Application: {
    startDate: (application) => {
      return "mock start date"
    },
    leaseLength: (application) => application.leaseTerm
  },
  Tenant: {
    name: (tenant) => tenant.profile.name,
    phone: () => "mock phone",
    income: () => "mock income",
    otherIncome: () => "mock income",
    rentToIncome: () => "mock rent to income",
    thirdCheck: () => false,
    inspectionCheck: (tenant) => tenant.isInspected,
    rentalCheck: (tenant) => tenant.checks,
    employmentCheck: (tenant) => tenant.checks,
    incomeCheck: (tenant) => tenant.checks
  },
  RentalCheck: {
    reference: () => "empty",
    checkList: (rentalCheck) => rentalCheck
  },
  RentalCheckList: {
    paidOnTime: (checkList) => checkList.rentalCheck,
    bondBackInFull: (checkList) => checkList.rentalCheck,
    recommendReference: (checkList) => checkList.rentalCheck
  },
  EmploymentCheck: {
    reference: () => "empty",
    checkList: (employmentCheck) => employmentCheck
  },
  EmploymentCheckList: {
    confirmEmployment: (checkList) => checkList.employmentCheck,
    confirmEmploymentLength: (checkList) => checkList.employmentCheck,
    recommendReference: (checkList) => checkList.employmentCheck
  },
  IncomeCheck: {
    checkStatus: (checkList) => checkList.incomeCheck
  }
}

module.exports = resolvers
