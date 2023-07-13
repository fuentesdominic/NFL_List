// import { useState, useEffect } from "react"
// import axios from "axios"
// // make edit form for each player to change upon request.
// // input fields for player position, age, and name. 
// // form needs onsubmit 
// // button must be type='submit'.
// const Edit = ({player, getAllPlayers}) => {

//     const [editPlayer, setEditPlayer] = useState(player)

//     useEffect(() => {
//         getAllPlayers();
//     }, [getAllPlayers]);

//     const setStorage = (data) => {
//         let { name, age, position} = data;
//         localStorage.setItem('Name', name);
//         localStorage.setItem('Age', age);
//         localStorage.setItem('Position', position);
//     };

//     const handleSubmit = async (evt) => {
//         evt.preventDefault()
//             const players = await axios.put()
//             await axios.put('http://localhost:3001/api/teams/players', editPlayer);
//         setEditPlayer(player)
//         getAllPlayers()
//     };

// const handleChange = (evt) => {
//     setCreatePlayer({...createPlayer, [evt.target.id]: evt.target.value})
// }

//   useEffect(() => {
//     getAtPlayers()
//   }, [player])

//   return (
//     <div>
//         <Form onSubmit='create-players'>
//             <Form.Field>
//                 <label>Name:</label>
//                 <input placeholder="Name" value={editPlayer.name} onChange={(evt) => setEditPlayer({...editPlayer, name: evt.target.value})} />
//                 <input placeholder="Age" value={editPlayer.age} onChange={(evt) => setEditPlayer({...editPlayer, age: evt.target.value})} />
//                 <input placeholder="Position" value={editPlayer.position} onChange={(evt) => setEditPlayer({...editPlayer, position: evt.target.value})} />
//                 </Form.Field>            
//                 <button type='submit'>Update</button>
//             </Form>
//     </div>
//   )
// }
// export default Edit

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
            await navigate('/')
    };

    let validButton = ''
      if (createPlayer.name) {
        validButton = (
          <button type="submit" className="validButton">
            Create Player
          </button>
        )
      } else {
        validButton = <h3>Player name is required</h3>
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

          <label className="teamSelection" htmlFor="team">Team:</label>
            <select id="team" onChange={onchange} value={team}>
              <optgroup label="NFC South">
                <option value='buccaneers'>Buccaneers</option>
                <option value='panthers'>Panthers</option>
                <option value='saints'>Saints</option>
                <option value='falcons'>Falcons</option>
              </optgroup>
              <optgroup label="NFC North">
                <option value='vikings'>Vikings</option>
                <option value='lions'>Lions</option>
                <option value='packers'>Packers</option>
                <option value='bears'>Bears</option>
              </optgroup>
              <optgroup label="NFC East">
                <option value='cowboys'>Cowboys</option>
                <option value='eagles'>Eagles</option>
                <option value='giants'>Giants</option>
                <option value='commanders'>Commanders</option>
              </optgroup>
              <optgroup label="NFC West">
                <option value='49ers'>49ers</option>
                <option value='seahawks'>Seahawks</option>
                <option value='rams'>Rams</option>
                <option value='cardinals'>Cardinals</option>
              </optgroup>
              <optgroup label="AFC South">
                <option value='jaguars'>Jaguars</option>
                <option value='titans'>Titans</option>
                <option value='colts'>Colts</option>
                <option value='texans'>Texans</option>
              </optgroup>
              <optgroup label="AFC North">
                <option value='bengals'>Bengals</option>
                <option value='ravens'>Ravens</option>
                <option value='steelers'>Steelers</option>
                <option value='browns'>Browns</option>
              </optgroup>
              <optgroup label="AFC East">
                <option value='bills'>Bills</option>
                <option value='dolphins'>Dolphins</option>
                <option value='patriots'>Patriots</option>
                <option value='jets'>Jets</option>
              </optgroup>
              <optgroup label="AFC West">
                <option value='chiefs'>Chiefs</option>
                <option value='chargers'>Chargers</option>
                <option value='raiders'>Raiders</option>
                <option value='broncos'>Broncos</option>
              </optgroup>
            </select>
{/* add handleChange and possibly handleSubmit for selecting teams. */}
          {validButton}
      </form>
    </div>
  )
}
export default CreatePlayer