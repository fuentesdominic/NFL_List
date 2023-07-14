import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import CreatePlayer from "../components/CreatePlayer"

const Team = ({allTeams, allPlayers, getAllPlayers}) => {
    
    const {team} = useParams()
    const teams = allTeams.filter(player => player.team === team)

    const createPlayerNav = useNavigate('/create');

    const addPlayer = {
        name: '',
        age: '',
        position: '',
        team: `${team}`
    }

    const [createPlayer, setCreatePlayer] = useState(addPlayer)
    const [currentPlayers, setCurrentPlayers] = useState()

    const [positions, setPositions] = useState({position: ''})
    const [showEdit, setShowEdit] = useState(false)

    const handlePut = async (id) => {
        console.log(id, positions[id])
        const res = await axios.put(`http://localhost:3001/api/teams/players/${id}`, {position: positions[id]})
        getAtPlayers()
    }
    const handleEdit = (evt) => {
        setPositions({[evt.target.id]: evt.target.value})
        
    }
    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }
    let players
    if (currentPlayers) {
         players = currentPlayers.filter(player => player.team === team)
        
    }

    const getAtPlayers = async () => {
        try {
          let res = await axios.get('http://localhost:3001/api/teams/players')
          setCurrentPlayers(res.data.players)
        } catch (err) {
          console.log(err)
        }
      }

    const handleCreateNav = () => {
        createPlayerNav('/create')
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await axios.post('/api/teams/players', createPlayer)
        setCreatePlayer(addPlayer)
        getAllPlayers()
    }

    const handleChange = (evt) => {
        setCreatePlayer({...createPlayer, [evt.target.id]: evt.target.value})
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/api/teams/players/${id}`)
        getAllPlayers()
    }

      useEffect(() => {
        getAtPlayers()
      }, [allPlayers])

    return currentPlayers && (
        <div>
            <h2 className="teamName">{team}</h2>
            {teams.map((team) => (
                <div className="team" key={team._id}>
                    <img className="teamlogo" src={team.logo} alt=''></img>
                    <h4>Stadium Location:</h4>
                    <h3>{team.location}</h3>
                    <h4>Stadium Name:</h4>
                    <h3>{team.stadium}</h3>
                    <h4>Seats:</h4>
                    <h3>{team.capacity}</h3>
                </div>
            ))}
                <h3 className="playerName">Players:</h3>
            {players.map((player) => (
                <div className="teamPlayer" key={player._id}>
                    <h4>{player.name}</h4>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                    <button onClick={handleShowEdit}>Edit</button>
                    <button onClick={() => handleDelete(player._id)}>Delete</button>
                    {showEdit && <div> <label htmlFor={player._id}>Position:</label> <select id={player._id} onChange={handleEdit} value={positions.position}>
                    <option value='Quarterback'>Quarterback</option>
                    <option value='Offensive Linemen'>Offensive Linemen</option>
                    <option value='Running Back'>Running Back</option>
                    <option value='Tight End'>Tight End</option>
                    <option value='Wide Receiver'>Wide Receiver</option>
                    <option value='Defensive Linemen'>Defensive Linemen</option>
                    <option value='Linebacker'>Linebacker</option>
                    <option value='Cornerback'>Cornerback</option>
                    <option value='Safety'>Safety</option>
                </select>
                <button onClick={() => handlePut(player._id)}>Confirm</button> </div>
                }
                </div>
            ))}
            <form className="createPlayer" onSubmit={handleSubmit}>
            <label className="createName" htmlFor="name">Name:</label>
                <textarea
                    id="name"
                    cols='30'
                    rows='1'
                    onChange={handleChange}
                    value={createPlayer.name}></textarea>
                <label className="createAge" htmlFor="age">Age:</label>
                <textarea
                    id="age"
                    cols='2'
                    rows='1'
                    onChange={handleChange}
                    value={createPlayer.age}></textarea>
                <label className="createSelection" htmlFor="position">Position:</label>
                <select id="position" onChange={handleChange} value={createPlayer.position}>
                    <option value='Quarterback'>Quarterback</option>
                    <option value='Offensive Linemen'>Offensive Linemen</option>
                    <option value='Running Back'>Running Back</option>
                    <option value='Tight End'>Tight End</option>
                    <option value='Wide Receiver'>Wide Receiver</option>
                    <option value='Defensive Linemen'>Defensive Linemen</option>
                    <option value='Linebacker'>Linebacker</option>
                    <option value='Cornerback'>Cornerback</option>
                    <option value='Safety'>Safety</option>
                </select>
                <button className="addPlayer" type='submit'>Add Player</button>
            </form>
            
            <button onClick={handleCreateNav}>Create New Player!</button>

        </div>
        
    )
}
export default Team