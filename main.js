import { Users } from "./app.js";
function register() {
  document.getElementById("Register").addEventListener("click", function (e) {
    let email = document.getElementById("EmailReg").value;
    let Password = document.getElementById("PasswordReg").value;
    let rePassword = document.getElementById("RePassword").value;
    let user = new Users(email, Password, rePassword);
    console.log(user);
    e.preventDefault();
  });
}
register();
