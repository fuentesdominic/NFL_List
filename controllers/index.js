const Team = require('../models/teams');
const Player = require('../models/players');

const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find()
        return res.status(200).json({ teams })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllPlayers = async (req,res) => {
    try {
        const players = await Player.find()
        return res.status(200).json({ players })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPlayersById = async (req, res) => {
    try {
        const { id } = req.params;
        const players = await Player.findById(id)
        if (players) {
            return res.status(200).json({ players });
        }
        return res.status(404).send('Player with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getAllTeams,
    getAllPlayers,
    getPlayersById
}