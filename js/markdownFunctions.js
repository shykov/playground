function parse(str) {
	console.log(str);
}

function createTitle(str) {
	if ((str.length >= 3) && (str[0] == '#') ) {
		switch (true) {
			case isH1(str):
				return wrapH1(str);
			case isH2(str):
				return wrapH2(str);
			case isH3(str):
				return wrapH3(str);
			case isH4(str):
				return wrapH4(str);
			case isH5(str):
				return wrapH5(str);
			case isH6(str):
				return wrapH6(str);
			default:
				return false;
		}
	} else {
		return false;
	}
}

function isH1(str) {
	result = (str.slice(0,2) == '# ') ? true : false;
	return result;
}

function wrapH1(str) {
	str = str.slice(2);
	str = `<h1>${str}</h1>`;
	return str;
}

function isH2(str) {
	result = (str.slice(0,3) == '## ') ? true : false;
	return result;
}

function wrapH2(str) {
	str = str.slice(3);
	str = `<h2>${str}</h2>`;
	return str;
}

function isH3(str) {
	result = (str.slice(0,4) == '### ') ? true : false;
	return result;
}

function wrapH3(str) {
	str = str.slice(4);
	str = `<h3>${str}</h3>`;
	return str;
}

function isH4(str) {
	result = (str.slice(0,5) == '#### ') ? true : false;
	return result;
}

function wrapH4(str) {
	str = str.slice(5);
	str = `<h4>${str}</h4>`;
	return str;
}

function isH5(str) {
	result = (str.slice(0,6) == '##### ') ? true : false;
	return result;
}

function wrapH5(str) {
	str = str.slice(6);
	str = `<h5>${str}</h5>`;
	return str;
}

function isH6(str) {
	result = (str.slice(0,7) == '###### ') ? true : false;
	return result;
}

function wrapH6(str) {
	str = str.slice(7);
	str = `<h6>${str}</h6>`;
	return str;
}

function wrapBoldItalicText(str) {
	if (str.match(regexpBoldItalicText)) {
		str = str.replace(regexpBoldItalicText, function(val){
			val = val.slice(3, -3);
			val = `<strong><em>${val}</em></strong>`;
			return val;
		});
		return str;
	} else {
		return false;
	}	
}

function wrapBoldText(str) {
	if (str.match(regexpBoldText)) {
		str = str.replace(regexpBoldText, function(val){
			val = val.slice(2, -2);
			val = `<strong>${val}</strong>`;
			return val;
		});
		return str;
	} else {
		return false;
	}
}

function wrapItalicText(str) {
	if (str.match(regexpItalicText)) {
		str = str.replace(regexpItalicText, function(val){
			val = val.slice(1, -1);
			val = `<em>${val}</em>`;
			return val;
		});
		return str;
	} else {
		return false;
	}
}