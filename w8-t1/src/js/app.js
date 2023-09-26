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