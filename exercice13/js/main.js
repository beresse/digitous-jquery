function changeText(){
    $('#text').css("font-size", "50px");
}


$(".btn").ready(function(){
    $("button").click(changeText)
}) 