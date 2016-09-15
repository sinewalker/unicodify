 //this script is based on coding by Reverse Fad http://www.revfad.com
// HTML to call this (http://textupsidedown.com/index.html):
//
// <script type="text/javacript" src="flip.js"/>
//
// <form name="f">
//  <textarea rows="3" cols="30" name="original" onKeyUp="flip()"></textarea>
// <br />
// <em> result</em> :<br />
// <textarea rows="3" cols="30" name="flipped"></textarea>
// </form>
//

// The original code is at http://www.revfad.com/flip.html and is copyright
// David Faden
// dfaden@gmail.com
//  Creative Commons Attribution-Share Alike 3.0 Unported License.
 
// from the headers at www.revfad.com/flip.html, this dates from about 26 Jul 2009
//
// Accept-Ranges:bytes
// Content-Length:2197
// Content-Type:text/html
// Date:Wed, 14 Sep 2016 05:41:58 GMT
// ETag:"895-46fa33a1a5800"
// Last-Modified:Sun, 26 Jul 2009 22:19:12 GMT
// Server:Apache

function flip() {
 var result = flipString(document.f.original.value.toLowerCase());
 document.f.flipped.value = result;
}
function flipString(aString) {
 var last = aString.length - 1;
 var result = new Array(aString.length)
 for (var i = last; i >= 0; --i) {
  var c = aString.charAt(i)
  var r = flipTable[c]
  result[last - i] = r != undefined ? r : c
 }
 return result.join('')
}
var flipTable = {
a : '\u0250',
b : 'q',
c : '\u0254',
d : 'p',
e : '\u01DD',
f : '\u025F',
g : '\u0183',
h : '\u0265',
i : '\u0131',
j : '\u027E',
k : '\u029E',
//l : '\u0283',
m : '\u026F',
n : 'u',
r : '\u0279',
t : '\u0287',
v : '\u028C',
w : '\u028D',
y : '\u028E',
'.' : '\u02D9',
'[' : ']',
'(' : ')',
'{' : '}',
'?' : '\u00BF',
'!' : '\u00A1',
"\'" : ',',
'<' : '>',
'_' : '\u203E',
';' : '\u061B',
'\u203F' : '\u2040',
'\u2045' : '\u2046',
'\u2234' : '\u2235',
'\r' : '\n'
}
for (i in flipTable) {
  flipTable[flipTable[i]] = i
}
