function textReveal(){
    $("#text").html("Konexio !");
    $("#text").css("color", "white");
}

$(".btn").ready(function(){
    $("button").click(textReveal)

})