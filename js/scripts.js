$(document).ready(function(){
  $(".form").submit(function(event){
    var travel = parseInt($("#places").val());
    var fruit = parseInt($("#fruits").val());
    var game = parseInt($("#games").val());
    var sea = parseInt($("#sea").val());
    var time = parseInt($("#time").val());
    var calculate = travel + fruit + game + sea + time;
    event.preventDefault();

    if (calculate === 4 || calculate === 5 || calculate === 6 || calculate === 7 ) {
      console.log(calculate);
    } else if (calculate === 8 || calculate === 9 || calculate === 10 || calculate === 11){
      console.log("HELLO");
    } else if (calculate === 12 || calculate === 13 || calculate === 14 || calculate === 15){
      console.log(calculate);
    } else {
      
    }
  });
});
