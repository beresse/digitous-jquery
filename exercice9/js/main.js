// Ici je suis avec ma fonction pour faire apparaitre mon text 

function displayText(){
    $('#text').show();
}
// Création et ajout d'une classe pour mon bouton, c'est important si je souhaite avoir le controle sur un bouton en particulier

$(".btn").addClass("btn_reveal")

// Application de ma fonction "displayText() après click sur sur le bouton"

$(".btn_reveal").ready(function(){ // <= .btn_reveal est ma class précedement en amont 
    $("button").click(displayText) // <=  application de ma fonction
}) 
