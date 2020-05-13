const redis = require('redis');
const client = redis.createClient();


module.exports =  async ()  =>{
    client.on('connect',() =>{
        console.log('connected')
    })
    
    client.on('error',(err) =>{
        console.log("balls",err)
    })
}
