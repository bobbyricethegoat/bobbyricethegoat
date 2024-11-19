window.onscroll = function() {hideHeaderOnScroll()};

function hideHeaderOnScroll() {
    var header = document.getElementById("header");
    if (window.pageYOffset > window.innerHeight) {
        header.style.top = "-100px"; /* Hides the header */
    } else {
        header.style.top = "0"; /* Shows the header */
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("explore-btn").addEventListener("click", function() {
        document.querySelector("#buildup").scrollIntoView({
            behavior: "smooth"
        });
    });
});