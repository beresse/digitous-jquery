$(document).ready(function () {
  $("input").keydown(function () {
    if ($("input").val().length > 5) {
      $("input").addClass("is-valid");
      $("input").removeClass("is-invalid");

    } else {
      $("input").removeClass("is-valid");
      $("input").addClass("is-invalid");
    }
  });
});
