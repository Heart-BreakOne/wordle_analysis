## Chrome extension to remove the paywall and read the Wordle analysis.

Download the repo as a zip file, unpack it, go to the browser's extension page, enable dev mode and select load unpacked extension.

Alternatives:

#1 - You can configure you adblocker of choice so it blocks the element: ```standalone-footer```;<br><br>.

#2 - On the Wordle page, open dev tools, go to Console and paste the following snippet:```document.getElementById('standalone-footer').remove()```.

#3 - Use the TamperMonkey [script](https://github.com/Heart-BreakOne/wordle_analysis/blob/main/tamper_monkey_script.js) available with this repo.