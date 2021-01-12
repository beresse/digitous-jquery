$(".btn").ready(function () {
    function animateBlock() {
        $('#bg').animate({
            marginLeft: 100,
        });
    }
    $("button").click(animateBlock)
}) 