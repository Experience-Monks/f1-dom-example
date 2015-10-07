var f1 = require('f1');
var f1Dom = require('f1-dom');
var eases = require('eases');


var elements = Array.apply(undefined, Array(10)).map( function() {
  var el = document.createElement('div');

  el.innerHTML = 'Hello world';

  document.body.appendChild(el);

  return el;
});



var ui = f1({
  states: getStates(elements),
  targets: getTargets(elements),
  transitions: getTransitions(elements),
  parsers: f1Dom
})
.init('out');

ui.go('idle');





function getTargets(elements) {
  var targets = {};

  elements.forEach(function(value, i) {
    targets[ 'item' + i ] = value;
  });

  return targets;
}


function getTransitions(elements) {
  var animation = {};

  // elements.forEach( function(value, i) {
  //   animation[ 'item' + i ] = {
  //     duration: 3,
  //     delay: 0.9 * i
  //   };
  // });

  elements.forEach( function(value, i) {
    animation[ 'item' + i ] = {
      duration: 2.5,

      position: {
        '1': {
          duration: 3,
          delay: 0.9 * i
        }
      }
    };
  });

  console.log(animation);

  return [
    { from: 'idle', to: 'out', animation: animation },
    { from: 'out', to: 'idle', animation: animation }
  ];
}

function getStates(elements) {
  var states = { out: {}, idle: {} };
  var idle = states.idle;
  var out = states.out;

  elements.forEach(function(value, i) {
    idle[ 'item' + i ] = {
      position: [ 0, 20 * i, 0 ]
    };

    out[ 'item' + i ] = {
      position: [ 0 + i * 100, 20 * i + 30, 0 ]
    };
  });

  return states;
}