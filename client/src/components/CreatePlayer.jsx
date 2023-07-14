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

    const teamPageUrl = 'http://localhost:3001/api/teams'

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:3001/api/teams/players', createPlayer)
            setCreatePlayer(addPlayer)
            await navigate(teamPageUrl)
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
                <option value='Buccaneers'>Buccaneers</option>
                <option value='Panthers'>Panthers</option>
                <option value='Saints'>Saints</option>
                <option value='Falcons'>Falcons</option>
              </optgroup>
              <optgroup label="NFC North">
                <option value='Vikings'>Vikings</option>
                <option value='Lions'>Lions</option>
                <option value='Packers'>Packers</option>
                <option value='Bears'>Bears</option>
              </optgroup>
              <optgroup label="NFC East">
                <option value='Cowboys'>Cowboys</option>
                <option value='Eagles'>Eagles</option>
                <option value='Giants'>Giants</option>
                <option value='Commanders'>Commanders</option>
              </optgroup>
              <optgroup label="NFC West">
                <option value='49ers'>49ers</option>
                <option value='Seahawks'>Seahawks</option>
                <option value='Rams'>Rams</option>
                <option value='Cardinals'>Cardinals</option>
              </optgroup>
              <optgroup label="AFC South">
                <option value='Jaguars'>Jaguars</option>
                <option value='Titans'>Titans</option>
                <option value='Colts'>Colts</option>
                <option value='Texans'>Texans</option>
              </optgroup>
              <optgroup label="AFC North">
                <option value='Bengals'>Bengals</option>
                <option value='Ravens'>Ravens</option>
                <option value='Steelers'>Steelers</option>
                <option value='Browns'>Browns</option>
              </optgroup>
              <optgroup label="AFC East">
                <option value='Bills'>Bills</option>
                <option value='Dolphins'>Dolphins</option>
                <option value='Patriots'>Patriots</option>
                <option value='Jets'>Jets</option>
              </optgroup>
              <optgroup label="AFC West">
                <option value='Chiefs'>Chiefs</option>
                <option value='Chargers'>Chargers</option>
                <option value='Raiders'>Raiders</option>
                <option value='Broncos'>Broncos</option>
              </optgroup>
            </select>
{/* add handleChange and possibly handleSubmit for selecting teams. */}
          {validButton}
      </form>
    </div>
  )
}
export default CreatePlayer