// All game code is in game.js file.
// I used object methods to manage the game.

// When DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    Game.showStartScreen();
    Game.init();
});

/* dark light mode */

$(document).ready(function () {
    $(".theme_icon").on("click", function () {
        $(".theme_icon").toggleClass("flip");
        $(".theme_icon").toggleClass("fa-sun");
        $(".theme_icon").toggleClass("fa-moon");

        let current_theme = $("body").attr("data-theme");

        if (current_theme == "dark") {
            $("body").attr("data-theme", "light");
        } else if (current_theme == "light") {
            $("body").attr("data-theme", "dark");
        }
    });
});

/* btn rules and refresh */

$("#rulesBtn").on("click", function () {
    $(".modalRules").css("display", "block");
    closeModalOnOutsideClick();
});

$("#closeBtnRules").on("click", function () {
    $(".modalRules").css("display", "none");
});
