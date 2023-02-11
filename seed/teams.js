const db = require('../db')
const Team = require('./../models/teams')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const teams = [
       { 
        team: 'Buccaneers', 
        location: 'Tampa Bay, Florida', 
        stadium: 'Raymond James Stadium', 
        capacity: '65,890' },
       { 
        team: 'Pathers', 
        location: 'Charlotte, North Carolina', 
        stadium: 'Bank of America Stadium', 
        capacity: '75,412' },
       { team: 'Saints', 
        location: 'New Orleans, Louisiana', 
        stadium: 'Caesars Superdome', 
        capacity: '73,208' },
       { 
        team: 'Falcons', 
        location: 'Atlanta, Georgia', 
        stadium: 'Mercedes-Benz Stadium', 
        capacity: '71,000' }
    ]

    await Team.insertMany(teams)
    console.log("Created some teams!")
}
const run = async () => {
    await main()
    db.close()
}

run()