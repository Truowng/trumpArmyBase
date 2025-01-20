const scriptURL =
  "https://script.google.com/macros/s/AKfycbzp4J0ZKc6WZDOlcEIo9I30CTn-19ySRaslKgppqmG0nrr9eBhIbuswfDyvwX0DykU4/exec";

const form = document.querySelector("#form");
const submitBtn = document.querySelector(".form .btn-submit");

if (submitBtn) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.setAttribute("status", "disabled");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => alert("You have successfully joined the waitlist"))
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });
}
