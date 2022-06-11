function gameObject(){
    return {
        //home
        home: {
            teamName: "Brooklyn Nets",
            colors: ['black', 'white'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounce: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slumDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounce: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slumDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounce: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slumDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounce: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slumDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounce: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slumDunks: 1
                }
            }
        },

        //away
        away: {
            teamName: "Charlotte Hornets",
            colors: [ "turquoise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounce: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slumDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounce: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slumDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounce: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slumDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounce: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slumDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounce: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slumDunks: 12
                }
            }
        }
    
    }
}


function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  console.log(homeTeamName())

function numPointsScored(playerName){
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return `${players[playerName].points} `
}
function shoeSize(playerName){
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return `${players[playerName].shoe}`
}
function teamColors(teamName){
    let game = gameObject()
    for (const key in game) {
        let team = game[key]
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

// function teamNames(){

// }

// function playerNumbers(){

// }
// function playerStats(){

// }
// function bigShoeRebounds(){

// }
// function mostPointsScored(){

// }
// winningTeam
// playerWithLongestName
// doesLongNameStealATon
