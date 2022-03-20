/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

//Build an array with 8 items
let houseItems = ["Television", "GameCube", "Guitar", "Amp", "Computer", "Effects Pedal", "Speakers", "Monitor"];
console.log("Here are a few items around the house: ", houseItems);

//Remove the last item houseItems contains the adjusted array and temp contains the item removed
let temp = houseItems.pop();
console.log("Remove the last item: ", houseItems);

//Add the last item (temp) as the first item on the array 
houseItems.unshift(temp);
console.log("Add the removed last item back as the first item: ", houseItems);

// Sort the items by alphabetical order
houseItems.sort();
console.log("Sorted in alphabetical order: ", houseItems);

// Use the find() method to find a word over 5 char long in the array
const longWord = houseItems.find(item => item.length > 5);
console.log("Using find to pick out word over 5 char long: ", longWord);

// Use the find() method to find a word exactly 6 char long in the array
const fiveLetterWord = houseItems.find(item => item.length === 6);
console.log("Using find to pick out word exactly 5 char long: ", fiveLetterWord);

//Use the find() method to find Effects Pedal
const epWord = houseItems.find(item => item === "Effects Pedal");
console.log("Using find to pick out Effects Pedal from the list: ", epWord);

// Remove the 5 char word you found using the find() method from the array.
const filteredArray = houseItems.filter(item => item !== fiveLetterWord);
console.log("Removing the word with 5 char using filters leaves original array untouched: ", filteredArray);

//Removing Effects Pedal from the array using the find() method from the array
houseItems.splice(houseItems.indexOf(epWord),1);
console.log("Removing Effects Pedal from the original array: ", houseItems);