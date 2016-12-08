
var prompt = require('prompt');
//

prompt.message = ("");


prompt.start();
prompt.get({

    properties: {
      firstword: {
        description: ("Enter a word")
      },
      secondword: {
        description: ("Enter another word")
      }
    }
  },
  function(err, result) {
    if (err) {
      return onErr(err);
    } else {
      var wordone = result.firstword;
      var wordtwo = result.secondword;

    }
    var arrayone = wordone.split("");
    var arraytwo = wordtwo.split("");
    var arraydup = arraytwo.length;
    console.log(myFunction(arrayone, arraytwo));
      function myFunction(a, b) {
        for (i=0; i<a.length; i++) {
          for (x = 0; x<b.length; x++){
           if (a[i] === b[x]) {
              b.splice(x,1)

              }
          }
        } 
        if(arraytwo.length > 0 || (arrayone.length != arraydup)){
          return "pah - not an anagram!"
          } else {
          return "anagram!";
        }
      }

})
