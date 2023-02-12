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
            position: 'Tight End'
        },
        {
            name: 'Kirk Cousins',
            team: 'Vikings',
            age: '34', 
            position: 'Quarterback'
        },
        {
            name: 'Justin Jefferson',
            team: 'Vikings',
            age: '23', 
            position: 'Wide Receiver'
        },
        {
            name: 'Jared Goff',
            team: 'Lions',
            age: '28', 
            position: 'Quarterback'
        },
        {
            name: 'Aidan Hutchinson',
            team: 'Lions',
            age: '22', 
            position: 'Defensive end'
        },
        {
            name: '',
            team: 'Packers',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Packers',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Bears',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Bears',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Cowboys',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Cowboys',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Eagles',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Eagles',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Giants',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Giants',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Commanders',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Commanders',
            age: '', 
            position: ''
        },
    ]

    await Player.insertMany(players)
    console.log("Created some players!")
}
const run = async () => {
    await main()
    db.close()
}

run()