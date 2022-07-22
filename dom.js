/* Grab a single element */
const form = document.getElementById("my-form");
const form2 = document.querySelector(".container");
console.log(form);
console.log(form2);

/* Grab multiple elements */
const items = document.querySelectorAll(".item"); // Can search for class, id, tag and returns all HTML elements of 'item'
console.log(items);

items.forEach((item) => console.log(item));

const itemClass = document.getElementsByClassName("item"); // Only searches for clsss
console.log(itemClass);

/* Manipulating DOM */
const ul = document.querySelector(".items");
//ul.remove();  // Remove a certain element by name from HTML

ul.children[2].remove(); // Removes item3 from ul using children[] NodeList

ul.firstElementChild.textContent =
  "Hello"; /* Changes text of the first list item to say 'Hello' */
ul.children[1].innerText = "Sanh"; // children[] is a NodeList, innerText is the same as textContent

ul.lastElementChild.innerHTML = "<h1>Hello, Sanh</h1>"; // use innerHTL to dynamically alter HTML of element, change from li to h1

const btn = document.querySelector(".btn"); // Find the class 'btn'
btn.style.background = "blue"; // Dynamically change 'Submit' button color

/* EVENTS */
/* Mouse click */

/*
btn.addEventListener("click", (e) => {
  // Takes two parameters: the event & the action/function to occur
  e.preventDefault(); // A default action that belongs to the event will not cocur
  //console.log("Button was clicked.");
  //console.log(e); // Take a look at the event object, 'e'
  //console.log(e.target); // Take a look at the event object's target (submit button)
  // console.log(e.target.className); // Take a look at the target's class name

  document.querySelector("#my-form").style.background = "#ccc"; // use # symbol because 'my-form' is an id attribute // Changes background color of Add User UI when 'Submit' button is clicked

  document.querySelector("body").classList.add("bg-dark"); // When button is clicked. it finds body<> HTML element and dynmically applies class '.bg-dark' for CSS styling

  document.querySelector(".items").children[2].innerHTML =
    "<h1>Sanh is here</h1>"; // When button is clicked, list item at children[3] text changes to <h1>Sanh is here</h1>
});

/* Mouse hover over 
btn.addEventListener("mouseover", (e) => {
  // Takes two parameters: the event & the action/function to occur
  e.preventDefault(); // A default action that belongs to the event will not cocur
  console.log("Button was hovered over.");
  document.querySelector("#my-form").style.background = "red"; // Changes background color of Add User UI when 'Submit' button is clicked
});

/* When mouse leaves button 
btn.addEventListener("mouseout", (e) => {
  // Takes two parameters: the event & the action/function to occur
  e.preventDefault(); // A default action that belongs to the event will not cocur
  console.log("Button was exited.");
  document.querySelector("#my-form").style.background = "green"; // Changes background color of Add User UI when 'Submit' button is clicked
});

*/

// Put DOM elements into variables
const myHTMLForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users"); // <-- empty HTML unordered list element we have in index.html
const header = document.querySelector(".users-header"); // <-- header for the list of users

// Listen for form submit
myHTMLForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value); // Prints the value of nameInput element

  if (nameInput.value === "" || emailInput.value === "") {
    // If name and email fields are empty
    // alert("Please enter your name and a valid email address!");   // Alerts tend to stop and slow down your code. It generally also looks messy.

    msg.classList.add("error"); // Use classList to (dynamically) add a CSS styling class to an HTML element
    msg.innerHTML = "Please enter your name and a valid email address!"; // msg is an emtpy div<>'s class

    setTimeout(() => msg.remove(), 3000); // Make display message disappear after 3 seconds with msg.remove().
  } else {
    console.log("Log in success!");

    header.innerHTML = "Current Users: "; // Dynamically display a header above newly created users

    const listItem = document.createElement("li"); // Dynamically create a new list item
    listItem.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    ); // appendChild is used to dynamically add content into an element.
    userList.appendChild(listItem); // Append the new listItem element to the ul element

    // Clear the fields after submitting
    nameInput.value = "";
    emailInput.value = "";
  }
}
