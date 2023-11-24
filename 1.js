function isValidHtml(html) {
  const regex = /<("[^"]*"|'[^']*'|[^'">])*>/g;
  return regex.test(html);
}
console.log("Is html valid: ", isValidHtml("<a></a>"));
console.log("Is html valid: ", isValidHtml("test"));
