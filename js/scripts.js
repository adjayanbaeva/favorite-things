$(document).ready(function() {
  $("form#yourAnswers").submit(function(event){
    event.preventDefault();

  var favoriteThings = [($("#hobby").val()), ($("#book").val()), ($("#movie").val()), ]

    var favorites = [favoriteThings[1], favoriteThings[2], favoriteThings[3]];

    $("#output ul").append("<li>"+favoriteThings[0]+"</li>");
    $("#output ul").append("<li>"+favoriteThings[1]+"</li>");
    $("#output ul").append("<li>"+favoriteThings[2]+"</li>");
    console.log(favoriteThings);

  });
});
