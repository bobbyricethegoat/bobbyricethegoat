// Smooth scrolling for the Explore button
document.getElementById("explore-btn").addEventListener("click", function () {
    window.scrollTo({
        top: window.innerHeight, // Scroll exactly 100vh
        behavior: "smooth",
    });
});

// Hide the header smoothly after scrolling down 100vh - adjusted to 20px earlier
document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY >= window.innerHeight - 58) { // 20px earlier
        header.style.top = "-70px"; // Slide header up
    } else {
        header.style.top = "0"; // Slide header back into view
    }
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation runs only once on scroll
    });
  });
  