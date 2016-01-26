describe("movieTicket",function(){
  it("initialize object values", function (){
    var testTicket = new movieTicket("movie1", "21", "newRelease", "matinee");
    expect(testTicket.movieTitle).to.equal("movie1");
    expect(testTicket.age).to.equal("21");
    expect(testTicket.releaseDate).to.equal("newRelease");
    expect(testTicket.showtime).to.equal("matinee");
  });
  it("will determine if the customer is 12 or younger", function(){
    expect(testTicket.ticketType()).to.equal("childPrice");
  });
  it("will determine if the customer is 55 or older", function(){
    expect(testTicket2.ticketType2()).to.equal("seniorPrice");
  });
   it("will determine if the customer is between 12 and 55", function(){
     expect(testTicket3.ticketType3()).to.equal("regularPrice");
  });
  it("will determine time of showing", function(){
    expect(testTicket.showing()).to.equal("matinee");
    expect(testTicket2.showing2()).to.equal("regular");
  });
  it("will determine release date of movie", function() {
    expect(testTicket.firstRelease()).to.equal("firstRelease");
  });
  it("will determine ticket cost", function() {
    expect(testTicket.cost()).to.equal("6.50");
  });
});
