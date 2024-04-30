const buttons = document.getElementsByClassName("btn");

function changeState(btn) {
    btn.textContent = "Saved!";
    btn.style.backgroundColor = "green";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        changeState(this); // Pass the current button as an argument to changeState
    });
}
