
const games = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black","White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez":{
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee":{
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry":{
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    }, 
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise','Purple'],
        players: {
            "Jeff Adrien":{
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo":{
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop":{
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon":{
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood":{
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
}

function gameObject(){
    // console.log(games)
    return games
}

// gameObject()

function homeTeamName(){
    return gameObject()['home']['teamName']
}
// console.log(homeTeamName())

// console.log(games['home']['teamName'])

// FIRST ASSIGNMENT:
function numPointsScored (name){
    for (const gameKey in games) {
        const teamObj = games[gameKey]
        const playerObj = teamObj.players
        for (const player in playerObj){
            if (player === name){
                console.log(playerObj[name]['points'])
                return playerObj[name]['points']
            }
        }
    }
}
// numPointsScored("Jason Terry")


// SECOND ASSIGNMENT:
function shoeSize(name){
    for (const gameKey in games) {
        const teamObj = games[gameKey]
        const playerObj = teamObj.players
        for (const player in playerObj){
            if (player === name){
                console.log(playerObj[name]['shoe'])
                return playerObj[name]['shoe']
            }
        }
    }
}
// shoeSize("Jeff Adrien")


// THIRD ASSIGNMENT:
function teamColors(team){
    for (const gameKey in games) {
        const teamObj = games[gameKey]
        debugger
        console.log(teamObj['teamName'])
        if (teamObj['teamName'] === team){
            console.log(teamObj['colors'])
            return teamObj['colors']
        }
    }
}
// teamColors('Brooklyn Nets')

//FOURTH ASSIGNMENT:
function teamNames(gameList){
    const teamList = []
    for (const gameKey in gameList) {
        const teamObj = games[gameKey]
        const teamName = teamObj['teamName']
        teamList.push(teamName)
    }
    console.log(teamList)
    return teamList
}
// teamNames(games)

function playerNumbers(teamName){
    const jerseyList = []
    for (const gameKey in games) {
        const teamObj = games[gameKey]
        debugger
        if (teamObj['teamName']===teamName){
            const playerObj = teamObj.players
            // console.log(playerObj)
            debugger
            for (const item in playerObj){
                // console.log(playerObj[item]['number'])
                jerseyList.push(playerObj[item]['number'])
                debugger
            }
        }
    }
    console.log(jerseyList)
    return jerseyList
}
playerNumbers("Brooklyn Nets")
