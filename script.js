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
var btn9 = document.getElementById("button9");
var btn10 = document.getElementById("button10");
var btn11 = document.getElementById("button11");
var btn12 = document.getElementById("button12");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");
var btn5 = document.getElementById("button5");


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

//when user clicks save button, any text written in time block will be saved to local storage
btn8.addEventListener("click", function (event) {
    event.preventDefault();
    var plans8 = text8.value.trim()
    localStorage.setItem("plans8", plans8);
});

btn9.addEventListener("click", function (event) {
    event.preventDefault();
    var plans9 = text9.value.trim()
    localStorage.setItem("plans9", plans9);
});

btn10.addEventListener("click", function (event) {
    event.preventDefault();
    var plans10 = text10.value.trim()
    localStorage.setItem("plans10", plans10);
});

btn11.addEventListener("click", function (event) {
    event.preventDefault();
    var plans11 = text11.value.trim()
    localStorage.setItem("plans11", plans11);
});

btn12.addEventListener("click", function (event) {
    event.preventDefault();
    var plans12 = text12.value.trim()
    localStorage.setItem("plans12", plans12);
});

btn1.addEventListener("click", function (event) {
    event.preventDefault();
    var plans1 = text1.value.trim()
    localStorage.setItem("plans1", plans1);
});

btn2.addEventListener("click", function (event) {
    event.preventDefault();
    var plans2 = text2.value.trim()
    localStorage.setItem("plans2", plans2);
});

btn3.addEventListener("click", function (event) {
    event.preventDefault();
    var plans3 = text3.value.trim()
    localStorage.setItem("plans3", plans3);
});

btn4.addEventListener("click", function (event) {
    event.preventDefault();
    var plans4 = text4.value.trim()
    localStorage.setItem("plans4", plans4);
});

btn5.addEventListener("click", function (event) {
    event.preventDefault();
    var plans5 = text5.value.trim()
    localStorage.setItem("plans5", plans5);
});


//this function will run when page loads; it retrieves text saved to local storage and displays it in the corresponding time block
function init() {
    var storedPlans8 = localStorage.getItem("plans8");
    document.getElementById("Textarea8").innerHTML = storedPlans8;

    var storedPlans9 = localStorage.getItem("plans9");
    document.getElementById("Textarea9").innerHTML = storedPlans9;

    var storedPlans10 = localStorage.getItem("plans10");
    document.getElementById("Textarea10").innerHTML = storedPlans10;

    var storedPlans11 = localStorage.getItem("plans11");
    document.getElementById("Textarea11").innerHTML = storedPlans11;

    var storedPlans12 = localStorage.getItem("plans12");
    document.getElementById("Textarea12").innerHTML = storedPlans12;

    var storedPlans1 = localStorage.getItem("plans1");
    document.getElementById("Textarea1").innerHTML = storedPlans1;

    var storedPlans2 = localStorage.getItem("plans2");
    document.getElementById("Textarea2").innerHTML = storedPlans2;

    var storedPlans3 = localStorage.getItem("plans3");
    document.getElementById("Textarea3").innerHTML = storedPlans3;

    var storedPlans4 = localStorage.getItem("plans4");
    document.getElementById("Textarea4").innerHTML = storedPlans4;

    var storedPlans5 = localStorage.getItem("plans5");
    document.getElementById("Textarea5").innerHTML = storedPlans5;
  }
  
// calling function init
init()