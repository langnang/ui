const cssRules = [
  ...[...document.styleSheets].find((sheet) =>
    /ln.css$/.test(sheet.href)
  )["cssRules"],
];
console.log(cssRules);
/**
 * 获取匹配的类名
 * @param {*} name 
 * @returns 
 */
const getActiveCssRules = (name) => cssRules.filter((rule) => new RegExp(`^\.ln-${name}`).test(rule.selectorText) && !/:/.test(rule.selectorText))
