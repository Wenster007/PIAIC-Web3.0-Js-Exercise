// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let places = [];
var decision = "y";

for (var i=0; decision !== "n"; i++){
    var nameOfPlace = prompt("Enter name of your favourite Place");
    places.push(nameOfPlace);

    decision = prompt("Do You want to add another place (y/n)").toLowerCase();
    console.log(decision);
}

console.log(places);