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
            position: 'Defensive End'
        },
        {
            name: 'Aaron Rodgers',
            team: 'Packers',
            age: '39', 
            position: 'Quarterback'
        },
        {
            name: 'Christian Watson',
            team: 'Packers',
            age: '23', 
            position: 'Wide Receiver'
        },
        {
            name: 'Justin Fields',
            team: 'Bears',
            age: '23', 
            position: 'Quarterback'
        },
        {
            name: 'David Montgomery',
            team: 'Bears',
            age: '25', 
            position: 'Running Back'
        },
        {
            name: 'Dak Prescott',
            team: 'Cowboys',
            age: '29', 
            position: 'Quarterback'
        },
        {
            name: 'CeeDee Lamb',
            team: 'Cowboys',
            age: '23', 
            position: 'Wide Receiver'
        },
        {
            name: 'Jalen Hurts',
            team: 'Eagles',
            age: '24', 
            position: 'Quarterback'
        },
        {
            name: 'Jason Kelce',
            team: 'Eagles',
            age: '35', 
            position: 'Center'
        },
        {
            name: 'Daniel Jones',
            team: 'Giants',
            age: '25', 
            position: 'Quarterback'
        },
        {
            name: 'Saquon Barkley',
            team: 'Giants',
            age: '26', 
            position: 'Running back'
        },
        {
            name: 'Taylor Heinicke',
            team: 'Commanders',
            age: '29', 
            position: 'Quarterback'
        },
        {
            name: 'Chase Young',
            team: 'Commanders',
            age: '23', 
            position: 'Defensive End'
        },
        {
            name: 'Jimmy Garoppolo',
            team: '49ers',
            age: '31', 
            position: 'Quarterback'
        },
        {
            name: 'Christian McCaffrey',
            team: '49ers',
            age: '26', 
            position: 'Running Back'
        },
        {
            name: 'Geno Smith',
            team: 'Seahwaks',
            age: '32', 
            position: 'Quarterback'
        },
        {
            name: 'DK Metcalf',
            team: 'Seahawks',
            age: '25', 
            position: 'Wide Receiver'
        },
        {
            name: 'Cam Akers',
            team: 'Rams',
            age: '23', 
            position: 'Running Back'
        },
        {
            name: 'Aaron Donald',
            team: 'Rams',
            age: '31', 
            position: 'Defensive Tackle'
        },
        {
            name: 'DeAndre Hopkins',
            team: 'Cardinals',
            age: '30', 
            position: 'Wide Receiver'
        },
        {
            name: 'James Conner',
            team: 'Cardinals',
            age: '27', 
            position: 'Running Back'
        },
        {
            name: 'Trevor Lawrence',
            team: 'Jaguars',
            age: '23', 
            position: 'Quarterback'
        },
        {
            name: 'Christian Kirk',
            team: 'Jaguars',
            age: '26', 
            position: 'Wide Receiver'
        },
        {
            name: 'Derrick Henry',
            team: 'Titans',
            age: '29', 
            position: 'Running Back'
        },
        {
            name: 'Treylon Burks',
            team: 'Titans',
            age: '22', 
            position: 'Wide Receiver'
        },
        {
            name: 'Matt Ryan',
            team: 'Colts',
            age: '37', 
            position: 'Quarterback'
        },
        {
            name: 'Michael Pittman Jr.',
            team: 'Colts',
            age: '25', 
            position: 'Wide Receiver'
        },
        {
            name: 'Davis Mills',
            team: 'Texans',
            age: '24', 
            position: 'Quarterback'
        },
        {
            name: 'Brandin Cooks',
            team: 'Texans',
            age: '29', 
            position: 'Wide Receiver'
        },
        {
            name: 'Joe Burrow',
            team: 'Bengals',
            age: '26', 
            position: 'Quarterback'
        },
        {
            name: `Ja'Marr Chase`,
            team: 'Bengals',
            age: '22', 
            position: 'Wide Receiver'
        },
        {
            name: 'Lamar Jackson',
            team: 'Ravens',
            age: '26', 
            position: 'Quarterback'
        },
        {
            name: 'Mark Andrews',
            team: 'Ravens',
            age: '27', 
            position: 'Tight End'
        },
        {
            name: 'Kenny Pickett',
            team: 'Steelers',
            age: '', 
            position: 'Quarterback'
        },
        {
            name: 'T. J. Watt',
            team: 'Steelers',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Browns',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Browns',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Bills',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Bills',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Dolphins',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Dolphins',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Patriots',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Patriots',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Jets',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: 'Jets',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: '',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: '',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: '',
            age: '', 
            position: ''
        },
        {
            name: '',
            team: '',
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