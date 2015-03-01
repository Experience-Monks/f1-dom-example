var f1 = require( 'f1' );
var select = require( 'dom-select' );


var container = select( '#container' );
var block = select( '#block' );

var stateMouseDown = {

	block: {
		rotation: [ 0, 0, 0 ]
	}
};

var ui = new f1()
.toAnimate( {

	block: block
})
.states( {

	idle: {

		block: {

			rotation: [ 0, 0, 0 ]	
		}
	},

	mousedown: stateMouseDown
})
.teach( require( 'f1-dom' ) )
.transitions( [

	'idle', 'mousedown',
	'mousedown', 'idle'
])
.init( 'idle' );

container.addEventListener( 'mousedown', function( ev ) {

	updateDownState( ev );

	ui.go( 'mousedown' );
});

container.addEventListener( 'mousemove', function( ev ) {

	updateDownState( ev );
});

container.addEventListener( 'mouseup', function( ev ) {

	ui.go( 'idle' );
});

function updateDownState( ev ) {

	var MAX_ROTATION = Math.PI * 0.25;

	var x = ( ev.offsetX - 50 ) / 50 * MAX_ROTATION;
	var y = ( ev.offsetY - 50 ) / 50 * -MAX_ROTATION;
	var block = stateMouseDown.block;

	block.rotation[ 0 ] = y;
	block.rotation[ 1 ] = x;
	
	ui.update();
}

