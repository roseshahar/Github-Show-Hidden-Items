import optionsStorage from './options-storage.js';
const { minimatch } = require('minimatch');

console.log('💈 Content script loaded for', chrome.runtime.getManifest().name);
async function init() {
	while (buttons = document.getElementsByClassName("ajax-pagination-btn")) {
		let hidden_items_expanded = false;
		for (element of buttons) {
			if (minimatch(element.innerText, "Load more*")) {
				element.click();
				console.log('Expanded hidden bulk!');

				hidden_items_expanded = true;
			}
		}

		if (!hidden_items_expanded) {
			break;
		}
	}
}

init();
