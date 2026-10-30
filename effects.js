$(document).ready(function() {

    $("#hideBtn").click(function() {
        $("#visibilityText").hide();
    });

    $("#showBtn").click(function() {
        $("#visibilityText").show();
    });

    $("#toggleBtn").click(function() {
        $("#visibilityText").toggle();
    });

    $("#fadeOutBtn").click(function() {
    $("#fadeImage").fadeOut(800);
});

    $("#fadeInBtn").click(function() {
    $("#fadeImage").fadeIn(800);
});

    $("#fadeToggleBtn").click(function() {
    $("#fadeImage").fadeToggle(800);
});


$("#slideUpBtn").click(function() {
    $("#slidePanel").slideUp(600);
});

$("#slideDownBtn").click(function() {
    $("#slidePanel").slideDown(600);
});

$("#slideToggleBtn").click(function() {
    $("#slidePanel").slideToggle(600);
});

});
