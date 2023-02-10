const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
console.log('this is root!')
// 'This is root' tests if the file is working properly.
router.get('/', (req, res) => res.send('This is root!'))
router.get('/teams', controllers.getAllTeams)



module.exports = router;