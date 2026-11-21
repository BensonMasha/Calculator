const args = process.argv.slice(2);
const a = Number(args[0]);
const op = args[1];
const b = Number(args[2]);

if (args.length !== 3 || Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Usage: node calc.js <number> <+|-|x|/> <number>");
  process.exit(1);
}

let result;

switch (op) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "x":
    result = a * b;
    break;
  case "/":
    if (b === 0) {
      console.log("Cannot divide by zero");
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.log("Unknown operator: " + op + ". Use + - x /");
    process.exit(1);
}

console.log(result);