const report = require('../util/reportCounter');
const reportChecker = (req,res,next) =>{
    if(report.check()){
        req.infected = true
        next()
    }

   next()
}

module.exports = reportChecker