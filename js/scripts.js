function movieTicket(movieTitle, age, releaseDate, showtime) {
  this.movieTitle = movieTitle;
  this.age = age;
  this.releaseDate = releaseDate;
  this.showtime = showtime;
}

movieTicket.prototype.ticketType = function () {
  if (testTicket.age <= 12) {
    return "childPrice";
  } else if (testTicket.age >= 55) {
    return "seniorPrice";
  } else {
    return "regularPrice";
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
