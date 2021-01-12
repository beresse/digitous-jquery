$(document).ready(function(){
    function validInput() {
       if ($("input").val().length > 5){
        $("input").removeClass("is-invalid")
        $("input").addClass("is-valid")

       } else {
        $("input").removeClass("is-valid")
        $("input").addClass("is-invalid")
       }
    }
    $(".btn").css("display","block")
    $(".btn").click(validInput)

})

