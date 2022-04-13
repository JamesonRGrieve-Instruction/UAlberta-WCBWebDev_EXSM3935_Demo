async function main() {
    // Functions allow us to wrap multiple statements into a single name, and call them easier.
    printMenu();

    // Lines: 3, 12, 13, 14, 15, 16, then returns to 4 and ends.

    greetUser("James");
    greetUser("John");
    greetUser("Jane");

    output(giveMePi());

    output(firstLetterAndLength("James"));
    output(firstLetterAndLength("Antidisestablishmentarianism"));
}

// When printMenu() is called on line 3, it jumps into here and starts executing. When it's done, it returns to line 8 and continues.
function printMenu() {
    output("---Menu---");
    output("1. Do Stuff");
    output("2. Do More Stuff");
    output("3. Do Extra Stuff");
    output("0. Exit");
}

function greetUser(name)
{
    output("Hello, welcome to the program, "+name);
    output("I hope you're having a good day.");
}

// When a function with a return ends, the value returned takes the place of the function call (IE output(giveMePie()) becomes output(3.141592654)).
function giveMePi()
{
    return 3.141592654;
}

function firstLetterAndLength(string)
{
    let toReturn = [];
    let firstLetter = string[0];
    let length = string.length;
    toReturn.push(firstLetter);
    toReturn.push(length);
    return toReturn; 

    // One line for those curious.
    // return [string[0], string.length];
}