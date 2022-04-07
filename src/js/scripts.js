async function main() {
    // If a variable is like a box with a label containing data...
    let myVariable = "Hello";

    // ...a 1 dimmensional array is like a shelf with a label, containing numbered boxes (starting at 0), each containing data...
    //               0        1      2      3
    let myArray = ["Hello", "How", "Are", "You"];

    // ...and a 2 dimmensional array is like a bookcase with a label, containing numbered shelves, containing numberered boxes, each containing data. 
    let my2D = 
    [         /* 0       1        2      3       4 */
    /* 0 */    ["Hi", "Hello", "Howdy"],
    /* 1 */    ["Bye", "Goodbye", "Cya"],
    /* 2 */    ["Who", "What", "When", "Where", "Why"],
    /* 3 */    ["How"]
    ];

    output(myVariable);
    output(myArray[2]);
    output(my2D[2][3]);
    output(my2D);

    output("-----", "meta");
    output("Start: "+myArray);
    myArray.push("Cool");
    output("Pushing Cool: "+myArray);

    output("-----", "meta");
    myArray.unshift("Uncool");
    output("Unshifting Uncool: "+myArray);

    output("-----", "meta");
    let shifted = myArray.shift();
    output("Shifting: "+myArray);
    output(shifted+" got shifted!");

    output("-----", "meta");
    let popped = myArray.pop();
    output("Popping: "+myArray);
    output(popped+" got popped!");

    output("-----", "meta");
    myArray.splice(1,1);
    output("Splicing: "+myArray);
    myArray.splice(1,2,"These", "Are", "New", "Items");
    output("Splicing and Replacing: "+myArray);

    output("-----", "meta");
    output("Does it include Cool?: "+myArray.includes("Cool"));
    output("Does it include Items?: "+myArray.includes("Items"));
    output("Huh?: "+myArray);

    output("-----", "meta");
    output(myArray.join(" - "));

    // Answering a questions, no loops yet!
    for (let i = 0; i < myArray.length; i++)
    {
        output((i+1)+": "+myArray[i]);
    }
}