// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName = "Ahmed Khan";
const upperCasePersonName = personName.toUpperCase();
const lowerCasePersonName = personName.toLowerCase();


console.log(personName);//displays our initial value
console.log(upperCasePersonName);//displays the upperCase 
console.log(lowerCasePersonName);//displays the lowerCase

console.log(getTitleCase(personName));//displays the titleCase 




//Now Creating a function for Title Case which is to get item in this format (First Name, I Am Ahmed Khan)
function getTitleCase(str) {

    str = str.toLowerCase();//converted all to lowerCase
    str = str.split(" ");//splitted into an array of words when ever (" ") appears.

    for (var i=0 ; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    str = str.join(" ");//will join all the words in the array adding a space in between them.

    return str;
}