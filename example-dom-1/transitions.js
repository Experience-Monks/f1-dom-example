var eases = require( 'eases' );

module.exports = [
  { from: 'out', to: 'idle', animation: { duration: 1, ease: eases.elasticOut } },
  { from: 'idle', to: 'rollover', animation: { duration: 0.4, ease: eases.backOut } },
  { from: 'rollover', to: 'idle', animation: { duration: 0.2 } },
  { from: 'rollover', to: 'mousedown', animation: { duration: 0.1 } },
  { from: 'mousedown', to: 'idle', animation: { duration: 0.1} }
];