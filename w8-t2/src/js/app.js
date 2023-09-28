function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" id="task-${Date.now()}">
        <label for="task-${Date.now()}">${taskText}</label>
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    const taskList = document.getElementById("tasks");
    const li = button.parentElement;
    taskList.removeChild(li);
}

//Slider

let imgNum = 1;
let autoSlideInterval; 
const slider = document.getElementById("slider"); 

function startAutoSlide() {
    autoSlideInterval = setInterval(right, 2000); 
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function right() {
    if (imgNum != 3) {
        imgNum += 1;
        changeImg(imgNum, -1);
    } else {
        imgNum = 1;
        changeImg(imgNum, +2);
    }
}

function left() {
    if (imgNum != 1) {
        imgNum -= 1;
        changeImg(imgNum, +1);
    } else {
        imgNum = 3;
        changeImg(imgNum, -2);
    }
}

function changeImg(value, count) {
    document.getElementById(`img${value + count}`).style.opacity = "0";
    document.getElementById(`img${value}`).style.opacity = "1";
    document.getElementById(`circle${value + count}`).style.background = "transparent";
    document.getElementById(`circle${value}`).style.background = "white";
}
startAutoSlide();

slider.addEventListener("mouseover", stopAutoSlide);
slider.addEventListener("mouseout", startAutoSlide);


//Tabs

function openTab(event, tabName) {
    let i, tabContent, tabButtons;

    event.preventDefault();

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

openTab(null, "tab1");
