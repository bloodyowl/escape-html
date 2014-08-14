var htmlCharsRE = /[&<>"']/g
var htmlChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
}

var escapedHtmlCharsRE = /&(?:amp|lt|gt|quot|#39);/g
var escapedHtmlChars = {
  "&amp;" : "&",
  "&lt;" : "<",
  "&gt;" : ">",
  "&quot;" : "\"",
  "&#39;" : "'"
}

var htmlCharsReplace = function(char){
  return htmlChars[char]
}
var escapedHtmlCharsReplace = function(char){
  return escapedHtmlChars[char]
}

module.exports = function(string){
  return string.replace(htmlCharsRE, htmlCharsReplace)
}

module.exports.unescapeHTML = function(string){
  return string.replace(escapedHtmlCharsRE, escapedHtmlCharsReplace)
}
