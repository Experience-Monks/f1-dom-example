var expoOut = require( 'eases/expo-out' );
var elasticOut = require( 'eases/elastic-out' );
var backIn = require( 'eases/back-in' );
var backOut = require( 'eases/back-out' );

module.exports = [

  'out', 'idle', { bg: { 
                          duration: 3, ease: backOut,

                          alpha: { duration: 0.1 },
                          position: {
                            0: { duration: 1, delay: 0.1, ease: expoOut }
                          } 
                        }, 
                   fg: { duration: 1, delay: 2, ease: expoOut } },
  'idle', 'out', { duration: 0.5 },

  'idle', 'rollover', { duration: 0.45, ease: expoOut },
  'rollover', 'idle', { duration: 0.3, ease: expoOut },

  'rollover', 'mousedown', { duration: 3, ease: elasticOut },
  'mousedown', 'rollover', { duration: 1, ease: backIn }
];