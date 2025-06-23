// Add basic interactivity (can be expanded as needed)
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  searchBtn.addEventListener("click", () => {
    alert("Searching for: " + searchInput.value);
  });
});
