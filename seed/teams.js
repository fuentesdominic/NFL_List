const db = require('../db')
const Team = require('./../models/teams')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const teams = [
       { 
        team: 'Buccaneers', 
        conference: 'South',
        division: 'NFC',
        location: 'Tampa Bay, Florida', 
        stadium: 'Raymond James Stadium', 
        capacity: '65,890',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png'
    },
        
       { 
        team: 'Pathers', 
        conference: 'South',
        division: 'NFC',
        location: 'Charlotte, North Carolina', 
        stadium: 'Bank of America Stadium', 
        capacity: '75,412',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png'
    },
       { team: 'Saints', 
       conference: 'South',
        division: 'NFC',
        location: 'New Orleans, Louisiana', 
        stadium: 'Caesars Superdome', 
        capacity: '73,208', 
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png'
    },
       { 
        team: 'Falcons', 
        conference: 'South',
        division: 'NFC',
        location: 'Atlanta, Georgia', 
        stadium: 'Mercedes-Benz Stadium', 
        capacity: '71,000',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png'
    }
    ]

    await Team.insertMany(teams)
    console.log("Created some teams!")
}
const run = async () => {
    await main()
    db.close()
}

run()