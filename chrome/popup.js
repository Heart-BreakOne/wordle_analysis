
function saveCB() {
    const checkbox = document.getElementById('pause_checkbox');
    chrome.storage.local.set({ 'pause_checkbox': checkbox.checked });
}

function loadCB() {
    const checkbox = document.getElementById('pause_checkbox');
    chrome.storage.local.get('pause_checkbox', function (data) {
        checkbox.checked = data.pause_checkbox;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadCB();
    const checkbox = document.getElementById('pause_checkbox');
    checkbox.addEventListener('change', saveCB);
});
