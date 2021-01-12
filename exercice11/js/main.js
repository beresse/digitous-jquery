function changeColor(){
    $('#square').css("background", "red");
}

$(".btn").addClass("btnColor")

$(".btnColor").ready(function(){
    $("button").click(changeColor)
}) 
