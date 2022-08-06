function saklarTidur() {

    let bg = document.getElementById("tidur");
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    
    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }
    
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";
    }

    if (toggle1.checked && toggle2.checked) {
        toggle3.checked = true
        bg.style = "background-image: url('assets/images/ruangTidur.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 100%;";
    } else {
        toggle3.checked = false
        bg.style = "background-image: url('assets/images/ruangTidur.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 50%;";
    }
}

function saklar() {
    let bg = document.getElementById("tidur");

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    
    if (toggle3.checked) {
        toggle1.checked = true
        toggle2.checked = true
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        if (toggle1.checked && toggle2.checked) {
            bg.style = "background-image: url('assets/images/ruangTidur.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 100%;";
        }
    } else {
        toggle1.checked = false
        toggle2.checked = false
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        bg.style = "background-image: url('assets/images/ruangTidur.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 50%;";
    }
}