const fetch = require("node-fetch")
const { RESTDataSource } = require("apollo-datasource-rest")

class ApplicationsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://k60dalquyi.execute-api.ap-southeast-2.amazonaws.com/staging/applications"
  }

  getApplicationsByListingId(listingId) {
    console.log("url is ",this.baseURL+"?listingId="+listingId)
    return fetch(this.baseURL+"?listingId="+listingId).then(data => data.text())
  }

  getApplicationById(applicationId) {
    console.log("url is ",this.baseURL+"/"+applicationId)
    return fetch(this.baseURL+"/"+applicationId).then(data => data.text())
  }
}

module.exports = ApplicationsAPI
