import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePlayer = ({ allTeams }) => {

    let navigate = useNavigate();

    const {team} = useParams();
    const teams = allTeams.filter(player => player.team === team);

    const addPlayer = {
        name: '',
        age: '',
        position: '',
        team: `${team}`
    };

    const [createPlayer, setCreatePlayer] = useState(addPlayer);
    const handleChange = (event) => {
        setCreatePlayer({ ...createPlayer, [event.target.id]: event.target.value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:3001/api/teams/players', createPlayer)
            setCreatePlayer(addPlayer)
            await navigate(-1)
    };

    let addPlayerBtn = ''
      if (createPlayer.name) {
        addPlayerBtn = (
          <button type="submit" className="addPlayerBtn">
            Create Player
          </button>
        )
      } else {
        addPlayerBtn = <h3>Player name is required</h3>
      };

  return (
    <div className="create-page">
      <form onSubmit={handleSubmit} className="playerForm">
        <h1>Create Player</h1>
        <input 
          placeholder="Name"
          id='name'
          type="text"
          onChange={handleChange}
          value={createPlayer.name}
          />
        
        <input 
          placeholder="Age"
          id="age"
          type="text"
          onChange={handleChange}
          value={createPlayer.age}
          />

        <label className="createPostion" htmlFor="position">Position:</label> 
          <select id="position" onChange={handleChange} value={createPlayer.position}>
            <option value='' disabled selected>Select</option>
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

          {addPlayerBtn}
      </form>
    </div>
  )
}
export default CreatePlayer