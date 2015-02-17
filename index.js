var f1 = require( 'f1' );
var css = require( 'dom-style' );
var on = require( 'dom-event' );

var el = document.createElement( 'div' );
var bg = document.createElement( 'div' );
var fg = document.createElement( 'div' );

css( el, {

  position: 'absolute',
  width: '100px',
  height: '100px',
  left: '100px',
  top: '100px'
});

css( bg, {

  position: 'absolute',
  background: '#CAFE00',
  width: '100px',
  height: '100px'
});

css( fg, {

  position: 'absolute',
  background: '#00CAFE',
  width: '100px',
  height: '100px'
});

document.body.appendChild( el );
el.appendChild( bg );
el.appendChild( fg );

var ui = f1( /* { onState: function() { console.log( arguments ) } } */ );

ui
.toAnimate( {
  bg: bg,
  fg: fg
})
.states( require( './lib/states' ) )
.transitions( require( './lib/transitions' ) )
.teach( require( 'f1-dom' ) )
.init( 'out' )
.go( 'idle' ); 

el.addEventListener( 'mouseenter', function() {

  ui.go( 'rollover' );
});


el.addEventListener( 'mouseleave', function() {

  ui.go( 'idle' );
});

el.addEventListener( 'mousedown', function() {

  ui.go( 'mousedown' );
});

el.addEventListener( 'mouseup', function() {

  ui.go( 'rollover' );
});