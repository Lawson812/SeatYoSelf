$(document).ready(function(){

    //movie listing dropdown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });
//change opacity of seats on hover
    
$('.seat.available').on('mouseover',function(){
    $(this).css('opacity', '0.7');
});
$('.seat.available').on('mouseleave',function(){
    $(this).css('opacity','1');
});


    
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
     

        $('.reserveButton').on('click',function (){
            var name = $('#name').val();
            var email = $('#email').val();
            var age= $('#age').val();
            var phone=$('#phone').val();
            var movieName=$('#movieName').val();                       

            seat.setAttribute('class', 'seat taken')
            
            $('#formModal').css('display','none');
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