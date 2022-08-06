function saklar() {

    let bg = document.getElementById("kopi");
    let toggle1 = document.getElementById("default-toggle1");

    if (toggle1.checked) {
        bg.style = "background-image: url('assets/images/kopi.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 100%;";
    } else {
        bg.style = "background-image: url('assets/images/kopi.jpg'); height: 100vh; background-position: center center; background-repeat: no-repeat; background-size: cover; position: sticky; opacity: 50%;";
    }
}