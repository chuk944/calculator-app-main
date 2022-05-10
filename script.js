let display = document.getElementById('displayId');
let dispL = document.getElementById('head1');
let dispM = document.getElementById('head2');
let dispR = document.getElementById('head3');
let equalBlack = document.getElementById('equal');

let newTheme = document.querySelector(':root');
let operator = false;
let comma = false;
let answer = 0;
document.getElementById('themeSwitch').value = 1;

let buttons = Array.from(document.getElementsByClassName('griditem'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'RESET':
        display.innerText = '';
        operator = false;
        comma = false;
        break;

      case '+':
      case '-':
      case '*':
      case '/':
        // Convert answer with Commas back to usable number string
        if (comma === true) {
          display.innerText = answer.toFixed(2);
          comma = false;
        }
        // Do not duplicate operators
        if (operator === true) {
          break;
        } else {
          operator = true;
          display.innerText += e.target.innerText;
          break;
        }

      case '=':
        try {
          let userInput = display.innerText;
          // Display output answer with commas
          display.innerText = Function('return ' + userInput)().toLocaleString(
            'en-US'
          );
          // Answer without commas
          answer = Function('return ' + userInput)();
          // Overflow prevention
          if (answer > 999999999999 || answer < -999999999999) {
            display.innerText = 'Overflow';
            break;
          }
          operator = false;
          comma = true;
        } catch {
          display.innerText = 'Error';
        }
        break;
      case 'DEL':
        // Delete answer
        if (comma === true) {
          display.innerText = '';
          comma = false;
        }
        // Delete last number entered
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
        operator = false;
    }
  });
});

const theme = () => {
  switch (document.getElementById('themeSwitch').value) {
    case '1':
      // Background
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue1',
        'hsl(222, 26%, 31%)'
      );
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue2',
        'hsl(223,31%,20%)'
      );
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue3',
        'hsl(224, 36%, 15%)'
      );

      // Keys
      newTheme.style.setProperty(
        '--desaturatedDarkBlue1',
        'hsl(225, 21%, 49%)'
      );
      newTheme.style.setProperty(
        '--desaturatedDarkBlue2',
        'hsl(224, 28%, 35%)'
      );

      newTheme.style.setProperty('--red', 'hsl(6, 63%, 50%)');
      newTheme.style.setProperty('--darkRed', 'hsl(6, 70%, 34%)');

      newTheme.style.setProperty('--lightGrayishOrange', 'hsl(30, 25%, 89%)');
      newTheme.style.setProperty('--grayishOrange', 'hsl(28, 16%, 65%)');

      //Text
      newTheme.style.setProperty('--veryDarkGrayishBlue', 'hsl(221, 14%, 31%)');
      newTheme.style.setProperty('--white', '#fff');

      display.classList.remove("addYellow");
      dispL.classList.remove("addYellow");
      dispM.classList.remove("addYellow");
      dispR.classList.remove("addYellow");
      equalBlack.classList.remove("addBlack");

      display.classList.remove("addBlack");
      dispL.classList.remove("addBlack");
      dispM.classList.remove("addBlack");
      dispR.classList.remove("addBlack");

      break;

    case '2':
      // Background
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue1',
        'hsl(0, 0%, 90%)'
      );
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue2',
        'hsl(0, 5%, 81%)'
      );
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue3',
        'hsl(0, 0%, 93%)'
      );

      // Keys
      newTheme.style.setProperty(
        '--desaturatedDarkBlue1',
        'hsl(185, 42%, 37%)'
      );
      newTheme.style.setProperty(
        '--desaturatedDarkBlue2',
        'hsl(185, 58%, 25%)'
      );

      newTheme.style.setProperty('--red', 'hsl(25, 98%, 40%)');
      newTheme.style.setProperty('--darkRed', 'hsl(25, 99%, 27%)');

      newTheme.style.setProperty('--lightGrayishOrange', 'hsl(45, 7%, 89%)');
      newTheme.style.setProperty('--grayishOrange', 'hsl(35, 11%, 61%)');

      //Text
      newTheme.style.setProperty('--veryDarkGrayishBlue', 'hsl(60, 10%, 19%)');
      newTheme.style.setProperty('--white', '#fff');
      
      display.classList.remove("addYellow");
      dispL.classList.remove("addYellow");
      dispM.classList.remove("addYellow");
      dispR.classList.remove("addYellow");
      equalBlack.classList.remove("addBlack");

      display.classList.add("addBlack");
      dispL.classList.add("addBlack");
      dispM.classList.add("addBlack");
      dispR.classList.add("addBlack");

      break;

    case '3':
      // Background
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue1',
        'hsl(268, 75%, 9%)'
      );
      newTheme.style.setProperty(
        '--veryDarkDesaturatedBlue2',
        'hsl(268, 71%, 12%)'
      );
      newTheme.style.setProperty('--veryDarkDesaturatedBlue3', '');

      // Keys
      newTheme.style.setProperty(
        '--desaturatedDarkBlue1',
        'hsl(281, 89%, 26%)'
      );
      newTheme.style.setProperty(
        '--desaturatedDarkBlue2',
        'hsl(285, 91%, 52%)'
      );

      newTheme.style.setProperty('--red', 'hsl(176, 100%, 44%)');
      newTheme.style.setProperty('--darkRed', 'hsl(177, 92%, 70%)');

      newTheme.style.setProperty('--lightGrayishOrange', 'hsl(268, 47%, 21%)');
      newTheme.style.setProperty('--grayishOrange', 'hsl(290, 70%, 36%)');

      //Text
      newTheme.style.setProperty('--veryDarkGrayishBlue', 'hsl(52, 100%, 62%)');
      newTheme.style.setProperty('--white', '');

      display.classList.add("addYellow");
      dispL.classList.add("addYellow");
      dispM.classList.add("addYellow");
      dispR.classList.add("addYellow");
      equalBlack.classList.add("addBlack");

      display.classList.remove("addBlack");
      dispL.classList.remove("addBlack");
      dispM.classList.remove("addBlack");
      dispR.classList.remove("addBlack");

      
      break;

    default:
      alert('Error');
  }
};
