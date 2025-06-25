let age = 18;
if (age < 18) {
    console.log("You are an adult.:");
}
else if (age >=18 && age < 65) {
    console.log("you are an adult.");
}
else {
    console.log("You are  senior citizen.");
}

console.log("\n")


let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thurday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("Invalid day");
}