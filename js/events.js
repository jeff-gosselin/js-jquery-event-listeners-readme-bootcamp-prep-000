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


$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
});
