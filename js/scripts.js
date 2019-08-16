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
});
