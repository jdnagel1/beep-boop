$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // User Interface Logic
    // var userInput = $("input#input").val();
    // var translatedString = translateSentenceToPigLatin(userInput);
    $('.result').show();
    var userInput = parseInt($("#input").val());
    $('#original').text(userInput);
    var translatedString = convertToBeeps(userInput);
    $('#beepBoopTranslation').text(translatedString);
  });
  // console.log(isVowel(""));
});


// business logic

function convertToBeeps(num) {
 var beepToBoop = ["I'm sorry, Dave. I'm afraid I can't do that",'Boop','Beep'];
 var nums = [3,2,1]

  var neo = "";

  for (i = 0; i < beepToBoop.length; i++) {
    var key = beepToBoop[i];
    while (num >= nums[i]) {
      neo += key;
      num -= nums[i];
      console.log("Num is decreased: ", num)
    }
  }
 return neo;
}

// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     // User Interface Logic
//     var inputOne = $("input#input").val();
//     var inputTwo = numberToBeep(userInput);
//     $('.result').show();
//     $('#original').text(userInput);
//     $('#beepBoopTranslation').text(translatedString);
//   });
//
//
// // // Business logic
//   function convertToRoman(num) {
//    var romanToNum = ['M','CM','D','CD','C','XC','L','XL','X','IX',"Im sorry Dave. I'm afraid I can't do that",'Boop','Beep'];
//    var nums = [1000,900,500,400,100,90,50,40,5,4,3,2,1]
//    // var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
//
//     var roman = "";
//
//     for (i = 0; i < romanToNum.length; i++) {
//       var key = romanToNum[i];
//       // console.log("key: ", key)
//       // console.log("value: ", romanToNum[key]);
//       while (num >= nums[i]) {
//         roman += key;
//         num -= nums[i];
//         console.log("Num is decreased: ", num)
//       }
//     }
//    return roman;
//   }


// // Business logic
// function isVowel(character) {
//   if ((character === 'a') || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u') || (character === 'y')) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function findFirstVowel(word) {
//   var wordArray = word.split("");
//   for (var i = 0; i <= wordArray.length - 1; i++) {
//     var letter = wordArray[i].toLowerCase();
//     if (isVowel(letter)){
//       return i;
//     }
//   }
// }
//
// function addVowelSuffix(word) {
//   var newWord = word + 'way';
//   return newWord.toLowerCase();
// }
//
// function translateConsonant(word) {
//   var vowelLocation = findFirstVowel(word);
//   var startOfWord = word.slice(0, (vowelLocation));
//   var endOfWord = word.slice(vowelLocation);
//   var newWord = endOfWord + startOfWord + "ay";
//   return newWord.toLowerCase();
// }
//
// function translateSentenceToPigLatin(sentence) {
//   var translatedSentence = "";
//   var sentenceArray = sentence.split(" ");
//   for (var i = 0; i <= sentenceArray.length - 1; i++) {
//     var word = sentenceArray[i];
//     if (findFirstVowel(word) === 0){
//       translatedSentence += addVowelSuffix(word) + " ";
//     } else if(findFirstVowel(word) > 0){
//       translatedSentence += translateConsonant(word) + " ";
//     } else {
//       console.log("error in word");
//     }
//   }
//   translatedSentence = translatedSentence.charAt(0).toUpperCase() + translatedSentence.slice(1);
//   return translatedSentence;
// }
//
//
// // /^+$/gi
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     // User Interface Logic
//     var userInput = $("input#input").val();
//     var translatedString = translateSentenceToPigLatin(userInput);
//     $('.result').show();
//     $('#original').text(userInput);
//     $('#pigLatinTranslation').text(translatedString);
//   });
//   // console.log(isVowel(""));
// });
