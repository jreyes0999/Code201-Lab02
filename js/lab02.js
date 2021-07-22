const quiz = function aboutMeQuiz() {
  let name = prompt("I see you want to take the quiz! First, what is your name?");

  // while loop 
  while (name == null || name === '') {
    name = prompt("Please enter your name!");
  }

  alert("Answer the questions with a 'yes' or 'no'. You can also use 'y' or 'n'.");

  let correctGuesses = 0;

  let questions = ['Was I born in Memphis?', 'Am I 22 years old?', 'Did I graduate from Hogwarts School of Witchcraft and Wizardry?', 'Is my high school hobby osu!?', 'Do I have a rhythm game controller?', 'Guess a number between 1 & 20.', 'Name one of my friends that streams on Twitch.'];

  for (let i = 0; i < quiz.length; i++) {
    let guess = prompt(quiz[i]).toLowerCase();
    if (i === 6) {
      const friends = ['Melbo', 'Nemato', 'Tom', 'Bubba', 'Poco', 'Cortland'];
      let attempts = 6;
      while (attempts !== 0) {
        if (friends.includes(guess)) {
          alert(`Correct!\nYou could've entered any name in the list!:\n${friends}`);
          correctGuesses++;
          attempts = 0;
        }
        else {
          attempts--;
          if (attempts === 0) {
            alert(`Sorry! You're out of attempts.\nAny name from this array would have been correct: ${friends}`);
          }
          else {
            guess = prompt(`Wrong answer, try again!\n${questions[i]}\nAttempts left: ${attempts}`);
          }
        }
      }
    }

    else if (i === 11) {
      let chosenNum = Math.floor(Math.random() * 20 + 1);
      console.log(chosenNum);
      let attempts = 4;
      while (attempts !== 0) {
        if (parseInt(guess) === chosenNum) {
          alert("Correct!");
          correctGuesses++;
          attempts = 0;
        }
        else {
          attempts--;
          if (attempts === 0) {
            alert(`Sorry, you're out of guesses! The correct answer is ${chosenNum}.`);
          }
          else if (parseInt(guess) > chosenNum) {
            guess = prompt(`You guessed too high, try again!\n${questions[i]}\nAttempts left: ${attempts}`);
          }
          else {
            guess = prompt(`You guessed too low, try again!\n${questions[i]}\nAttempts left: ${attempts}`);
          }
        }
      }
    }

    else if (i === 2 || i === 4) {
      if (guess === 'n' || guess === 'no') {
        alert("Correct!");
        correctGuesses++;
      }
      else {
        alert("Incorrect!");
      }
    }
    else {
      if (guess === 'y' || guess === 'yes') {
        alert("Correct!");
        correctGuesses++;
      }
      else {
        alert("Incorrect!");
      }
    }
  }

  alert(`Thank you for taking my quiz ${name[0].toUpperCase() + name.substring(1).toLowerCase()}! You guessed ${correctGuesses} out of 7 questions correctly.`);

}

let button = document.querySelector('button');
button.addEventListener('click', quiz);
