# How to download any flash game

1st case: site only shows "Adobe Flash not supported" logo:

1. Right click on the flash player frame or, if not possible, somewhere near it
2. Choose "inspect element" in the context menu
3. find the link to the `.swf` (i.e. shockwave flash) file in the html (click on the html in the appearing sidebar and search with `Ctrl-F`)
4. The link is probably in an html element that looks like: `<embed src="GAMETITLE.swf" ... >`
5. Right click > Open in new tab; The download should start automatically. If it opens in a flash player browser extension instead , deactivate the extension and reload.

2nd case: Game is already loading on the page/ "Ruffle" logo etc

1. Open network tab
2. Reload the page
3. Make sure the game is loading as well by clicking on the play button etc.
4. Find the .swf file in the panel (should be the biggest file)
5. Right click > Open in new tab; The download should start automatically. If it opens in a flash player browser extension instead , deactivate the extension and reload.

Demonstration (in the latter half of the video): https://www.youtube.com/watch?v=70uiDzZPaJQ
