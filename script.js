// Checklist 2: the array of items shown on the home page
const passions = ["Solving Problems", "Customer Service", "Helping Others", "Achieving My Goals"];

// Checklist 4: find the empty <ul id="list"> and build one <li> per item
const list = document.querySelector("#list");

if (list) {
  // Checklist 3: forEach runs once for each item
  passions.forEach(function (passion) {
    const li = document.createElement("li");
    li.textContent = passion;
    list.appendChild(li);
  });

  // Checklist 5: write the count line
  const count = document.getElementById("count");
  count.textContent = "I have " + passions.length + " passions.";
}

// Back-to-top button (all pages): shows after scrolling 300px
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  const updateVisibility = function () {
    backToTop.hidden = window.scrollY < 300;
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();

  backToTop.addEventListener("click", function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}
