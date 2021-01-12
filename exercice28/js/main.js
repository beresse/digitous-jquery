$(".btn").ready(function () {
    function consoleInput() {
       console.log($("input").val());
    }
    $("button").click(consoleInput)
}) 