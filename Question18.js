// Seeing the World: Think of at least five places in the world you’d like to visit.

var placesToVisit = ["Turkey", "Canada", "Switzerland", "America", "Japan"];


//Printing in original order
console.log("Original Order");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();

//Printing elements in alphabetical order without altering the orginial array
var exampleArray = placesToVisit.slice();
exampleArray.sort();
console.log("Sorted In Alphabetical Order");

for (var i=0; i<exampleArray.length; i++){
    console.log(exampleArray[i]);
}

console.log();

//showing that orginial array is still in its original position
console.log("Checking Original Order");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();

//printing elements in reverse alphabetical without changing the original array.
exampleArray.reverse();
console.log("Sorted In Reverse Alphabetical Order");

for (var i=0; i<exampleArray.length; i++){
    console.log(exampleArray[i]);
}

console.log();

//showing that orginial array is still in its original position
console.log("Checking Original Order Again");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();

//Reversing the order of the original array.
placesToVisit.reverse();

console.log("Reversed form of Original Array");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();


//Reversing it again to show that it will go back to its original position
placesToVisit.reverse();

console.log("Reversed form of Original Array reversed again and it gives us the initial array.");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();


//Sorting original array into alphabetical order
placesToVisit.sort();
console.log("Sorted Orginal Array in Alphabetical Order.");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();


//sorting in reverse alphabetical order and its original position will be changed
placesToVisit.reverse();
console.log("Sorted Orginal Array in Alphabetical Order.");
for (var i=0; i<placesToVisit.length; i++){
    console.log(placesToVisit[i]);
}

console.log();