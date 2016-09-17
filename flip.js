function flip() {
    var flipType=document.f.flipType.value;
    var originalString=document.f.original.value;
    var result="";
    switch(flipType) {
    case "flip":
        result = flipString(originalString);
        break;
    case "weird":
        result = transformString(originalString, flipType);
        break;
    }
    document.f.flipped.value = result;
}

function flipString(aString) {
    aString=aString.toLocaleLowerCase();
    var last = aString.length - 1;
    var result = new Array(aString.length);
    //also reverse the result string
    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i);
        var r = flipTable[c];
        result[last - i] = r ? r : c;
    }
    return result.join('');
}

function transformString(aString, txType) {
    var last = aString.length - 1;
    var result = new Array(aString.length);

    switch(txType) {
    case "weird":
        txTable=weirdTable;
        aString=aString.toLocaleLowerCase();
        break;

    }

    for (var i = last; i >= 0; --i) {
        var c = aString.charAt(i);
        var r = txTable[c];
        result[i] = r ? r : c;
    }
    return result.join('');
}

var flipTable = {
    a : '\u0250',
    b : 'q',
    c : '\u0254', //open o -- from pne
    d : 'p',
    e : '\u01DD',
    f : '\u025F', //from pne
    g : '\u0183',
    h : '\u0265',
    i : '\u0131', //from pne
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
    '?' : '\u00BF', //from pne
    '!' : '\u00A1',
    "\'" : ',',
    '<' : '>',
    '_' : '\u203E',
    '\u203F' : '\u2040',
    '\u2045' : '\u2046',
    '\u2234' : '\u2235',
    '\r' : '\n' //thank you, Yeeliberto
};

for (i in flipTable) {
    flipTable[flipTable[i]] = i;
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
};

for (i in weirdTable) {
    weirdTable[weirdTable[i]] = i;
}
