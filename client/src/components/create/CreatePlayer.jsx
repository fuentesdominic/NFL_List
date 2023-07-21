import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './CreatePlayer.css'

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
        addPlayerBtn = <h3 className="error-message">Player name is required</h3>
      };

  return (
    <div className="create-page">
        <h1 className="createTitle">Create Player</h1>
      <form onSubmit={handleSubmit} className="playerForm">
        <input 
          className="input-name"
          placeholder="Name"
          id='name'
          type="text"
          onChange={handleChange}
          value={createPlayer.name}
          />
        
        <input 
          className="input-age"
          placeholder="Age"
          id="age"
          type="text"
          onChange={handleChange}
          value={createPlayer.age}
          />

        <div className="position-div">
        <label className="createPostion" htmlFor="position">Position:</label> 
          <select className="select-positions" id="position" onChange={handleChange} value={createPlayer.position}>
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
          </div>
          {addPlayerBtn}
      </form>

        <div className="image-container">
          <img className="image" src="https://1000logos.net/wp-content/uploads/2017/05/NFL-Logo-history.png" alt=""></img>
        </div>

    </div>
  )
}
export default CreatePlayer