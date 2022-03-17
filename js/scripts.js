async function main() {
    // This is where the code you're actually experimenting with goes.
    
    /* Decisions
    Decisions allow you to branch a program's logic flow based on the result of a boolean expression (one that evaluates to a boolean).
    One logic path will execute if the expression (called a condition) is true, and the other will execute if it is false.
    */

    // We can prompt the user for input by using "await input()", then store what they enter in a variable.
    let userInput = await input("Please enter a number: ");

    if(42<10)
    // This side runs if the condition is true!
    {
        let myNumber = 10;
        output(myNumber + " is a cool number.");
    }
    else 
    // This side runs if the condition is false!
    {
        output("False!");
    }

    // Everything before or after the decision runs either way.
    output("Either way!");


    let switchPrompt = await input("Please enter a number between 1 and 5 inclusive: ");
    // The switch will not do an implicit conversion, so make sure your data type is correct!
    // Switches only handle discrete values (IE can't use 'case >= 5', etc).
    switch(Number(switchPrompt))
    {
        case 1:
            output("You entered one!");
            break;
        case 2:
            output("You entered two!");
            break;
        case 3:
            output("You entered three!");
            break;
        case 4:
            output("You entered four!");
            break;
        case 5:
            output("You entered five!");
            break;
        default:
            output("You didn't read the instructions...");
            break;
    }
}


