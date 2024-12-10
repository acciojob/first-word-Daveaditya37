function firstWord(s) {
	if (s=='') {
		return s;
	}
  for (let i = 0; i < s.length; i++) {
	  let ch+=s[i];
  	if (s==' ') {
  		return ch;
  	}else{
		return s;
	}
  }
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

