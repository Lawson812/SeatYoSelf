$(document).ready(function(){

// slideDown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
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
//Make the seats click and bring down the form modal
    $('.seat').click(function(){

     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });
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
            // var reservationInfo = document.createElement('p');
            // var thisSeat=document.getElementById;
            // reservationInfo.innerText ="Name: " + name;
            // thisSeat.appendChild(reservationInfo);


            // $('#formModal').css('display','none');

        });




//back to top button
    var infoArray=[];
    $('.backToTop').click(function(){
        $('html, body').animate({
    scrollTop: ($('.header').offset().top)
},500);
    });



    });
