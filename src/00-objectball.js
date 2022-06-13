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
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slumDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slumDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slumDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slumDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
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
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slumDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slumDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slumDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slumDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
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

function teamNames(){
    let game = gameObject()
    let tnames = [] // empty array -> push tnames
    for (let gm in game){
      let tn = game[gm]
      tnames.push(tn.teamName)
    }
    return tnames
  }
  function playerNumbers(teamName){
    let game = gameObject();
    let playernumbers = []
    for (let gm in game){
      if (game[gm].teamName === teamName){
        let playerzz = game[gm].players; // get the players
        for (let tp in playerzz){
          // console.log(tp) // key
          // console.log(playerzz[tp]) // value
          let playerJezzyNo = playerzz[tp].number
          playernumbers.push(playerJezzyNo)
        }
      }
    }
    return playernumbers
  }

function playerStats(playerName){
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return players[playerName]
}
console.log (playerStats("Brendan Haywood"))

function bigShoeRebounds(){
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let bShoe = 0;
    let playerbShoe = '';

    for (const player in players) {
        if (players[player].shoe > bShoe) {
            bShoe = players[player].shoe
            playerbShoe = player
        }
    }
    return ` ${players[playerbShoe].rebounds} rebounds`
}
console.log (bigShoeRebounds())

//bonus
function mostPointsScored(){
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let mostPoints = 0;
    let playermostPoints = '';

    for (const player in players) {
        if (players[player].points > mostPoints) {
            mostPoints = players[player].points
            playermostPoints = player
        }
    }
    return ` ${players[playermostPoints].points} points`  
}
console.log(mostPointsScored())

function winningTeam(){
    let gaming = gameObject();
    let winPoints = 0;
    let teamWin = '';
    for(const play in gaming){
        let totalPoints = 0;
        let team = gaming[play]
        for (const player in team.players) {
            totalPoints += team.players[player].points
        }
        if(totalPoints > winPoints){
            winPoints = totalPoints
            teamWin = team.teamName
        }
        return teamWin 
    }
   
}
console.log(winningTeam())

function playerWithLongestName() {
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let longestName = ''
    for (const player in players) {
        if (player.length > longestName.length) {
            longestName = player
        }
    }
    return longestName
}
console.log(playerWithLongestName())

//super bonus
function doesLongNameStealATon (){
    let longestName = playerWithLongestName();
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    let mostSteals = 0 ;
    let stealer;
    for (const player in players) {
        if (players[player].steals > mostSteals) {
            mostSteals = players[player].steals
            stealer = player;
        }
    }
    if(longestName === stealer){
        return true;
    } 
    else return false;
}
console.log(doesLongNameStealATon())