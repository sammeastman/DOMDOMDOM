document.addEventListener("DOMContentLoaded", button);

function button() {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Square please!");
  button.className = "button"; //make button
  button.appendChild(btnText); //make it say what it does
  document.body.appendChild(button); //combine button with text
  let id = 0;
elem = document.createElement("hr"); //unnecessary line under the button
elem.setAttribute("width", "1440px"); //making it longer
document.body.appendChild(elem);
  button.addEventListener("click", buttonClick); //activate button for clicking
  function buttonClick() {
    id++; //increase ID by one each time it is clicked, will also affect the number in the box
    let square = document.createElement("div"); //time for the square element
    square.id = id; //allowing it to be called
    square.className = "the-square"; //naming it also for CSS
    let p = document.createElement("p"); //creating text for modification
    let squareText = document.createTextNode(id); //telling box to display whichever number it matches
    p.appendChild(squareText); //putting that text in the box
    square.appendChild(p); 
    document.body.appendChild(square);
    p.style.opacity = "0"; //solidifying the text
    square.addEventListener("mouseenter", hover);
    function hover() {
      p.style.opacity = "4"; //displaying the number once the mouse hovers over it
    }
    square.addEventListener("mouseleave", stopHover);
    function stopHover() {
      p.style.opacity = "0"; //making it disappear if the mouse is not hovering over it
    }



   square.addEventListener("dblclick", function () {
    if ((square.id % 2 == 0) && (square.nextElementSibling === null)) {
        alert("There isn't a square to remove after clicked square! Maybe a circle though.") //a fun alert for too much clicking
        
    } else if (square.id % 2 == 0) {
        square.nextElementSibling.remove()
    } else if (square.previousElementSibling === null) {
        alert("There isn't a square to remove before the clicked square!") //can't make this one pop up, not sure why
    } else {
        square.previousElementSibling.remove () //square goes away eventually after rule is completed
    }

   })
  }
      }
    
  

