$(document).ready(function(){

    //movie listing dropdown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });

  $("#clickme").click(function(event) {
  $("#movie").slideToggle('slow');
});
//change opacity of seats on hover
//mouseover function
$('.available').on('mouseover',function(){
    $(this).css('opacity', '0.7');
});
$('.seat.available').on('mouseleave',function(){
    $(this).css('opacity','1');
});



//Make the seats click and bring down the form modal

    var reservations=[];
    var takenSeats =[];


// seats click events
$('.available').on('click', function(e){
  var seatNum = e.target.innerText;
var thisthing= e.target;
  console.log(seatNum);
     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });

       var person ={name:"",
       email: "",
       age:"",
       phone:"",
       movie:"",
       seat:""};
        $('.reserveButton').on('click',function(){

          person.name=$('#name').val();
          person.email=$('#email').val();
          person.age=$('#age').val()
          person.phone=$('#phone').val();
          person.movie=$('#movieName');
          person.seat=seatNum;
          reservations.unshift(person);
          console.log(thisthing);

        console.log(reservations)
              $('.seat.available').each(function(x,num){
                reservations.forEach(function(thisSeat){

                  if(num.innerText===thisSeat.seat){
                    $(num).removeClass('available').addClass('taken').off('click');
                     thisthing.append(reservations[0].name);

                    $('.taken').on('mouseenter', function(){
                      $('.resName').css('display', 'inline');
                    });
                    $('.taken').on('mouseout', function(){
                      $('.resName').css('display','none');
                    });

                  }
                  $('#formModal').css('display','none');
                });
              })
           });
      }); //end of click







//back to top button
    var infoArray=[];
    $('.backToTop').click(function(){
        $('html, body').animate({
    scrollTop: ($('.header').offset().top)
    },500);
    });
});
