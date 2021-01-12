$(".btn").ready(function () {
    function animateText() {
        $('#text').animate({
            "font-size": "50px"
        });
    }
    $("button").click(animateText)
}) 
