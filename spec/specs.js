describe('Player', function() {
  it("returns the player's name", function() {
    var testPlayer = new Player("Ryan", 0, 0);
    expect(testPlayer.playerName).to.equal("Ryan");
  });
  it("generates random number for roll", function(){
    var testPlayer = new Player("Ryan", 0, 0);
    var turnOne = testPlayer.rollDice();
    expect("023456").to.include(testPlayer.turnScore);
  });
  it("resets turn score to 0 at the start of each turn", function() {
    var testPlayer = new Player("Ryan", 0, 0);
    var turnOne = testPlayer.rollDice();
    testPlayer.newTurn();
    expect(testPlayer.turnScore).to.equal(0);
  });
  it("returns players name when they hit 100 or more in their score", function(){
    var testPlayer = new Player("Ryan", 0, 0);
    testPlayer.userScore = 100;
    expect(testPlayer.scoreCheck()).to.equal("Win");
  });
});


/* tests:
--test to make sure rng is between 1-6
test dice number rolled
 -if 1 stop
test score of the current user
 -if 100 or greater user wins
test to make sure computer stops after two rolls
*/
