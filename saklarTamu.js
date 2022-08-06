function saklarTamu() {

    let bg = document.getElementById("tamu");
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4")
    let toggle5 = document.getElementById("default-toggle5")
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    
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
    
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu3.src = "assets/images/off.gif";
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }

    if (toggle1.checked && toggle2.checked && toggle3.checked && toggle4.checked) {
        toggle5.checked = true
        bg.style = "background-image: url('assets/images/ruangTamu.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 100%;";
    } else {
        toggle5.checked = false
        bg.style = "background-image: url('assets/images/ruangTamu.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 50%;";
    }
}

function saklar() {
    let bg = document.getElementById("tamu");

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    
    if (toggle5.checked) {
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        toggle4.checked = true
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        lampu3.src = "assets/images/on.gif";
        lampu4.src = "assets/images/on.gif";
        if (toggle1.checked && toggle2.checked && toggle3.checked && toggle4.checked) {
            bg.style = "background-image: url('assets/images/ruangTamu.jpg'); height: 100vh; max-width: 100%; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 100%;";
        }
    } else {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        toggle4.checked = false
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        lampu3.src = "assets/images/off.gif";
        lampu4.src = "assets/images/off.gif";
        bg.style = "background-image: url('assets/images/ruangTamu.jpg'); height: 100vh; max-width: 100%; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 50%;";
    }
}