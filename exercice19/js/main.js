$(".btn").ready(function(){
    function displayInput(){
        $("input").removeAttr('disabled');
    }
    $("button").click(displayInput)
}) 