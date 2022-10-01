
function showMagician(magicianArray){
    for (var i=0; i<magicianArray.length; i++){
        console.log(magicianArray[i]);
    }
}

let magicialName = ["Ahmed", "Talha", "Hashir", "Hassan"];
let magicialNameCopy = magicialName.slice();
showMagician(magicialName);
console.log();

// 42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicianArray){
    for (var i=0; i<magicianArray.length; i++){
        magicianArray[i] = "The Great" + magicianArray[i];
    }
}

console.log("The copy Version");
make_great(magicialNameCopy);//This adds the great
showMagician(magicialNameCopy);//This prints the modified version.

console.log();
// 43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

console.log("The real version");
showMagician(magicialName);