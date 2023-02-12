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
    },
    { 
        team: 'Vikings', 
        conference: 'North',
        division: 'NFC',
        location: 'Minneapolis, Minnesota', 
        stadium: 'U.S. Bank Stadium', 
        capacity: '73,000',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png'
    },
    { 
        team: 'Lions', 
        conference: 'North',
        division: 'NFC',
        location: 'Detroit, Michigan', 
        stadium: 'Ford Field', 
        capacity: '65,000',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png'
    },
    { 
        team: 'Packers', 
        conference: 'North',
        division: 'NFC',
        location: 'Green Bay, Wisconsin', 
        stadium: 'Lambeau Field', 
        capacity: '81,441',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png'
    },
    { 
        team: 'Bears', 
        conference: 'North',
        division: 'NFC',
        location: 'Chicago, Illinois', 
        stadium: 'Soldier Field', 
        capacity: '61,500',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png'
    },
    { 
        team: 'Cowboys', 
        conference: 'East',
        division: 'NFC',
        location: 'Dallas, Texas', 
        stadium: 'AT&T Stadium', 
        capacity: '80,000',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png'
    },
    { 
        team: 'Eagles', 
        conference: 'East',
        division: 'NFC',
        location: 'Philadelphia, Pennsylvania', 
        stadium: 'Lincoln Financial Field', 
        capacity: '67,594',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/phi.png'
    },
    { 
        team: 'Giants', 
        conference: 'East',
        division: 'NFC',
        location: 'East Rutherford, New Jersey', 
        stadium: 'MetLife Stadium', 
        capacity: '82,500',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png'
    },
    { 
        team: 'Commanders', 
        conference: 'East',
        division: 'NFC',
        location: 'Landover, Maryland', 
        stadium: 'FedEx, Field', 
        capacity: '82,000',
        logo: 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/WAS'
    },
    { 
        team: '49ers', 
        conference: 'West',
        division: 'NFC',
        location: 'Santa Clara, California', 
        stadium: `Levi's Stadium`, 
        capacity: '68,500',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.png'
    },
    { 
        team: 'Seahawks', 
        conference: 'West',
        division: 'NFC',
        location: 'Seattle, Washington', 
        stadium: 'Lumen Field', 
        capacity: '72,000',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png'
    },
    { 
        team: 'Rams', 
        conference: 'West',
        division: 'NFC',
        location: '', 
        stadium: '', 
        capacity: '',
        logo: ''
    },
    { 
        team: 'Cardinals', 
        conference: 'West',
        division: 'NFC',
        location: '', 
        stadium: '', 
        capacity: '',
        logo: ''
    },
    ]

    await Team.insertMany(teams)
    console.log("Created some teams!")
}
const run = async () => {
    await main()
    db.close()
}

run()