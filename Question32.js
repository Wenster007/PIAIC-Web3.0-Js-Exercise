let currentUsername = ["Ahmed", "Talha", "Hashir", "Zeeshan"];

let newUsername = ["Umair", "Ahmed", "Talha", "Ahad"];

for (var i=0; i<newUsername.length; i++){
    if (currentUsername.includes(newUsername[i])){
        console.log(currentUsername[i] + " is already reserved . Choose another username");
    } else {
        console.log("Username is available");
    }
}