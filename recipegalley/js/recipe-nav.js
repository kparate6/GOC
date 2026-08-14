/**
 * Recipe dropdown navigation for Recipe Galley
 */
(function () {
  var select = document.getElementById("recipe-dropdown");
  if (!select) return;

  select.addEventListener("change", function () {
    var url = select.value;
    if (url) {
      window.location.href = url;
    }
  });

  // Keep dropdown synced with current recipe page
  var path = window.location.pathname.replace(/\/$/, "");
  var options = select.querySelectorAll("option");
  options.forEach(function (option) {
    if (option.value && option.value.replace(/\/$/, "") === path) {
      select.value = option.value;
    }
  });
})();
