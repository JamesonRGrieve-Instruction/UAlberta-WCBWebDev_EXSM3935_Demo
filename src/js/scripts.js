async function main() {
    // This is where the code you're actually experimenting with goes.
    
    // For example purposes, think of a variable as a box with a label on the side.
    // The label in this case says "myVariable", and inside the box is 3.14.
    let myVariable = 3.14;

    let name1 = "Joe";
    let name2 = "Sally";
    let name3 = "Josh";

    // Instead of just labelling a bunch of boxes in a similar pattern, we can label a shelf and put a bunch of boxes on the shelf.
    // Most high level languages index arrays starting at 0. This means the "first" box has a index of 0, the "second" 1 and so forth.
    //             0       1       2
    let names = ["Joe", "Sally", "Josh"];
    // If we want to add a item to the array, we can push something into it (append) or unshift into it (prepend). 
    names.push("Sue");
    names.unshift("James");
    output(names);
    // If we want to remove an item from an array, we can pop something from it (from the end), shift something from it (from the beginning),
    // or splice something from it (from the middle).
    names.pop()
    names.shift()
    // Splice takes 2 arguments: first is the index to remove from (inclusive), and second is how many things to remove.
    names.splice(1,1);
    output(names);


}


