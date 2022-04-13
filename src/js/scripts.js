async function main() {
    /*
        q01: Write a function that takes in a number. Return true if the number is even, and false if it is odd. 0 is even, for this purpose. IE:
        isEven(1) → false
        isEven(12) → true
        isEven(42585) → false
    */
   output(isEven(5));
}
function isEven(number) {
    let toReturn;

    if (number % 2 == 0) {
        toReturn = true;
    }
    else {
        toReturn = false;
    }

    return toReturn;
}

function isEvenUnstructured(number) {
    if (number % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


