async function main() {
    // This is where the code you're actually experimenting with goes.
    /*
    Write an input statement to get the name of the user, be sure to include a prompt! This field should be casted to type string (example: What is your name?: )
    
    Write an input statement to get the age of the user, be sure to include a prompt! This field should be casted to type number (example: What is your age? [Please enter a whole number[: )
    
    Write an input statement to get the if the user likes clowns, be sure to include a prompt! This field should be casted to type boolean (example: Do you like clowns? [please enter true or false]: )
    
    Your program should then output the following statement:
    “Hello {name}! I see you are {age} years old and on the question of clowns, you answered {boolean}.”
    
    Fill in the curly brackets of the statement with the information you received from the user.
    */

    let userName = await input("Please enter your name: ");
    let userAge = await input("Please enter your age: ");
    let userClowns = await input("Do you like clowns? Be honest (true/false): ");

    // Concatenation.
    output("Hello "+userName+"! I see you are "+userAge+" years old and on the question of clowns, you answered "+userClowns+".");
    
    // Template literal / string interpolation.
    output(`Hello ${userName}! I see you are ${userAge} years old and on the question of clowns, you answered ${userClowns}.`);

}


