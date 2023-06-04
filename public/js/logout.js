const logoutHandler = function() {
    fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
    .then(function() {
      alert("You have successfully logged out.");
      document.location.replace("/login"); // Redirected to login page
    })
    .catch(err => console.log(err));
};

document.querySelector("#logout-link").addEventListener("click", logoutHandler);
