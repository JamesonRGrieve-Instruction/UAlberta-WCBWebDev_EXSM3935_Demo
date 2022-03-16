async function main() {
    // This is where the code you're actually experimenting with goes.
    output("JavaScript is fun... Right..? Guys...?");

    //Number
    let myNumber = 41;
    //String
    let myString = "James";
    //Boolean
    let myBoolean = true; 
    
    /* Arithmetic Operators (Math)
    + (Addition) Sums the two operands.
    - (Subtraction) Gets the difference of the second operand from the first.
    * (Multiplication) Multiplies the two operands.
    / (Division) Gets the quotient of the second operand from the first.
    % (Modulus) Gets the remainder of division between the first and second operands.
    */

    /* Relational Operators (Comparison)
    > (Greater Than) Is the first operand larger than the second?
    >= (Greater Than, or Equal To) Is the first operand larger than or equal to the second?
    < (Less Than) Is the first operand smaller than the second?
    <= (Less Than, or Equal To) Is the first operand smaller than or equal to the second?
    == (Equal To) Is the first operand equal to the second?
    != (Not Equal To) Is the first operand not equal to the second?
    === (Identity) Is the first operand equal to the second, without implicit conversions?
    */

    /* Logical Operators 
    || (Or) Returns true if AT LEAST ONE of the operands is true.
    && (And) Returns true if BOTH operands are true.
    ! (Not) Returns the opposite of the SINGLE operand.
    ^ (Xor) Returns true if EXACTLY ONE operand is true.
    */

    // An expression is a set of variables, values and/or operators that evaluates to a single value. 
    // If a statement is a sentence and a code block is a paragraph, you can think of expressions similar to clauses (IE parts of sentences).

    /* Expression Evaluation Example
    let myInt = 42;
    let myDecimal = 3.14;
    myInt >= 40 || ((myDecimal < 3) || false)

    myInt >= 40 || ((false) || false)
    myInt >= 40 || (false)
    true || (false)
    true
    */
}
main();
