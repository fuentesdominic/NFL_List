const db = require('../db')
const Player = require('./../models/players')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    await Player.collection.drop()
    const players = [
       { 
        name: 'Tom Brady', 
        age: '45', 
        position: 'Quarterback', 
        name: 'Mike Evens', 
        age: '29', 
        position: 'Wide Receiver'},
       { 
        name: 'Sam Darnold', 
        age: '25', 
        position: 'Quarterback', 
        name: 'D.J. Moore', 
        age: '25', 
        position: 'Wide Receiver'},
       { 
        name: 'Jameis Winston', 
        age: '29', 
        position: 'Quarterback', 
        name: 'Alvin Kamara', 
        age: '27', 
        position: 'Running Back'},
       { 
        name: 'Marcus Mariota', 
        age: '29', 
        position: 'Quarterback', 
        name: 'Kyle Pitts', 
        age: '22', 
        position: 'Tight End'},
       
    ]

    await Player.insertMany(players)
    console.log("Created some teams!")
}
const run = async () => {
    await main()
    db.close()
}

run()