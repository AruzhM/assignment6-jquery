$(document).ready(function() {

    $(".accordion-content").hide();

    $(".accordion-btn").click(function() {
        let content = $(this).next(".accordion-content");

        $(".accordion-content").not(content).slideUp(300);

        content.slideToggle(300);
    });

});
