/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const main = document.querySelector("body");
const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

let UpperColors = ["AntiqueWhite", "Aqua", "Aquamarine", "Azure", "BlanchedAlmond", "Blue", "Chocolate", "CornflowerBlue", "DarkCyan", "DarkOliveGreen",
 "DarkSlateBlue", "DimGrey", "GoldenRod", "Lavender", "LightSalmon", "LimeGreen", "MediumBlue", "MediumVioletRed", "OliveDrab", "PeachPuff", 
 "RebeccaPurple", "SaddleBrown", "SkyBlue", "SlateBlue", "SlateGray", "SpringGreen", "SteelBlue", "Tan", "Teal", "Tomato", "YellowGreen"]
const colors = UpperColors.map( (color) => {
    return color.toLowerCase();
});

// An event listener to draw a highlight around the entire grid when hovered over by mouse.
grid.addEventListener("mouseenter", (event)=>{
    grid.classList.add("highlightGrid");
    cells.forEach((cell)=>{
        cell.style.width = "5.5rem";
        cell.style.height = "5.5rem";
        cell.style.margin = "0.25rem";
    })
});
// Removes highlight when cursor leaves grid
grid.addEventListener("mouseleave", (event)=>{
    grid.classList.remove("highlightGrid");
    cells.forEach((cell)=>{
        cell.style.width = "6rem";
        cell.style.height = "6rem";
    })
});


//counter for color
let i=0;
cells.forEach((cell)=> {
    // An event listener to highlight each cell when you hover your mouse over it.
    cell.addEventListener("mouseover", (event) => {
        cell.style.boxShadow = "-2px 2px 4px white";
        cell.style.width = "6rem";
        cell.style.height = "6rem";
    });
    cell.addEventListener("mouseleave", (event) => {
        if(!cell.classList.contains("checked")){
            //if the cell has not been clicked,change background
            cell.style.backgroundColor = "hsl(0, 0%, 90%)";
        }
        cell.style.width = "5.5rem";
        cell.style.height = "5.5rem";
        cell.style.margin = "0.25rem";
        cell.style.boxShadow = "";
    });
    
    //An even listener to change the cell background color when clicked
    cell.addEventListener("mousedown", (event) => {
        cell.style.boxShadow = "1px -1px 6px black";
        //get current index of current cell and increases it by 1
        i = colors.indexOf(cell.style.backgroundColor) + 1;
    });
    cell.addEventListener("click", (event) => {
        cell.classList.add("checked");
        cell.style.boxShadow = "-2px 2px 4px white";
        cell.style.backgroundColor = colors[i];
        if(i<colors.length){i++}else{i=0};
    });

});

//an event listener to a keys w and e on the keyboard to navigate through color array to set the background color of the whole page
let j=0;

document.addEventListener("keyup", event => {
    if(event.key === 'w') {
        main.style.backgroundColor = colors[j];
        if(j>0){j--}
    }else if(event.key === "e"){
        main.style.backgroundColor = colors[j];
        if(j<colors.length){j++}
    }
});