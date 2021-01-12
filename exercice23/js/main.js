$(".btn").ready(function () {
    function animateBlock() {
        $('#square').animate({
           bottom: 0,
           right: 0,
        });
    }
    $("button").click(animateBlock)
}) 