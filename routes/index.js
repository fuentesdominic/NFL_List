const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
console.log('this is root!')

router.get('/teams', controllers.getAllTeams)
router.get('/teams/players', controllers.getAllPlayers)
router.get('/teams/players/:id', controllers.getPlayersById)



module.exports = router;