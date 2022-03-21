/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const mainContainer = document.querySelector("main");
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.alignItems = 'center';

//Creating basic function declaration that writes and article style includes purple color text and pink background
function articleWriter(container, words) {
const articleElement = document.createElement("article");
articleElement.style.display = 'flex';
articleElement.style.justifyContent = 'center';
articleElement.style.alignItems = 'center';
articleElement.style.color = 'rebeccapurple';
articleElement.style.backgroundColor = 'pink';
articleElement.style.width = '15vw';
articleElement.innerHTML = `
<h1> ${words} <h1>
`
container.append(articleElement);
}

articleWriter(mainContainer, "Some text here.")


//creating a basic function expression article manipulator has functions to change the text and background color.
const backgroundColor = 'purple'
const articleManipulator = {
    color: 'green',
    backgroundColor: 'blue',

    changeColor: function(){
        const articleElements = document.querySelectorAll("article");
        articleElements.forEach(item => item.style.color = this.color);
        console.log("Under method defined by standard function def, this.color: ", this.color);

        (function(){
            console.log("Under std function under std method, this.color: ", this.color)
        })();

        (() => {
            console.log("Under arrow function under std method, this.color: ", this.color)
        })();
    },

    changeBackground: (color) =>{
        const articleElements = document.querySelectorAll("article");
        articleElements.forEach(item => item.style.backgroundColor = color);
        console.log("");
        console.log("Under method arrow functions, this.color: ", this.color);
        console.log("Under method arrow functions, color: ", color);
        (function(){
            console.log("");
            console.log("Under std function under arrow method, this.color: ", this.color);
            console.log("Under std function under arrow method, color: ", color)
        })();

        (() => {
            console.log("");
            console.log("Under arrow function under arrow method, this.color: ", this.color)
            console.log("Under arrow function under arrow method, color: ", color)
        })();
    }

}

articleManipulator.changeColor();
articleManipulator.changeBackground(backgroundColor);