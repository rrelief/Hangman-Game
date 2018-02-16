

//Here lie the rules of the game

  		// here lies an array of words for the the game
  		var words = ['cat', 'dog', 'tree','bear','lion','Panther',]

  		// This function is performing the action of choosing a random word, then log the outcome in the console 
  		function chooseword () {
  			var randomWord = Math.floor(Math.random()*words.length);
  			return words[randomWord];
  		}
  		console.log(chooseword(words));

  		// after random word is generated this will show blanks for the word (how to do I get the right amount of blanks?)
  		
  		function blanksForAnswer (randomWord) {
  			var result = "";
  			for (var i=0; i<randomWord.length; i++) {
  				result +="_ " ;
  			}
  			return result;
  		}
  		console.log(blanksForAnswer(words));

  		// Will replace blank string with letters
  		function alterAt(n,c,orginalString) {
  			var newString ="";
  			newString = orginalString.substr(0,n);
  			newString += c;
  			newString += orginalString.substr(n+1);
  			return newString;

  		}

  		// This is guessing and checking letter against the answer word
  		function guessLetter( letter, shown, answer ) {
  			var checkLetter = -1;
  			checkletter = answer.indexof(letter);
  			while (checkletter >= 0) {
  				shown = alterAt(checkLetter,letter,shown);
  				var pLetter = checkLetter;
  				checkLetter = answer.indexof(letter,pLetter);
  			}
  			// this will return the string even if it's not modified
  			return shown;

  		}

// checks letters

      function wrongLetter ( letter ) {
          $('#wrong-letters').append(
              $('<span/>').addClass('guessed-letter').text(letter));
      }

      function resetUI () {
          $('.body-part').remove();
          $('.guessed-letter').remove();
          $('.shown-letter').remove();
      }

      function drawWord( answer ) {
          for ( i in answer ) {
        $('.word-display').append(
            $('<span/>').addClass('shown-letter').html('&nbsp;'));
          }
      }

      function updateWord( answer ) {
          $k = $('.shown-letter:first');
          for ( i in answer ) {
        if ( answer.charAt(i) != '_' ) {
            $k.text( answer.charAt(i) );
        } else { 
            $k.html('&nbsp;');
        }
        $k = $k.next();
          }
      }

// Record Keeper --> Win or Loss functunality
