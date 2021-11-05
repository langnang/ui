/**
 * 获取样式表规则
 * @param {*} styleSheet 
 * @param {*} selectorText 
 * @return {Array}
 */
export const getCssStyleRules = (styleSheet: any = {}, selectorText: string = "") => [...styleSheet?.cssRules].filter(rule => new RegExp(selectorText).test(rule.selectorText))

export const __getCssStyleRules__ = {
  description: "获取样式表规则"
}