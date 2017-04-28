$(document).ready(function(){

    //movie listing dropdown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });

//change opacity of seats on hover
//mouseover function
$('.available').on('mouseover',function(){
    $(this).css('opacity', '0.7');
});
$('.seat.available').on('mouseleave',function(){
    $(this).css('opacity','1');
});
//declare empty array to place reservation objects 
        var reservations=[];    
//Make the seats click and bring down the form modal

$('.available').on('click', function(e){
  var seatNum = e.target.innerText;
  var thisthing= e.target;
  console.log(seatNum);
     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });
//declared empty object 'person' to place form values inside of, to be later cataloged in the 'reservations' array
       var person ={name:"",
       email: "",
       age:"",
       phone:"",
       movie:"",
       seat:""};
    //onclick events for reserve button in form modal
        $('.reserveButton').on('click',function(){
//onclick, inputs out the values of 'person' object with form data
          person.name=$('#name').val();
          person.email=$('#email').val();
          person.age=$('#age').val()
          person.phone=$('#phone').val();
          person.movie=$('#movieName');
          person.seat=seatNum;
//unshift places new person object into reservations array at [0]/
          reservations.unshift(person);
//each jQuery loop that iterates through all elements with classes both 'seat' and 'available', then iterates through the reservations array using a forEach loop and finds the inner text of the items with seat and available classes, and compares them with the seat objects in the reservation array and if they match, removes the available class, adds the taken class, and removes the click event. then appends the name value at reservations[0] to the targeted div. also changes display of modal to none 
              $('.seat.available').each(function(x,num){
                reservations.forEach(function(thisSeat){

                  if(num.innerText===thisSeat.seat){
                    $(num).removeClass('available').addClass('taken').off('click');
                     thisthing.append(reservations[0].name);
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