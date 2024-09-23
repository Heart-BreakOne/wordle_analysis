new MutationObserver(() => {
	getState().then((state) => {
		if (state) {
			return;
		}
		const footer = document.getElementById('standalone-footer');
		if (footer) {
			footer.remove();
		}

		if (window.location.href === 'https://www.nytimes.com/games/connections') {
			const toolbar = document.querySelector('section.Toolbar-module_toolbar__DGjo1');
			if (toolbar) {
				if (!toolbar.querySelector('#wordlebot-picture')) {
					const newDiv = document.createElement('div');

					const img = document.createElement('img');
					img.src = chrome.runtime.getURL('wordlebot.png');
					img.width = 35;
					img.height = 35;
					img.id = 'wordlebot-picture';

					newDiv.appendChild(img);

					newDiv.addEventListener('click', () => {
						window.open('https://www.nytimes.com/interactive/2024/upshot/connections-bot.html', '_blank');
					});

					newDiv.style.cursor = 'pointer';

					toolbar.appendChild(newDiv);
				}
			}
		}
	});
}).observe(document.body, { childList: true, subtree: true });

function getState() {
	return new Promise((resolve) => {
		chrome.storage.local.get('pause_checkbox', function (data) {
			resolve(data.pause_checkbox ?? false);
		});
	});
}