/***** THIS IS NOT REALLY AN EXAMPLE BUT MORE SO TESTING A BUG WHICH CAME UP DURING PRODUCTION *****/

var f1 = require( 'f1' );
var f1Dom = require('f1-dom');
var select = require( 'dom-select' );

var bar = document.createElement('div');

bar.style.position = 'absolute';
bar.style.top = '200px';
bar.style.width = '200px';
bar.style.height = '50px';
bar.style.background = '#F0F';

document.body.appendChild(bar);


var ui = f1()
.targets( {
	bar: bar
})
.states( {
	'1': {
		bar: {
			position: [0, 0, 0]
		}
	},

	'2': {
		bar: {
			position: [window.innerWidth * 0.5 - 100, 0, 0]
		}
	},

	'3': {
		bar: {
			position: [window.innerWidth - 200, 0, 0]
		}
	}
})
.transitions([
	{ from: '1', to: '2' },
	{ from: '1', to: '3' },

	{ from: '2', to: '1' },
	{ from: '2', to: '3' },

	{ from: '3', to: '1' },
	{ from: '3', to: '2' }
])
.parsers(f1Dom)
.init('1');

window.addEventListener('keyup', function(ev) {

	var state = String.fromCharCode(ev.which);

	if(state === '1' || state === '2' || state === '3') {

		ui.go(state);
	}
});