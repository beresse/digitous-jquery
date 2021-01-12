$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${$("input").val()}`,
            success: function (value) {
                $("#country").text(value[0].name);
                $("#capital").text(value[0].capital);
                
            }
        });
    })
})