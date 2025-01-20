const scriptURL =
  "https://script.google.com/macros/s/AKfycbzp4J0ZKc6WZDOlcEIo9I30CTn-19ySRaslKgppqmG0nrr9eBhIbuswfDyvwX0DykU4/exec";

const form = document.querySelector("#form");
const submitBtn = document.querySelector(".form .btn-submit");
// const links = document.querySelectorAll(".link-btn");
// console.log(links);
// let count = 0;

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (link.getAttribute("data-clicked") == "false") {
//       count++;
//       link.setAttribute("data-clicked", "true");
//     }
//     if (count == links.length) {
//       {
//         submitBtn.disabled = false;
//         submitBtn.setAttribute("status", "enabled");
//       }
//     }
//   });
// });

// if (count != links.length) {
//   submitBtn.disabled = true;
//   submitBtn.setAttribute("status", "disabled");
// }

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

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault(); // Prevent the default form submission

  //   // Collect the form data
  //   var formData = new FormData(this);
  //   var keyValuePairs = [];
  //   for (var pair of formData.entries()) {
  //     keyValuePairs.push(pair[0] + "=" + pair[1]);
  //   }

  //   var formDataString = keyValuePairs.join("&");

  //   // Send a POST request to your Google Apps Script
  //   fetch("PATE YOURT URL WEBAPP ON GOOGLE SHEET", {
  //     redirect: "follow",
  //     method: "POST",
  //     body: formDataString,
  //     headers: {
  //       "Content-Type": "text/plain;charset=utf-8",
  //     },
  //   })
  //     .then(function (response) {
  //       // Check if the request was successful
  //       if (response) {
  //         return response; // Assuming your script returns JSON response
  //       } else {
  //         throw new Error("Failed to submit the form.");
  //       }
  //     })
  //     .then(function (data) {
  //       document.getElementById("form").reset();
  //     })
  //     .catch(function (error) {
  //       // Handle errors, you can display an error message here
  //       console.error(error);
  //     });
  // });

  // function getNewRecord() {
  //   document.getElementById("form").reset();
  // }
}
