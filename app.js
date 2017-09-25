chrome.tabs.getSelected(null, function(tab) {
  var url = new URL(tab.url);

  var page = url.pathname !== "/" ? url.pathname : "/home";

  if (!page.match(/panel\/pages/)) {
    window.open(
      `${url.protocol}//${url.hostname}/panel/pages${page}/edit`,
      "_panelify"
    );
  }
});
