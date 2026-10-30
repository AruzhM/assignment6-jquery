$(document).ready(function() {

    $("#animateBtn").click(function() {
        $("#animateBox").stop().animate({
            width: "140px",
            height: "140px",
            left: "180px",
            top: "60px"
        }, 1000);
    });

    $("#resetBtn").click(function() {
        $("#animateBox").stop().animate({
            width: "80px",
            height: "80px",
            left: "20px",
            top: "20px"
        }, 500);
    });

    
    $("#sequenceBtn").click(function() {
    $("#sequenceBox")
        .stop(true, true)
        .animate({left: "200px"}, 600)
        .animate({top: "150px"}, 600)
        .animate({width: "40px", height: "40px"}, 600)
        .animate({
            left: "20px",
            top: "20px",
            width: "80px",
            height: "80px"
        }, 600);
});

    $("#sequenceResetBtn").click(function() {
    $("#sequenceBox").stop(true, true).css({
        left: "20px",
        top: "20px",
        width: "80px",
        height: "80px"
    });
});

$("#combinedBtn").click(function() {
    $("#combinedBox").stop().animate({
        width: "150px",
        height: "150px",
        left: "200px",
        top: "80px",
        opacity: 0.3
    }, 1200);
});

$("#combinedResetBtn").click(function() {
    $("#combinedBox").stop().animate({
        width: "80px",
        height: "80px",
        left: "20px",
        top: "20px",
        opacity: 1
    }, 600);
});

});
