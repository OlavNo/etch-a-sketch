const container = document.querySelector("#container");

const size = 16;

createGrid(size);

document.addEventListener("DOMContentLoaded", function() {
    addEffects();
});


const sizeButtons = document.querySelectorAll(".sizes");

// we use the .forEach method to iterate through each button
sizeButtons.forEach((button) => {
// and for each one we add a 'click' listener
button.addEventListener("click", () => {
    deleteGrid();
    createGrid(button.id);
    addEffects();
});
});  

const colorButtons = document.querySelectorAll(".colors");

// we use the .forEach method to iterate through each button
colorButtons.forEach((button) => {
// and for each one we add a 'click' listener
button.addEventListener("click", () => {
    addEffects(button.id);
});
});  



function deleteGrid() {
    const squares = document.querySelectorAll("#square");

    squares.forEach((square) => {
        square.remove();
    })
}

function createGrid(size) {
    for (var i = 0; i < size*size; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        content.id = "square";
        content.style.width =  100 / size + "%";
        container.appendChild(content);
    
    }
}

function addEffects(color='lightcoral') {
    const squares = document.querySelectorAll("#square");

    squares.forEach((myDiv) => {
        // Add event listener for mouseover event
        myDiv.addEventListener('mouseover', function() {
            myDiv.style.backgroundColor = color; // Change background color on hover
            myDiv.style.opacity = 1.0; // Change background color on hover
            myDiv.style.transform = 'scale(1.1)'; // Scale up the div on hover
            myDiv.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Add shadow on hover
            myDiv.style.border = "solid 2px lightgray";
        });
        
        // Add event listener for mouseout event
        myDiv.addEventListener('mouseout', function() {
            myDiv.style.backgroundColor = color; // Revert background color
            myDiv.style.opacity = 0.5; // Revert background color
            myDiv.style.transform = 'scale(1)'; // Revert scale
            myDiv.style.boxShadow = 'none'; // Remove shadow
            myDiv.style.border = "solid 1px lightgray";
        }); 
    });  
}

