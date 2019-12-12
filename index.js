import readlineSync from 'readline-sync';
import converter from 'scuffed-text';

let running = true;
while (running === true) {
  let userInput = readlineSync.question('Enter text to convert: ');
  const output = converter(userInput);
  console.log(output);

  userInput = readlineSync.question('Do you want to convert something else? (y/n): ');
  if (userInput === "y") {
    running = true;
  } else {
    console.log("Rip (┬┬﹏┬┬)");
    running = false;
  }
}
