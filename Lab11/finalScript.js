$(function(){
  //document documentReady
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=431e681&s=" + searchterms;

  $.getJSON(url, function(jsondata){
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){
  var htmlstring = "";

  for (var i = 0; i < 10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }
  $("#results").html(htmlstring);
}
