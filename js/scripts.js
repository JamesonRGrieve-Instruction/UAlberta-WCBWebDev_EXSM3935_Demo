async function main() {
    // This is where the code you're actually experimenting with goes.
    
    let name = await input("Please enter your name: ");

    while (name != "Exit") 
    {
        output("Hello, "+name+"!");
        name = await input("Please enter your name: ");
    }
}


