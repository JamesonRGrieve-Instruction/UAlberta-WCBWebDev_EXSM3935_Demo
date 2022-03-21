async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let countTo = Number(await input("How high would you like to count?: "));
    // Loops have 4 parts. Initialize, test, process and modify. 
    // Initialize: sets the iterative variable(s).
    // Test: tests the iterative variables against a condition.
    // Process: does whatever the loop needs to do.
    // Modify: changes the iterative variables to progress the loop towards its exit condition.


    // While loops are structured identically to decisions (if statements).
    // Similarly to if statements, if the condition is false upon arrival, it gets skipped.
    // The main difference is that after the closing brace of a while statement, it will check the condition again, forever until it is false.
    // This means that it is EXTREMELY important that something in the condition be modified inside the loop to avoid infinite loops. 
    output("While Loop: ");
    counter = 1; // Initialize.
    while (counter <= countTo) // Test.
    {
        output(counter); // Process.
        counter = counter + 1; // Modify.
    }

    // The difference between a do-while loop and a while loop is a do-while loop is a post-test and a while loop is a pre-test.
    // This means that the do-while loop will always run at least once EVEN IF the condition is false upon arrival.
    output("Do-While Loop: ");
    counter = 1; // Initialize.
    do 
    {
        output(counter); // Process.
        counter = counter + 1; // Modify.
    } while (counter <= countTo); // Test.

    output("For Loop: ");
    // A for loop is a while loop that is written in short hand. 
    for (counter = 1 /* Initialize. */; counter <= countTo /* Test. */; counter = counter + 1 /* Modify */)
    {
        output(counter); // Process.
    }

    output("For-Of Loop: ");
    // A for-of loop iterates over the elements of an array (read-only).
    let theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (element of theArray)
    {
        output(element);
    }
    // The old way to do this ^^ (or if you need to modify the array elements):
    for (let i = 0; i < theArray.length; i++)
    {
        output(theArray[i]);
    }

    // Everything thus far has been a counter-controlled or array-iterative loop. Loops can also be used as sentinel-value loops.
    // A sentinel value is essentially a value the user can enter during input to terminate a loop (IE "Enter a thing, or 'exit' to quit: ").
    let inputs = [];
    let userInput;
    do
    {
        userInput = await input("Please enter something to add to the list, or 'exit' to quit: ");
        if (userInput != "exit")
        {
            inputs.push(userInput);
        }
    } while (userInput != "exit");
    output(String(inputs));

    // Validation or conditional loops are used to ensure that a value that has been entered meets validation or other conditions.
    let userValidationInput;
    let validInput;
    do
    {
        userValidationInput = await input("Please enter a number between 1 and 10: ");
        if (Number(userValidationInput) >= 1 && Number(userValidationInput) <= 10)
        {
            validInput = true;
        }
        else
        {
            output("Invalid input, please try again.");
        }
    } while (!validInput);
}


