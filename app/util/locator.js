
const axios = require('axios');


/**
 * @description gets location by ip address
 */
const locator =  async ()  =>{
    const ipFinderUrl = 'http://free.ipwhois.io/json/'
    try {
        const res = await axios.get(`${ipFinderUrl}`)
        const {city,region,latitude,longitude} = res.data
        return {city,region,latitude,longitude}
      
    } catch (error) {
      throw error
    }
}

module.exports = locator