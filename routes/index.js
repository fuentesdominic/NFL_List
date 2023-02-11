const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/teams', controllers.getAllTeams)
router.post('/teams/players', controllers.createPlayer)
router.get('/teams/players', controllers.getAllPlayers)
router.get('/teams/players/:id', controllers.getPlayersById)
router.put('/teams/players/:id', controllers.updatePlayer)
router.delete('/teams/players/:id', controllers.deletePlayer)

module.exports = router;