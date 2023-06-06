const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
// console.log(tabs, panels);

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(event) {
	// #1 - Deactivate all tabs configuration
	tabs.forEach((tab) => {
		tab.children[0].classList.remove(
			'border-softRed',
			'border-b-4',
			'md:border-b-0',
		);
	});
	// #2 - Hide all tabs
	panels.forEach((panel) => {
		panel.classList.add('hidden');
	});
	// #3 - Activate the new tab and panel based on the target value
	// Brings back the bottom border for the clicked one
	event.target.classList.add('border-softRed', 'border-b-4');
	// Read the target value for the clicked one
	const classString = event.target.getAttribute('data-target');
	console.log(
		'🚀 | file: script.js:24 | onTabClick | classString:',
		classString,
	);
	// Remove hidden on the corresponding panel according to read target value
	document
		.getElementById('panels')
		.getElementsByClassName(classString)[0]
		.classList.remove('hidden');
}
