document.querySelector("form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("email").value;
    password =  document.querySelector("password").value;

    /*if () {
       
        window.location.href = "student.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("form").reset();
    }*/

}




let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});