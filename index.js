import chalk from "chalk";
import cowsay from "cowsay"

console.log(chalk.blue("hello world!"));
console.log(chalk.green("Green Hello World!"));


console.log(cowsay.say({
text: "I'm a mooodule",
e : "o0",
T : "U ",
}));


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500') //orange colour

console.log(error("Error!"));
console.log(warning("Warning!"));

const cowMassage = cowsay.say({
  text: "I'm mooodule!",
  e: "o0",
  T: "U "
});

console.log(chalk.green(cowMassage));


