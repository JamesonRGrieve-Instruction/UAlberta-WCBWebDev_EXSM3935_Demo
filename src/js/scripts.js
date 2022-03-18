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
    // Splice takes 2 arguments: first is the index to remove from (inclusive), and second is how many things to remove after the target.
    names.splice(1,1);
    output(names);
    // If we want to merge arrays, we can concatenate them (kind of like strings... This totally isn't foreshadowing at all.)
    // Note that with concat, the method does not update either array, you need to reassign it somewhere.
    let moreNames = ["Robert", "Mary", "David", "Dan"];
    names = names.concat(moreNames);
    output(names);
    // If we want to remove a specific item from an array by value (as opposed to index), we can use splice combined with a search.
    names.splice(names.indexOf("Mary"),1);
    output(names);
    // If we want to sort the array, there's a method for that too.
    names.sort();
    output(names);

    // --- Value and Reference Types

    // This is a value type. When we assign a variable to another variable, we copy the value as a whole into the second one.
    // From there, we can change the first variable freely and the copy will continue to exist undisturbed.
    let firstName = "James";
    let secondName = firstName;
    firstName = "John";
    output(firstName + " " + secondName);

    // Arrays are reference types. When we assign a variable to a reference variable, it DOES NOT make a copy of the data.
    // Instead, it merely draws a second reference to the same data. Throughout the process below, there is only ever one array.
    // If we modify either variable, it modifies that single array. Therefore, both outputs are the same.
    let firstArray = [1, 2, 3, 4, 5, 6, 7, 8];
    let secondArray = firstArray.slice();
    // Start at second index (value 3), and remove 3 items (values 3, 4, 5). Remember that the first item is the zeroth index.
    firstArray.splice(2,3);
    output(firstArray + "  -  " + secondArray);

    // 2 dimmensional arrays can be likened to a bookcase or a spreadsheet.
    // When you want to pull a value out, you first index to the "shelf" number or "row" number, 
    // then index to the "box" number or "column" number.
    let my2D = [
    // Columns   0  1  2
    /* Row 0 */ [1, 2, 3], 
    /* Row 1 */ [4, 5, 6], 
    /* Row 2 */ [7, 8, 9]
    ];
    // When we reference a value, we put two sets of indexing brackets back to back in order to pick out a single item.
    // In this case, it's the second row (index 1), and the third item (index 2) which is the value 6.
    output(my2D[1][2]);
    // If we want to remove an item from a 2D array, we can operate on a single row as if it was a traditional array.
    my2D[1].splice(1,1);
    output(my2D);
}


