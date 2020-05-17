// const services = require('../services/index');
const redis = require('redis')
const client = redis.createClient();
// const {hashGet, hashSet, hashUpdate} = require('../util/hashUtil')
const survivorService = require('../services/Survivor');
class SurvivorController{

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @description creates a new survivor
 */
    async createSurvivor(req,res){

        try{
           const reply = await survivorService.create(req.body)
                res.status(201)
                res.json({message:'survivor create',status:reply})
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
            const value = await survivorService.get(name); 
            res.status(200)
             res.json({data:value})
        } catch (error) {
            res.status(400).json({message:err.message})
        }
    }


    async updateLocation(req,res){
        const {name} = req.params
        try{
            const reply = await survivorService.update(name,req.body)
                 res.status(201)
                 res.json({message:'location updated',status:reply})
         }catch (error) {
            
             res.status(400).json({message:error.message})
         }        
        
        
    }

    async reportSurvivor(req,res){
       const {name} = req.body;
       try {
           const reply = await survivorService.report(name);
           console.log("yeahd",reply)
       } catch (error) {
        res.status(400).json({message:error.message})
       }
    }
}




module.exports = new SurvivorController()