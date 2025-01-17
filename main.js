const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    const li = document.createElement("li");
    li.textContent = inputBox.value; // Use textContent for better security

    // Create and append the "delete" span
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Add click event listener to the newly created li element
    li.addEventListener("click", () => {
      li.classList.toggle("checked"); 
      saveData(); 
    });

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
  }
}

// Event delegation for delete button
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); // Remove the entire li element
    saveData(); 
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
