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

}


