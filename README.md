# escapeHTML

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
