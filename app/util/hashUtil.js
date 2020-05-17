const redis = require('redis')
const client = redis.createClient();


exports.hashSet = (values) =>{
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

exports.hashGet = (value) =>{
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


exports.hashUpdate = (name,values) =>{
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