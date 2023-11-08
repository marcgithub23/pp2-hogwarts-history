![Hogwarts History logo](documentation/hogwarts-history-logo.png)

---

# **HOGWARTS HISTORY**

The Hogwarts History web quiz app is for Potterheads, fans of the Harry Potter book series, who wish to have fun and test their knowledge of the Potterverse and the Wizarding World conjured by the author J.K. Rowling, as well as to prove to a certain Miss Hermione Granger that they have indeed read the textbook called "Hogwarts: A History".

The website can be accessed by this [link](https://marcgithub23.github.io/pp2-hogwarts-history/)

![Responsive mockup](documentation/responsive-mockup.png)

---

## USER STORIES

### As a user:

- I want to immediately understand how the web quiz app works without difficulty through intuitive user interface design and controls.
- I want to know if I have entered the correct username to start the quiz and receive an alert message if not.
- I want to get immediate feedback on whether I selected the correct answer, and if not, I want to know which one was the correct answer straight away.
- I want to be able to click next and move on to the next question, as well as be able to quit and go back to the home screen at any point during the quiz.
- I want to be able to know my progress during the quiz and find out which question I'm on out of the total number of questions.
- I want to find out my total score at the end of the quiz, as well as have the ability to play again or go back to the home screen.

---

## Features

### Home Screen Display

![Home screen display](documentation/home-screen-display.png)

- The header on top contains the title of the web quiz app and the logo.
- The display contains a brief introduction on what the quiz is about, calling them to action to start the quiz and test their knowledge.
- It contains a text input where users can enter their desired username.
- It contains a start button to start the quiz. An alert message pops up to prompt users to enter a username if left blank. Another alert message pops up if users enter an invalid username with special characters. Only alphanumeric values are allowed and space in between, but front and end trailing spaces are trimmed.
- The footer contains an icon that links to my GitHub page, which will open it in a new tab, as well as copyright and a disclaimer about educational purposes only.

### Quiz Screen Display

![Quiz screen display](documentation/quiz-screen-display.png)

- The display contains both header and footer as the home screen.
- It displays the quiz progress, question, buttons for four different answer options, and the next and quit buttons.
- The next button is initially hidden and only shows when users have selected an answer.
- If the answer selected is correct, the button changes its colour to green.
- If the answer selected is wrong, the selected button changes its colour to red and the button containing the correct answer changes its colour to green.
- Users cannot re-select a different answer once they have selected an answer button. They can only click the next or quit button.
- If users click quit, an alert message pops up to ask them to confirm that they want to quit. If they click OK, they are brought back to the home screen display.
- If users click next, the next question is displayed along with its four different answer options. The question progress also updates and hides the next button again. After answering the last question, the next button brings users to the results screen display.

### Results Screen Display

![Results screen display](documentation/results-screen-display.png)

- The display contains both header and footer as the home and quiz screens.
- It contains a template literal message that includes the entered username, the total score achieved out of the total questions, the percentage, and a message depending on the grade achieved.
- It contains a play again button that will restart the quiz, reshuffle the questions, and re-initialise the quiz progress and score to 1 and 0 respectively.
- It also contains a home button that will bring users back to the home screen.

---

## Flowchart

The below flowchart shows the logic of the web quiz app:

![Flowchart](documentation/flowchart.png)

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used to build the foundation of this website.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) was used to format and style the website.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) was used to organise the items symmetrically on the website.
- [JavaScript](https://www.w3schools.com/js/) was used to add interactivity and code functions needed to run the web quiz app.
- [Canva](https://www.canva.com/) was used to create flowchart and wireframes for the website.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of this website.
- [GitHub](https://github.com/) was used to host the code of this website.
- [GitHub Pages](https://pages.github.com/) was used to deploy the website.
- [Official W3C Validator](https://validator.w3.org/) was used to validate the HTML file.
- [Official W3C Jigsaw Validator](https://jigsaw.w3.org/css-validator/) was used to validate the CSS file.
- [Official JSHint validator](https://jshint.com/) was used to validate the JS file.

---

## Design

### Colour Scheme

![Colour palette](documentation/colour-palette.png)

- The above colour palette was used for the colour scheme of the website. It is a colour gradient from beige (primary colour) to brown (secondary colour), reminiscent of the light and dark academia aesthetics, which are appropriate for a literary trivia quiz on the Harry Potter series.
- Beige:
    - Body background colour: #ddd5c6
    - Footer background colour: #d0bfad
    - Container background colour: #c3a894
- Footer GitHub icon link colour: #b7927c
- Brown:
    - Answer buttons background colour: #aa7b63
    - Start, next, and quit buttons background colour: #904e31
- Green for correct answer: #26f42d
- Red for wrong answer: #f40f0f

### Typography

The following family fonts have been imported from Google Fonts:

- Crimson Text for h1 heading
![Crimson text font](documentation/crimson-text-font.png)
- Changa for h2 heading
![Changa font](documentation/changa-font.png)
- Alegreya Sans for the rest of the elements (i.e., p, button, etc.)
![Alegreya sans font](documentation/alegreya-sans-font.png)

### Wireframes

#### Phone devices:

- [Phone home screen wireframe](documentation/phone-home-screen.png)
- [Phone quiz screen wireframe](documentation/phone-quiz-screen.png)
- [Phone results screen wireframe](documentation/phone-results-screen.png)

#### Tablet devices:

- [Tablet home screen wireframe](documentation/tablet-home-screen.png)
- [Tablet quiz screen wireframe](documentation/tablet-quiz-screen.png)
- [Tablet results screen wireframe](documentation/tablet-results-screen.png)

#### Laptop or desktop devices:

- [Laptop or desktop home screen wireframe](documentation/laptop-home-screen.png)
- [Laptop or desktop quiz screen wireframe](documentation/laptop-quiz-screen.png)
- [Laptop or desktop results screen wireframe](documentation/laptop-results-screen.png)

---

## Testing

Tests done are documented in the [TESTING.md](TESTING.md) file.

## Deployment

### Deployment to GitHub Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/marcgithub23/pp2-hogwarts-history), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://marcgithub23.github.io/pp2-hogwarts-history/)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/marcgithub23/pp2-hogwarts-history.git`

- Alternatively, if you use Gitpod, you can [click here](https://gitpod.io/#https://github.com/marcgithub23/pp2-hogwarts-history), which will start the Gitpod workspace for you.

---

## Credits

### Coding

- The title icon is from flaticon - [Education icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/education).
- Favicon generated from https://favicon.io/
- [Fontjoy](https://fontjoy.com/) was used to find font pairings.
- Footer GitHub icon link from [Font Awesome](https://fontawesome.com/).
- The following YouTube tutorials were consulted whose codes were adapted to my specific use case:
    - [Build a Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k&list=WL&index=5&t=33s) by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
    - [How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8&list=WL&index=3&t=1821s) by [GreatStack](https://www.youtube.com/@GreatStackDev)
    - [How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY&list=WL&index=5) by [Brian Design](https://www.youtube.com/@briandesign)
- This [Stack Overflow thread](https://stackoverflow.com/questions/44825305/how-to-center-text-vertically-if-line-break-occurs) was consulted for how to centre a heading vertically with a line break.
- This [Stack Overflow thread](https://stackoverflow.com/questions/30035932/how-do-i-use-this-javascript-variable-in-html) was consulted for how to display a variable content in HTML using JavaScript.
- The following have been consilted for how to validate username input field:
    - [Check if string is Alphanumeric in JavaScript](https://javascript.plainenglish.io/check-if-string-is-alphanumeric-in-javascript-e325caa3ee) by Usman Haider
    - [Stack Overflow thread](https://stackoverflow.com/questions/13283470/regex-for-allowing-alphanumeric-and-space)
- [W3Schools](https://www.w3schools.com/jsref/met_win_confirm.asp) for how to add a confirm message before executing a button's action.

### Tools

- [Coolors](https://coolors.co/) for generating colour gradient palette.

---

## Future Implementations

- Add game categories with different sets of questions based on different book titles in the Harry Potter series.
- Implement a count-up timer feature.
- Compile all questions and answers in a JSON file.
- Shuffle answers feature

---

## Acknowledgements

Many thanks to [Juliia Konovalova](https://github.com/IuliiaKonovalova), my mentor, for pointing out mistakes in my code and showing me in the right direction to fix them. Without her help, my web quiz app would not be as functional as it is.