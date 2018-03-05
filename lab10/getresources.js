$(document).ready(function(){
  //all out other code will go in here!
  $('#retrieve-resources').click(function(){

    var displayResources = $("#display-resources");

    displayResources.text("Loading data from JSON soure...");

    $.ajax({
      type:"GET",
      url: "resouces.json",
      success: funtion(results)
      {
        //we deal with the data here
        var output="<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";

        for(var i in result){
          output+="<tr><td>" result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
        }

        output += "</tbody></table>";
        displayResources.html(output);
        $("table").addClass("table");

        }
    });
    
  });
});
