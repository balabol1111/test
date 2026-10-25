// Переключатель светлой и тёмной темы
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}
  btn.addEventListener("click", function () {
    var isDark = root.getAttribute("data-theme") === "dark" ||
      (!root.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
