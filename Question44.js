function itemAdderOnSandwitch(itemsArray){
    console.log("You have added the following items on the Sandwitch");

    for (var i=0; i<itemsArray.length; i++){
        console.log(itemsArray[i]);
    }
}

let itemsOnSandwitch = ["Mayonise", "Halapenos", "Olives", "Cucumber"];

itemAdderOnSandwitch(itemsOnSandwitch);