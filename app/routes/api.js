const SurvivorController = require('../controllers/index');
module.exports = (router) =>{
    const BASE_URL = '/survivor';
    router.route(`${BASE_URL}`).post(SurvivorController.createSurvivor)
    router.route(`${BASE_URL}/:name`)
    .get(SurvivorController.getSurvivor)
    .post(SurvivorController.updateLocation)
    router.route(`${BASE_URL}-report`).post(SurvivorController.reportSurvivor)
}