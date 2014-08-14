var tape = require("tape")
var escapeHTML = require("..")

tape("escapeHTML", function(test){
  test.equal(
    escapeHTML("<div></div>"),
    "&lt;div&gt;&lt;/div&gt;"
  )
  test.equal(
    escapeHTML("<div class=\"foo\">&</div>"),
    "&lt;div class=&quot;foo&quot;&gt;&amp;&lt;/div&gt;"
  )
  test.equal(
    escapeHTML("&<>\"'"),
    "&amp;&lt;&gt;&quot;&#39;"
  )
  test.equal(
    escapeHTML("&amp;"),
    "&amp;amp;"
  )
  test.end()
})

tape("unescapeHTML", function(test){
  test.equal(
    escapeHTML.unescapeHTML("&lt;div&gt;&lt;/div&gt;"),
    "<div></div>"
  )
  test.equal(
    escapeHTML.unescapeHTML("&lt;div class=&quot;foo&quot;&gt;&amp;&lt;/div&gt;"),
    "<div class=\"foo\">&</div>"
  )
  test.equal(
    escapeHTML.unescapeHTML("&amp;&lt;&gt;&quot;&#39;"),
    "&<>\"'"
  )
  test.equal(
    escapeHTML.unescapeHTML("&amp;amp;"),
    "&amp;"
  )
  test.end()
})
