export class Users {
  constructor(
    Email,
    Password,
    ConfirmPassword,
    Name,
    Date,
    phoneNumber,
    Education,
    EnRuslt,
    techResult
  ) {
    this.Email = Email;
    this.Password = Password;
    this.ConfirmPassword = ConfirmPassword;
    this.Name = Name;
    this.Date = Date;
    this.phoneNumber = phoneNumber;
    this.Education = Education;
    this.EnRuslt = EnRuslt;
    this.techResult = techResult;
  }
}
let arr = JSON.parse(localStorage.getItem("Users")) || [];

export function register(email, Password, rePassword) {
  if (
    email.trim() !== "" &&
    Password.trim() !== "" &&
    rePassword.trim() !== ""
  ) {
    if (email.includes("@")) {
      if (Password.length >= 8) {
        if (Password == rePassword) {
          if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
              if (email === arr[i].Email) {
                let wrong = document.createElement("div");
                wrong.textContent = "The email is already exist";
                wrong.style.cssText =
                  "width:100%; color:red;text-align:center;margin-top:10px;";
                document.getElementById("RegForm").appendChild(wrong);
                return;
              }
            }
          }

          let user = new Users(email, Password, rePassword);

          arr.push(user);
          console.log("sa/***/////");
          console.log(arr);
          console.log("sa/***/////");
          localStorage.setItem("Users", JSON.stringify(arr));
        } else {
          let wrong = document.createElement("div");
          wrong.textContent = " The Password doesn't match ";
          wrong.style.cssText =
            "width:100%; color:red;text-align:center;margin-top:10px;";

          document.getElementById("PasswordReg").style.backgroundColor = "Red";
          document.getElementById("RePassword").style.backgroundColor = "Red";
          document.getElementById("RegForm").appendChild(wrong);
        }
      } else {
        //if the password is less than 8 characters
        let wrong = document.createElement("div");
        wrong.textContent = " The Password must be 8 character or more ";
        wrong.style.cssText =
          "width:100%; color:red;text-align:center;margin-top:10px;";

        document.getElementById("PasswordReg").style.backgroundColor = "Red";
        document.getElementById("PasswordLabelReg").appendChild(wrong);
      }
    } else {
      let wrong = document.createElement("span");
      wrong.textContent = " Enter a valid email ";
      wrong.style.cssText =
        "width:100%; color:red;text-align:center;margin-top:10px;";

      document.getElementById("EmailReg").style.backgroundColor = "Red";
      document.getElementById("EmailLabelReg").appendChild(wrong);
    }
  } else {
    let wrong = document.createElement("div");
    wrong.textContent = "Please Fill All Fields ";
    wrong.style.cssText =
      "width:100%; color:red;text-align:center;margin-top:10px;";

    document.getElementById("RegForm").appendChild(wrong);
  }
}
