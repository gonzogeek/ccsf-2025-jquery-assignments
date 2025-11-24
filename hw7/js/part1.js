$(document).ready(function () {
  $("input[name='bgcolor']").on("change", function () {
    let color = $(this).val();
    $("main").css("background-color", color);
  });

  $("input[type='checkbox']").on("change", function () {
    let bold = $("#bold").is(":checked") ? "bold" : "normal";
    let italic = $("#italic").is(":checked") ? "italic" : "normal";
    let underline = $("#underline").is(":checked") ? "underline" : "none";

    $("main").css({
      "font-weight": bold,
      "font-style": italic,
      "text-decoration": underline,
    });
  });

  $("#fontsize").on("change", function () {
    let size = $(this).val();
    $("main").css("font-size", size);
  });
});
