$(document).ready(function() {
  $("form").submit(function(event){
    $("input:checkbox[name=work]:checked").each(function() {
      var typesWork = $(this).val();
      $("#resultsWork").append(typesWork + "<br>");
    });
    $("input:checkbox[name=fun]:checked").each(function() {
      var typesFun = $(this).val();
      $("#resultsFun").append(typesFun + "<br>");  
    });
    $("#output").show();
    $("form").hide();
    event.preventDefault();
  });
});