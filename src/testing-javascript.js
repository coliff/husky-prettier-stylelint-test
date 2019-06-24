// Track JS Errors in Google Analytics
!(function(e) {
  const n = function(n) {
    const t = e.document.createElement("a");
    return (t.href = n), t;
  };
  e.onerror = function(t, o, r, a) {
    const i = n(o).hostname;
    ga("send", {
      hitType: "event",
      eventCategory:
        (i == e.location.hostname || void 0 == i || "" == i
          ? ""
          : "external ") + "error",
      eventAction: t,
      eventLabel: (o + " LINE: " + r + (a ? " COLUMN: " + a : "")).trim(),
      nonInteraction: 1
    });
  };
})(window);
// Track PDF & ZIP Downloads in Google Analytics
window.onload = function() {
  const t = document.getElementsByTagName("a");
  for (i = 0; i < t.length; i++) {
    t[i].hostname === location.hostname &&
      t[i].href.match(/\+(zip|pdf)$/i) &&
      (t[i].setAttribute("target", "_blank"),
      (t[i].onclick = function() {
        ga("send", "event", "Downloads", "Click", this.getAttribute("href"));
      }));
  }
};
