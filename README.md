## Chrome extension to remove the paywall and read the Wordle analysis.

[Download WordleAnalysis extension for Chrome](https://chromewebstore.google.com/detail/wordleanalysis/cfangbjieglocpgfdnkcmngachefkgoo) - Not available in some countries.

Download the zip folder, go to the browser's extension page, enable dev mode and select load unpacked extension.

Alternatives:

#1 - You can configure you adblocker of choice so it blocks the element: ```standalone-footer```;<br><br>

#2 - On the Wordle page, open dev tools, go to Console and paste the following snippet:```document.getElementById('standalone-footer').remove()```
