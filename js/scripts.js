$(document).ready(function() {
  $('#beepForm').submit(function(event){
      event.preventDefault();
      var mintGum = $('input#number').val();
      stringCheese = [];
      pushIt(mintGum);
      checkMate();
      $("ul#answer").empty();
      answer();
      console.log(stringCheese);
    });

});

var stringCheese = [];
function pushIt(num){
  for(var i = 0; i <= num; i++){
    stringCheese.push("" + i);
  };
};

function checkMate(){
  var holdIt = "";
  for(var x = 0; x < stringCheese.length; x++){
    holdIt = stringCheese[x];
    if(holdIt.includes("3")){
      stringCheese[x] = "I'm sorry, Dave. I'm afraid i can't do that";
    }else if(holdIt.includes("2")){
      stringCheese[x] = "Boop!";
    }else if(holdIt.includes("1")){
      stringCheese[x] = "Beep!";
    };
  };
};

function answer(){
  for(var y = 0; y < stringCheese.length; y++){
    $('ul#answer').append("<li>" + stringCheese[y] + "</li>");
  };
};
