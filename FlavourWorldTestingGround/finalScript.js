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
  var url = "https://api.yummly.com/v1/api/recipes?_app_id=b96a6669&_app_key=68fc92d94c14efafd327d91916587827&q=" + searchterms;

  $.getJSON(url, function(jsondata){
    printJSON(jsondata);
  });
}

function printJSON(jsondata){
  var normal = JSON.stringify(jsondata);
  $("#resultsbox").append("<p>"+ normal + "</p>");
}

function addResultTitles(jsondata){
  var htmlstring = "";

  for (var i = 0; i < 10; i++){
    var title = jsondata.Search[i].id;
    htmlstring += "<li>" + title + "</li>";
  }
  $("#results").html(htmlstring);
}
