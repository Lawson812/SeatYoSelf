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
            var name = $('#name').val();
            var email = $('#email').val();
            var age= $('#age').val();
            var phone=$('#phone').val();
            var movieName=$('#movieName').val();
            var reservations={};
            
            reservations[0]={name:name, email:email, age:age, phone:phone,movie:movieName};
           
            console.log(reservations);
            
        
            
           
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

//$('#info').val().push('infoArray');
    
});