const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(box =>{
    box.addEventListener("dragover", (e) => {
        e.preventDefault();

        const curTask = document.querySelector(".is-dragging");

        box.appendChild(curTask);
    })
})


const form = document.querySelector("#add-form");
const input = document.querySelector("#todo-input");
const todoBox = document.querySelector("#to-do");


form.addEventListener("submit", e=>{

    e.preventDefault();

    const newTaskText = input.value.trim();

    if (!newTaskText) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");

    const taskText = document.createElement("span");
    taskText.innerHTML = newTaskText;

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-regular", "fa-trash-can");

    deleteButton.addEventListener("click", () => {
        newTask.remove();
    });

    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    newTask.setAttribute("draggable", "true");

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });
    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    });

    todoBox.appendChild(newTask);
    input.value = "";

})


//weather api
function getWeather() {
    const apiKey = "2464b5e3640b98527a7682f6972f62f8";
    const city = document.getElementById("city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `City: ${data.name}<br>Temperature: ${data.main.temp}°C<br>Weather: ${data.weather[0].description}`;
            document.getElementById('weather').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("weather").innerHTML = "City not found";
        });
}