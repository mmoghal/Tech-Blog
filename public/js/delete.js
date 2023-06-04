const deletePostHandler = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const postId = document.getElementById('post-id')
  
    fetch("/api/post/" + postId.value, {
      method: "DELETE"
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err))
  }
  
  let deleteButton = document.querySelector("#delete-btn");
if (deleteButton) {
    deleteButton.addEventListener("click", deletePostHandler);
}
  document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);
  