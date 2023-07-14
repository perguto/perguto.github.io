// ==UserScript==
// @name         Country Emojis
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let style=`
@font-face {
  font-family: NotoColorEmojiLimited;
  unicode-range: U+1F1E6-1F1FF;
  src: url(https://raw.githack.com/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf);
  font-display: swap;
}
`
/*
+
`
.emoji {
  font-family: 'NotoColorEmojiLimited';
}
`
*/
let s;
document.head.append(s=document.createElement('style'))
s.innerHTML=style






for(let sheet of document.styleSheets){
	try{
		for(let rule of sheet.cssRules){
			try {
				if(rule.style.fontFamily.length>0){
					rule.style.fontFamily='NotoColorEmojiLimited,'+rule.style.fontFamily
				}
			} catch (error) {

			}
		}
	}catch(error){}
}
