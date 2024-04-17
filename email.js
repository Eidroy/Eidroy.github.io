const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("works");
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let msg = document.querySelector("#message").value;

  document.querySelector(".form").reset();

  console.log(name, email, msg);
  sendEmail(name, email, msg);
});
function sendEmail(name, email, msg) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yordie1998@hotmail.com",
    Password: "33A0F9ACEB17DB0B0562A2296C48D248DB2F",
    To: "Yordie2203@gmail.com",
    From: "yordie1998@hotmail.com",
    Subject: `${name} Just messaged you from your website form`,
    Body: `Name: ${name} <br> Email: ${email} <br> Message: ${msg}`,
  }).then((message) => alert(message));
}
