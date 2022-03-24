/*
Special functions:

print(string) - Outputs the string argument to the console (similar to console.log or Console.WriteLine).
await input(string) - Prompts the user for input using the string argument.
*/

async function main() {
    let userInput = await input("Please enter a value between 1 and 10: ");
    try
    {
        // If we fail validation...
        if(userInput < 1 || userInput > 10)
        {
            // Throw an exception to the "normal operating procedure".
            throw "That's not between 1 and 10. What're you doing, buddy?";
        }
    }
    // If we want to do something if an exception is thrown, we can follow up a try block with a catch block.
    // If an exception occurs, the try block logic flow breaks at that point, and picks up at the start of the catch block.
    // If you suffix a variable name in parentheses to the catch, it will store the exception in that variable and you can
    // output it in the catch block or perform logic on it.
    catch(error)
    {
        output("Uh-oh!: "+error);
    }
    // The finally block will run after the try/catch regardless of the exit method.
    // In 99% of cases, it's the same as putting the contents after the closing brace of the catch, except:
    // -Exiting a try via return.
    // -Exiting the catch block via another exception.
    // -Exiting the try block via a exception that is not caught.
    // In these cases, the finally block will run, whereas code after the closing brace of the try/catch will not.
    finally
    {
        output("Inside finally.");
    }
    output("After finally.");
}
main();
