
function displayText(){
    $('#text').show();
}

$(".btn").addClass("btn_reveal")


$(".btn_reveal").ready(function(){
    $("button").click(displayText)
}) 
