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
    printJSON(jsondata);
  });
}

function printJSON(jsondata){
  var pretty = JSON.stringify(jsondata, null, 4);
  $("#resultsbox").append("<pre>"+ pretty + "</pre>");
}
