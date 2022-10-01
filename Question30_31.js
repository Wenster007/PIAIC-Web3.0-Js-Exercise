//30)

let userNames = ["admin", "ahmed", "talha", "hashir", "zeeshan"];

for (var i=0; i<userNames.length; i++){
    if (userNames[i] === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else{
        console.log("Hello "+userNames[i]+" thank you for logging in again.");
    }
}


// 31) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
if (userNames.length === 0){
    console.log("We need to find some users!");
}