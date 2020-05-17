
const survivorService = require('../services/Survivor');
class SurvivorController{

/**
 * 
 * @param {object} req 
 * @param {object} res 
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
 * @param {object} req 
 * @param {object} res 
 * @description fetch a survivor info
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


    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @description updates survivors location
     */

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

    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @description reports a particular survivor. E.g if there is a suspicion a survior is contaminated
     * report of that of that person has to be made thrice to flag them infected
     */
    async reportSurvivor(req,res){
       const {name} = req.body;
       try {
           const reply = await survivorService.report(name);
             res.status(201).json({message:'Thanks for reporting'})
       } catch (error) {
        res.status(400).json({message:error.message})
       }
    }
}




module.exports = new SurvivorController()