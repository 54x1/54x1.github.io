$(document).ready(function () {
  // had a requesting issue fix was add a verison
  if ($('.table').length > 0){
  }else{
  $('.btn-disabled').attr('disabled','disabled');
  }
function mycount(){
 var count = 3;
  var timer = setInterval(function(){
   count--;
   $(".timer").text(count);
   if(count <= 0)
       clearInterval(timer);
   },1000);
}
mycount();
function mySearch(){
  $("#search_query").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    var aa = $(".search_table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });

if($('.search_table tr:visible').length != 0) {

}
else{

  var sResult = $("#search_query").val();

 $('.getid').each(function () {
               $('.getid').text(sResult);

           });

}

});
}
mySearch();

 });
