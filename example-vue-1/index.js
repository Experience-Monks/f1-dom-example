var vue = require( 'vue' );
var f1 = require( 'f1' );
var f1Model = require( 'f1-model' );
var fs = require( 'fs' );

var model = {

  fg: {

    copy: 'Hey Ho SNAKES!',
    x: 0,
    y: 0,
    alpha: 1
  },
  bg: {

    r: 255,
    x: 0,
    y: 0,
    alpha: 1
  }
};

var uiVue, ui; 

uiVue = new vue( {

  el: 'body',
  data: model,
  template: fs.readFileSync( __dirname + '/template.html', 'utf8' ),
  methods: {

    onMouseDown: function() {

      ui.go( 'mousedown' );
    },

    onMouseUp: function() {

      ui.go( 'idle' );
    },

    onMouseOver: function() {

      ui.go( 'rollover' );
    },

    onMouseOut: function() {

      ui.go( 'idle' );
    }
  }
});

ui = new f1();

ui
.toAnimate( model )
.states( require( './states' ) )
.transitions( require( './transitions' ) )
.teach( require( 'f1-model' ) )
.init( 'out' );

ui.go( 'idle' );