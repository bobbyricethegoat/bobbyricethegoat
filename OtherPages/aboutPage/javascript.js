// Hide the header smoothly after scrolling down 100vh - adjusted to 20px earlier
document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY >= window.innerHeight - 512) { // 20px earlier
        header.style.top = "-70px"; // Slide header up
    } else {
        header.style.top = "0"; // Slide header back into view
    }
});
