const app = require('./app/app');
const dotenv = require('dotenv')

dotenv.config();
require('./app/util/redis')();
const port = process.env.PORT || 9000;
app.listen(port,() =>{
    console.log(`ok ${port}`)
})