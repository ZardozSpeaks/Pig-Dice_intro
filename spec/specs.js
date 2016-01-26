describe("movieTicket",function(){
  it("initialize object values", function (){
    var testTicket = new movieTicket("movie1", "21", "newRelease", "matinee");
    expect(testTicket.movieTitle).to.equal("movie1");
    expect(testTicket.age).to.equal("21");
    expect(testTicket.releaseDate).to.equal("newRelease");
    expect(testTicket.showtime).to.equal("matinee");
  });
  it("will determine if the customer is under 12 or over 55", function(){
    var testTicket = new movieTicket("movie1", "11", "newRelease", "matinee");
    expect(testTicket.ticketType()).to.equal("childPrice");
  });
});


/*movieTitle
age lees than 12, or over 55
newrelease or old releaseDate
matinee or reqular showing*/
