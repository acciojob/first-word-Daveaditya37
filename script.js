function firstWord(s) {
    if (s === '') {
        return s; 
    }
    let ch = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            return ch; 
        }
        ch += s[i];
    }
    return ch; 
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

