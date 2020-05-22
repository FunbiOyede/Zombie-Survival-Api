const redis = require('redis')
const client = redis.createClient();


class SurvivorServices{
     create(values){
        const {name,age,gender,inventory,latitude,longitude,infected,reportCount} = values
        return new Promise((resolve,reject) =>{
            client.set(name,JSON.stringify({age,gender,inventory,latitude,longitude,infected,reportCount}),(err,reply) =>{
              
                 if (err) {
                   console.log(err)
                   reject(err);
                 } else {
                   resolve(reply);
                 }
                
            })
          
        })

        
     }

     get(value){
        
        return new Promise((resolve,reject) =>{
            client.get(value,(err,data) =>{
                if (err) {
                    reject(err);
                  } else {
                    resolve(JSON.parse(data));
                  }
            })
        })
     }

     update(name,values){
        const {latitude,longitude} = values
        return new Promise((resolve,reject) =>{
        client.get(name,(err,value) =>{
            if(err){
                reject(err);
            }
            if(value == null){
                reject(err)
            }
            let data = JSON.parse(value)
            data.latitude = latitude
            data.longitude = longitude
            client.set(name,JSON.stringify(data),(err,reply) =>{
                if(err){
                    reject(err);
                }
                resolve(reply)
            })

        })
           
     })

}

     report(name){
       
        return new Promise((resolve,reject) =>{
                        client.HINCRBY(name+'Count',"reportCount",1,(err,reply) =>{
                            if(err){
                                reject(err)
                             }
                             if(reply === 3){
                                client.get(name,(err,value) =>{
                                    if(err){
                                        reject(err);
                                    }
                                    if(value == null){
                                        reject(err)
                                    }
                                    let data = JSON.parse(value)
                                    data.reportCount = 3
                                  
                                    client.set(name,JSON.stringify(data),(err,reply) =>{
                                        if(err){
                                            reject(err);
                                        }
                                        resolve(reply)
                                    })
                        
                                })
                             }
                        })
                    })
                }
              


          
     
}

module.exports = new SurvivorServices()