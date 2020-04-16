
document.querySelector(".burger")
    .addEventListener("click", function()
    {
        document.querySelector(".bgr-1")
            .classList.toggle("bgr-1-active");
        document.querySelector(".bgr-2")
            .classList.toggle("bgr-2-active");
        document.querySelector(".bgr-3")
            .classList.toggle("bgr-3-active");

        document.querySelector(".right-menu")
            .classList.toggle("right-menu-active");
    });