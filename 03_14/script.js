/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());


const frankenstein = new Book(
  "Frankenstein",
  "Mary Shelley",
  378, 
  true
);

console.log(frankenstein);

const dune = new Book(
  "Dune",
  "Frank Herbert",
  3289,
  false
);

console.log(dune);

const chocFact = new Book(
  "Charlie and the Chocolate Factory",
  "Roald Dahl",
  165,
  true
);

console.log(chocFact);

const huckFinn = new Book(
  "The Adventures of Huckleberry Finn",
  "Mark Twain",
  213,
  true
);

console.log(huckFinn);

const lastWords = new Book(
  "Last Words", 
  532,
  false
);

console.log(lastWords);