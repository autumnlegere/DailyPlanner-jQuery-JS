/*
To Do:
- current day is displayed at the top of the calendar ✅
    - moment js ✅
- timeblocks for standard business hours, WHEN I click into a timeblock THEN I can enter an event, 
    - layout from bootstrap✅
- each timeblock is color coded to indicate whether it is in the past, present, or future ✅
    - if statement in js using moment for time ✅
    - color coding from bootstrap ✅
- WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage and WHEN I refresh the page THEN the saved events persist
    - local storage mod 4
    - js event listener for buttons
- 
*/

//variables for each time block
var text8 = document.getElementById("Textarea8");
var text9 = document.getElementById("Textarea9");
var text10 = document.getElementById("Textarea10");
var text11 = document.getElementById("Textarea11");
var text12 = document.getElementById("Textarea12");
var text1 = document.getElementById("Textarea1");
var text2 = document.getElementById("Textarea2");
var text3 = document.getElementById("Textarea3");
var text4 = document.getElementById("Textarea4");
var text5 = document.getElementById("Textarea5");

//variables for each button
var btn8 = document.getElementById("button8");

//variable for current date and time
var today = moment();

//displays current day at top of page
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//Time blocks background will change color based on if they are in the past, present, or future
if (today.format("HH") == 8) {
    text8.classList.add("bg-info")
} else if (today.format("HH") > 8) {
    text8.classList.add("bg-secondary")
} else {
    text8.classList.add("bg-success")
}

if (today.format("HH") == 9) {
    text9.classList.add("bg-info")
} else if (today.format("HH") > 9) {
    text9.classList.add("bg-secondary")
} else {
    text9.classList.add("bg-success")
}

if (today.format("HH") == 10) {
    text10.classList.add("bg-info")
} else if (today.format("HH") > 10) {
    text10.classList.add("bg-secondary")
} else {
    text10.classList.add("bg-success")
}

if (today.format("HH") == 11) {
    text11.classList.add("bg-info")
} else if (today.format("HH") > 11) {
    text11.classList.add("bg-secondary")
} else {
    text11.classList.add("bg-success")
}

if (today.format("HH") == 12) {
    text12.classList.add("bg-info")
} else if (today.format("HH") > 12) {
    text12.classList.add("bg-secondary")
} else {
    text12.classList.add("bg-success")
}

if (today.format("HH") == 13) {
    text1.classList.add("bg-info")
} else if (today.format("HH") > 13) {
    text1.classList.add("bg-secondary")
} else {
    text1.classList.add("bg-success")
}

if (today.format("HH") == 14) {
    text2.classList.add("bg-info")
} else if (today.format("HH") > 14) {
    text2.classList.add("bg-secondary")
} else {
    text2.classList.add("bg-success")
}

if (today.format("HH") == 15) {
    text3.classList.add("bg-info")
} else if (today.format("HH") > 15) {
    text3.classList.add("bg-secondary")
} else {
    text3.classList.add("bg-success")
}

if (today.format("HH") == 16) {
    text4.classList.add("bg-info")
} else if (today.format("HH") > 16) {
    text4.classList.add("bg-secondary")
} else {
    text4.classList.add("bg-success")
}

if (today.format("HH") == 17) {
    text5.classList.add("bg-info")
} else if (today.format("HH") > 17) {
    text5.classList.add("bg-secondary")
} else {
    text5.classList.add("bg-success")
}


/*
var plans8 = localStorage.getItem("plans8");
text8.textContent = plans8;

btn8.addEventListener("click", function() {
    localStorage.setItem("plans8", plans8);
  });

console.log(text8.textContent)

var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

// This function is being called below and will run when the page loads.
function init() {
    // Get stored todos from localStorage
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // This is a helper function that will render todos to the DOM
    renderTodos();
  }
  
  function storeTodos() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  // Add submit event to form
  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });
  
  // Add click event to todoList element
  todoList.addEventListener("click", function(event) {
    var element = event.target;
  
    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);
  
      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  });
  
  // Calls init to retrieve data and render it to the page on load
  init()
  */