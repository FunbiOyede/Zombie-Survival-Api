
module.exports = (server) =>{
    server.get('/balls',(req,res,next) =>{
        res.json({message:"hello"})
        return next();
    })

    server.get('/ok',(req,res,next) =>{
        res.json({message:"hmm"})
        return next();
    })
}