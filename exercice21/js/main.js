$(".btn").ready(function () {
    function animateBlock() {
        $('#square').animate({
            width: "500px"
        });
    }
    $("button").click(animateBlock)
}) 
