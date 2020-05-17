const redis = require('redis')
const client = redis.createClient();


class SurvivorServices{

     create(values){
        const {name,age,gender,inventory,latitude,longitude} = values
        return new Promise((resolve,reject) =>{
            client.hmset(name,[
                   'name',name,
                   'age',age,
                   'gender',gender,
                   'inventory',inventory,
                   'latitude',latitude,
                   'longitude',longitude,
                   'reportCount',0,
                   'infected',false
                   
            ],(err,reply) =>{
               if (err) {
                   reject(err);
                 } else {
                   resolve(reply);
                 }
            })
        })

        
     }

     get(value){
        return new Promise((resolve,reject) =>{
            client.HGETALL(value,(err,data) =>{
                if (err) {
                    reject(err);
                  } else {
                    resolve(data);
                  }
            })
        })
     }

     update(name,values){
        const {latitude,longitude} = values
        return new Promise((resolve,reject) =>{
            client.hmset(name,[
                   'latitude',latitude,
                   'longitude',longitude
                   
            ],(err,reply) =>{
               if (err) {
                   reject(err);
                 } else {
                   resolve(reply);
                 }
            })
        })

     }

     report(name){
       
        return new Promise((resolve,reject) =>{
            client.HINCRBY(name,"reportCount",1,(err,reply) =>{
                if(err){
                   reject(err)
                }
                if(reply === 3){
                    client.hset(name,"infected",true,(err,reply) =>{
                        if(err){
                            reject(err)
                        }
                        resolve(reply)
                    })
                }
            })
        })
     }
}

module.exports = new SurvivorServices()