class ReportCounter{

    constructor(){
        this.reportNumber = 3;
        this.reportCount = 1
    }

    increment(){
        if(this.reportCount < this.reportNumber){
            this.reportCount += 1;
        }
    }
    check(){
        if(this.reportCount === this.reportNumber){
            return true
        }
        this.increment();
        return false
    }
}

module.exports = new ReportCounter()