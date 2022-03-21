async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let countTo = Number(await input("How high would you like to count?: "));
    counter = 1;

    // While loops are structured identically to decisions (if statements).
    // Similarly to if statements, if the condition is false upon arrival, it gets skipped.
    // The main difference is that after the closing brace of a while statement, it will check the condition again, forever until it is false.
    // This means that it is EXTREMELY important that something in the condition be modified inside the loop to avoid infinite loops. 
    while (counter <= countTo)
    {
        output(counter);
        counter = counter + 1;
    }

    // The difference between a do-while loop and a while loop is a do-while loop is a post-test and a while loop is a pre-test.
    // This means that the do-while loop will always run at least once EVEN IF the condition is false upon arrival.
    counter = 1;
    do 
    {
        output(counter);
        counter = counter + 1;
    } while (counter <= countTo);

}


