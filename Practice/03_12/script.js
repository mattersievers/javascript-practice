/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */
import Backpack from './Backpack.js';
import EntertainmentCenter from './EntertainmentCenter.js';

const newPack = new Backpack(
    "MyPack",
    123,
    "Yellow",
    7,
    36,
    36,
    false
);

const myEntertainment = new EntertainmentCenter(
    "Black",
    167,
    487,
    26,
    13,
    30,
    15,
    false,
    false,
    ["XBOX One", "GameCube", "Nintendo 64"]
);

console.log("The backpack object constructed: ", newPack);
console.log("The entertainment center object constructed: ", myEntertainment);
