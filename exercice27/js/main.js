$(".btn").ready(function () {
    function validInput() {
        $("input").addClass('is-valid');
    }
    $("button").click(validInput)
}) 