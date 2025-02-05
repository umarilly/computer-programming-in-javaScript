
/**
 * Switch Statement in JavaScript
 */

let day = "Tuesday";


switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;

  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Mid-week working day");
    break;

  case "Friday":
    console.log("TGIF - Weekend is coming!");
    break;

  case "Saturday":
  case "Sunday":
    console.log("It's weekend!");
    break;

  default:
    console.log("Invalid day entered!");
}
