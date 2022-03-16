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
}


