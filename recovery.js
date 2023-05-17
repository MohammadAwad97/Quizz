
let u = [];
if ((localStorgeData) != null) {
  u.push(JSON.parse(localStorgeData));
  console.log(u);
  if (u.length > 0) {
    
    for (let i = 0; i < u.length; i++) {
      if (u[i].Email === email) {
        let wrong = document.createElement("div");
        wrong.textContent = "The email is already exist";
        wrong.style.cssText =
          "width:100%; color:red;text-align:center;margin-top:10px;";

        document.getElementById("RegForm").appendChild(wrong);
        u[i].pop();
        return;
      }
    }
  }
} 