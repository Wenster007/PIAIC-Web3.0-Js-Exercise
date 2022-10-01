// 15 )Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.




let guestList = ["Ahmed", "Talha", "Hashir", "Zeeshan"];

//As talha is not coming so removing him.
guestList.splice(1,1);//starting at index 1 and deleting 1 element.

guestList.push("Haroon");//Added Haroon into the list.

console.log();

for (var i=0; i<guestList.length; i++){
    console.log(guestList[i] + " You are invited for Dinner on this Friday.");
}

console.log();
console.log("Hurray! You found a bigger dinner Table. Invite 3 more People");
console.log();

//16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//Adding one guest at the beginning of the list
guestList.unshift("Ali");

//Adding at the middle at index 2
guestList.splice(2,0,"Umair");

//Adding at the end
guestList.push("Noman");

console.log("Invited 3 More people");

console.log();
console.log("You can invite only 2 people to dinner.");
console.log();
// 17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.


for (var i=0 ; guestList.length > 2; i++){
    var removePeople = guestList.pop();
    console.log(`${removePeople} , I am really sorry but i cant invite you for dinner.`);
}

console.log();

for (var i=0; i<guestList.length; i++){
    console.log(guestList[i] + " you are still invited for dinner.");
}