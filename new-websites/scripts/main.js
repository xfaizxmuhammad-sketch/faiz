const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Dribbble shot HD - 7.png") {
    myImage.setAttribute("src", "images/Dribbble shot HD - 8.png");
  } else {
    myImage.setAttribute("src", "images/Dribbble shot HD - 7.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Eminem is the GOAT, ${myName}!`;
}
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.setItem = `Eminem is the GOAT, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Eminem is the GOAT, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
