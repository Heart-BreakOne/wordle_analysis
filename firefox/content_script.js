new MutationObserver(() => {
  const footer = document.getElementById('standalone-footer');
  footer && footer.remove();
}).observe(document.body, { childList: true, subtree: true });