async function main() {
    /* 
    Expression: Similar to an English clause.
    Statement: Similar to an English sentence.
    Code Block: Similar to an English paragraph.
    Function: Similar to an English chapter.
    Program: Similar to an English book.

    let is a definition keyword, along with var and const. 
    let defines a locally scoped variable (within the current code block).
    const defines a locally scoped constant (cannot be changed once assigned).
    var assigns a global variable that will take up memory for as long as the program is running.

    Immediately following the definition keyword is the name of the variable/constant to be defined, and then optionally an assignment operator and expression.
    */
    let prompt = "Please enter your name, or 'Exit' to quit: ";
    /*
    When you write data directly in code, we call those "literals". 
    For example, the string on line 10 is a string literal.
    */

    let name = await input(prompt);

    // Concatenation: Gluing two strings together.
    output("Hello, "+name+"!");

    // Template Literal: A string with placeholder slots that get variables added.
    output(`Hello, ${name}!`);

    /*
    Operators allow multiple literals and variables to be combined to form complex expressions.
    Arithmetic Operators: + - * / % (addition, subtraction, multiplication, division, modulus).
    Relational Operators: > < >= <= == != === (greater, less, greater-equal, less-equal, equal, not-equal, identity).
    Logical Operators: ! || && ^ (not, or, and, xor).

    Operators Execute In This Order:
    Parentheses (including function parentheses)
    Logical Not
    Arithmetic
    Relational
    Logical (Other Than Not)
    */

    let userNumber = await input("Please enter a number: ");
    if(userNumber > 10)
    {
        output("That's bigger than 10!");
    }
    else if (userNumber == 10)
    {
        output("That's 10!");
    }
    else
    {
        output("That's smaller than 10!");
    }

    if(name == "Awesome" && userNumber == 10)
    {
        output("That's the magic combination! Good job!");
    }

    if (name != "Test")
    {
        output("Not test.");
    }
    if (!(name == "Test"))
    {
        output("Not test.");
    }
}


