jQuery(function() {

  function cycleWhereWillYouGo() {
    $("#where_to").fadeOut(200).fadeIn(200, cycleWhereWillYouGo);
  }
  cycleWhereWillYouGo();

  let my_switch = false;

  $('#curtain-1').click(function () {
    my_switch = true;
    refreshPage();
  });

  $('#curtain-2').click(function () {
    my_switch = false;
    refreshPage();
  });

  function refreshPage() {
    if( my_switch == true ) {
      $("#curtain-1").fadeOut(2000);
      $("#curtain-2").fadeIn(1000);

      $("#where_to").fadeOut(500, function() {
        $("#where_to").fadeIn(500);
        $("#where_to").html("Sunny Morocco!");
      });
  	} else{
      $("#curtain-1").fadeIn(1000);
      $("#curtain-2").fadeOut(2000);

      $("#where_to").fadeOut(500, function() {
        $("#where_to").fadeIn(500);
        $("#where_to").html("Sunny Tulum!");
      });
  	}
  }

  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'magenta'];
  setInterval(function() {
    console.log("ANNOYING!");
    $("#annoying_banner").css("color", colors[parseInt(Math.random()*colors.length)]);
  }, 100);

//    $('.square').addClass('red');

});
