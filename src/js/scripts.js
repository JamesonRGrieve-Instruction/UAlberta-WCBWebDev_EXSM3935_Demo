async function main() {
    
    // 'let' defines a local variable. 
    // 'a' is the name of the variable and can be any characters including letters, underscores and numbers but cannot start with a number.
    // 'b' is the (optional) value to be assigned to the variable at declaration time (initialization). It can be a string, boolean, number, or another variable.
    // 'const' defines a local constant. Constants must be initialized and cannot be changed thereafter.
    // 'c' is the name of the constant and follows the same rules as 'a'.
    // 'var' defines a global variable that is not scoped to a code block. These aren't used very often anymore.
    // 'd' is the name of the variable and follows the same rules as 'a'.
    let a = "b";
    const c = "b";
    var d = "b";

    // 'if' defines a decision (true side). The code block immediately following the condition is owned by the if, and is what runs if said condition is true.
    // '()' delimits the condition for the decision. Conditions must evaluate to a boolean value (true/false). 
    if (a > c)
    {

    }
    // 'else' defines the false side of a decision, and is optional. The code block immediately following the else is owned thereby, and is what runs if the preceding if condition is false.
    else
    {

    }

    // 'for' defines a for loop.
    // 'e' defines the iterator variable that changes with every iteration through the loop.
    // The first section serves initialization.
    // '1' defines the initial value for 'e'.
    // The second section serves checking.
    // '10' in this case defines the end of the loop (a condition, must evaluate to true/false). Iteration will stop once this condition is false.
    // The third section serves modification.
    // '2' in this case defines the incrementation of 'e'. 2 will be added for every iteration of the loop.
    for (let e = 1; e < 10; e += 2)
    {

    }

    // This ia function call, and will call the function named 'f' with the argument value 'a'. The value of 'a' will get assigned to the parameter 'g'.
    f(a);
}

// 'function' defines a function declaration. The code block immediately following the parameter list is owned by the function and runs when the function is called.
// 'f' is the name of the function and follows the same rules as 'a'. 
// '()' delimit the parameter list, which are local variables that are initalized with argument values when the function is called.
// 'g' is a parameter, or input value.
// 'h' is a variable local to the function and only lives while the function runs.
// 'return' will output the value immediately following it from the function.
function f(g)
{
    let h;

    return h;
}