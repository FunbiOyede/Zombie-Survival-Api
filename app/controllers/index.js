// const services = require('../services/index');
const redis = require('redis')
const client = redis.createClient();
const locator = require('../util/locator');

class SurvivorController{

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @description creates a new survivor
 */
    async createSurvivor(req,res){
        const {name,age,gender,inventory} = req.body
        const {city,region,latitude,longitude} = await locator();
        client.HMSET (name,[
            'name',name,
            'age',age,
            'gender',gender,
            'inventory',inventory,
            'city',city,
            'regio',region,
            'latitude',latitude,
            'longitude',longitude
            
        ],(err,value) =>{
            if(err){
                res.status(400)
                res.json({message:err.message})
            }
            res.status(201)
            res.json({message:'survivor create'})

        });
    }

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @description fetch a survivor
 */
    async getSurvivor(req,res){
        const {name} = req.params
        client.HGETALL(name,(err,value) =>{
            if(err){
            res.status(400)
            res.json({message:err.message})
            }
            res.status(201)
            res.json({data:value})
            
        })
    }
}

module.exports = new SurvivorController()