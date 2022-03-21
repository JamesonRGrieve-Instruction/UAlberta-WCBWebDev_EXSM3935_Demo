async function main() {
    /*
    ☑ Use a 2D array to store your unique discount password and the discount % associated with it (for example: discount code 1 has a password of lowSupervisor and a value of 10%)

    ☑ When a discount code is entered, use an if statement to check if it is 0, in which case no password is needed, or 1-5, in which case a password is needed

    ☑ If a password is needed, prompt the user to enter the password, and check the input value against the stored password value (recall how to access elements in a 2D array)

    ☑ If a wrong password is entered, the program should shut down immediately
    */

    // If we want to get the password for 3, we can say discountPasswords[2][1] (2 being the third row, 1 being the second item). If we want to be double sure, we can check that discountPasswords[2][0] is equal to the coupon code in question.
    let discountPasswords = 
    [
        [1, "dog"],
        [2, "cat"],
        [3, "bird"],
        [4, "mouse"],
        [5, "horse"]
    ];
    // We'll set this to true if the discount code isn't needed, or if the password is correct.
    let discountValid = false;
    let totalCost = await input("Please enter the total cost of your order: ");
    let cash = await input("Please enter the amount of cash presented: ");
    let discountCode = Number(await input("Please enter the discount code (or 0 if none): "));
    // This has to be declared up here, otherwise (being a local variable) it will disappear after the switch.
    let discount; 
    let password;
    let debugMode = false;

    if (debugMode) output("Discount code: "+discountCode+", type: "+typeof discountCode);
    if (debugMode) output("discountPasswords Length: "+discountPasswords.length+". Contents: "+String(discountPasswords));
    // Based on our discountCode input, set our discount.
    // Check to see if the code is within the bounds of the array.
    if (discountCode > 0 && discountCode <= discountPasswords.length)
    {
        password = await input("You have entered a discount code that requires a password. Please enter it now: ");
        // Since our discount codes start at 1, and the array starts at 0, if we subtract 1 we should get our row number. This only works if the array is in the correct order, and if all codes are sequential numbers. Just in case, the second half of the condition checks that we're referencing the correct row.
        if (password == discountPasswords[discountCode-1][1] && discountCode == discountPasswords[discountCode-1][0])
        {
            discountValid = true;
        }
        // If the condition is false, then don't set discountValid (it is initialized to false).
    }
    else
    {
        // If the discount code is 0 (no code) then it's automatically valid.
        discountCode = true;
    }
    if (discountValid)
    {
        switch(discountCode)
        {
            case 1:
                discount = 0.1;
                break;
            case 2:
                discount = 0.15;
                break;
            case 3:
                discount = 0.25;
                break;
            case 4:
                discount = 0.35;
                break;
            case 5:
                discount = 0.4;
                break;
            default:
                discount = 0;
                break;
        // Don't forget your breaks!
        }
        // Debug outputs are only printed if debugMode is true.
        if (debugMode) output("Discount: "+discount);
        // Subtract our discount from 1 to get the remaining percentage of total cost, and multiply through.
        let actualCost = totalCost*(1-discount);
        if (debugMode) output("Actual Cost: "+actualCost);
        // Determine the amount of change.
        let change = cash-actualCost;
        if (debugMode) output("Change: "+change);
        // Give change, or yell at customer.
        if (change >= 0)
        {
            output("Your change is $"+change+".");
        }
        else
        {
            output("Insufficient Payment! Why are you trying to scam me?");
        }
    }
    
    
}


