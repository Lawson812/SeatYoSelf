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
       // I think this is a good starting point
        var reservations=[];
        $('.reserveButton').on('click',function(){
            var nameInp = $('#name').val();
            var emailInp = $('#email').val();
            var ageInp = $('#age').val();
            var phoneInp =$('#phone').val();
            var movieNameInp =$('#movieName').val();
            var seatInp =$('.seat');
            reservations.push({name:nameInp, email:emailInp, age:ageInp, phone:phoneInp,movie:movieNameInp});
             console.log(nameInp, seatInp);
           });


        $('.reserveButton').on('click',function (){
            var name = $('#name').val();
            var email = $('#email').val();
            var age= $('#age').val();
            var phone=$('#phone').val();

            var movieName=$('#movieName').val();

            seat.setAttribute('class', 'seat taken')

            $('#formModal').css('display','none');
        });

            var movieName=$('#movieName').val();
            var seat=$('.seat');
            reservations[0]={name:name, email:email, age:age, phone:phone,movie:movieName};

            var reservationInfo = document.createElement('p');
            var thisSeat=document.getElementById;
            reservationInfo.innerText ="Name: " + name;
            thisSeat.appendChild(reservationInfo);


            $('#formModal').css('display','none');


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
