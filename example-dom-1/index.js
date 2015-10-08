var f1 = require('f1');
var css = require('dom-style');
var on = require('dom-event');

var el = document.createElement('div');
var icon = document.createElement('div');
var line = document.createElement('div');
var text = document.createElement('div');

css( el, {

  position: 'absolute',
  width: '100px',
  height: '100px',
  left: '100px',
  top: '100px'
});

css( icon, {

  position: 'absolute',
  background: '#CAFE00',
  width: '20px',
  height: '20px'
});

css( line, {

  position: 'absolute',
  background: '#000',
  width: '100px',
  height: '1px'
});

css( text, {

  position: 'absolute'
});

text.innerHTML = 'Something';


document.body.appendChild(el);
el.appendChild(icon);
el.appendChild(line);
el.appendChild(text);



var ui = f1({
  onState: function() {
    console.log('onState', arguments);
  }
});

ui
.targets( {
  icon: icon,
  line: line,
  text: text
})
.states(require('./states'))
.transitions(require('./transitions'))
.parsers(require('f1-dom'))
.init('out')
.go('idle'); 

el.addEventListener('mouseenter', function() {

  ui.go('rollover');
});


el.addEventListener('mouseleave', function() {

  ui.go('idle');
});

el.addEventListener('mousedown', function() {

  ui.go('mousedown');
});

el.addEventListener('mouseup', function() {

  ui.go('rollover');
});