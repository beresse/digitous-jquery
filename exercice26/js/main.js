$(".btn").ready(function () {
    function InValidInput() {
        $("input").addClass('is-invalid');
    }
    $("button").click(InValidInput)
}) 