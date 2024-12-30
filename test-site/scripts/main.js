const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/rei.png") {
    myImage.setAttribute("src", "images/rei2.gif");
  } else {
    myImage.setAttribute("src", "images/rei.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `rei is cool, ${myName}`;
    }
  }  
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `rei is cool, ${storedName}`;
  myButton.onclick = () => {
    setUserName();
  };