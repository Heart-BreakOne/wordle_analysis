new MutationObserver(() => {
  getState().then((state) => {
    if (state) {
      return;
    }
    const footer = document.getElementById('standalone-footer');
    footer && footer.remove();
  });
}).observe(document.body, { childList: true, subtree: true });

function getState() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get('pause_checkbox', function (data) {
      resolve(data.pause_checkbox ?? false);
    });
  });
}