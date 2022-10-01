// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let a = 15;
console.log("I Predict true");
if ("15" == a){
    console.log("Its true");
} else {
    console.log("Its False");
}

console.log();

let b = "Ahmed";
console.log("I predict True");
if ("Ahmed" == b){
    console.log("Its True");
} else {
    console.log("Its False");
}

console.log();

let c = "ahmed";
console.log("I Predict true");
if ("Ahmed".toLowerCase === c){//its false because we have not added brackets at the end of the function.
    console.log("Its True");
} else {
    console.log("Its False");
}

console.log();

let d = 24;
console.log("I predict true");
if (2 + "4" >= d){
    console.log("Its true");
}else {
    console.log("Its False");
}

console.log();

const myArray = [1, 2, 3, 4, 5];
if (myArray.includes(5)){
    console.log("It consists of 5");
} else {
    console.log("Does not exists.");
}

console.log();

if (myArray.includes(7)){
    console.log("It consists of 7");
} else {
    console.log("Does not exists.");
}