chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.openPopup({ tabId: tab.id });
  });