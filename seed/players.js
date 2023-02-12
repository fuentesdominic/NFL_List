const db = require('../db')
const Player = require('./../models/players')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    // await Player.collection.drop()
    const players = [
       { 
        name: 'Tom Brady', 
        team: 'Buccaneers',
        age: '45', 
        position: 'Quarterback', 
       },
       {
        name: 'Mike Evans', 
        team: 'Buccaneers',
        age: '29', 
        position: 'Wide Receiver'
        },
       { 
        name: 'Sam Darnold',
        team: 'Pathers',
        age: '25', 
        position: 'Quarterback',
       },
       { 
        name: 'D.J. Moore',
        team: 'Panthers', 
        age: '25', 
        position: 'Wide Receiver'
        },
       { 
        name: 'Jameis Winston',
        team: 'Saints', 
        age: '29', 
        position: 'Quarterback', 
       },
       {
        name: 'Alvin Kamara',
        team: 'Saints', 
        age: '27', 
        position: 'Running Back'
        },
       { 
        name: 'Marcus Mariota',
        team: 'Falcons', 
        age: '29', 
        position: 'Quarterback', 
       },
       {
        name: 'Kyle Pitts',
        team: 'Falcons',
        age: '22', 
        position: 'Tight End'},
       
    ]

    await Player.insertMany(players)
    console.log("Created some players!")
}
const run = async () => {
    await main()
    db.close()
}

run()