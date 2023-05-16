import { Users, register } from "./app.js";
document.getElementById("Register").addEventListener("click", function (e) {
  let email = document.getElementById("EmailReg").value;
  let Password = document.getElementById("PasswordReg").value;
  let rePassword = document.getElementById("RePassword").value;
  e.preventDefault();
  register(email, Password, rePassword);
});
