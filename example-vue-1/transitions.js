module.exports = [
  
  {from: 'out', to: 'idle', animation: { duration: 0.5 }},
  
  {from: 'idle', to: 'rollover', animation: { duration: 0.1 }},
  {from: 'rollover', to: 'idle', animation: { duration: 0.1 }},

  {from: 'rollover', to: 'mousedown', animation: { duration: 0.1 }},
  {from: 'mousedown', to: 'rollover', animation: { duration: 0.1 }}
];