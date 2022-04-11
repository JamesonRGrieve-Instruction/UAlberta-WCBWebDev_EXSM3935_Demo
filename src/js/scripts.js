async function main() {
    let prompt = "Please enter your name, or 'Exit' to quit: "
    let name = await input(prompt);

    // Below are sentinel-value loops (IE loop until a certain value is or isn't entered).
    // Loop while a condition is true.
    // Pre-test loop tests before the loop executes.
    while (name == "James") {
        output("Hi, James!");
        name = await input(prompt);
    }

    // Run once regardless of the condition state, then loop while a condition is true.
    // Post-test loop tests after the loop executes.
    do {
        output("Hello, Bob");
        name = await input(prompt);
    } while (name == "Bob");

    /*
    3: Please enter your name, or 'Exit' to quit: James

    9: Hi, James!

    10: Please enter your name, or 'Exit' to quit: Exit

    17: Hello, Bob

    18: Please enter your name, or 'Exit' to quit: Bob

    17: Hello, Bob

    18: Please enter your name, or 'Exit' to quit: Bob

    17: Hello, Bob

    18: Please enter your name, or 'Exit' to quit: Bob

    17: Hello, Bob

    18: Please enter your name, or 'Exit' to quit: Exit
    */


    // A for loop is just a while loop with a different syntax to make it easier to write (short-hand).
    let counter = 1; // Initialize
    while (counter <= 10) // Test
    {
        output(counter); // Process
        counter++; // Modify
    }

    // For loops are mainly used for iterative loops (a certain number of times) because using them for sentinel value or validation loops looks strange written out.
    for (let forCounter = 1 /* Initialize */; forCounter <= 10 /* Test */; forCounter++ /* Modify */) {
        output(forCounter); // Process
    }

    /*
    51: 1
    51: 2
    51: 3
    51: 4
    51: 5
    51: 6
    51: 7
    51: 8
    51: 9
    51: 10
    56: 1
    56: 2
    56: 3
    56: 4
    56: 5
    56: 6
    56: 7
    56: 8
    56: 9
    56: 10
    */
}


