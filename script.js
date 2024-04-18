function mapLetters(str) {
	const letterMap = {};
	for(let i = 0; i<str.length; i++){
const letter = str[i];
		if(!(letter in letterMap)) {
letterMap[letter] = [];
		}
		letterMap[letter].push(i);
	}
	return letterMap;
}

