//this script is based on coding by Reverse Fad http://www.revfad.com
// HTML to call this (http://textupsidedown.com/weirdmaker.html):
//
// <script type="text/javacript" src="weird.js"/>
//
// <form name="f">
//  <textarea rows="3" cols="30" name="original" onKeyUp="flip()"></textarea>
// <br />
// <em> result</em> :<br />
// <textarea rows="3" cols="30" name="weirded"></textarea>
// </form>


function weird() {
 var result = weirdString(document.f.original.value.toLowerCase());
 document.f.weirded.value = result;
}
function weirdString(aString) {
 var last = aString.length - 1;
 var result = new Array(aString.length)
 for (var i = last; i >= 0; --i) {
  var c = aString.charAt(i)
  var r = weirdTable[c]
  result[i] = r != undefined ? r : c
 }
 return result.join('')
}
var weirdTable = {
a : '\u03B1',
b : '\u0432',
c : 'c',
d : '\u0111',
e : '\u0454',
f : 'f',
g : '\u0121',
h : '\u043d',
i : '\u03af',
j : '\u05e0',
k : '\u043a',
l : 'l',
m : '\u043c',
n : '\u0438',
o : 'o',
p : '\u03c1',
r : '\u044f',
s : 's',
t : '\u0442',
u : '\u03c5',
v : 'v',
w : '\u03c9',
x : 'x',
y : '\u0443',
z : 'z',
'\r' : '\n'
}
for (i in weirdTable) {
  weirdTable[weirdTable[i]] = i
}
