// When the extension button is clicked, copy the active tab's full URL
// Made by TheJuki

chrome.browserAction.onClicked.addListener(function(tab) {
  document.oncopy = function(event) {
    event.clipboardData.setData('text/plain', tab.url);
    event.preventDefault();
  };
  document.execCommand("copy", false, null);
});
