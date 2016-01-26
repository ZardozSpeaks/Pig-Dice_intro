function movieTicket(movieTitle, age, releaseDate, showtime) {
  this.movieTitle = movieTitle;
  this.age = age;
  this.releaseDate = releaseDate;
  this.showtime = showtime;
}

var testTicket = new movieTicket("movie1", "11", "firstRelease", "matinee");
var testTicket2 = new movieTicket("movie1", "55", "newRelease", "regular");
var testTicket3 = new movieTicket("movie1", "25", "newRelease", "matinee");
var price = 0;

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

   movieTicket.prototype.firstRelease = function () {
     if (testTicket.releaseDate === "firstRelease") {
       return "firstRelease";
     } else {
       return "secondRelease";
     }
   }

   movieTicket.prototype.cost = function () {
     if (testTicket.releaseDate === "secondRelease") {
       return  "6";
     } else if ((testTicket.age >= 55) && (testTicket.showtime === "matinee")) {
       return  "8.50";
     } else if ((testTicket.age >= 55) &&(testTicket.showtime === "regular")) {
       return  "10.50";
     } else if (testTicket.age < 12) {
       return  "6.50";
     } else if ((testTicket.age > 12) && (testTicket.age < 55) && (testTicket.showtime === "regular")) {
       return  "13.50";
     } else {
       return  "10.50";
     }
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
