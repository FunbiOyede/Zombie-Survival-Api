// const services = require('../services/index');
const redis = require('redis')
const client = redis.createClient();
const {hashGet, hashSet} = require('../util/hashUtil')
class SurvivorController{

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @description creates a new survivor
 */
    async createSurvivor(req,res){

        try{
            await hashSet(req.body)
                res.status(201)
                res.json({message:'survivor create'})
        }catch (error) {
            res.status(400).json({message:error.message})
        }        
       
    }

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @description fetch a survivor
 */
    async getSurvivor(req,res){
        const {name} = req.params
        try {
            const value = await hashGet(name); 
            res.status(200)
             res.json({data:value})
        } catch (error) {
            res.status(400).json({message:err.message})
        }
    }
}

module.exports = new SurvivorController()