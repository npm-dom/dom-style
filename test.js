var test = require('tape');
var style = require("./");
var select = require('select-dom');
var el;

test('sets a css property', function (t) {
  reset();
  t.plan(5);

  style(el, 'color', 'red');
  t.equal(el.style.color, 'red');

  style(el, 'float', 'left');
  t.equal(el.style.cssFloat, 'left');

  style(el, {
    'background-color': 'yellow',
    'float': 'left',
    margin: '20px'
  });

  t.equal(el.style.backgroundColor, 'yellow');
  t.equal(el.style.cssFloat, 'left');
  t.equal(el.style.margin, '20px');
});

function reset() {
  document.body.innerHTML = '<button>hello</button>';
  el = select('button');
}
