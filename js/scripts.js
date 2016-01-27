function Ticket(age, movieTime, secondRelease) {
  this.age = age;
  this.movieTime = movieTime;
  this.secondRelease = secondRelease;
}

Ticket.prototype.cost = function() {
      if (this.secondRelease === ("secondRelease1" || "secondRelease2")) {
        return "$6";
      } else if ((this.age >= 55) && (this.movieTime === "matinee")) {
        return "$8.50";
      } else if ((this.age >= 55) && (this.movieTime === "evening")) {
        return "$10.50";
      } else if (this.age < 12) {
        return "$6.50";
      } else if ((this.age > 12) && (this.age < 55) && (this.movieTime === "evening")) {
        return "$13.50";
      } else {
        return "$10.50";
      }
}

$(function() {
  $("#ticketForm").submit(function(event) {

    var age = $('input[name=age]:checked', '#ticketForm').val();
    var movieTime = $('input[name=movieTime]:checked', '#ticketForm').val();
    var secondRelease = $('input[name=release]:checked', '#ticketForm').val();

    var userTicket = new Ticket(age, movieTime, secondRelease)

    $("#appendHere").text(userTicket.cost());
    
    event.preventDefault();
   });
 });
