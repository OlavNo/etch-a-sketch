const container = document.querySelector("#container");

const size = 64;

for (var i = 0; i < size*size; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.id = "square";
    content.style.width =  100 / size + "%";
    container.appendChild(content);

}

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#square");

    squares.forEach((myDiv) => {
        // Add event listener for mouseover event
        myDiv.addEventListener('mouseover', function() {
            myDiv.style.backgroundColor = 'lightcoral'; // Change background color on hover
            myDiv.style.transform = 'scale(1.1)'; // Scale up the div on hover
            myDiv.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Add shadow on hover
            myDiv.style.border = "solid 2px lightgray";
        });
        
        // Add event listener for mouseout event
        myDiv.addEventListener('mouseout', function() {
            myDiv.style.backgroundColor = 'rgba(0, 128, 128, 0.5)'; // Revert background color
            myDiv.style.transform = 'scale(1)'; // Revert scale
            myDiv.style.boxShadow = 'none'; // Remove shadow
            myDiv.style.border = "solid 1px lightgray";
        });
        
      });
  });  
