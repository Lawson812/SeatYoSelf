$(document).ready(function(){

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
//Make the seats click and bring down the form modal
    $('.seat').click(function(){

     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });
        $('.reserveButton').on('click',function(){
            $('#formModal').css('display','none');
        });
});

$('.reserveButton').on('click', function (){
  var name = $('#name').val();
  var number = $('#number').val();
  var age = $('#age').val();
  var email = $('#email').val();
  var movie = $('#movie').val();
  console.log(name + ' '+ number + ' ' +age +' '+ email +' '+ movie);
})

//back to top button
    var infoArray=[];
    $('.backToTop').click(function(){
        $('html, body').animate({
    scrollTop: ($('.header').offset().top)
},500);
    });

//$('#info').val().push('infoArray');

});
