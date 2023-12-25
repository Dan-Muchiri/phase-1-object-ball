function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  console.log(gameObject());


  function numPointsScored(playerName) {
    const dataBase = gameObject();
    if (dataBase.home.players[playerName]) {
      return dataBase.home.players[playerName].points;
    } else if (dataBase.away.players[playerName]) {
      return dataBase.away.players[playerName].points;
    }else {
      return "Player not found";}
  }
  
  console.log(numPointsScored("Jeff Adrien"));


  function shoeSize(playerName) {
    const dataBase = gameObject();
    if (dataBase.home.players[playerName]) {
      return dataBase.home.players[playerName].shoe;
    } else if (dataBase.away.players[playerName]) {
      return dataBase.away.players[playerName].shoe;
    }else {
      return "Player not found";}
  }

  console.log(shoeSize("Jeff Adrien"));


  function teamColors(teamName) {
    const dataBase = gameObject();
    if (dataBase.home.teamName) {
      return dataBase.home.colors;
    } else if (dataBase.away.teamName) {
      return dataBase.away.colors;
    }else {
      return "Team not found";}
  }

  console.log(teamColors("Charlotte Hornets"));


  function teamNames() {
    const dataBase = gameObject();
    const names = [];
    names.push(dataBase.home.teamName);
    names.push(dataBase.away.teamName)
   return names;
  }

  console.log(teamNames());


  function playerNumbers(teamName) {
    const dataBase = gameObject();
    if (dataBase.home.teamName === teamName) {
      return Object.values(dataBase.home.players).map((player) => player.number);
    } else if (dataBase.away.teamName === teamName) {
      return Object.values(dataBase.away.players).map((player) => player.number);
    }else {
      return "Team not found";}
  }

  console.log(playerNumbers("Charlotte Hornets"));


  function playerStats(playerName) {
    const dataBase = gameObject();
    const homePlayer = Object.values(dataBase.home.players).find(
      (p) => Object.keys(dataBase.home.players).includes(playerName)
    );
    const awayPlayer = Object.values(dataBase.away.players).find(
      (p) => Object.keys(dataBase.away.players).includes(playerName)
    );

    if (homePlayer) {
      return homePlayer;
    }else if (awayPlayer) {
      return awayPlayer;
    } else {
      return "Player not found";
    }
  }
  
  console.log(playerStats("Jeff Adrien"));



  function bigShoeRebounds() {
    const dataBase = gameObject();
    const players = [
      ...Object.values(dataBase.home.players),
      ...Object.values(dataBase.away.players)
    ];
    const playerWithLargestShoe = players.reduce((prev, current) => {
      return (prev.shoe > current.shoe) ? prev : current;
    });
    return playerWithLargestShoe.rebounds;
  }
  
  console.log(bigShoeRebounds());


  function mostPointsScored() {
    const dataBase = gameObject();
    const players = [
      ...Object.entries(dataBase.home.players),
      ...Object.entries(dataBase.away.players)
    ];
    const playerWithMostPoints = players.reduce((prev, current) => {
      return (prev[1].points > current[1].points) ? prev : current;
    });
    return playerWithMostPoints[0];
  }
  
  console.log(mostPointsScored());

  function winningTeam() {
    const dataBase = gameObject();
    const homeTeam = [
      ...Object.values(dataBase.home.players)
    ];
    const awayTeam =[
      ...Object.values(dataBase.away.players)
    ];
    const homeTeamPoints = homeTeam.reduce((totalPoints, currentPlayer) => {
      return totalPoints + currentPlayer.points;
    }, 0);
    const awayTeamPoints = awayTeam.reduce((totalPoints, currentPlayer) => {
      return totalPoints + currentPlayer.points;
    }, 0);
    if(homeTeamPoints> awayTeamPoints){
      return dataBase.home.teamName;
    } else if(awayTeamPoints<homeTeamPoints){
      return dataBase.away.teamName;
    } else {
      return 'Teams tied'
    }
  }
  
  console.log(winningTeam());


  function playerWithLongestName() {
    const dataBase = gameObject();
    const players = [
      ...Object.entries(dataBase.home.players),
      ...Object.entries(dataBase.away.players)
    ];
    const playerWithLongestName = players.reduce((prev, current) => {
      return prev[0].length > current[0].length ? prev : current;
    });
    return playerWithLongestName[0];
  }
  
  console.log(playerWithLongestName());



  function doesLongNameStealATon() {
    const dataBase = gameObject();
    const players = [
      ...Object.entries(dataBase.home.players),
      ...Object.entries(dataBase.away.players)
    ];
    const playerWithMostSteals = players.reduce((prev, current) => {
      return prev[1].steals > current[1].steals ? prev : current;
    });
    const playerWithLongestName = players.reduce((prev, current) => {
      return prev[0].length > current[0].length ? prev : current;
    });
  
    return playerWithLongestName[0] === playerWithMostSteals[0];
  }

  console.log(doesLongNameStealATon());