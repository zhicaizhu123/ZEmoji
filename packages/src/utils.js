import { gifMap } from "./emoji";

/**
 * 根据附加属性生成指定条件的正则表达式
 *
 * @param {object} attrs 附加属性，键值对
 * @returns {Array}
 */
const getAttrsReg = (attrs) => {
  const attrsReg = [];
  Object.keys(attrs).forEach((key) => {
    if (attrs[key]) {
      attrsReg.push(new RegExp(`${key}\\s*=\\s*(['"])${attrs[key]}\\1`, "gim"));
    }
  });
  return attrsReg;
};

/**
 * 通过附加属性的筛选获取元素列表
 *
 * @param {Array} list 元素列表
 * @param {object} attrs 附加属性值，键值对
 * @returns {Array}
 */
const getResultByAttr = (list, attrs) => {
  let result = [...list];
  const attrsReg = getAttrsReg(attrs);
  const res = [];
  attrsReg.forEach((attrReg) => {
    result.forEach((item) => {
      if (attrReg.test(item)) {
        res.push(item);
      }
    });
    result = res;
  });
  return result;
};

/**
 * 从文本中获取指定条件的标签
 *
 * @param {object} obj {source: string, tag: str, attrs?: object}
 * source: 需要解析的源文本
 * tag: 需要解析元素的tagName
 * attrs: 附加属性添加更快查询解析元素
 * @returns {Array}
 */
const getTagfromHtmlString = ({ source, tag, attrs }) => {
  const singleTags = "br,hr,img,input,param,meta,link".split(",");
  let reg = new RegExp(`<${tag}[^<>]*>[\\d\\D]*?<\\/${tag}>`, "gmi");
  // 判断是否为但标签
  if (singleTags.includes(tag)) {
    reg = new RegExp(`<${tag}[^<>]*\\/?>`, "gmi");
  }
  let result = source.match(reg);
  if (result && result.length && attrs && Object.keys(attrs).length) {
    result = getResultByAttr(result, attrs);
  }
  return result || [];
};

/**
 * 获取html文本中某类元素指定属性的属性值
 *
 * @param {object} obj {source: string, tag: str, attr: string, attrs?: object}
 * source: 需要解析的源文本
 * tag: 需要解析元素的tagName
 * attr: 需要获取属性值的解析元素的属性名称
 * attrs: 附加属性添加更快查询解析元素
 * @returns {Array}
 */
const getAttrFromHtmlString = ({ source, tag, attr, attrs }) => {
  const result = getTagfromHtmlString({ source, tag, attrs });
  const attrList = result.map((item) => {
    const reg = new RegExp(`${attr}\\s*=\\s*(['"])([^\\1]+?)\\1`, "gmi");
    const list = reg.exec(item);
    if (list && list.length > 1) {
      return {
        el: item,
        val: list[2],
      };
    }
    return {
      el: item,
      val: "",
    };
  });
  return attrList;
};

export const replaceElementToFlag = ({ source, tag, attr, attrs }) => {
  const list = getAttrFromHtmlString({ source, tag, attr, attrs }).filter(
    (item) => item.val
  );
  let result = source;
  list.forEach((item) => {
    result = result.replace(item.el, item.val);
  });
  return result;
};

// 获取表情包html标签
export const getEmojiEl = (code) => {
  const content = `<img src="${gifMap.get(
    code
  )}" data-text="${code}" alt="${code}" style="width: 24px; height: 24px; display: inline-block; vertical-align: text-bottom; margin-right: 4px"/>`;
  return content;
};

// 把图片img标签转为flag
export const getEmojiText = (content) => {
  return replaceElementToFlag({
    source: content,
    tag: "img",
    attr: "data-text",
  });
};
