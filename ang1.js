
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
    var arrayone = wordone.split("").sort();
    var arraytwo = wordtwo.split("").sort();

    console.log(myFunction(arrayone, arraytwo));
      function myFunction(a, b) {
        if (a.toString() === b.toString()){
          return "angram"

        } else {
          return "not anagram"
        }



      }

})
