$(function(){
  //document documentReady
  alert("document ready");

  $("#searchform").submit(function(){
    addItemToList("example item");
    return false;
  });
});
