## style-dom

Library to manipulate CSS via DOM

```js
style = require('style-dom')

style(document.body, 'background-color', 'red')

style(document.body, {
  'font-color': 'yellow',
  'border': '5px solid black'
})

style.show(document.body.children[0])
style.hide(document.body.children[1])
```

## Install

```bash
$ npm install style-dom
```
