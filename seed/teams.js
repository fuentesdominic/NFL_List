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
        location: 'Los Angeles, California', 
        stadium: 'SoFi Stadium', 
        capacity: '70,000 (expandable up to 100,240 for major events)',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png'
    },
    { 
        team: 'Cardinals', 
        conference: 'West',
        division: 'NFC',
        location: 'Glendale, Arizona', 
        stadium: 'State Farm Stadium', 
        capacity: '63,400',
        logo: 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ARI'
    },
    { 
        team: 'Jaguars', 
        conference: 'South',
        division: 'AFC',
        location: 'Jacksonville, Florida', 
        stadium: 'TIAA Bank Field', 
        capacity: '67,164',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png'
    },
    { 
        team: 'Titans', 
        conference: 'South',
        division: 'AFC',
        location: 'Nashville, Tennessee', 
        stadium: 'Nissan Stadium', 
        capacity: '69,143',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png'
    },
    { 
        team: 'Colts', 
        conference: 'South',
        division: 'AFC',
        location: 'Indianapolis, Indiana', 
        stadium: 'Lucas Oil Stadium', 
        capacity: '70,000',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png'
    },
    { 
        team: 'Texans', 
        conference: 'South',
        division: 'AFC',
        location: 'Houston, Texas', 
        stadium: 'NRG Stadium', 
        capacity: '72,220',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png'
    },
    { 
        team: 'Bengals', 
        conference: 'North',
        division: 'AFC',
        location: 'Cincinnati, Ohio', 
        stadium: 'Paycor Stadium', 
        capacity: '65,535',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png&h=200&w=200'
    },
    { 
        team: 'Ravens', 
        conference: 'North',
        division: 'AFC',
        location: 'Baltimore, Maryland', 
        stadium: 'M&T Bank Stadium', 
        capacity: '71,008',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png'
    },
    { 
        team: 'Steelers', 
        conference: 'North',
        division: 'AFC',
        location: 'Pittsburgh, Pennsylvania', 
        stadium: 'Acrisure Stadium', 
        capacity: '68,400',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png'
    },
    { 
        team: 'Browns', 
        conference: 'North',
        division: 'AFC',
        location: 'Cleveland, Ohio', 
        stadium: 'FirstEnergy Stadium', 
        capacity: '67,895',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png'
    },
    { 
        team: 'Bills', 
        conference: 'East',
        division: 'AFC',
        location: 'Erie County, New York', 
        stadium: 'Highmark Stadium', 
        capacity: '71,608',
        logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png'
    },
    { 
        team: 'Dolphins', 
        conference: 'East',
        division: 'AFC',
        location: 'Miami Gardens, Florida', 
        stadium: 'Hard Rock Stadium', 
        capacity: '65,326',
        logo: 'https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_MIA_wbg.png'
    },
    { 
        team: 'Patriots', 
        conference: 'East',
        division: 'AFC',
        location: '', 
        stadium: '', 
        capacity: '',
        logo: ''
    },
    { 
        team: 'Jets', 
        conference: 'East',
        division: 'AFC',
        location: 'East Rutherford, New Jersey', 
        stadium: 'MetLife Stadium', 
        capacity: '82,500',
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