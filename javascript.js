$(document).ready(function(){

//movie listing dropdown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });
//movie poster dropdown
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

    var reservations=[];

//click events Make the seats click and bring down the form modal

$('.available').on('click', function(e){

    //seatNum is the inner text of the seat that was clicked
  var seatNum = e.target.innerText;
//mySeat declares a variable to use to append the reservations names to the selected seat
  var mySeat= e.target;
//changes display of modal and makes form slide down
     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });
//empty object called person to store form values
       var person ={name:"",
       email: "",
       age:"",
       phone:"",
       movie:"",
       seat:""};
        $('.reserveButton').on('click',function(){
///takes form values places them inside of empty object 'person'
          person.name=$('#name').val();
          person.email=$('#email').val();
          person.age=$('#age').val()
          person.phone=$('#phone').val();
          person.movie=$('#movieName');
          person.seat=seatNum;

//unshifts new object 'person' into 'reservations[0]'
          reservations.unshift(person);
//loops through available seats, and the  newly created objects in the reservations array and
// matches the innertext of the available seat with the seat name in the object and if they match,
// it changes the class of that specific seat and turns off event handler
              $('.seat.available').each(function(x,num){
                reservations.forEach(function(thisSeat){

                  if(num.innerText===thisSeat.seat){
                    $(num).removeClass('available').addClass('taken').off('click');
                     mySeat.append(reservations[0].name);
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

});//doc.ready
