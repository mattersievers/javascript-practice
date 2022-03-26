/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
//import object array
import backpackObjectArray from "./components/data.js";

// Hardcoded object for a single backpack example.
// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

const content = (backpack) => {
  return `
  <figure class="backpack__image">
    <img src=${backpack.image} alt="" />
  </figure>
  <h1 class="backpack__name">${backpack.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      backpack.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${
      backpack.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      backpack.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      backpack.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      backpack.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      backpack.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>
`;
}

const main = document.querySelector(".maincontent");

//This maps through the object properties of each backpack object and creates an HTML article containing the backpack details using content function
const backpackList = backpackObjectArray.map((backpackObject) =>{
  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpackObject.id);
  newArticle.innerHTML = content(backpackObject);
  return newArticle
});

//This loops over the mapped list of backpack related HTML and appends it to the main HTML in the DOM
backpackList.forEach((backpack) =>{
  main.append(backpack);
})

const myArray = [1, 2, 3, 4]
myArray.forEach( (item, index) => {
    myArray[index] = ++item;
});

console.log(myArray)