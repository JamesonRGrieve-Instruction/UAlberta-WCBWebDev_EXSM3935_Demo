async function main() {
    // Here is where we actually call the declared functions.   
    greeting();

    // When we call functions with parameters, we pass in argument values which get pushed into the parameter "variables".
    greetPerson("Joe");
    greetPerson("Sally");
    
    // The value returned from returnAValue() gets substituted into the calculation, and added to 2.
    let myVariable = returnAValue() + 2;
    output(myVariable);

    // Order of operations, the inner parentheses get resolved first, so returnAValue() substitutes its return in.
    // Then addTwoNumbers resolves and adds that value to 12, substituting the result in and assigning it to mySecondVariable.
    let mySecondVariable = addTwoNumbers(returnAValue(), 12);
    output(mySecondVariable);
}

// Below here are function declarations. The function isn't actually run until it is called.
// This is a basic function with no parameters (IE it will behave the exact same way every time it runs).
function greeting() {
    output("Hello!");
    output("How are you?");
    output("That's good.");
}

// This is a function with a parameter, which serves as a placeholder variable to be populated by an argument value.
function greetPerson(name) {
    output("Hello, "+name+"!");
    output("How are you?");
    output("That's good to hear, "+name+".");
}

// This is a parameterless function that returns a value.
function returnAValue()
{
    // The return keyword sends a value back to where the method was called.
    // That value then takes the place of the method call in any calculations.
    return 3.141592654;
}

// This is a function with parameters that returns a value. 
function addTwoNumbers(num1, num2)
{
    return num1 + num2;
}