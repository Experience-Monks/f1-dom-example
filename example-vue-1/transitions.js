module.exports = [
  
  'out', 'idle', { duration: 0.5 },
  
  'idle', 'rollover', { duration: 0.1 },
  'rollover', 'idle', { duration: 0.1 },

  'rollover', 'mousedown', { duration: 0.1 },
  'mousedown', 'rollover', { duration: 0.1 }
];