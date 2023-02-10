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

const createPlayer = async (req, res) => {
    try {
        const players = await new Player(req.body)
        await players.save()
        return res.status(201).json({
            players,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
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

const updatePlayer = async (req, res) => {
    try {
        const players = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(players)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Player.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Player deleted");
        }
        throw new Error("Player not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getAllTeams,
    getAllPlayers,
    getPlayersById,
    updatePlayer,
    createPlayer,
    deletePlayer
}