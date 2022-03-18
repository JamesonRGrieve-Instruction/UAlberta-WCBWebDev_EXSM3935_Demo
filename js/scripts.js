async function main() {
    // This is where the code you're actually experimenting with goes.
    
    /*
    Write a cashing program that takes three user inputs
        ✓ Total cost of goods
        ✓ Cash payment from the customer
        ✓ Discount codes (use a switch statement for this)
           ✓ Discount code input of 0 gives no discount
           ✓ Discount code input of 1 gives 10% off order
           ✓ Discount code input of 2 gives 15% off order
           ✓ Discount code input of 3 gives 25% off order
           ✓ Discount code input of 4 gives 35% off order
           ✓ Discount code input of 5 gives 40% off order
    ✓ If the total of cash payment from the customer subtracted by the total cost of goods is a negative amount, output the message “Insufficient Payment!”
    ✓ Otherwise, print out the amount of change that the customer should receive, after taking into account the discount code
    */

    let totalCost = await input("Please enter the total cost of your order: ");
    let cash = await input("Please enter the amount of cash presented: ");
    let discountCode = Number(await input("Please enter the discount code (or 0 if none): "));
    // This has to be declared up here, otherwise (being a local variable) it will disappear after the switch.
    let discount; 
    let debugMode = false;

    if (debugMode) output("Discount code: "+discountCode+", type: "+typeof discountCode);
    // Based on our discountCode input, set our discount.
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


