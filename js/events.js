//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
    
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(event) {
    event = event.key;
    if (event === 'g') {
      alert('You have pressed the G key!');
    }
    return;
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}




$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();

});
