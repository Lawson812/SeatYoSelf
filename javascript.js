$(document).ready(function(){

//Shows and Hides Form
  $('#button').click(function() {
        $("#form").toggle('slow', function(){
        });
  });
    var seat = $('.seat');

$('.seat').on('mouseover',function(){
    $(this).css('opacity', '0.7');
});
$('.seat').on('mouseleave',function(){
    $(this).css('opacity','1');
});
    var formObjects ={name:"",
                      phone:"",
                      age:"",
                      email:"",
                      movie:""};


});
