var expoOut = require( 'eases/expo-out' );
var elasticOut = require( 'eases/elastic-out' );
var backIn = require( 'eases/back-in' );
var backOut = require( 'eases/back-out' );

module.exports = [

  { 
    from: 'out', 
    to: 'idle', 
    animation: { 
      bg: { 
        duration: 3, ease: backOut,

        alpha: { duration: 0.1 },
        position: {
          0: { duration: 1, delay: 0.1, ease: expoOut }
        } 
      }, 
      fg: { 
        duration: 1, delay: 2, ease: expoOut 
      } 
    }
  },

  {  
    from: 'idle', 
    to: 'out', 
    animation: { duration: 0.5 }
  },

  {
    from: 'idle', 
    to: 'rollover', 
    animation: { duration: 0.45, ease: expoOut }
  },


  {
    from: 'rollover', 
    to:'idle', 
    animation: { duration: 0.3, ease: expoOut }
  },
  
  {
    from: 'rollover', 
    to: 'mousedown', 
    animation: { 
      duration: 3, ease: elasticOut,

      bg: {

        position: function( time, start, end ) {

          var rVal = [];
          var rand = Math.sin( time * Math.PI * 2 ) * 100 * ( 1 - time );


          start.forEach( function( startVal, idx ) {

            rVal[ idx ] = ( end[ idx ] - startVal ) + startVal + rand;
          });

          return rVal;
        }
      }
    }
  },

  {
    from: 'mousedown', 
    to: 'rollover', 
    animation: { duration: 1, ease: backIn }
  }
];