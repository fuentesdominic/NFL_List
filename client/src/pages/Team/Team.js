import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import './Team.css'

const Team = ({allTeams, allPlayers, getAllPlayers}) => {
    
    const {team} = useParams()
    const teams = allTeams.filter(player => player.team === team)

    const createPlayerNav = useNavigate();

    const [currentPlayers, setCurrentPlayers] = useState()

    const [positions, setPositions] = useState({position: ''})
    const [showEdit, setShowEdit] = useState(null)

    const handlePut = async (id) => {
        console.log(id, positions[id])
        const res = await axios.put(`http://localhost:3001/api/teams/players/${id}`, {position: positions[id]})
        getAtPlayers()
        window.location.reload();
    };
    
    const handleEdit = (evt) => {
        setPositions({[evt.target.id]: evt.target.value})
    };

    const handleShowEdit = (id) => {
        setShowEdit((prevShowEdit) => (prevShowEdit === id ? !prevShowEdit : id));
    }; 

    let players
    if (currentPlayers) {
         players = currentPlayers.filter(player => player.team === team)
    };

    const getAtPlayers = async () => {
        try {
          let res = await axios.get('http://localhost:3001/api/teams/players')
          setCurrentPlayers(res.data.players)
        } catch (err) {
          console.log(err)
        }
      };

    const handleCreateNav = () => {
        createPlayerNav(`/create/${team}`)
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/api/teams/players/${id}`)
        getAllPlayers()
    };

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
                <button onClick={() => handleShowEdit(player._id)}>Edit</button>
                <button onClick={() => handleDelete(player._id)}>Delete</button>
                    {showEdit === player._id && <div> <label htmlFor={player._id}>Position:</label> 
                    <select 
                    id={player._id} 
                    onChange={(evt) => handleEdit(evt, player._id)} 
                    value={positions.position}>
                        <option value='' selected disabled>Select</option>
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
                    <button onClick={() => handlePut(player._id)}>Confirm</button>
                    

                    {/* <button onClick={handleShowEdit}>edit</button> */}
                    </div>
                }
                </div>
            ))}
            
            <button onClick={handleCreateNav}>Create New Player!</button>

        </div>
        
    )
}
export default Team