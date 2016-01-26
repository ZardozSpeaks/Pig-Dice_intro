// function movieTicket(movieTitle, age, releaseDate, showtime) {
//   this.movieTitle = movieTitle;
//   this.age = age;
//   this.releaseDate = releaseDate;
//   this.showtime = showtime;
// }

$(function() {
  $("#ticketForm").submit(function(event) {
    var age = $('input[name=age]:checked', '#ticketForm').val();
    var movieTime = $('input[name=movieTime]:checked', '#ticketForm').val();
    var newRelease = $('input[name=release]:checked', '#ticketForm').val();
    var secondRelease = $('input[name=release]:checked', '#ticketForm').val();


    if (secondRelease === ("secondRelease1" || "secondRelease2")) {
      $("#appendHere").text("$6");
    } else if ((age >= 55) && (movieTime === "matinee")) {
      $("#appendHere").text("$8.50");
    } else if ((age >= 55) && (movieTime === "evening")) {
      $("#appendHere").text("$10.50");
    } else if (age < 12) {
      $("#appendHere").text("$6.50");
    } else if ((age > 12) && (age < 55) && (movieTime === "evening")) {
      $("#appendHere").text("$13.50");
    } else {
      $("#appendHere").text("$10.50");
    }

    event.preventDefault();
   });
 });
