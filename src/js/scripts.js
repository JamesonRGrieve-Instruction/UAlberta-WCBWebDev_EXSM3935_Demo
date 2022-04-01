async function main() {
    let menuChoice;
    do {
        // Output the menu.
        output("1. String Checker\n2. Integer Checker\n3. Year Checker\n4. Date Checker\n5. Quit Application");
        // Get input for the menu.
        menuChoice = await input("Please select an option: ");

        switch (Number(menuChoice)) {
            case 1:
                let stringInput = await input("Please enter a string: ");
                // Take in a string from the user, return true if it contains a number or false if it doesnt.
                if (checkString(stringInput)) {
                    output("Contains a number!");
                }
                break;
            case 2:
                let numberInput = await input("Please enter a number: ");
                // Take in a string from the user, return false if it contains any non-numeric characters or true if it doesnt.
                if (!checkNumber(numberInput)) {
                    output("Not a number!");
                }
                break;
            case 3:
                let yearInput = await input("Please enter a year: ");
                // Take in a string from the user, return true if it is a number between 1900 and the current year, or false if it isn't.
                if (!checkYear(yearInput)) {
                    output("Not a year!");
                }
                break;
            case 4:
                let dateInput = await input("Please enter a date in the format YYYY-MM-DD: ");
                // Take in a string from the user, return true if it is a date in the format YYYY-MM-DD where MM<=12 and DD<=31, and false if it isn't.
                if (!checkDate(dateInput)) {
                    output("Not a date!");
                }
                break;
            case 5:
                output("Goodbye!");
                break;
            default:
                output("That's not a valid menu choice.");
                break;
        }
    } while (menuChoice != 5);
}
function checkString()
// Take in a string from the user, return true if it contains a number or false if it doesnt.
{

}
function checkNumber()
// Take in a string from the user, return false if it contains any non-numeric characters or true if it doesnt.
{

}
function checkYear()
// Take in a string from the user, return true if it is a number between 1900 and the current year, or false if it isn't.
{

}
function checkDate()
// Take in a string from the user, return true if it is a date in the format YYYY-MM-DD where MM<=12 and DD<=31, and false if it isn't.
{

}