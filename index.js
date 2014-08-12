var htmlCharsRE = /[&<>"']/g
var htmlChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
}

var htmlCharsReplace = function(char){
  return htmlChars[char]
}

module.exports = function(string){
  return string.replace(htmlCharsRE, htmlCharsReplace)
}
