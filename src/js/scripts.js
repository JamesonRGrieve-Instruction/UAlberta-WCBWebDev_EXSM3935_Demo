async function main() {
    // Functions allow us to wrap multiple statements into a single name, and call them easier.
    printMenu();
}

// When printMenu() is called on line 3, it jumps into here and starts executing. When it's done, it returns to line 8 and continues.
function printMenu() {
    output("---Menu---");
    output("1. Do Stuff");
    output("2. Do More Stuff");
    output("3. Do Extra Stuff");
    output("0. Exit");
}
