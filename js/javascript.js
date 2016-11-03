

$(document).ready(function() {
    var hamburgerButton = $(".hamburger-button");
    var menuwrap = $(".menu-wrap");

    hamburgerButton.on("click", function() {
        $(this).toggleClass("button-open");
        menuwrap.slideToggle("menu-show");
    });

    $(".responsive .hamburger-button").click( function(){
        $(".responsive-menu").slideToggle();
    });
});









