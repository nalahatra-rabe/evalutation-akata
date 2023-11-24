function isValidHtml(html) {
  const regex = /<("[^"]*"|'[^']*'|[^'">])*>/g;
  return regex.test(html);
}
console.log(isValidHtml("Hello"));
