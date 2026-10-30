$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#changeBtn").click(function() {
        $("#message").text("Hello from jQuery!");

        $(".description").html("<b>Updated description!</b>");

        $("h1").css("color", "purple");
    });
});
