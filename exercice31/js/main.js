$(document).ready(function(){
    function validInput() {
       if ($("input").keyup().length > 5){
        $("input").removeClass("is-invalid")
        $("input").addClass("is-valid")

       } else {
        $("input").removeClass("is-valid")
        $("input").addClass("is-invalid")
       }
    }
    $(".btn").click(validInput)
})