function saklarMakan() {

    let bg = document.getElementById("makan");
    let toggle1 = document.getElementById("default-toggle1");
    let lampu1 = document.getElementById("lampu1");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
        bg.style = "background-image: url('assets/images/ruangMakan.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 100%;";
    } else {
        lampu1.src = "assets/images/off.gif";
        bg.style = "background-image: url('assets/images/ruangMakan.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 50%;";
    }
}