async function main() {
    // This is where the code you're actually experimenting with goes.
    
    /*
    Write a cashing program that takes three user inputs
        ✓ Total cost of goods
        ✓ Cash payment from the customer
        ✓ Discount codes (use a switch statement for this)
            Discount code input of 0 gives no discount
            Discount code input of 1 gives 10% off order
            Discount code input of 2 gives 15% off order
            Discount code input of 3 gives 25% off order
            Discount code input of 4 gives 35% off order
            Discount code input of 5 gives 40% off order
    If the total of cash payment from the customer subtracted by the total cost of goods is a negative amount, output the message “Insufficient Payment!”
    Otherwise, print out the amount of change that the customer should receive, after taking into account the discount code
    */

    let totalCost = await input("Please enter the total cost of your order: ");
    let cash = await input("Please enter the amount of cash presented: ");
    let discountCode = await input("Please enter the discount code (or 0 if none): ");


}


