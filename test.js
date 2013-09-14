var style = require("./");
var select = require("select-dom");
var el;

before(function(done){
  document.body.innerHTML = '<button>hello</button>';
  el = select('button');
  done();
});

it('hides and shows', function(){
  style.hide(el);
  expect(el.style.display).to.equal('none');
  style.show(el);
  expect(el.style.display).to.equal('');
});

it('sets a css property', function(){
  style(el, 'color', 'red');
  expect(el.style.color).to.equal('red');

  style(el, {
    background: 'yellow',
    margin: '20px'
  });

  expect(el.style.background).to.equal('yellow');
  expect(el.style.margin).to.equal('20px');
});
