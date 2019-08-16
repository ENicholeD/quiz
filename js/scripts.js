$(document).ready(function(){
  $(".form").submit(function(event){
    var user = $("#name").val();
    var travel = parseInt($("#places").val());
    var fruit = parseInt($("#fruits").val());
    var game = parseInt($("#games").val());
    var sea = parseInt($("#sea").val());
    var time = parseInt($("#time").val());
    var calculate = travel + fruit + game + sea + time;
    event.preventDefault();

    if (calculate === 4 || calculate === 5 || calculate === 6 || calculate === 7 ) {
      $("span").text(user);
      $("#cSharp").fadeIn();
      $("#ruby").fadeOut();
      $("#python").fadeOut();
    } else if (calculate === 8 || calculate === 9 || calculate === 10 || calculate === 11){
      $("span").text(user);
      $("#cSharp").fadeOut();
      $("#ruby").fadeIn();
      $("#python").fadeOut();
    } else if (calculate === 12 || calculate === 13 || calculate === 14 || calculate === 15){
      $("span").text(user);
      $("#cSharp").fadeOut();
      $("#ruby").fadeOut();
      $("#python").fadeIn();;
    } else {
      $("#cSharp").fadeOut();
      $("#ruby").fadeOut();
      $("#python").fadeOut();
    }
  });

  // below is for the extra quiz
  $(".form2").submit(function(event){
    var user = $("#name").val();
    var userGenre = $("#genre").val();
    var userSub = $("#subGenre").val();
    event.preventDefault();
    if (userGenre === "horror" && userSub === "drama"){
      $("span").text(user);
      $("#let").fadeIn();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeOut();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();
    } else if (userGenre === "horror" && userSub === "scifi") {
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeIn();
      $("#genetic").fadeOut();
      $("#logan").fadeOut();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();;
    } else if (userGenre === "horror" && userSub === "music") {
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeIn();
      $("#logan").fadeOut();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();
    } else if (userGenre === "action" && userSub === "drama"){
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeIn();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();
    } else if (userGenre === "action" && userSub === "scifi"){
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeOut();
      $("#mad").fadeIn();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();
    } else if (userGenre === "action" && userSub === "music"){
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeOut();
      $("#mad").fadeOut();
      $("#light").fadeIn();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();
    } else if (userGenre === "comedy" && userSub === "drama"){
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeOut();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeIn();
      $("#idiocracy").fadeOut();
      $("#blues").fadeOut();
    } else if (userGenre === "comedy" && userSub === "scifi"){
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeIn();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeIn();
      $("#blues").fadeOut();
    } else if (userGenre === "comedy" && userSub === "music"){
      $("span").text(user);
      $("#let").fadeOut();
      $("#thing").fadeOut();
      $("#genetic").fadeOut();
      $("#logan").fadeOut();
      $("#mad").fadeOut();
      $("#light").fadeOut();
      $("#good").fadeOut();
      $("#idiocracy").fadeOut();
      $("#blues").fadeIn();
    }

  });
});
