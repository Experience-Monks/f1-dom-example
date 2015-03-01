var f1 = require('f1');
var select = require('dom-select');
var eases = require('eases');

function button( containerSelector ) {

	var isSelected = false;
	var container = select( containerSelector );

	var ui = f1()
	.toAnimate( {

		base: select( '#base', container ),
		roll: select( '#roll', container ),
		selected: select( '#selected', container ),
		selectedPre: select( '#selectedPre', container )
	})
	.states( {

		out: {

			base: {

				scale: [ 0, 0 ]
			},

			roll: {

				scale: [ 0, 0 ]
			},

			selected: {

				scale: [ 0, 0 ]
			},

			selectedPre: {

				scale: [ 0, 0 ]	
			}
		},

		idle: {

			base: {

				scale: [ 1, 1 ]
			},

			roll: {

				scale: [ 0, 0 ]
			},

			selected: {

				scale: [ 0, 0 ]
			},

			selectedPre: {

				scale: [ 0, 0 ]	
			}
		},

		rollover: {

			base: {

				scale: [ 1, 1 ]
			},

			roll: {

				scale: [ 1, 1 ]
			},

			selected: {

				scale: [ 0, 0 ]
			},

			selectedPre: {

				scale: [ 0.7, 0.7 ]	
			}
		},

		selected: {

			base: {

				scale: [ 1, 1 ]
			},

			roll: {

				scale: [ 1, 1 ]
			},

			selected: {

				scale: [ 1, 1 ]
			},

			selectedPre: {

				scale: [ 0.1, 0.1 ]	
			}
		},

		preUnselect: {

			base: {

				scale: [ 1, 1 ]
			},

			roll: {

				scale: [ 1, 1 ]
			},

			selected: {

				scale: [ 0, 0 ]
			},

			selectedPre: {

				scale: [ 0.25, 0.25 ]	
			}
		},	
	})
	.transitions( [

		'out', 'idle', { duration: 0.3, ease: eases.backOut },
		
		'idle', 'rollover', { 
			duration: 0.5, ease: eases.expoOut,

			roll: { duration: 0.3 },
			selectedPre: { duration: 0.25, delay: 0.2 }
		},
		'rollover', 'idle', { duration: 0.25, ease: eases.expoOut },

		'rollover', 'selected', { duration: 0.25, ease: eases.expoOut },
		'selected', 'preUnselect', { duration: 1, ease: eases.expoOut },
		'preUnselect', 'rollover', { duration: 0.25, ease: eases.expoOut }
	])
	.teach( require('f1-dom') )
	.init( 'out' );

	ui.go( 'idle' );

	container.addEventListener( 'mouseenter', function() {

		if( !isSelected ) {

			ui.go( 'rollover' );
		}
	});

	container.addEventListener( 'mouseleave', function() {

		if( !isSelected ) {

			ui.go( 'idle' );	
		}
	});

	container.addEventListener( 'mousedown', function() {

		isSelected = !isSelected;

		if( isSelected ) {

			ui.go( 'selected' );	
		} else {

			ui.go( 'rollover' );
		}
	});
}

button( '#container1' );
button( '#container2' );
button( '#container3' );