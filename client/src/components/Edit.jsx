// import { useState } from "react"
// import axios from "axios"
// // make edit form for each player to change upon request.
// // input fields for player position, age, and name. 
// // form needs onsubmit 
// // button must be type='submit'.
// const Edit = ({player, getAllPlayers}) => {

//     const [editPlayer, setEditPlayer] = useState(player)

//     const setStorage = (data) => {
//         let { name, age, position} = data;
//         localStorage.setItem('Name', name);
//         localStorage.setItem('Age', age);
//         localStorage.setItem('Position', position);
//     }

//     const handleSubmit = async (evt) => {
//         evt.preventDefault()
//             const players = await axios.put()
//             await axios.put('http://localhost:3001/api/teams/players', editPlayer), {
//                 player.name,
//                 player.age,
//                 player.position
//             }
//     setEditPlayer(player)
//     getAllPlayers()
// }

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
//                 <input placeholder="Name" onChange={(evt) => setEditPlayer(evt.target.value)} />
//                 <input placeholder="Age" onChange={(evt) => setEditPlayer(evt.target.value)} />
//                 <input placeholder="Position" onChange={(evt) => setEditPlayer(evt.target.value)} />
//                 </Form.Field>            
//                 <button type='submit'>Update</button>
//             </Form>
//     </div>
//   )
// }
// export default Edit