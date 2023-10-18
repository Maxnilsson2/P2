// defines the searchinput and also the listfunction.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// the function for adding things to the list and also if we didnt write anything in the input we got a alert
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // Here we clear out the old text from the search input when we click on add
  inputBox.value = "";
  saveData();
}

// script for the clickfunction
listContainer.addEventListener(
  "click",
  function (e) {
    // here it checks if we have clicked in the LI
    if (e.target.tagName === "LI") {
      // if the checked class is already there this will be removed
      e.target.classList.toggle("checked");
      saveData();
    }
    // if the target is a SPAN this will delete the parent element
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// what ever is listed in the container will be stored/saved in our browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// This will get the stored data from the browser
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
// call for the task above
showTask();
