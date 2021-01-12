function changeSize(){
    $('#square').css("width", "500px");
}


$(".btn").ready(function(){
    $("button").click(changeSize)
}) 