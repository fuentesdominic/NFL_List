const Team = require('../seed/teams');

const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find()
        return res.status(200).json({ teams })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllTeams
}