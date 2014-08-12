# escapeHTML

[![browser support](https://ci.testling.com/bloodyowl/escape-html.png)](https://ci.testling.com/bloodyowl/escape-html)

[![Build Status](https://travis-ci.org/bloodyowl/escape-html.svg?branch=1.0.0)](https://travis-ci.org/bloodyowl/escape-html)

## install

```sh
$ npm install bloody-escapehtml
```

## require

```javascript
var escapeHTML = require("bloody-escapehtml")
```

## api

### escapeHTML(string) > escapedString

escapes special HTML chars :

```txt
& => &amp;
< => &lt;
> => &gt;
" => &quot;
' => &#39;
```

## example

```javascript
var safeValue = escapeHTML(input.value)
// -> "&lt;div&gt;&lt;/div&gt;"
```
