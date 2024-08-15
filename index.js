// Function to filter the cards based on the search input
document.getElementById("searchInput").addEventListener("input", function () {
  let searchQuery = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    let content = card.getAttribute("data-content").toLowerCase();
    let title = card.querySelector(".title").innerText.toLowerCase();
    let description = card
      .querySelector(".description")
      .innerText.toLowerCase();
    let lang = card.querySelector(".lang").innerText.toLowerCase();

    // Check if the search query matches any of the content, title, description, or language
    if (
      content.includes(searchQuery) ||
      title.includes(searchQuery) ||
      description.includes(searchQuery) ||
      lang.includes(searchQuery)
    ) {
      card.style.display = "block"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
