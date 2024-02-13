function searchFunction() {
  // Get the value entered in the search bar
  var searchTerm = document.getElementById("search-bar").value.toLowerCase();

  // Check if the current page is the Shop page
  //if (!window.location.pathname.includes("shop.html")) {
    // Redirect to the Shop page with the search term as a query parameter
    window.location.href = 'shop.html?search=' + encodeURIComponent(searchTerm);
    return;
  //}

}
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    searchFunction();
  }
}