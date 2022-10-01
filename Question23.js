let car = "subaru";

console.log("I predict True");
if (car === "subaru"){
    console.log("Its True");
} else{
    console.log("Its False");
}

console.log();

let a = 10
console.log("I predict True");
if (a == "10"){
    console.log("Its True");
} else {
    console.log("Its False");
}

console.log();

let b = "55";
console.log("I predict true");
if (5 + "5" === b){
    console.log("Its True");
}else {
    console.log("Its false");
}

console.log();

let c = 15;
console.log("I Predict true");
if ("1" + 5 === c){
    console.log("Its True");//because of strict equality.It is string while c is a number.
} else {
    console.log("Its False");
}

console.log();

let d = 11;
console.log("I Predict false");
if (10 + "1" == d){
    console.log("Its true");
} else {
    console.log("Its False");
}