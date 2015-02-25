var eases = require( 'eases' );

module.exports = [
  'out', 'idle', { duration: 1, ease: eases.elasticOut },
  'idle', 'rollover', { duration: 0.4, ease: eases.backOut },
  'rollover', 'idle', { duration: 0.2 },

  'rollover', 'mousedown', { duration: 0.1 },
  // 'mousedown', 'rollover', { duration: 0.1 },

  'mousedown', 'idle', { duration: 0.1 }
];