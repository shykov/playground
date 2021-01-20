let markdownInput = document.getElementById('markdownInput');
let htmlOutput =  document.getElementById('htmlOutput');

const regexpItalicText = /\*{1}(.+?)\*{1}/g;
const regexpBoldText = /\*{2}(.+?)\*{2}/g;
const regexpBoldItalicText = /\*{3}(.+?)\*{3}/g;


markdownInput.onkeyup = function() {
	let markdownValue = markdownInput.value;
	let markdownArray = markdownValue.match(/[^\r\n]+/g);
	htmlOutput.innerHTML = '';

	if (markdownArray) {
		markdownArray.forEach(function(item) {
			item = parse(item);
			htmlOutput.innerHTML += item;
		});
	}
}