function gameObject(){
    return {
        home: {
          teamName: "Brooklyn Nets",
          colors: ["black","white"],
          players:  {
             "Verah": {
                  Number: " 3",
                  shoe: " bata",
                  points: " 7",
                 rebounds: " 1",
                 assists: " 2",
                 steals: " 1",
                 blocks: " 0",
                 slamdunks: " 4",
              }
          }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players:  {
                name: {
                    Name: "kwamboka",
                    Number: "9",
                    shoe: "bata",
                    points: "39",
                    rebounds: "2",
                    assists: "14",
                    steals: "1",
                    blocks: "2",
                    slamdunks: "1",
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
    return `${playerName} scored ${players[playerName].points} points`
}
function shoeSize(playerName){
    let players = {...gameObject()['home']['players'], ...gameObject()['away']['players']}
    return `${playerName} shoe size is ${players[playerName].shoe}`
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
