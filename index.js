const pwd = document.getElementById("password")

function check(event) {
    event.preventDefault();
    console.log(pwd.value);
    if(pwd.value=="20180916") {
        location.href='home.html';
    } else {
        alert("땡 틀렸답니다!");
    }
} 