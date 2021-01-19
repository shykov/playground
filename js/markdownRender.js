let mdInput = document.getElementById('mdInput');
let htmlOutput =  document.getElementById('htmlOutput');

const regexpItalic = /\*{1}(.*?)\*{1}/g;
const regexpBold = /\*{2}(.*?)\*{2}/g;
const regexpBoldItalic = /\*{3}(.*?)\*{3}/g;

mdInput.onkeyup = function(){
	let mdValue = mdInput.value;
	mdArray = mdValue.match(/[^\r\n]+/g);
	htmlOutput.innerHTML = '';

	if (mdArray != null) {
		mdArray.forEach(function(item) {
			if (item.slice(0,2) == '# ') {
				item = item.slice(2);
				htmlOutput.innerHTML += `<h1>${item}</h1>`;
			} else if (item.slice(0,3) == '## ') {
				item = item.slice(3);
				htmlOutput.innerHTML += `<h2>${item}</h2>`;
			} else if (item.slice(0,4) == '### ') {
				item = item.slice(4);
				htmlOutput.innerHTML += `<h3>${item}</h3>`;
			} else if (item.slice(0,5) == '#### ') {
				item = item.slice(5);
				htmlOutput.innerHTML += `<h4>${item}</h4>`;
			} else if (item.slice(0,6) == '##### ') {
				item = item.slice(6);
				htmlOutput.innerHTML += `<h5>${item}</h5>`;
			} else if (item.slice(0,7) == '###### ') {
				item = item.slice(7);
				htmlOutput.innerHTML += `<h6>${item}</h6>`;
			} else {

				item = item.replace(regexpBoldItalic, function(x){
					x = x.slice(3, -3);
					x = `<strong><em>${x}</em></strong>`;
					return x;
				});

				item = item.replace(regexpBold, function(x){
					x = x.slice(2, -2);
					x = `<strong>${x}</strong>`;
					return x;
				});

				item = item.replace(regexpItalic, function(x){
					x = x.slice(1, -1);
					x = `<em>${x}</em>`;
					return x;
				});

				htmlOutput.innerHTML += `<p>${item}<p>`;
			}
		});
	}

}