$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function (value) {
                $("#country").html(value[0].name)
                $("#capital").html(value[0].capital)
                
            }
        });
    })
})