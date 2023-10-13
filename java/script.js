// defines the searchinput and also the listfunction.
const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

// the function for adding things to the list and also if we didnt write anything in the input we got a alert
function addTask(){
    if(inputBox.value === ''){
        alert ("You must write something!");
    }
    else{
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

