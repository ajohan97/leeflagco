function searchFunction() {
  // Get the value entered in the search bar
  var searchTerm = document.getElementById("search-bar").value.toLowerCase();

  // Check if the current page is the Shop page
  if (!window.location.pathname.includes("shop.html")) {
    // Redirect to the Shop page with the search term as a query parameter
    window.location.href = 'shop.html?search=' + encodeURIComponent(searchTerm);
    return;
  }
  // Get all grid items
  var gridItems = document.querySelectorAll('.grid-item');

  // Loop through each grid item and check if it contains the search term
  gridItems.forEach(function(item) {
    var title = item.querySelector('p').innerText.toLowerCase();

    // If the title contains the search term, show the item, otherwise hide it
    if (title.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    searchFunction();
  }
}