function movieTicket(movieTitle, age, releaseDate, showtime) {
  this.movieTitle = movieTitle;
  this.age = age;
  this.releaseDate = releaseDate;
  this.showtime = showtime;
}

var testTicket = new movieTicket("movie1", "11", "newRelease", "matinee");
var testTicket2 = new movieTicket("movie1", "55", "newRelease", "regular");
var testTicket3 = new movieTicket("movie1", "25", "newRelease", "matinee");

movieTicket.prototype.ticketType = function () {
  if (testTicket.age <= 12) {
    return "childPrice";
  } else if (testTicket.age >= 55) {
    return "seniorPrice";
  } else {
    return "regularPrice";
  }
}
movieTicket.prototype.ticketType2 = function () {
  if (testTicket2.age <= 12) {
    return "childPrice";
  } else if (testTicket2.age >= 55) {
    return "seniorPrice";
  } else {
    return "regularPrice";
  }
}
 movieTicket.prototype.ticketType3 = function () {
   if (testTicket3.age <= 12) {
     return "childPrice";
  } else if (testTicket3.age >= 55) {
     return "seniorPrice";
  } else {
     return "regularPrice";
  }
 }

 movieTicket.prototype.showing = function () {
  if (testTicket.showtime === "matinee") {
    return "matinee";
  } else
    return "regular";
  }

  movieTicket.prototype.showing2 = function () {
   if (testTicket2.showtime === "matinee") {
     return "matinee";
   } else
     return "regular";
   }
 // $(document).ready(function() {
 //   if (testTicket.age <= 12) {
 //   return "childPrice";
 //  } else if (testTicket.age >= 55) {
 //     return "seniorPrice";
 //  } else {
 //    return "regularPrice";
 //   }
 // });
