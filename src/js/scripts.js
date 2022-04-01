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
function checkString(inputValue)
// Take in a string from the user, return true if it contains a number or false if it doesnt.
{
    let outputValue = false;
    const searchValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    /*
    for (let i = 0; i < searchValues.length; i++)
    {
        if (inputValue.contains(searchValues[i]))
        {
            outputValue = true;
        }
    }
    */
    for (item of searchValues)
    {
        if (inputValue.contains(item))
        {
            outputValue = true;
        }
    }
    return outputValue;
}
function checkNumber(inputValue)
// Take in a string from the user, return false if it contains any non-numeric characters or true if it doesnt.
{
    let outputValue = true;
    const searchValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    for (char of inputValue)
    {
        if (!searchValues.contains(char))
        {
            outputValue = false;
        }
    }
    return outputValue;
}
function checkYear(inputValue)
// Take in a string from the user, return true if it is a number between 1900 and the current year, or false if it isn't.
{
    /*
    let outputValue = false;
    if (Number(inputValue) >= 1900 && Number(inputValue <= new Date().getFullYear()))
    {
        outputValue = true;
    }
    return outputValue;
    */
    return Number(inputValue) >= 1900 && Number(inputValue <= new Date().getFullYear());
}
function checkDate(inputValue)
// Take in a string from the user, return true if it is a date in the format YYYY-MM-DD where MM<=12 and DD<=31, and false if it isn't.
{
    let outputValue = true;
    let inputDate = inputValue.split("-");
    // Validate Year
    if (!checkYear(inputDate[0]))
    {
        outputValue = false;
    }
    // Validate Month
    if (inputDate[1] < 1 || inputDate[1] > 12)
    {
        outputValue = false;
    }
    // Validate Day
    if (inputDate[2] < 1 || inputDate[2] > 31)
    {
        outputValue = false;
    }
    
    return outputValue;
}