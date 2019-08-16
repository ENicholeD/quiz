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
      $("#cSharp").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (calculate === 8 || calculate === 9 || calculate === 10 || calculate === 11){
      $("#cSharp").hide();
      $("#ruby").show();
      $("#python").hide();
    } else if (calculate === 12 || calculate === 13 || calculate === 14 || calculate === 15){
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#python").show();;
    } else {
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#python").hide();
    }
  });
});
