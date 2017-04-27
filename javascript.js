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



    var reservations=[];
    var takenSeats =[];

//seats click events
    $('.seat.available').click(function(){
  var seatNum = $(this).text();

        //var seat=$(this).id();
     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });

        var reservations=[];
        var seatTaken=[];
// reservation button
        $('.seat.available').click(function() {
          var seatNum= $(this).text();
        })

       // seat reservation info
        $('.reserveButton').on('click',function(){
            var nameInp = $('#name').val();
            var emailInp = $('#email').val();
            var ageInp = $('#age').val();
            var phoneInp =$('#phone').val();
            var movieNameInp =$('#movieName').val();
            var seatInp =$('.seat');

            reservations.push({name:nameInp, email:emailInp, age:ageInp, phone:phoneInp,movie:movieNameInp, seat: seatNum});
            console.log(reservations);
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
});
