function showLoading() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("content").style.display ="none";
}

function hideLoading() {
    document.getElementById("loading").style.display ="none";
    document.getElementById("content").style.display ="flex";
}

setTimeout(hideLoading, 5000);

window.addEventListener("load", showLoading);

//input task

function handleKeyPress(e) {
    if (e.key === " " || e.key === "Backspace") {
        e.preventDefault();

        const input = document.getElementById("myInput");
        const cursorPosition = input.selectionStart;
        const inputValue = input.value;

        if (e.key === " ") {
            input.value = inputValue.slice(0, cursorPosition) + inputValue.slice(cursorPosition + 1);
            input.setSelectionRange(cursorPosition, cursorPosition);
        } else if (e.key === "Backspace") {
            input.value = inputValue.slice(0, cursorPosition) + " " + inputValue.slice(cursorPosition);
            input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
    }
}