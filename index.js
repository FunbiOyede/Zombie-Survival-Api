// const redis = require('redis');
// const client = redis.createClient();
// client.on('connect',() =>{
//     console.log('connected')
// })

// client.on('error',(err) =>{
//     console.log("balls",err)
// })

// const start =  async ()  =>{
//     client.set('name','funbi',redis.print);

//      client.get('name',(err,value) =>{
//          if(err){
//              throw err
//          }
//          console.log(value)
//      })
// }

// start()

const restify = require('restify');
const routes = require('./routes/api');

const server = restify.createServer({
    name:'Zombie',
    version:"2.0"
})
routes(server)

server.listen(9000,() =>{
    console.log(server.name, server.url, "funbi has a little lamb")
})