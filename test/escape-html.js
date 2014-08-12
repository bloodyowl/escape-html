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
