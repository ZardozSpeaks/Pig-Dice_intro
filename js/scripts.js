function Player(playerName, turnScore, userScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.userScore = userScore;
}

Player.prototype.rollDice = function(){
  var diceRoll = Math.floor(Math.random()*6) + 1;

  if (diceRoll !== 1){
    this.turnScore += diceRoll;
  }else{
    this.turnScore = 0;
    return "You Rolled a One";
  }
  return diceRoll;
};

Player.prototype.stop = function() {
  this.userScore += this.turnScore
  this.turnScore = 0;
}

Player.prototype.newTurn = function() {
  this.turnScore = 0;
};

Player.prototype.scoreCheck = function() {
  if(this.userScore >= 100){
    return "Win";
  };
};

Player.prototype.newGame = function(){
  this.turnScore = 0;
  this.userScore = 0;
}



$(document).ready(function() {
  $("#newGame").on("click", function(){
    location.reload(true);
  });
    $("#playerNames").submit(function(event) {
      event.preventDefault();

      var player1 = $("#playerOne").val();
      var player2 = $("#playerTwo").val();

      $("#playerOneName").text(player1);
      $("#playerTwoName").text(player2);

      var player1 = new Player(player1, 0, 0);
      var player2 = new Player(player2, 0, 0);

      var playerOneRolls = function(){
        $("#playerOneRoll").click(function() {
          var player1Dice = player1.rollDice();

          $("#diceRollHere").text(" " + player1Dice);
          $("#playerOneTurnScore").text(" " + player1.turnScore);
          $("#playerOneTotal").text(" " + player1.userScore);

          if(player1Dice === "You Rolled a One"){
            $("#playerOneRoll").fadeOut("slow");
            $("#playerTwoRoll").fadeIn("slow");
            $("#playerTwoBank").fadeIn("slow");
            $("#playerOneBank").fadeOut("slow");
            player1.stop();
          };

          var winner = player1.scoreCheck();
        });
      };

        var playerOneStops = function(){
          $("#playerOneBank").click(function(){
            $("#playerOneRoll").fadeOut("slow");
            $("#playerTwoRoll").fadeIn("slow");
            $("#playerTwoBank").fadeIn("slow");
            $("#playerOneBank").fadeOut("slow");

            player1.stop();

            $("#playerOneTotalScore").text(" " + player1.userScore);
            $("#playerOneTurnScore").text(" " + player1.turnScore);

            var winner = player1.scoreCheck();

            if(winner === "Win"){
              alert("Congratulations " + player1.playerName +" you win! GAME OVER!")
            }
          });
        };

      var playerTwoRolls = function(){
        $("#playerTwoRoll").click(function() {
          var player2Dice = player2.rollDice();

          $("#diceRollHere").text(" " + player2Dice);
          $("#playerTwoTurnScore").text(" " + player2.turnScore);
          $("#playerTwoTotal").text(" " + player2.userScore);

          if(player2Dice === "You Rolled a One"){
            $("#playerTwoRoll").fadeOut("slow");
            $("#playerTwoBank").fadeOut("slow");
            $("#playerOneRoll").fadeIn("slow");
            $("#playerOneBank").fadeIn("slow");
            player2.stop();
            };

            var winner = player2.scoreCheck();

          });
        };

        var playerTwoStops = function(){
          $("#playerTwoBank").click(function(){
            $("#playerTwoRoll").fadeOut("slow");
            $("#playerTwoBank").fadeOut("slow");
            $("#playerOneRoll").fadeIn("slow");
            $("#playerOneBank").fadeIn("slow");

            player2.stop();
            $("#playerTwoTotal").text(" " + player2.userScore);
            $("#playerTwoTurnScore").text(" " + player2.turnScore);

            var winner = player2.scoreCheck();

            if(winner === "Win"){
              alert("Congratulations " + player2.playerName +" you win! GAME OVER!")
            }
          });
        };
      playerOneRolls();
      playerOneStops();
      playerTwoRolls();
      playerTwoStops();
    });
});
