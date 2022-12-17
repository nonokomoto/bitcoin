function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// JavaScript code
// Get the list of categories and the container for the posts
const categories = document.getElementById("categorias");
const postsContainer = document.getElementById("posts");

// Add a click event listener to the categories list
categories.addEventListener("click", function(event) {
  // Get the clicked category
  const clickedCategory = event.target;

  // Get the category id from the data-id attribute of the clicked category
  const categoryId = clickedCategory.getAttribute("data-id");

  // Get all the posts
  const allPosts = postsContainer.querySelectorAll(".card");

  // Loop through the posts and hide the ones that don't have the same category id as the clicked category
  allPosts.forEach(function(post) {
    if (post.getAttribute("data-categorias") !== categoryId) {
      post.style.display = "none";
    } else {
      post.style.display = "";
    }
  });
});
