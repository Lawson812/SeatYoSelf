$(document).ready(function(){

    //movie listing dropdown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });
//change opacity of seats on hover

$('.seat.available').on('mouseover',function(){
// slideDown movies
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });

// seat hover functions

$('.seat').on('mouseover',function(){
    $(this).css('opacity', '0.7');
});
$('.seat.available').on('mouseleave',function(){
    $(this).css('opacity','1');
});

    var formObjects ={name:"",
                      phone:"",
                      age:"",
                      email:"",
                      movie:""};

//Make the seats click and bring down the form modal
    $('.seat').click(function(){



    var availableSeats =[];
    var takenSeats =[];

//seats click events
    $('.seat.available').click(function(){

        var seat=$(this).id();
     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });

        var reservations={};
// reservation button

       // I think this is a good starting point

        $('.reserveButton').on('click',function(){
            var nameInp = $('#name').val();
            var emailInp = $('#email').val();
            var ageInp = $('#age').val();
            var phoneInp =$('#phone').val();
            var movieNameInp =$('#movieName').val();
            var seatInp =$('.seat');
            seatUnavailable = {
                nameInp:name,
                emailInp:email,
                phoneInp:phone,
                movieNameInp:movieName,
                seat:seat
            };


           reservations.push();
           changeClass();

         });




});


});

//back to top button
    var infoArray=[];
    $('.backToTop').click(function(){
        $('html, body').animate({
    scrollTop: ($('.header').offset().top)
},500);
    });



});
