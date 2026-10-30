$(document).ready(function() {

    let itemCount = 3;

    $("#appendBtn").click(function() {
        $("#itemList").append("<li>Item " + itemCount + "</li>");
        itemCount++;
    });

    $("#prependBtn").click(function() {
        $("#itemList").prepend("<li>Item " + itemCount + "</li>");
        itemCount++;
    });

    $("#removeBtn").click(function() {
        $("#itemList li:last").remove();
    });

    
    $("#changeImageBtn").click(function() {
    $("#changeImage").attr(
        "src",
        "https://placehold.co/300x200/cdb4db/333333?text=Second+Image"
    );
});

    $("#changeLinkBtn").click(function() {
    $("#dynamicLink").attr("href", "https://github.com");
    $("#dynamicLink").text("Visit GitHub");
});

    
    $("#userName").on("input", function() {
    let name = $(this).val();
    $("#namePreview").text(name);
});

    $("#userEmail").on("input", function() {
    let email = $(this).val();
    $("#emailPreview").text(email);
});

});
