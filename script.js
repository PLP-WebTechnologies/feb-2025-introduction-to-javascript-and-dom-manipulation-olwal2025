// 1. Changes the text content in the bio paragraph
function changeText() {
  const description = document.getElementById("description");
  description.textContent = " I am growing every day; learning tech, creating impact and raising the next generation!";
}

// 2. Toggles a class on the title to change its color and weight
function toggleStyle() {
  const title = document.getElementById("main-title");
  title.classList.toggle("highlight");
}

// 3. Adds or removes an element when a button is clicked
function addOrRemoveElement() {
  const container = document.getElementById("container");
  const existingElement = document.getElementById("dynamic-element");

  if (existingElement) {
    container.removeChild(existingElement);
  } else {
    const newElement = document.createElement("p");
    newElement.id = "dynamic-element";
    newElement.textContent = " This paragraph was added using JavaScript!";
    container.appendChild(newElement);
  }
}
