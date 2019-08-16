$(document).ready(function(){
  $(".form").submit(function(event){
    var travel = parseInt($("#places").val());
    var fruit = parseInt($("#fruits").val());
    var game = parseInt($("#games").val());
    var sea = parseInt($("#sea").val());
    var time = parseInt($("#time").val());
    var calculate = travel + fruit + game + sea + time;
    event.preventDefault();
    console.log(calculate);
  });
});
