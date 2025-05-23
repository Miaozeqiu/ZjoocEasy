// ==UserScript==
// @name       				OCS 网课助手
// @version    				4.9.77
// @description				OCS(online-course-script) 网课助手，官网 https://docs.ocsjs.com ，专注于帮助大学生从网课中释放出来 让自己的时间把握在自己的手中，拥有人性化的操作页面，流畅的步骤提示，支持  【超星学习通】 【知到智慧树】 【职教云】 【智慧职教】 【中国大学MOOC】 等网课的学习，作业。具体的功能请查看脚本悬浮窗中的教程页面。
// @author     				enncy
// @license    				MIT
// @match      				*://*.zhihuishu.com/*
// @match      				*://*.chaoxing.com/*
// @match      				*://*.edu.cn/*
// @match      				*://*.org.cn/*
// @match      				*://*.xueyinonline.com/*
// @match      				*://*.hnsyu.net/*
// @match      				*://*.qutjxjy.cn/*
// @match      				*://*.ynny.cn/*
// @match      				*://*.hnvist.cn/*
// @match      				*://*.fjlecb.cn/*
// @match      				*://*.gdhkmooc.com/*
// @match      				*://*.cugbonline.cn/*
// @match      				*://*.zjelib.cn/*
// @match      				*://*.cqrspx.cn/*
// @match      				*://*.neauce.com/*
// @match      				*://*.zhihui-yun.com/*
// @match      				*://*.cqie.cn/*
// @match      				*://*.ccqmxx.com/*
// @match      				*://*.icve.com.cn/*
// @match      				*://*.course.icve.com.cn/*
// @match      				*://*.courshare.cn/*
// @match      				*://*.webtrn.cn/*
// @match      				*://*.zjy2.icve.com.cn/*
// @match      				*://*.zyk.icve.com.cn/*
// @match      				*://*.icourse163.org/*
// @grant      				GM_info
// @grant      				GM_getTab
// @grant      				GM_saveTab
// @grant      				GM_setValue
// @grant      				GM_getValue
// @grant      				unsafeWindow
// @grant      				GM_listValues
// @grant      				GM_deleteValue
// @grant      				GM_notification
// @grant      				GM_xmlhttpRequest
// @grant      				GM_getResourceText
// @grant      				GM_addValueChangeListener
// @grant      				GM_removeValueChangeListener
// @run-at     				document-start
// @namespace  				https://enncy.cn
// @homepage   				https://docs.ocsjs.com
// @source     				https://github.com/ocsjs/ocsjs
// @icon       				https://cdn.ocsjs.com/logo.png
// @connect    				enncy.cn
// @connect    				icodef.com
// @connect    				ocsjs.com
// @connect    				localhost
// @connect    				127.0.0.1
// @antifeature				payment
// @downloadURL https://update.greasyfork.org/scripts/457151/OCS%20%E7%BD%91%E8%AF%BE%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://update.greasyfork.org/scripts/457151/OCS%20%E7%BD%91%E8%AF%BE%E5%8A%A9%E6%89%8B.meta.js
// ==/UserScript==

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.OCS = {}));
})(this, function(exports2) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function isObject$2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$2;
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$2 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$2;
  var root$1 = _root;
  var now$1 = function() {
    return root$1.Date.now();
  };
  var now_1 = now$1;
  var reWhitespace = /\s/;
  function trimmedEndIndex$1(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var _trimmedEndIndex = trimmedEndIndex$1;
  var trimmedEndIndex = _trimmedEndIndex;
  var reTrimStart = /^\s+/;
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  var _baseTrim = baseTrim$1;
  var root = _root;
  var Symbol$3 = root.Symbol;
  var _Symbol = Symbol$3;
  var Symbol$2 = _Symbol;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty = objectProto$1.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag$1(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$1;
  function isObjectLike$1(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$1;
  var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$1(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$1;
  var baseTrim = _baseTrim, isObject$1 = isObject_1, isSymbol = isSymbol_1;
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber$1(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject$1(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$1(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_1 = toNumber$1;
  var isObject = isObject_1, now = now_1, toNumber = toNumber_1;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1$1 = debounce;
  const $ = {
    uuid() {
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    },
    random(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    },
    async sleep(period) {
      return new Promise((resolve) => {
        setTimeout(resolve, period);
      });
    },
    isInBrowser() {
      return typeof window !== "undefined" && typeof window.document !== "undefined";
    },
    elementToRawObject(el) {
      return {
        innerText: el == null ? void 0 : el.innerText,
        innerHTML: el == null ? void 0 : el.innerHTML,
        textContent: el == null ? void 0 : el.textContent
      };
    },
    onresize(el, handler) {
      const resize = debounce_1$1(() => {
        if (el.parentNode === null) {
          window.removeEventListener("resize", resize);
        } else {
          handler(el);
        }
      }, 200);
      resize();
      window.addEventListener("resize", resize);
    },
    isInTopWindow() {
      return self === top;
    },
    createCenteredPopupWindow(url, winName, opts) {
      const { width, height, scrollbars, resizable } = opts;
      const LeftPosition = screen.width ? (screen.width - width) / 2 : 0;
      const TopPosition = screen.height ? (screen.height - height) / 2 : 0;
      const settings = "height=" + height + ",width=" + width + ",top=" + TopPosition + ",left=" + LeftPosition + ",scrollbars=" + (scrollbars ? "yes" : "no") + ",resizable=" + (resizable ? "yes" : "no");
      return window.open(url, winName, settings);
    }
  };
  const $string = {
    humpToTarget(value, target) {
      return value.replace(/([A-Z])/g, target + "$1").toLowerCase().split(target).slice(1).join(target);
    }
  };
  class StringUtils {
    constructor(_text) {
      this._text = _text;
    }
    static nowrap(str, replace_str) {
      return (str == null ? void 0 : str.replace(/\n/g, replace_str)) || "";
    }
    nowrap(replace_str) {
      this._text = StringUtils.nowrap(this._text, replace_str);
      return this;
    }
    static nospace(str) {
      return (str == null ? void 0 : str.replace(/ +/g, " ")) || "";
    }
    nospace() {
      this._text = StringUtils.nospace(this._text);
      return this;
    }
    static noSpecialChar(str) {
      return (str == null ? void 0 : str.replace(/[^\w\s]/gi, "")) || "";
    }
    noSpecialChar() {
      this._text = StringUtils.noSpecialChar(this._text);
      return this;
    }
    static max(str, len) {
      return str.length > len ? str.substring(0, len) + "..." : str;
    }
    max(len) {
      this._text = StringUtils.max(this._text, len);
      return this;
    }
    static hide(str, start2, end, replacer = "*") {
      return str.substring(0, start2) + str.substring(start2, end).replace(/./g, replacer) + str.substring(end);
    }
    hide(start2, end, replacer = "*") {
      this._text = StringUtils.hide(this._text, start2, end, replacer);
      return this;
    }
    static of(text) {
      return new StringUtils(text);
    }
    toString() {
      return this._text;
    }
  }
  const $const = {
    TAB_UID: "_uid_",
    TAB_URLS: "_urls_",
    TAB_CURRENT_PANEL_NAME: "_current_panel_name_"
  };
  function domSearch(wrapper, root2 = window.document) {
    const obj = /* @__PURE__ */ Object.create({});
    Reflect.ownKeys(wrapper).forEach((key) => {
      const item = wrapper[key.toString()];
      Reflect.set(
        obj,
        key,
        typeof item === "string" ? root2.querySelector(item) : typeof item === "function" ? item(root2) : item.map((fun) => fun(root2))
      );
    });
    return obj;
  }
  function domSearchAll(wrapper, root2 = window.document) {
    const obj = /* @__PURE__ */ Object.create({});
    Reflect.ownKeys(wrapper).forEach((key) => {
      const item = wrapper[key.toString()];
      Reflect.set(
        obj,
        key,
        typeof item === "string" ? Array.from(root2.querySelectorAll(item)) : typeof item === "function" ? item(root2) : item.map((fun) => fun(root2))
      );
    });
    return obj;
  }
  var src$1 = {
    compareTwoStrings,
    findBestMatch
  };
  function compareTwoStrings(first, second) {
    first = first.replace(/\s+/g, "");
    second = second.replace(/\s+/g, "");
    if (first === second)
      return 1;
    if (first.length < 2 || second.length < 2)
      return 0;
    let firstBigrams = /* @__PURE__ */ new Map();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
      firstBigrams.set(bigram, count);
    }
    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }
    return 2 * intersectionSize / (first.length + second.length - 2);
  }
  function findBestMatch(mainString, targetStrings) {
    if (!areArgsValid(mainString, targetStrings))
      throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
    const ratings = [];
    let bestMatchIndex = 0;
    for (let i = 0; i < targetStrings.length; i++) {
      const currentTargetString = targetStrings[i];
      const currentRating = compareTwoStrings(mainString, currentTargetString);
      ratings.push({ target: currentTargetString, rating: currentRating });
      if (currentRating > ratings[bestMatchIndex].rating) {
        bestMatchIndex = i;
      }
    }
    const bestMatch = ratings[bestMatchIndex];
    return { ratings, bestMatch, bestMatchIndex };
  }
  function areArgsValid(mainString, targetStrings) {
    if (typeof mainString !== "string")
      return false;
    if (!Array.isArray(targetStrings))
      return false;
    if (!targetStrings.length)
      return false;
    if (targetStrings.find(function(s) {
      return typeof s !== "string";
    }))
      return false;
    return true;
  }
  function clearString(str, ...exclude) {
    return str.trim().toLocaleLowerCase().replace(RegExp(`[^\\u4e00-\\u9fa5A-Za-z0-9${exclude.join("")}]*`, "g"), "");
  }
  function answerSimilar(answers, options) {
    const _answers = answers.map(removeRedundant);
    const _options = options.map(removeRedundant);
    const similar = _answers.length !== 0 ? _options.map((option) => {
      if (option.trim() === "") {
        return { rating: 0, target: "" };
      }
      return src$1.findBestMatch(option, _answers).bestMatch;
    }) : _options.map(() => ({ rating: 0, target: "" }));
    return similar;
  }
  function answerExactMatch(answers, options) {
    const _answers = answers.map(removeRedundant);
    const _options = options.map(removeRedundant);
    const result = _answers.length !== 0 ? _options.filter((option) => {
      return _answers.find((answer) => answer.trim() === option.trim());
    }) : [];
    return result;
  }
  function removeRedundant(str) {
    return (str == null ? void 0 : str.trim().replace(/[A-Z]{1}[^A-Za-z0-9\u4e00-\u9fa5]+([A-Za-z0-9\u4e00-\u9fa5]+)/, "$1")) || "";
  }
  function request(url, opts) {
    return new Promise((resolve, reject) => {
      try {
        const { responseType = "json", method = "get", type = "fetch", data = {}, headers = {} } = opts || {};
        const env = $.isInBrowser() ? "browser" : "node";
        if (type === "GM_xmlhttpRequest" && env === "browser") {
          if (typeof GM_xmlhttpRequest !== "undefined") {
            const contentType = headers["Content-Type"] || headers["content-type"];
            const requestData = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(data).toString() : Object.keys(data).length ? JSON.stringify(data) : void 0;
            GM_xmlhttpRequest({
              url,
              method: method.toUpperCase(),
              data: requestData,
              headers: Object.keys(headers).length ? headers : void 0,
              responseType: responseType === "json" ? "json" : void 0,
              onload: (response) => {
                if (response.status === 200) {
                  if (responseType === "json") {
                    try {
                      resolve(JSON.parse(response.responseText));
                    } catch (error) {
                      reject(error);
                    }
                  } else {
                    resolve(response.responseText || "");
                  }
                } else {
                  reject(response.responseText);
                }
              },
              onerror: (err) => {
                console.error("GM_xmlhttpRequest error", err);
                reject(err);
              }
            });
          } else {
            reject(new Error("GM_xmlhttpRequest is not defined"));
          }
        } else {
          const fet = env === "node" ? require("node-fetch").default : fetch;
          fet(url, { body: method === "post" ? JSON.stringify(data) : void 0, method, headers }).then((response) => {
            if (responseType === "json") {
              response.json().then(resolve).catch(reject);
            } else {
              response.text().then(resolve).catch(reject);
            }
          }).catch((error) => {
            reject(new Error(error));
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  const ListOfActions = [
    "click",
    "check",
    "dblclick",
    "bringToFront",
    "dragAndDrop",
    "fill",
    "focus",
    "hover",
    "screenshot",
    "selectOption",
    "setInputFiles",
    "tap",
    "press",
    "reload",
    "waitForRequest",
    "waitForResponse",
    "waitForSelector"
  ];
  class RemotePlaywright {
    static async getCurrentPage(logger = console.debug) {
      if (this.currentPage) {
        return this.currentPage;
      }
      if (!this.authToken) {
        try {
          this.authToken = await request("http://localhost:15319/get-actions-key", {
            type: "GM_xmlhttpRequest",
            method: "get",
            responseType: "text"
          });
          this.currentPage = this.createRemotePage(this.authToken, logger);
          return this.currentPage;
        } catch (e) {
          console.log(e);
          return void 0;
        }
      } else {
        this.currentPage = this.createRemotePage(this.authToken, logger);
        return this.currentPage;
      }
    }
    static createRemotePage(authToken, logger) {
      const page = /* @__PURE__ */ Object.create({});
      for (const property of ListOfActions) {
        Reflect.set(page, property, async (...args) => {
          var _a, _b, _c;
          let data;
          if (property === "click" && args[0] instanceof Element) {
            args[0].scrollIntoView();
            await $.sleep(1e3);
            const rect = args[0].getBoundingClientRect();
            data = {
              page: window.location.href,
              property: "mouse.click",
              args: [
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                {
                  button: (_a = args[1]) == null ? void 0 : _a.button,
                  clickCount: (_b = args[1]) == null ? void 0 : _b.clickCount,
                  delay: (_c = args[1]) == null ? void 0 : _c.delay
                }
              ]
            };
          }
          if (!data) {
            data = { page: window.location.href, property, args };
          }
          logger == null ? void 0 : logger("[RP]: ", JSON.stringify(data));
          try {
            const res = await request("/ocs-script-actions", {
              type: "fetch",
              method: "post",
              responseType: ["waitForRequest", "waitForResponse", "reload"].includes(property) ? "json" : "text",
              headers: {
                "auth-token": authToken
              },
              data
            });
            return res;
          } catch (e) {
            logger == null ? void 0 : logger("[RP-ERROR]: ", JSON.stringify(data));
            return void 0;
          }
        });
      }
      console.log(page);
      return page;
    }
  }
  RemotePlaywright.authToken = "";
  RemotePlaywright.currentPage = void 0;
  function defaultWorkTypeResolver(ctx) {
    function count(selector) {
      let c = 0;
      for (const option of ctx.elements.options || []) {
        if ((option == null ? void 0 : option.querySelector(selector)) !== null) {
          c++;
        }
      }
      return c;
    }
    return count('[type="radio"]') === 2 ? "judgement" : count('[type="radio"]') > 2 ? "single" : count('[type="checkbox"]') > 2 ? "multiple" : count("textarea") >= 1 ? "completion" : void 0;
  }
  function isPlainAnswer(answer) {
    answer = answer.trim();
    if (answer.length > 8 || !/[A-Z]/.test(answer)) {
      return false;
    }
    const counter = {};
    let min = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer.charCodeAt(i) < min) {
        return false;
      }
      min = answer.charCodeAt(i);
      counter[min] = (counter[min] || 0) + 1;
    }
    for (const key in counter) {
      if (counter[key] !== 1) {
        return false;
      }
    }
    return true;
  }
  function resolvePlainAnswer(answer) {
    const resolve = answer.trim().replace(/[,，、 ]/g, "").trim();
    if (isPlainAnswer(resolve)) {
      return resolve;
    }
  }
  function splitAnswer(answer, separators = ["===", "#", "---", "###", "|", ";", "\uFF1B"]) {
    answer = answer.trim();
    if (answer.length === 0) {
      return [];
    }
    separators = separators.length === 0 ? ["===", "#", "---", "###", "|", ";", "\uFF1B"] : separators;
    separators = separators.filter((el) => el.trim().length > 0);
    try {
      const json = JSON.parse(answer);
      if (Array.isArray(json)) {
        return json.map(String).filter((el) => el.trim().length > 0);
      }
    } catch {
      for (const sep of separators) {
        if (answer.split(sep).length > 1) {
          return answer.split(sep).filter((el) => el.trim().length > 0);
        }
      }
    }
    return [answer];
  }
  var lib = {};
  var start$1 = {};
  var customWindow = {};
  var interfaces = {};
  var common$1 = {};
  var events = { exports: {} };
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn)
      console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state2 = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state2);
    wrapped.listener = listener;
    state2.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(common$1, "__esModule", { value: true });
  common$1.CommonEventEmitter = void 0;
  const events_1$1 = __importDefault$2(events.exports);
  class CommonEventEmitter extends events_1$1.default {
    on(eventName, listener) {
      return super.on(eventName.toString(), listener);
    }
    once(eventName, listener) {
      return super.once(eventName.toString(), listener);
    }
    emit(eventName, ...args) {
      return super.emit(eventName.toString(), ...args);
    }
    off(eventName, listener) {
      return super.off(eventName.toString(), listener);
    }
  }
  common$1.CommonEventEmitter = CommonEventEmitter;
  var config$1 = {};
  Object.defineProperty(config$1, "__esModule", { value: true });
  var cors = {};
  var utils = {};
  var common = {};
  var store = {};
  var store_provider = {};
  var _const = {};
  Object.defineProperty(_const, "__esModule", { value: true });
  _const.$const = void 0;
  _const.$const = {
    TAB_UID: "_uid_",
    TAB_URLS: "_urls_",
    TAB_CURRENT_PANEL_NAME: "_current_panel_name_"
  };
  var __awaiter$3 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(store_provider, "__esModule", { value: true });
  store_provider.GMStoreProvider = store_provider.MemoryStoreProvider = store_provider.LocalStoreChangeEvent = void 0;
  const const_1$1 = _const;
  class LocalStoreChangeEvent extends Event {
    constructor() {
      super(...arguments);
      this.key = "";
    }
  }
  store_provider.LocalStoreChangeEvent = LocalStoreChangeEvent;
  class MemoryStoreProvider {
    get(key, defaultValue) {
      var _a;
      return (_a = Reflect.get(MemoryStoreProvider._source.store, key)) !== null && _a !== void 0 ? _a : defaultValue;
    }
    set(key, value) {
      var _a;
      const pre = Reflect.get(MemoryStoreProvider._source.store, key);
      Reflect.set(MemoryStoreProvider._source.store, key, value);
      (_a = MemoryStoreProvider.storeListeners.get(key)) === null || _a === void 0 ? void 0 : _a.forEach((lis) => lis(value, pre));
    }
    delete(key) {
      Reflect.deleteProperty(MemoryStoreProvider._source.store, key);
    }
    list() {
      return Object.keys(MemoryStoreProvider._source.store);
    }
    getTab(key) {
      return __awaiter$3(this, void 0, void 0, function* () {
        return Reflect.get(MemoryStoreProvider._source.tab, key);
      });
    }
    setTab(key, value) {
      var _a;
      return __awaiter$3(this, void 0, void 0, function* () {
        Reflect.set(MemoryStoreProvider._source.tab, key, value);
        (_a = MemoryStoreProvider.tabListeners.get(key)) === null || _a === void 0 ? void 0 : _a.forEach((lis) => lis(value, this.getTab(key)));
      });
    }
    addChangeListener(key, listener) {
      const listeners = MemoryStoreProvider.storeListeners.get(key) || [];
      listeners.push(listener);
      MemoryStoreProvider.storeListeners.set(key, listeners);
    }
    removeChangeListener(listener) {
      MemoryStoreProvider.tabListeners.forEach((lis, key) => {
        const index = lis.findIndex((l) => l === listener);
        if (index !== -1) {
          lis.splice(index, 1);
          MemoryStoreProvider.tabListeners.set(key, lis);
        }
      });
    }
    addTabChangeListener(key, listener) {
      const listeners = MemoryStoreProvider.tabListeners.get(key) || [];
      listeners.push(listener);
      MemoryStoreProvider.tabListeners.set(key, listeners);
    }
    removeTabChangeListener(key, listener) {
      const listeners = MemoryStoreProvider.tabListeners.get(key) || [];
      const index = listeners.findIndex((l) => l === listener);
      if (index !== -1) {
        listeners.splice(index, 1);
        MemoryStoreProvider.tabListeners.set(key, listeners);
      }
    }
  }
  MemoryStoreProvider._source = { store: {}, tab: {} };
  MemoryStoreProvider.storeListeners = /* @__PURE__ */ new Map();
  MemoryStoreProvider.tabListeners = /* @__PURE__ */ new Map();
  store_provider.MemoryStoreProvider = MemoryStoreProvider;
  class GMStoreProvider {
    constructor() {
      if (self === top && typeof globalThis.GM_listValues !== "undefined") {
        for (const val of GM_listValues()) {
          if (val.startsWith("_tab_change_")) {
            GM_deleteValue(val);
          }
        }
      }
    }
    getTabChangeHandleKey(tabUid, key) {
      return `_tab_change_${tabUid}_${key}`;
    }
    get(key, defaultValue) {
      return GM_getValue(key, defaultValue);
    }
    set(key, value) {
      GM_setValue(key, value);
    }
    delete(key) {
      GM_deleteValue(key);
    }
    list() {
      return GM_listValues();
    }
    getTab(key) {
      return new Promise((resolve, reject) => {
        GM_getTab((tab = {}) => resolve(Reflect.get(tab, key)));
      });
    }
    setTab(key, value) {
      return new Promise((resolve, reject) => {
        GM_getTab((tab = {}) => {
          Reflect.set(tab, key, value);
          GM_saveTab(tab);
          this.set(this.getTabChangeHandleKey(Reflect.get(tab, const_1$1.$const.TAB_UID), key), value);
          resolve();
        });
      });
    }
    addChangeListener(key, listener) {
      return GM_addValueChangeListener(key, (_, pre, curr, remote) => {
        listener(pre, curr, remote);
      });
    }
    removeChangeListener(listenerId) {
      if (typeof listenerId === "number") {
        GM_removeValueChangeListener(listenerId);
      }
    }
    addTabChangeListener(key, listener) {
      return __awaiter$3(this, void 0, void 0, function* () {
        const uid = yield this.getTab(const_1$1.$const.TAB_UID);
        return GM_addValueChangeListener(this.getTabChangeHandleKey(uid, key), (_, pre, curr) => {
          listener(curr, pre);
        });
      });
    }
    removeTabChangeListener(key, listener) {
      return this.removeChangeListener(listener);
    }
  }
  store_provider.GMStoreProvider = GMStoreProvider;
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.$store = exports3.MemoryStoreProvider = exports3.GMStoreProvider = void 0;
    const store_provider_1 = store_provider;
    var store_provider_2 = store_provider;
    Object.defineProperty(exports3, "GMStoreProvider", { enumerable: true, get: function() {
      return store_provider_2.GMStoreProvider;
    } });
    Object.defineProperty(exports3, "MemoryStoreProvider", { enumerable: true, get: function() {
      return store_provider_2.MemoryStoreProvider;
    } });
    exports3.$store = typeof globalThis.unsafeWindow === "undefined" ? new store_provider_1.MemoryStoreProvider() : new store_provider_1.GMStoreProvider();
  })(store);
  (function(exports3) {
    var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __rest2 = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
      var t2 = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t2[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t2[p[i]] = s[p[i]];
        }
      return t2;
    };
    var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.resolveCustomElementName = exports3.$ = void 0;
    const debounce_12 = __importDefault2(debounce_1$1);
    const store_12 = store;
    exports3.$ = {
      createConfigProxy(script2) {
        var _a, _b;
        const proxy = new Proxy(script2.cfg, {
          set(target, propertyKey, value) {
            const key = exports3.$.namespaceKey(script2.namespace, propertyKey);
            store_12.$store.set(key, value);
            return Reflect.set(target, propertyKey, value);
          },
          get(target, propertyKey) {
            const value = store_12.$store.get(exports3.$.namespaceKey(script2.namespace, propertyKey));
            Reflect.set(target, propertyKey, value);
            return value;
          }
        });
        for (const key in script2.configs) {
          if (Object.prototype.hasOwnProperty.call(script2.configs, key)) {
            const element = Reflect.get(script2.configs, key);
            Reflect.set(proxy, key, store_12.$store.get(exports3.$.namespaceKey(script2.namespace, key), element.defaultValue));
          }
        }
        if (script2.namespace) {
          proxy.notes = (_b = (_a = script2.configs) === null || _a === void 0 ? void 0 : _a.notes) === null || _b === void 0 ? void 0 : _b.defaultValue;
        }
        return proxy;
      },
      getAllRawConfigs(scripts) {
        const object = {};
        for (const script2 of scripts) {
          for (const key in script2.configs) {
            if (Object.prototype.hasOwnProperty.call(script2.configs, key)) {
              const _a = script2.configs[key], element = __rest2(_a, ["label"]);
              Reflect.set(object, exports3.$.namespaceKey(script2.namespace, key), Object.assign({ label: exports3.$.namespaceKey(script2.namespace, key) }, element));
            }
          }
        }
        return object;
      },
      getMatchedScripts(projects, urls) {
        const scripts = [];
        for (const project2 of projects) {
          for (const key in project2.scripts) {
            if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
              const script2 = project2.scripts[key];
              const script_matches_urls = script2.matches.map((u) => Array.isArray(u) ? u[1] : u);
              const script_excludes_urls = (script2.excludes || []).map((u) => Array.isArray(u) ? u[1] : u);
              if (project2.domains === void 0 || project2.domains.length === 0 || project2.domains.some((d) => urls.some((url) => new URL(url).origin.includes(d)))) {
                if (script_excludes_urls.some((u) => urls.some((url) => RegExp(u).test(url)))) {
                  continue;
                }
                if (script_matches_urls.some((u) => urls.some((url) => RegExp(u).test(url)))) {
                  scripts.push(script2);
                }
              }
            }
          }
        }
        return scripts;
      },
      namespaceKey(namespace, key) {
        return namespace ? namespace + "." + key.toString() : key.toString();
      },
      uuid() {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      },
      random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
      },
      sleep(period) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve) => {
            setTimeout(resolve, period);
          });
        });
      },
      isInBrowser() {
        return typeof window !== "undefined" && typeof window.document !== "undefined";
      },
      onresize(el, handler) {
        const resize = (0, debounce_12.default)(() => {
          if (el.parentNode === null) {
            window.removeEventListener("resize", resize);
          } else {
            handler(el);
          }
        }, 200);
        resize();
        window.addEventListener("resize", resize);
      },
      loadCustomElements(elements2) {
        for (const element of elements2) {
          const name = resolveCustomElementName(element, "-");
          if (customElements.get(name) === void 0) {
            customElements.define(name, element);
          }
        }
      },
      isInTopWindow() {
        return self === top;
      },
      createCenteredPopupWindow(url, winName, opts) {
        const { width, height, scrollbars, resizable } = opts;
        const LeftPosition = screen.width ? (screen.width - width) / 2 : 0;
        const TopPosition = screen.height ? (screen.height - height) / 2 : 0;
        const settings = "height=" + height + ",width=" + width + ",top=" + TopPosition + ",left=" + LeftPosition + ",scrollbars=" + (scrollbars ? "yes" : "no") + ",resizable=" + (resizable ? "yes" : "no");
        return window.open(url, winName, settings);
      }
    };
    function resolveCustomElementName(el, target) {
      return el.name.replace(/([A-Z])/g, target + "$1").toLowerCase().split(target).slice(1).join(target);
    }
    exports3.resolveCustomElementName = resolveCustomElementName;
  })(common);
  var ui = {};
  var dom = {};
  Object.defineProperty(dom, "__esModule", { value: true });
  dom.enableElementDraggable = dom.$$el = dom.$el = dom.h = void 0;
  const common_1$5 = common;
  function h(element, attrsOrChildren, childrenOrHandler) {
    let name = "";
    if (typeof element === "function") {
      name = (0, common_1$5.resolveCustomElementName)(element, "-");
    } else {
      name = element;
    }
    const el = document.createElement(name);
    if (attrsOrChildren) {
      if (Array.isArray(attrsOrChildren)) {
        for (const child of attrsOrChildren) {
          if (typeof child === "function") {
            el.append(document.createElement(child.name));
          } else {
            el.append(child);
          }
        }
      } else if (typeof attrsOrChildren === "string") {
        el.append(attrsOrChildren);
      } else {
        const attrs = attrsOrChildren;
        for (const key in attrs) {
          if (Object.prototype.hasOwnProperty.call(attrs, key)) {
            if (key === "style") {
              Object.assign(el.style, attrs[key]);
            } else {
              const value = attrs[key];
              Reflect.set(el, key, value);
            }
          }
        }
      }
    }
    if (childrenOrHandler) {
      if (typeof childrenOrHandler === "function") {
        childrenOrHandler.call(el, el);
      } else if (Array.isArray(childrenOrHandler)) {
        for (const child of childrenOrHandler) {
          if (typeof child === "function") {
            el.append(document.createElement(child.name));
          } else {
            el.append(child);
          }
        }
      } else if (typeof childrenOrHandler === "string") {
        el.append(childrenOrHandler);
      }
    }
    return el;
  }
  dom.h = h;
  function $el(selector, root2 = window.document) {
    const el = root2.querySelector(selector);
    return el === null ? void 0 : el;
  }
  dom.$el = $el;
  function $$el(selector, root2 = window.document) {
    return Array.from(root2.querySelectorAll(selector));
  }
  dom.$$el = $$el;
  function enableElementDraggable(header2, target, ondrag) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    header2.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      target.style.top = Math.max(target.offsetTop - pos2, 10) + "px";
      target.style.left = target.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
      ondrag === null || ondrag === void 0 ? void 0 : ondrag();
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  dom.enableElementDraggable = enableElementDraggable;
  var elements$1 = {};
  Object.defineProperty(elements$1, "__esModule", { value: true });
  elements$1.$elements = void 0;
  elements$1.$elements = {
    tooltipContainer: void 0,
    root: void 0
  };
  var tampermonkey = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.$gm = void 0;
    exports3.$gm = {
      unsafeWindow: typeof globalThis.unsafeWindow === "undefined" ? globalThis.window : globalThis.unsafeWindow,
      isInGMContext() {
        return typeof GM_info !== "undefined";
      },
      getInfos() {
        return typeof GM_info === "undefined" ? void 0 : GM_info;
      },
      getTab(callback) {
        return typeof GM_getTab === "undefined" ? void 0 : GM_getTab(callback);
      },
      notification(content, options) {
        var _a;
        const { onclick, ondone, important, duration = 30, silent = true, extraTitle = "" } = options || {};
        const { icon, name } = ((_a = exports3.$gm.getInfos()) === null || _a === void 0 ? void 0 : _a.script) || {};
        GM_notification({
          title: name + (extraTitle ? "-" + extraTitle : ""),
          text: content,
          image: icon || "",
          highlight: important,
          onclick,
          ondone,
          silent,
          timeout: duration * 1e3
        });
      },
      getMetadataFromScriptHead(key) {
        var _a, _b;
        const metadataString = (_a = this.getInfos()) === null || _a === void 0 ? void 0 : _a.scriptMetaStr;
        if (!metadataString) {
          return [];
        } else {
          const metadata = ((_b = metadataString.match(/\/\/\s+==UserScript==([\s\S]+)\/\/\s+==\/UserScript==/)) === null || _b === void 0 ? void 0 : _b[1]) || "";
          const metadataList = (metadata.match(/\/\/\s+@(.+?)\s+(.*?)(?:\n|$)/g) || []).map((line) => {
            const words = line.match(/[\S]+/g) || [];
            return {
              key: (words[1] || "").replace("@", ""),
              value: words.slice(2).join(" ")
            };
          });
          return metadataList.filter((l) => l.key === key).map((l) => l.value);
        }
      }
    };
  })(tampermonkey);
  Object.defineProperty(ui, "__esModule", { value: true });
  ui.$ui = void 0;
  const common_1$4 = common;
  const dom_1$7 = dom;
  const elements_1$2 = elements$1;
  const tampermonkey_1$1 = tampermonkey;
  ui.$ui = {
    tooltip(target) {
      target.setAttribute("data-title", target.title);
      if (tampermonkey_1$1.$gm.isInGMContext()) {
        target.removeAttribute("title");
      }
      const onMouseMove = (e) => {
        if (elements_1$2.$elements.tooltipContainer && elements_1$2.$elements.tooltipContainer.style.display !== "none") {
          elements_1$2.$elements.tooltipContainer.style.top = e.y + "px";
          elements_1$2.$elements.tooltipContainer.style.left = e.x + "px";
        }
      };
      const showTitle = (e) => {
        const dataTitle = target.getAttribute("data-title");
        if (elements_1$2.$elements.tooltipContainer) {
          if (dataTitle) {
            elements_1$2.$elements.tooltipContainer.innerHTML = dataTitle.split("\n").join("<br>") || "";
            elements_1$2.$elements.tooltipContainer.style.top = e.y + "px";
            elements_1$2.$elements.tooltipContainer.style.left = e.x + "px";
            elements_1$2.$elements.tooltipContainer.style.display = "block";
          } else {
            elements_1$2.$elements.tooltipContainer.style.display = "none";
          }
        }
        window.addEventListener("mousemove", onMouseMove);
      };
      const hideTitle = () => {
        if (elements_1$2.$elements.tooltipContainer) {
          elements_1$2.$elements.tooltipContainer.style.display = "none";
        }
        window.removeEventListener("mousemove", onMouseMove);
      };
      hideTitle();
      target.addEventListener("mouseenter", showTitle);
      target.addEventListener("click", showTitle);
      target.addEventListener("mouseout", hideTitle);
      target.addEventListener("mouseleave", hideTitle);
      target.addEventListener("blur", hideTitle);
      return target;
    },
    scriptPanel(script2, store2, opts) {
      var _a, _b;
      const scriptPanel = (0, dom_1$7.h)("script-panel-element", { name: script2.name });
      script2.onConfigChange("notes", (pre, curr) => {
        scriptPanel.notesContainer.innerHTML = script2.cfg.notes || "";
      });
      script2.panel = scriptPanel;
      scriptPanel.notesContainer.innerHTML = ((_b = (_a = script2.configs) === null || _a === void 0 ? void 0 : _a.notes) === null || _b === void 0 ? void 0 : _b.defaultValue) || "";
      let configs = /* @__PURE__ */ Object.create({});
      const elList = [];
      for (const key in script2.configs) {
        if (Object.prototype.hasOwnProperty.call(script2.configs, key)) {
          const cfg = script2.configs[key];
          if (cfg.separator) {
            elList.push(this.configsArea(this.configs(script2.namespace, store2, configs || {}, opts === null || opts === void 0 ? void 0 : opts.onload)));
            elList.push((0, dom_1$7.h)("div", { className: "separator", style: { margin: "0px 8px" } }, cfg.separator));
            configs = /* @__PURE__ */ Object.create({});
          }
          configs[key] = cfg;
        }
      }
      if (Object.keys(configs).length > 0) {
        elList.push(this.configsArea(this.configs(script2.namespace, store2, configs || {}, opts === null || opts === void 0 ? void 0 : opts.onload)));
      }
      scriptPanel.configsContainer.replaceChildren(...elList);
      return scriptPanel;
    },
    configsArea(configElements) {
      const configsContainer = (0, dom_1$7.h)("div", { className: "configs card" });
      const configsBody = (0, dom_1$7.h)("div", { className: "configs-body" });
      configsBody.append(...Object.entries(configElements).map(([key, el]) => el));
      configsContainer.append(configsBody);
      return configsContainer;
    },
    configs(namespace, store2, configs, onload) {
      const elements2 = /* @__PURE__ */ Object.create({});
      for (const key in configs) {
        if (Object.prototype.hasOwnProperty.call(configs, key)) {
          const config2 = configs[key];
          if (config2.label !== void 0) {
            const element = (0, dom_1$7.h)("config-element", {
              key: common_1$4.$.namespaceKey(namespace, key),
              tag: config2.tag,
              sync: config2.sync,
              attrs: config2.attrs,
              _onload: function(el) {
                var _a;
                (_a = config2.onload) === null || _a === void 0 ? void 0 : _a.call(this, el);
                onload === null || onload === void 0 ? void 0 : onload(el);
              },
              defaultValue: config2.defaultValue,
              options: config2.options
            });
            element.store = store2;
            element.label.textContent = config2.label;
            elements2[key] = element;
          }
        }
      }
      return elements2;
    },
    notes(lines, tag = "ul") {
      return (0, dom_1$7.h)(tag, lines.map((line) => (0, dom_1$7.h)("li", Array.isArray(line) ? line.map((node) => typeof node === "string" ? (0, dom_1$7.h)("div", { innerHTML: node }) : node) : [typeof line === "string" ? (0, dom_1$7.h)("div", { innerHTML: line }) : line])));
    },
    copy(name, value) {
      return (0, dom_1$7.h)("span", "\u{1F4C4}" + name, (btn) => {
        btn.className = "copy";
        btn.addEventListener("click", () => {
          btn.innerText = "\u5DF2\u590D\u5236\u221A";
          navigator.clipboard.writeText(value);
          setTimeout(() => {
            btn.innerText = "\u{1F4C4}" + name;
          }, 500);
        });
      });
    },
    preventText(opts) {
      const { name, delay = 3, autoRemove = true, ondefault, onprevent } = opts;
      const span = (0, dom_1$7.h)("span", name);
      span.style.textDecoration = "underline";
      span.style.cursor = "pointer";
      span.onclick = () => {
        clearTimeout(id);
        if (autoRemove) {
          span.remove();
        }
        onprevent === null || onprevent === void 0 ? void 0 : onprevent(span);
      };
      const id = setTimeout(() => {
        if (autoRemove) {
          span.remove();
        }
        ondefault(span);
      }, delay * 1e3);
      return span;
    },
    space(children, options) {
      return (0, dom_1$7.h)("div", { className: "space" }, (div) => {
        var _a, _b, _c;
        for (let index = 0; index < children.length; index++) {
          const child = (0, dom_1$7.h)("span", { className: "space-item" }, [children[index]]);
          child.style.display = "inline-block";
          const x = (_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 12;
          const y = (_b = options === null || options === void 0 ? void 0 : options.y) !== null && _b !== void 0 ? _b : 0;
          if (index > 0) {
            child.style.marginLeft = x / 2 + "px";
            child.style.marginRight = x / 2 + "px";
            child.style.marginTop = y / 2 + "px";
            child.style.marginBottom = y / 2 + "px";
          } else {
            child.style.marginRight = x / 2 + "px";
            child.style.marginBottom = y / 2 + "px";
          }
          div.append(child);
          if (index !== children.length - 1) {
            div.append((0, dom_1$7.h)("span", [(_c = options === null || options === void 0 ? void 0 : options.separator) !== null && _c !== void 0 ? _c : " "]));
          }
        }
      });
    },
    button(text, attrs, handler) {
      return (0, dom_1$7.h)("input", Object.assign({ type: "button" }, attrs), function(btn) {
        btn.value = text || "";
        btn.classList.add("base-style-button");
        handler === null || handler === void 0 ? void 0 : handler.apply(this, [btn]);
      });
    }
  };
  (function(exports3) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports4) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
          __createBinding(exports4, m, p);
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    __exportStar(common, exports3);
    __exportStar(ui, exports3);
    __exportStar(dom, exports3);
    __exportStar(elements$1, exports3);
    __exportStar(tampermonkey, exports3);
    __exportStar(store, exports3);
    __exportStar(_const, exports3);
  })(utils);
  (function(exports3) {
    var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.cors = exports3.CorsEventEmitter = void 0;
    const utils_12 = utils;
    const common_12 = common;
    const const_12 = _const;
    const store_12 = store;
    class CorsEventEmitter {
      constructor() {
        this.eventMap = /* @__PURE__ */ new Map();
      }
      eventKey(name) {
        return "cors.events." + name;
      }
      tempKey(...args) {
        return ["_temp_", ...args].join(".");
      }
      keyOfReturn(id) {
        return this.tempKey("event", id, "return");
      }
      keyOfArguments(id) {
        return this.tempKey("event", id, "arguments");
      }
      keyOfState(id) {
        return this.tempKey("event", id, "state");
      }
      emit(name, args = [], callback) {
        store_12.$store.getTab(const_12.$const.TAB_UID).then((uid) => {
          const id = common_12.$.uuid().replace(/-/g, "");
          const key = uid + "." + this.eventKey(name);
          store_12.$store.set(this.keyOfState(id), 0);
          store_12.$store.set(this.keyOfArguments(id), args);
          setTimeout(() => {
            const listenerId = store_12.$store.addChangeListener(this.keyOfState(id), (pre, curr) => {
              store_12.$store.removeChangeListener(listenerId);
              callback === null || callback === void 0 ? void 0 : callback(store_12.$store.get(this.keyOfReturn(id)));
              store_12.$store.delete(this.keyOfState(id));
              store_12.$store.delete(this.keyOfReturn(id));
              store_12.$store.delete(this.keyOfArguments(id));
            }) || 0;
            store_12.$store.set(key, (store_12.$store.get(key) ? String(store_12.$store.get(key)).split(",") : []).concat(id).join(","));
          }, 100);
        }).catch(console.error);
      }
      on(name, handler) {
        return new Promise((resolve) => {
          store_12.$store.getTab(const_12.$const.TAB_UID).then((uid) => {
            const key = uid + "." + this.eventKey(name);
            const originId = this.eventMap.get(key);
            if (originId) {
              resolve(originId);
            } else {
              const id = store_12.$store.addChangeListener(key, (pre, curr, remote) => __awaiter2(this, void 0, void 0, function* () {
                if (remote) {
                  if (curr === void 0) {
                    return;
                  }
                  const list = String(curr).split(",");
                  const id2 = list.pop();
                  if (id2) {
                    store_12.$store.set(this.keyOfReturn(id2), yield handler(store_12.$store.get(this.keyOfArguments(id2))));
                    setTimeout(() => {
                      store_12.$store.set(this.keyOfState(id2), 1);
                      store_12.$store.set(key, list.join(","));
                    }, 100);
                  }
                }
              })) || 0;
              this.eventMap.set(key, id);
              resolve(id);
            }
          }).catch(console.error);
        });
      }
      off(name) {
        const key = this.eventKey(name);
        const originId = this.eventMap.get(key);
        if (originId) {
          this.eventMap.delete(key);
          store_12.$store.removeChangeListener(originId);
        }
      }
      defineTopFunction(id, func) {
        if (utils_12.$gm.isInGMContext() === false) {
          return () => {
          };
        }
        const event_name = "_top_function_." + id;
        if (self === top) {
          exports3.cors.on(event_name, (args) => {
            return func(...args);
          });
        }
        return (...args) => __awaiter2(this, void 0, void 0, function* () {
          const res = yield new Promise((resolve, reject) => {
            try {
              exports3.cors.emit(event_name, args, (val) => {
                resolve(val);
              });
            } catch (e) {
              reject(e);
            }
          });
          return res;
        });
      }
    }
    exports3.CorsEventEmitter = CorsEventEmitter;
    if (typeof GM_listValues !== "undefined" && self === top) {
      window.onload = () => {
        store_12.$store.list().forEach((key) => {
          if (/_temp_.event.[0-9a-z]{32}.(state|return|arguments)/.test(key)) {
            store_12.$store.delete(key);
          }
          if (/_top_function_.*/.test(key)) {
            store_12.$store.delete(key);
          }
          if (/[0-9a-z]{32}.cors.events/.test(key)) {
            store_12.$store.delete(key);
          }
        });
      };
    }
    exports3.cors = new CorsEventEmitter();
  })(cors);
  var project = {};
  Object.defineProperty(project, "__esModule", { value: true });
  project.Project = void 0;
  class Project {
    constructor({ name, domains, scripts }) {
      this.name = name;
      this.domains = domains;
      for (const key in scripts) {
        if (Object.prototype.hasOwnProperty.call(scripts, key)) {
          const element = scripts[key];
          element.projectName = name;
        }
      }
      this.scripts = scripts;
    }
    static create(opts) {
      return new Project(opts);
    }
  }
  project.Project = Project;
  var script = {};
  var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(script, "__esModule", { value: true });
  script.Script = script.BaseScript = void 0;
  const common_1$3 = common;
  const store_1$1 = store;
  const common_2 = common$1;
  const events_1 = __importDefault$1(events.exports);
  class BaseScript extends common_2.CommonEventEmitter {
  }
  script.BaseScript = BaseScript;
  class Script extends BaseScript {
    get configs() {
      if (!this._resolvedConfigs) {
        this._resolvedConfigs = typeof this._configs === "function" ? this._configs() : this._configs;
      }
      return this._resolvedConfigs;
    }
    set configs(c) {
      this._configs = c;
    }
    constructor({ name, namespace, matches, excludes, configs, hideInPanel, onstart, onactive, oncomplete, onbeforeunload, onrender, onhistorychange, methods, priority }) {
      super();
      this.excludes = [];
      this.cfg = {};
      this.methods = /* @__PURE__ */ Object.create({});
      this.event = new events_1.default();
      this.name = name;
      this.namespace = namespace;
      this.matches = matches;
      this.excludes = excludes;
      this._configs = configs;
      this.hideInPanel = hideInPanel;
      this.onstart = this.errorHandler(onstart);
      this.onactive = this.errorHandler(onactive);
      this.oncomplete = this.errorHandler(oncomplete);
      this.onbeforeunload = this.errorHandler(onbeforeunload);
      this.onrender = this.errorHandler(onrender);
      this.onhistorychange = this.errorHandler(onhistorychange);
      this.methods = (methods === null || methods === void 0 ? void 0 : methods.bind(this)()) || /* @__PURE__ */ Object.create({});
      this.priority = priority !== null && priority !== void 0 ? priority : 0;
      if (this.methods) {
        for (const key in methods) {
          if (Reflect.has(this.methods, key) && typeof this.methods[key] !== "function") {
            Reflect.set(this.methods, key, this.errorHandler(this.methods[key]));
          }
        }
      }
    }
    onConfigChange(key, handler) {
      const _key = common_1$3.$.namespaceKey(this.namespace, key.toString());
      return store_1$1.$store.addChangeListener(_key, (pre, curr, remote) => {
        handler(curr, pre, !!remote);
      });
    }
    offConfigChange(listener) {
      store_1$1.$store.removeChangeListener(listener);
    }
    fullName() {
      return this.projectName ? `${this.projectName}-${this.name}` : this.name;
    }
    errorHandler(func) {
      return (...args) => {
        try {
          return func === null || func === void 0 ? void 0 : func.apply(this, args);
        } catch (err) {
          console.error(err);
          if (err instanceof Error) {
            this.emit("scripterror", err.message);
          } else {
            this.emit("scripterror", String(err));
          }
        }
      };
    }
  }
  script.Script = Script;
  (function(exports3) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports4) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
          __createBinding(exports4, m, p);
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    __exportStar(common$1, exports3);
    __exportStar(config$1, exports3);
    __exportStar(cors, exports3);
    __exportStar(project, exports3);
    __exportStar(script, exports3);
    __exportStar(store_provider, exports3);
  })(interfaces);
  var elements = {};
  var config = {};
  var _interface = {};
  Object.defineProperty(_interface, "__esModule", { value: true });
  _interface.IElement = void 0;
  class IElement extends HTMLElement {
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    adoptedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
  }
  _interface.IElement = IElement;
  Object.defineProperty(config, "__esModule", { value: true });
  config.ConfigElement = void 0;
  const ui_1$1 = ui;
  const dom_1$6 = dom;
  const interface_1$6 = _interface;
  class ConfigElement extends interface_1$6.IElement {
    constructor(store2) {
      super();
      this.label = (0, dom_1$6.h)("label");
      this.wrapper = (0, dom_1$6.h)("div", { className: "config-wrapper" });
      this.key = "";
      this.store = store2;
    }
    get value() {
      return this.store.get(this.key, this.defaultValue);
    }
    set value(value) {
      this.provider.value = value;
      this.store.set(this.key, value);
    }
    connectedCallback() {
      var _a, _b, _c;
      switch (this.tag) {
        case "select": {
          this.provider = (0, dom_1$6.h)("select");
          const value = this.store.get(this.key, this.defaultValue);
          for (const item of this.options || []) {
            const option = (0, dom_1$6.h)("option");
            if (Array.isArray(item)) {
              option.value = item[0];
              option.textContent = (_a = item[1]) !== null && _a !== void 0 ? _a : item[0];
              if (item[2]) {
                option.title = item[2];
              }
              if (String(item[0]) === String(value)) {
                option.selected = true;
                option.toggleAttribute("selected");
              }
              this.provider.add(option);
            } else {
              option.value = item.value;
              option.textContent = (_b = item.label) !== null && _b !== void 0 ? _b : item.value;
              if (item.title) {
                option.title = item.title;
              }
              if (String(item.value) === String(value)) {
                option.selected = true;
                option.toggleAttribute("selected");
              }
              this.provider.add(option);
            }
          }
          this.provider.onchange = () => {
            this.store.set(this.key, this.provider.value);
          };
          break;
        }
        case "textarea": {
          this.provider = (0, dom_1$6.h)("textarea");
          this.provider.value = this.store.get(this.key, this.defaultValue);
          this.provider.onchange = () => {
            this.store.set(this.key, this.provider.value);
          };
          break;
        }
        default: {
          this.provider = (0, dom_1$6.h)("input");
          if (["checkbox", "radio"].some((t2) => {
            var _a2;
            return t2 === ((_a2 = this.attrs) === null || _a2 === void 0 ? void 0 : _a2.type);
          })) {
            this.provider.checked = this.store.get(this.key, this.defaultValue);
            const provider = this.provider;
            provider.onchange = () => {
              this.store.set(this.key, provider.checked);
            };
          } else {
            this.provider.value = this.store.get(this.key, this.defaultValue);
            this.provider.setAttribute("value", this.provider.value);
            this.provider.onchange = () => {
              const { min, max, type } = this.attrs || {};
              if (type === "number") {
                if (this.provider.value.trim() === "") {
                  this.provider.value = this.defaultValue;
                  this.store.set(this.key, this.defaultValue);
                  return;
                }
                const val = parseFloat(this.provider.value);
                const _min = min ? parseFloat(min) : void 0;
                const _max = max ? parseFloat(max) : void 0;
                if (_min && val < _min) {
                  this.provider.value = _min.toString();
                  this.store.set(this.key, parseFloat(this.provider.value));
                } else if (_max && val > _max) {
                  this.provider.value = _max.toString();
                  this.store.set(this.key, parseFloat(this.provider.value));
                } else {
                  this.store.set(this.key, val);
                }
              } else {
                this.store.set(this.key, this.provider.value);
              }
            };
          }
          break;
        }
      }
      this.wrapper.replaceChildren(this.provider);
      this.append(this.label, this.wrapper);
      for (const key in this.attrs) {
        if (key === "style") {
          Object.assign(this.provider.style, this.attrs[key]);
          continue;
        }
        if (Object.prototype.hasOwnProperty.call(this.attrs, key)) {
          Reflect.set(this.provider, key, Reflect.get(this.attrs, key));
        }
      }
      if (this.sync) {
        this.store.addChangeListener(this.key, (pre, curr, remote) => {
          this.provider.value = curr;
        });
      }
      ui_1$1.$ui.tooltip(this.provider);
      (_c = this._onload) === null || _c === void 0 ? void 0 : _c.call(this.provider, this);
    }
  }
  config.ConfigElement = ConfigElement;
  var container = {};
  Object.defineProperty(container, "__esModule", { value: true });
  container.ContainerElement = void 0;
  const common_1$2 = common;
  const ui_1 = ui;
  const dom_1$5 = dom;
  const interface_1$5 = _interface;
  class ContainerElement extends interface_1$5.IElement {
    constructor() {
      super(...arguments);
      this.header = ui_1.$ui.tooltip((0, dom_1$5.h)("header-element", { title: "\u83DC\u5355\u680F-\u53EF\u62D6\u52A8\u533A\u57DF" }));
      this.body = (0, dom_1$5.h)("div", { className: "body", clientHeight: window.innerHeight / 2 });
      this.footer = (0, dom_1$5.h)("div", { className: "footer" });
    }
    connectedCallback() {
      this.append(this.header, this.body, this.footer);
      common_1$2.$.onresize(this, (cont) => {
        cont.body.style.maxHeight = window.innerHeight - this.header.clientHeight - 100 + "px";
        cont.body.style.maxWidth = window.innerWidth - 50 + "px";
      });
    }
  }
  container.ContainerElement = ContainerElement;
  var dropdown = {};
  Object.defineProperty(dropdown, "__esModule", { value: true });
  dropdown.DropdownElement = void 0;
  const interface_1$4 = _interface;
  const dom_1$4 = dom;
  class DropdownElement extends interface_1$4.IElement {
    constructor() {
      super(...arguments);
      this.triggerElement = (0, dom_1$4.h)("button");
      this.content = (0, dom_1$4.h)("div", { className: "dropdown-content" });
      this.trigger = "hover";
    }
    connectedCallback() {
      this.append(this.triggerElement, this.content);
      this.classList.add("dropdown");
      if (this.trigger === "click") {
        this.triggerElement.onclick = () => {
          this.content.classList.toggle("show");
        };
      } else {
        this.triggerElement.onmouseover = () => {
          this.content.classList.add("show");
        };
        this.triggerElement.onmouseout = () => {
          this.content.classList.remove("show");
        };
        this.content.onmouseover = () => {
          this.content.classList.add("show");
        };
        this.content.onmouseout = () => {
          this.content.classList.remove("show");
        };
      }
      this.content.onclick = () => {
        this.content.classList.remove("show");
      };
    }
  }
  dropdown.DropdownElement = DropdownElement;
  var header = {};
  Object.defineProperty(header, "__esModule", { value: true });
  header.HeaderElement = void 0;
  const interface_1$3 = _interface;
  class HeaderElement extends interface_1$3.IElement {
    connectedCallback() {
      this.append(this.visualSwitcher || "");
    }
  }
  header.HeaderElement = HeaderElement;
  var message = {};
  Object.defineProperty(message, "__esModule", { value: true });
  message.MessageElement = void 0;
  const dom_1$3 = dom;
  const interface_1$2 = _interface;
  class MessageElement extends interface_1$2.IElement {
    constructor() {
      super(...arguments);
      this.closer = (0, dom_1$3.h)("span", { className: "message-closer" }, "x");
      this.contentContainer = (0, dom_1$3.h)("span", { className: "message-content-container" });
      this.type = "info";
      this.content = "";
      this.closeable = true;
    }
    connectedCallback() {
      var _a;
      this.classList.add(this.type);
      if (typeof this.content === "string") {
        this.contentContainer.innerHTML = this.content;
      } else {
        this.contentContainer.append(this.content);
      }
      this.duration = Math.max((_a = this.duration) !== null && _a !== void 0 ? _a : 5, 0);
      this.append(this.contentContainer);
      if (this.closeable) {
        this.append(this.closer);
        this.closer.addEventListener("click", () => {
          var _a2;
          (_a2 = this.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          this.remove();
        });
      }
      if (this.duration) {
        setTimeout(() => {
          var _a2;
          (_a2 = this.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          this.remove();
        }, this.duration * 1e3);
      }
    }
  }
  message.MessageElement = MessageElement;
  var modal$1 = {};
  var __awaiter$2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(modal$1, "__esModule", { value: true });
  modal$1.ModalElement = void 0;
  const common_1$1 = common;
  const dom_1$2 = dom;
  const tampermonkey_1 = tampermonkey;
  const interface_1$1 = _interface;
  class ModalElement extends interface_1$1.IElement {
    constructor() {
      super(...arguments);
      this._title = (0, dom_1$2.h)("div", { className: "modal-title" });
      this.body = (0, dom_1$2.h)("div", { className: "modal-body" });
      this.footerContainer = (0, dom_1$2.h)("div", { className: "modal-footer" });
      this.modalInput = (0, dom_1$2.h)("input", { className: "modal-input" });
      this.modalInputType = "input";
      this.type = "alert";
      this.content = "";
      this.inputDefaultValue = "";
      this.placeholder = "";
      this.modalStyle = {};
    }
    connectedCallback() {
      var _a;
      this.classList.add(this.type);
      Object.assign(this.style, this.modalStyle || {});
      const profile = (0, dom_1$2.h)("div", {
        innerText: this.profile || "\u5F39\u7A97\u6765\u81EA: OCS " + (((_a = tampermonkey_1.$gm.getInfos()) === null || _a === void 0 ? void 0 : _a.script.version) || ""),
        className: "modal-profile"
      });
      this._title.innerText = this.title;
      this.body.append(typeof this.content === "string" ? (0, dom_1$2.h)("div", { innerHTML: this.content }) : this.content);
      if (this.modalInputType === "textarea") {
        this.modalInput = (0, dom_1$2.h)("textarea", { className: "modal-input", style: { height: "100px" } });
      }
      this.modalInput.placeholder = this.placeholder || "";
      this.modalInput.value = this.inputDefaultValue || "";
      this.append(profile, this._title, this.body, this.footerContainer);
      this.style.width = (this.width || 400) + "px";
      if (this.footer === void 0) {
        this.footerContainer.append(this.modalInput);
        if (this.cancelButton === void 0) {
          this.cancelButton = (0, dom_1$2.h)("button", { className: "modal-cancel-button" });
          this.cancelButton.innerText = this.cancelButtonText || "\u53D6\u6D88";
          this.cancelButton.onclick = () => {
            var _a2, _b;
            (_a2 = this.onCancel) === null || _a2 === void 0 ? void 0 : _a2.call(this);
            (_b = this.onClose) === null || _b === void 0 ? void 0 : _b.call(this);
            this.remove();
          };
        }
        if (this.confirmButton === void 0) {
          this.confirmButton = (0, dom_1$2.h)("button", { className: "modal-confirm-button" });
          this.confirmButton.innerText = this.confirmButtonText || "\u786E\u5B9A";
          this.confirmButton.onclick = () => __awaiter$2(this, void 0, void 0, function* () {
            var _b, _c;
            if ((yield (_b = this.onConfirm) === null || _b === void 0 ? void 0 : _b.call(this, this.modalInput.value)) !== false) {
              this.remove();
              (_c = this.onClose) === null || _c === void 0 ? void 0 : _c.call(this, this.modalInput.value);
            }
          });
        }
        this.cancelButton && this.footerContainer.append(this.cancelButton);
        this.confirmButton && this.footerContainer.append(this.confirmButton);
        if (this.type === "simple") {
          this.footerContainer.remove();
        } else if (this.type === "prompt") {
          this.modalInput.focus();
        }
      } else {
        this.footerContainer.append(this.footer);
      }
      common_1$1.$.onresize(this.body, (modal2) => {
        this.body.style.maxHeight = window.innerHeight - 100 + "px";
        this.body.style.maxWidth = window.innerWidth - 50 + "px";
      });
    }
  }
  modal$1.ModalElement = ModalElement;
  var script_panel = {};
  Object.defineProperty(script_panel, "__esModule", { value: true });
  script_panel.ScriptPanelElement = void 0;
  const dom_1$1 = dom;
  const interface_1 = _interface;
  class ScriptPanelElement extends interface_1.IElement {
    constructor() {
      super(...arguments);
      this.separator = (0, dom_1$1.h)("div", { className: "separator" });
      this.notesContainer = (0, dom_1$1.h)("div", { className: "notes card" });
      this.configsContainer = (0, dom_1$1.h)("div", { className: "configs-container card" });
      this.body = (0, dom_1$1.h)("div", { className: "script-panel-body" });
      this.lockWrapper = (0, dom_1$1.h)("div", { className: "lock-wrapper" });
    }
    connectedCallback() {
      this.separator.innerText = this.name || "";
      this.append(this.separator);
      this.append(this.notesContainer);
      this.append(this.configsContainer);
      this.append(this.body);
    }
  }
  script_panel.ScriptPanelElement = ScriptPanelElement;
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.definedCustomElements = exports3.ScriptPanelElement = exports3.ModalElement = exports3.MessageElement = exports3.HeaderElement = exports3.ContainerElement = exports3.ConfigElement = void 0;
    const config_1 = config;
    const container_1 = container;
    const dropdown_1 = dropdown;
    const header_1 = header;
    const message_1 = message;
    const modal_1 = modal$1;
    const script_panel_1 = script_panel;
    var config_2 = config;
    Object.defineProperty(exports3, "ConfigElement", { enumerable: true, get: function() {
      return config_2.ConfigElement;
    } });
    var container_2 = container;
    Object.defineProperty(exports3, "ContainerElement", { enumerable: true, get: function() {
      return container_2.ContainerElement;
    } });
    var header_2 = header;
    Object.defineProperty(exports3, "HeaderElement", { enumerable: true, get: function() {
      return header_2.HeaderElement;
    } });
    var message_2 = message;
    Object.defineProperty(exports3, "MessageElement", { enumerable: true, get: function() {
      return message_2.MessageElement;
    } });
    var modal_2 = modal$1;
    Object.defineProperty(exports3, "ModalElement", { enumerable: true, get: function() {
      return modal_2.ModalElement;
    } });
    var script_panel_2 = script_panel;
    Object.defineProperty(exports3, "ScriptPanelElement", { enumerable: true, get: function() {
      return script_panel_2.ScriptPanelElement;
    } });
    exports3.definedCustomElements = [
      config_1.ConfigElement,
      container_1.ContainerElement,
      header_1.HeaderElement,
      modal_1.ModalElement,
      message_1.MessageElement,
      script_panel_1.ScriptPanelElement,
      dropdown_1.DropdownElement
    ];
  })(elements);
  var __awaiter$1 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
    var t2 = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t2[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t2[p[i]] = s[p[i]];
      }
    return t2;
  };
  Object.defineProperty(customWindow, "__esModule", { value: true });
  customWindow.modal = customWindow.CustomWindow = void 0;
  const _1 = interfaces;
  const elements_1$1 = elements;
  const utils_1 = utils;
  const start_1 = start$1;
  const minimizeSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';
  const expandSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/></svg>';
  class CustomWindow {
    constructor(projects, inputStoreProvider, config2) {
      this.messageContainer = (0, utils_1.h)("div", { className: "message-container" });
      this.extraMenuBar = (0, utils_1.h)("div", { className: "extra-menu-bar" });
      this.defaults = {
        urls: (urls) => urls && urls.length ? urls : [location.href],
        panelName: (name) => name || this.config.render.defaultPanelName || ""
      };
      this.projects = projects;
      this.inputStoreProvider = inputStoreProvider;
      this.config = config2;
      handleLowLevelBrowser();
      utils_1.$.loadCustomElements(elements_1$1.definedCustomElements);
      this.wrapper = (0, utils_1.h)("div");
      this.root = this.wrapper.attachShadow({ mode: "closed" });
      this.container = (0, utils_1.h)("container-element");
      this.root.append(this.container);
      const styles = config2.render.styles.map((s) => (0, utils_1.h)("style", s));
      this.container.append(...styles, this.messageContainer);
      const handlePosition = () => {
        const pos = config2.store.getPosition();
        if (pos.x > document.documentElement.clientWidth || pos.x < 0) {
          config2.store.setPosition(10, 10);
        }
        if (pos.y > document.documentElement.clientHeight || pos.y < 0) {
          config2.store.setPosition(10, 10);
        }
        this.container.style.left = pos.x + "px";
        this.container.style.top = pos.y + "px";
        const positionHandler = () => {
          config2.store.setPosition(this.container.offsetLeft, this.container.offsetTop);
        };
        (0, utils_1.enableElementDraggable)(this.container.header, this.container, positionHandler);
      };
      const handleVisible = () => {
        window.addEventListener("click", (e) => {
          if (e.detail === Math.max(config2.render.switchPoint, 3)) {
            this.container.style.top = e.y + "px";
            this.container.style.left = e.x + "px";
            config2.store.setPosition(e.x, e.y);
            this.setVisual("normal");
          }
        });
      };
      const initCorsModalSystem = () => {
        _1.cors.on("modal", (args) => __awaiter$1(this, void 0, void 0, function* () {
          const [type, _attrs] = args || [];
          return new Promise((resolve, reject) => {
            const attrs = _attrs;
            attrs.onCancel = () => resolve("");
            attrs.onConfirm = resolve;
            attrs.onClose = resolve;
            modal(type, attrs);
          });
        }));
      };
      const initCorsMessageSystem = () => {
        _1.cors.on("message", (args) => __awaiter$1(this, void 0, void 0, function* () {
          const [type, attrs] = args || [];
          console.log("message", type, attrs);
          this.message(type, attrs);
        }));
      };
      window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === config2.render.switchKey) {
          e.stopPropagation();
          e.preventDefault();
          this.setVisual(config2.store.getVisual() === "close" ? "normal" : "close");
        }
      }, { capture: true });
      handleVisible();
      this.setVisual(config2.store.getVisual());
      (() => __awaiter$1(this, void 0, void 0, function* () {
        const urls = yield config2.store.getRenderURLs();
        const currentPanelName = yield config2.store.getCurrentPanelName();
        yield this.rerender(this.defaults.urls(urls), this.defaults.panelName(currentPanelName));
      }))();
      initCorsModalSystem();
      initCorsMessageSystem();
      handlePosition();
      this.setFontSize(config2.render.fontsize);
    }
    rerender(urls, currentPanelName) {
      return __awaiter$1(this, void 0, void 0, function* () {
        this.initHeader(urls, currentPanelName);
        yield this.renderBody(currentPanelName);
      });
    }
    initHeader(urls, currentPanelName) {
      const profile = utils_1.$ui.tooltip((0, utils_1.h)("div", { className: "profile", title: "\u83DC\u5355\u680F\uFF08\u53EF\u62D6\u52A8\u533A\u57DF\uFF09" }, this.config.render.title || "\u65E0\u6807\u9898"));
      const scriptDropdowns = [];
      for (const project2 of this.projects) {
        const dropdown2 = (0, utils_1.h)("dropdown-element");
        let selected = false;
        const options = [];
        const scripts = utils_1.$.getMatchedScripts([project2], urls).filter((s) => !s.hideInPanel);
        if (scripts.length) {
          for (const key in project2.scripts) {
            if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
              const script2 = project2.scripts[key];
              if (!script2.hideInPanel) {
                const optionSelected = isCurrentPanel(project2.name, script2, currentPanelName);
                const option = (0, utils_1.h)("div", { className: "dropdown-option" }, script2.name);
                if (optionSelected) {
                  option.classList.add("active");
                }
                if (selected !== true && optionSelected) {
                  selected = true;
                }
                option.onclick = () => __awaiter$1(this, void 0, void 0, function* () {
                  yield this.config.store.setCurrentPanelName(project2.name + "-" + script2.name);
                });
                options.push(option);
              }
            }
          }
          if (selected) {
            dropdown2.classList.add("active");
          }
          dropdown2.triggerElement = (0, utils_1.h)("div", { className: "dropdown-trigger-element " }, project2.name);
          dropdown2.triggerElement.style.padding = "0px 8px";
          dropdown2.content.append(...options);
          scriptDropdowns.push(dropdown2);
        }
      }
      const isMinimize = () => this.config.store.getVisual() === "minimize";
      const visualSwitcher = utils_1.$ui.tooltip((0, utils_1.h)("div", {
        className: "switch ",
        title: isMinimize() ? "\u70B9\u51FB\u5C55\u5F00\u7A97\u53E3" : "\u70B9\u51FB\u6700\u5C0F\u5316\u7A97\u53E3",
        innerHTML: isMinimize() ? expandSvg : minimizeSvg,
        onclick: () => {
          this.setVisual(isMinimize() ? "normal" : "minimize");
          visualSwitcher.title = isMinimize() ? "\u70B9\u51FB\u5C55\u5F00\u7A97\u53E3" : "\u70B9\u51FB\u6700\u5C0F\u5316\u7A97\u53E3";
          visualSwitcher.innerHTML = isMinimize() ? expandSvg : minimizeSvg;
        }
      }));
      this.container.header.visualSwitcher = visualSwitcher;
      this.container.header.replaceChildren();
      this.container.header.append((0, utils_1.h)("div", { style: { width: "100%" } }, [
        (0, utils_1.h)("div", { style: { display: "flex", width: "100%" } }, [
          profile,
          ...scriptDropdowns,
          this.container.header.visualSwitcher || ""
        ]),
        (0, utils_1.h)("div", { style: { display: "flex", width: "100%" } }, [this.extraMenuBar])
      ]));
    }
    renderBody(currentPanelName) {
      var _a;
      return __awaiter$1(this, void 0, void 0, function* () {
        for (const project2 of this.projects) {
          for (const key in project2.scripts) {
            if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
              const script2 = project2.scripts[key];
              if (isCurrentPanel(project2.name, script2, currentPanelName)) {
                const panel = utils_1.$ui.scriptPanel(script2, this.inputStoreProvider);
                script2.projectName = project2.name;
                script2.panel = panel;
                script2.header = this.container.header;
                this.container.body.replaceChildren(panel);
                (_a = script2.onrender) === null || _a === void 0 ? void 0 : _a.call(script2, { panel, header: this.container.header });
                script2.emit("render", { panel, header: this.container.header });
              }
            }
          }
        }
      });
    }
    setFontSize(fontsize) {
      this.container.style.font = `${fontsize}px  Menlo, Monaco, Consolas, 'Courier New', monospace`;
    }
    setVisual(value) {
      this.container.className = "";
      if (value === "minimize") {
        this.container.classList.add("minimize");
      } else if (value === "close") {
        this.container.classList.add("close");
      } else {
        this.container.classList.add("normal");
      }
      this.config.store.setVisual(value);
    }
    changeRenderURLs(urls) {
      return __awaiter$1(this, void 0, void 0, function* () {
        const currentPanelName = yield this.config.store.getCurrentPanelName();
        yield this.rerender(this.defaults.urls(urls), this.defaults.panelName(currentPanelName));
      });
    }
    changePanel(currentPanelName) {
      return __awaiter$1(this, void 0, void 0, function* () {
        const urls = (yield this.config.store.getRenderURLs()) || [location.href];
        yield this.rerender(this.defaults.urls(urls), this.defaults.panelName(currentPanelName));
      });
    }
    pin(script2) {
      return __awaiter$1(this, void 0, void 0, function* () {
        if (script2.projectName) {
          yield this.config.store.setCurrentPanelName(`${script2.projectName}-${script2.name}`);
        } else if (script2.namespace) {
          yield this.config.store.setCurrentPanelName(script2.namespace);
        } else {
          console.warn("[ERROR]", `${script2.name} \u65E0\u6CD5\u7F6E\u9876\uFF0C projectName \u4E0E namespace \u90FD\u4E3A undefined`);
        }
      });
    }
    minimize() {
      this.setVisual("minimize");
    }
    normal() {
      this.setVisual("normal");
    }
    message(type, attrs) {
      if (typeof attrs === "string") {
        attrs = { content: attrs };
      }
      const message2 = (0, utils_1.h)("message-element", Object.assign({ type }, attrs));
      this.messageContainer.append(message2);
      return message2;
    }
    menu(label, config2) {
      this.extraMenuBar.style.display = "flex";
      const btn = (0, utils_1.h)("button", label);
      btn.addEventListener("click", () => {
        if (config2.scriptPanelLink) {
          this.pin(config2.scriptPanelLink).then(() => {
            this.normal();
          }).catch(console.error);
        }
      });
      if (config2.scriptPanelLink) {
        const full_name = (config2.scriptPanelLink.projectName ? config2.scriptPanelLink.projectName + " -> " : "") + config2.scriptPanelLink.name;
        btn.title = "\u5FEB\u6377\u8DF3\u8F6C\uFF1A" + full_name;
        btn.classList.add("script-panel-link");
      }
      this.extraMenuBar.append(btn);
      return btn;
    }
    mount(parent) {
      parent.children[utils_1.$.random(0, parent.children.length - 1)].after(this.wrapper);
    }
  }
  customWindow.CustomWindow = CustomWindow;
  function isCurrentPanel(projectName, script2, currentPanelName) {
    return projectName + "-" + script2.name === currentPanelName || script2.namespace === currentPanelName;
  }
  function handleLowLevelBrowser() {
    if (typeof Element.prototype.replaceChildren === "undefined") {
      Element.prototype.replaceChildren = function(...nodes) {
        this.innerHTML = "";
        for (const node of nodes) {
          this.append(node);
        }
      };
    }
  }
  function modal(type, attrs, parent = (start_1.$win === null || start_1.$win === void 0 ? void 0 : start_1.$win.container) || utils_1.$elements.root || document.body) {
    const { maskCloseable = true, onConfirm, onCancel, onClose, notification: notify, notificationOptions, duration } = attrs, _attrs = __rest(attrs, ["maskCloseable", "onConfirm", "onCancel", "onClose", "notification", "notificationOptions", "duration"]);
    if (notify) {
      utils_1.$gm.notification(typeof _attrs.content === "string" ? _attrs.content : _attrs.content.textContent || "", notificationOptions);
    }
    const wrapper = (0, utils_1.h)("div", { className: "modal-wrapper" }, (wrapper2) => {
      const modal2 = (0, utils_1.h)("modal-element", Object.assign({
        onConfirm(val) {
          return __awaiter$1(this, void 0, void 0, function* () {
            const isClose = yield onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm.apply(modal2, [val]);
            if (isClose !== false) {
              wrapper2.remove();
            }
            return isClose;
          });
        },
        onCancel() {
          onCancel === null || onCancel === void 0 ? void 0 : onCancel.apply(modal2);
          wrapper2.remove();
        },
        onClose(val) {
          onClose === null || onClose === void 0 ? void 0 : onClose.apply(modal2, [val]);
          wrapper2.remove();
        },
        type
      }, _attrs));
      wrapper2.append(modal2);
      modal2.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      if (maskCloseable) {
        wrapper2.addEventListener("click", () => {
          onClose === null || onClose === void 0 ? void 0 : onClose.apply(modal2);
          wrapper2.remove();
        });
      }
    });
    if (duration) {
      setTimeout(() => {
        wrapper.remove();
      }, duration * 1e3);
    }
    parent.append(wrapper);
    return wrapper;
  }
  customWindow.modal = modal;
  var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(start$1, "__esModule", { value: true });
  start$1.addFunctionEventListener = start$1.start = start$1.$win = void 0;
  const custom_window_1 = customWindow;
  const common_1 = common;
  const const_1 = _const;
  const dom_1 = dom;
  const elements_1 = elements$1;
  const store_1 = store;
  const debounce_1 = __importDefault(debounce_1$1);
  let mounted = false;
  function start(startConfig) {
    return __awaiter(this, void 0, void 0, function* () {
      const uid = yield store_1.$store.getTab(const_1.$const.TAB_UID);
      if (uid === void 0) {
        yield store_1.$store.setTab(const_1.$const.TAB_UID, common_1.$.uuid());
      }
      startConfig.projects = startConfig.projects.map((p) => {
        for (const key in p.scripts) {
          if (Object.prototype.hasOwnProperty.call(p.scripts, key)) {
            p.scripts[key].cfg = common_1.$.createConfigProxy(p.scripts[key]);
          }
        }
        return p;
      });
      const scripts = common_1.$.getMatchedScripts(startConfig.projects, [location.href]).sort((a, b) => b.priority - a.priority);
      scripts.forEach((script2) => {
        var _a;
        script2.startConfig = startConfig;
        script2.emit("start", startConfig);
        (_a = script2.onstart) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
      });
      let active = false;
      if (document.readyState === "interactive") {
        active = true;
        mount(startConfig);
        scripts.forEach((script2) => {
          var _a;
          return (_a = script2.onactive) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
      } else if (document.readyState === "complete") {
        mount(startConfig);
        scripts.forEach((script2) => {
          var _a;
          return (_a = script2.onactive) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
        scripts.forEach((script2) => {
          var _a;
          return (_a = script2.oncomplete) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
      }
      document.addEventListener("readystatechange", () => {
        mount(startConfig);
        if (document.readyState === "interactive" && active === false) {
          scripts.forEach((script2) => {
            var _a;
            script2.emit("active", startConfig);
            (_a = script2.onactive) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
          });
        }
        if (document.readyState === "complete") {
          scripts.forEach((script2) => {
            var _a;
            script2.emit("complete");
            (_a = script2.oncomplete) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
          });
          store_1.$store.getTab(const_1.$const.TAB_URLS).then((urls) => {
            store_1.$store.setTab(const_1.$const.TAB_URLS, Array.from(new Set(urls || [])).concat(location.href));
          });
        }
      });
      window.addEventListener("hashchange", () => {
        scripts.forEach((script2) => {
          var _a;
          script2.emit("hashchange", startConfig);
          (_a = script2.onhashchange) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
      });
      history.pushState = addFunctionEventListener(history, "pushState");
      history.replaceState = addFunctionEventListener(history, "replaceState");
      window.addEventListener("pushState", () => {
        scripts.forEach((script2) => {
          var _a;
          script2.emit("historychange", "push", startConfig);
          (_a = script2.onhistorychange) === null || _a === void 0 ? void 0 : _a.call(script2, "push", startConfig);
        });
      });
      window.addEventListener("replaceState", () => {
        scripts.forEach((script2) => {
          var _a;
          script2.emit("historychange", "replace", startConfig);
          (_a = script2.onhistorychange) === null || _a === void 0 ? void 0 : _a.call(script2, "replace", startConfig);
        });
      });
      window.addEventListener("beforeunload", (e) => {
        var _a;
        let prevent;
        for (const script2 of scripts) {
          script2.emit("beforeunload");
          if ((_a = script2.onbeforeunload) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig)) {
            prevent = true;
          }
        }
        if (prevent) {
          e.preventDefault();
          e.returnValue = true;
          return true;
        }
      });
    });
  }
  start$1.start = start;
  function addFunctionEventListener(obj, type) {
    const origin = obj[type];
    return function(...args) {
      const res = origin.apply(this, args);
      const e = new Event(type.toString());
      e.arguments = args;
      window.dispatchEvent(e);
      return res;
    };
  }
  start$1.addFunctionEventListener = addFunctionEventListener;
  function mount(startConfig) {
    if (mounted === true) {
      return;
    }
    mounted = true;
    if (startConfig === void 0 || startConfig.renderConfig === void 0) {
      console.warn("the script will not have ui because the renderConfig is not defined.");
      return;
    }
    store_1.$store.setTab(const_1.$const.TAB_URLS, []);
    if (self === top) {
      const { projects, renderConfig } = startConfig;
      if (typeof renderConfig.renderScript === "undefined") {
        console.warn("the script will not have ui because the RenderScript is not defined.");
        return;
      }
      const scripts = common_1.$.getMatchedScripts(projects, [location.href]).filter((s) => !!s.hideInPanel === false);
      if (scripts.length <= 0) {
        return;
      }
      const RenderScript2 = renderConfig.renderScript;
      const win = new custom_window_1.CustomWindow(startConfig.projects, store_1.$store, {
        render: {
          title: renderConfig.title,
          styles: renderConfig.styles,
          defaultPanelName: renderConfig.defaultPanelName,
          fontsize: RenderScript2.cfg.fontsize,
          switchPoint: RenderScript2.cfg.switchPoint,
          switchKey: "o"
        },
        store: {
          getPosition: () => {
            return { x: RenderScript2.cfg.x, y: RenderScript2.cfg.y };
          },
          setPosition: (x, y) => {
            RenderScript2.cfg.x = x;
            RenderScript2.cfg.y = y;
          },
          getVisual: () => {
            return RenderScript2.cfg.visual;
          },
          setVisual: (size) => {
            RenderScript2.cfg.visual = size;
          },
          getRenderURLs() {
            return __awaiter(this, void 0, void 0, function* () {
              return yield store_1.$store.getTab(const_1.$const.TAB_URLS);
            });
          },
          setRenderURLs(urls) {
            return __awaiter(this, void 0, void 0, function* () {
              return yield store_1.$store.setTab(const_1.$const.TAB_URLS, urls);
            });
          },
          getCurrentPanelName() {
            return __awaiter(this, void 0, void 0, function* () {
              return yield store_1.$store.getTab(const_1.$const.TAB_CURRENT_PANEL_NAME);
            });
          },
          setCurrentPanelName(name) {
            return __awaiter(this, void 0, void 0, function* () {
              return yield store_1.$store.setTab(const_1.$const.TAB_CURRENT_PANEL_NAME, name);
            });
          }
        }
      });
      RenderScript2.onConfigChange("fontsize", (fs) => {
        win.setFontSize(fs);
      });
      RenderScript2.onConfigChange("visual", (v) => {
        win.setVisual(v);
      });
      store_1.$store.addTabChangeListener(const_1.$const.TAB_URLS, (0, debounce_1.default)((urls) => {
        win.changeRenderURLs(urls);
      }, 2e3));
      store_1.$store.addTabChangeListener(const_1.$const.TAB_CURRENT_PANEL_NAME, (name) => {
        win.changePanel(name);
      });
      win.mount(document.body);
      elements_1.$elements.tooltipContainer = (0, dom_1.h)("div", { className: "tooltip-container" });
      elements_1.$elements.root = win.root;
      win.container.append(elements_1.$elements.tooltipContainer);
      start$1.$win = win;
    }
  }
  var render = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.$menu = exports3.$message = exports3.$modal = exports3.createRenderScript = void 0;
    const script_1 = script;
    const ui_12 = ui;
    const dom_12 = dom;
    const custom_window_12 = customWindow;
    const start_12 = start$1;
    const interfaces_1 = interfaces;
    const createRenderScript = (config2) => new script_1.Script({
      name: (config2 === null || config2 === void 0 ? void 0 : config2.name) || "\u7A97\u53E3\u8BBE\u7F6E",
      matches: (config2 === null || config2 === void 0 ? void 0 : config2.matches) || [["\u6240\u6709", /.*/]],
      namespace: "render.panel",
      configs: {
        notes: {
          defaultValue: ui_12.$ui.notes([
            [
              "\u5982\u679C\u9700\u8981\u9690\u85CF\u6574\u4E2A\u7A97\u53E3\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0B\u65B9\u9690\u85CF\u6309\u94AE\uFF0C",
              "\u9690\u85CF\u540E\u53EF\u4EE5\u5FEB\u901F\u4E09\u51FB\u5C4F\u5E55\u4E2D\u7684\u4EFB\u610F\u5730\u65B9",
              "\u6765\u91CD\u65B0\u5728\u9F20\u6807\u4F4D\u7F6E\u663E\u793A\u7A97\u53E3\u3002"
            ],
            "\u7A97\u53E3\u8FDE\u7EED\u70B9\u51FB\u663E\u793A\u7684\u6B21\u6570\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF0C\u9ED8\u8BA4\u4E3A\u4E09\u6B21",
            ["\u7A97\u53E3\u5FEB\u6377\u952E\u5217\u8868\uFF1A", "ctrl + o : \u9690\u85CF/\u6253\u5F00 \u9762\u677F"]
          ]).outerHTML
        },
        x: { defaultValue: window.innerWidth * 0.1 },
        y: { defaultValue: window.innerWidth * 0.1 },
        visual: { defaultValue: "normal" },
        firstCloseAlert: {
          defaultValue: true
        },
        fontsize: {
          label: "\u5B57\u4F53\u5927\u5C0F\uFF08\u50CF\u7D20\uFF09",
          attrs: { type: "number", min: 12, max: 24, step: 1 },
          defaultValue: 14
        },
        switchPoint: {
          label: "\u7A97\u53E3\u663E\u793A\u8FDE\u70B9\uFF08\u6B21\u6570\uFF09",
          attrs: {
            type: "number",
            min: 3,
            max: 10,
            step: 1,
            title: "\u8BBE\u7F6E\u5F53\u8FDE\u7EED\u70B9\u51FB\u5C4F\u5E55 N \u6B21\u65F6\uFF0C\u53EF\u4EE5\u8FDB\u884C\u9762\u677F\u7684 \u9690\u85CF/\u663E\u793A \u5207\u6362\uFF0C\u9ED8\u8BA4\u8FDE\u7EED\u70B9\u51FB\u5C4F\u5E55\u4E09\u4E0B"
          },
          defaultValue: 3
        }
      },
      methods() {
        return {
          pin: (script2) => start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.pin(script2),
          minimize: () => start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.minimize(),
          setPosition: (x, y) => {
            if (start_12.$win) {
              start_12.$win.config.store.setPosition(x, y);
              start_12.$win.container.style.left = x + "px";
              start_12.$win.container.style.top = y + "px";
            }
          },
          normal: () => {
            start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.normal();
          }
        };
      },
      onrender({ panel }) {
        const closeBtn = (0, dom_12.h)("button", { className: "base-style-button" }, "\u9690\u85CF\u7A97\u53E3");
        closeBtn.onclick = () => {
          if (this.cfg.firstCloseAlert) {
            exports3.$modal.confirm({
              content: ui_12.$ui.notes([
                "\u9690\u85CF\u811A\u672C\u9875\u9762\u540E\uFF0C\u5FEB\u901F\u70B9\u51FB\u9875\u9762\u4E09\u4E0B\uFF08\u53EF\u4EE5\u5728\u60AC\u6D6E\u7A97\u8BBE\u7F6E\u4E2D\u8C03\u6574\u6B21\u6570\uFF09\u5373\u53EF\u91CD\u65B0\u663E\u793A\u811A\u672C\u3002\u5982\u679C\u4E09\u4E0B\u65E0\u6548\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5220\u9664\u811A\u672C\u91CD\u65B0\u5B89\u88C5\u3002",
                "\u8BF7\u786E\u8BA4\u662F\u5426\u5173\u95ED\u3002\uFF08\u6B64\u540E\u4E0D\u518D\u663E\u793A\u6B64\u5F39\u7A97\uFF09"
              ]),
              onConfirm: () => {
                this.cfg.visual = "close";
                this.cfg.firstCloseAlert = false;
              }
            });
          } else {
            this.cfg.visual = "close";
          }
        };
        panel.body.replaceChildren((0, dom_12.h)("hr"), closeBtn);
      }
    });
    exports3.createRenderScript = createRenderScript;
    function _modal(type, attrs, parent) {
      if (self === top) {
        return (0, custom_window_12.modal)(type, attrs, parent);
      } else {
        interfaces_1.cors.emit("modal", [type, attrs], (args) => {
          var _a, _b, _c;
          if (args) {
            (_a = attrs.onConfirm) === null || _a === void 0 ? void 0 : _a.call(attrs, args);
          } else {
            (_b = attrs.onCancel) === null || _b === void 0 ? void 0 : _b.call(attrs);
          }
          (_c = attrs.onClose) === null || _c === void 0 ? void 0 : _c.call(attrs, args);
        });
      }
    }
    exports3.$modal = {
      confirm: (attrs, parent) => _modal("confirm", attrs, parent),
      alert: (attrs, parent) => _modal("alert", attrs, parent),
      prompt: (attrs, parent) => _modal("prompt", attrs, parent),
      simple: (attrs, parent) => _modal("simple", attrs, parent)
    };
    function _message(type, attrs) {
      if (self === top) {
        return start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.message(type, attrs);
      } else {
        if (typeof attrs === "string") {
          attrs = { content: attrs };
        } else if (typeof attrs.content !== "string") {
          attrs.content = attrs.content.innerHTML;
        }
        interfaces_1.cors.emit("message", [type, attrs]);
      }
    }
    exports3.$message = {
      info: (attrs) => _message("info", attrs),
      success: (attrs) => _message("success", attrs),
      warn: (attrs) => _message("warn", attrs),
      error: (attrs) => _message("error", attrs)
    };
    function $menu(label, config2) {
      if (self !== top) {
        return;
      }
      return start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.menu(label, config2);
    }
    exports3.$menu = $menu;
  })(render);
  (function(exports3) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports4) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
          __createBinding(exports4, m, p);
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.start = void 0;
    var start_12 = start$1;
    Object.defineProperty(exports3, "start", { enumerable: true, get: function() {
      return start_12.start;
    } });
    __exportStar(utils, exports3);
    __exportStar(render, exports3);
    __exportStar(elements, exports3);
    __exportStar(interfaces, exports3);
  })(lib);
  function defaultQuestionResolve(ctx) {
    return {
      async single(infos, options, handler) {
        const allAnswer = infos.map((res) => res.results.map((res2) => splitAnswer(res2.answer, ctx.answerSeparators)).flat()).flat();
        const optionStrings = options.map((o) => removeRedundant(o.innerText));
        if (ctx.answerMatchMode === "similar") {
          const ratings = answerSimilar(allAnswer, optionStrings);
          let index = -1;
          let max = 0;
          let ans = "";
          ratings.forEach((rating, i) => {
            if (rating.rating > max) {
              max = rating.rating;
              index = i;
              ans = rating.target;
            }
          });
          if (index !== -1 && max > 0.6) {
            await handler("single", ans, options[index], ctx);
            return {
              finish: true,
              ratings: ratings.map((r) => r.rating)
            };
          }
        } else if (ctx.answerMatchMode === "exact") {
          const result = answerExactMatch(allAnswer, optionStrings);
          const index = optionStrings.findIndex((option) => result.includes(option));
          if (result.length) {
            await handler("single", options[index].innerText, options[index], ctx);
            return {
              finish: true
            };
          }
        }
        for (const info of infos) {
          for (const res of info.results) {
            const ans = StringUtils.nowrap(res.answer, "").trim();
            if (ans.length === 1 && /[A-Z]/.test(ans)) {
              const index = ans.charCodeAt(0) - 65;
              if (options[index] === void 0) {
                continue;
              }
              await handler("single", options[index].innerText, options[index], ctx);
              return { finish: true, option: options[index] };
            }
          }
        }
        return { finish: false, allAnswer, options: optionStrings };
      },
      async multiple(infos, options, handler) {
        var _a;
        const targetAnswers = [];
        const targetOptions = [];
        const similar_list = [];
        const exact_list = [];
        const results = infos.map((info) => info.results).flat();
        for (let i = 0; i < results.length; i++) {
          const result = results[i];
          const answers = splitAnswer(result.answer.trim(), ctx.answerSeparators);
          if (ctx.answerMatchMode === "similar") {
            const matchResult = { options: [], answers: [], ratings: [], similarSum: 0, similarCount: 0 };
            for (const option of options) {
              const ans = answers.find(
                (answer) => answer.includes(removeRedundant(option.textContent || option.innerText))
              );
              if (ans) {
                matchResult.options.push(option);
                matchResult.answers.push(ans);
                matchResult.ratings.push(1);
                matchResult.similarSum += 1;
                matchResult.similarCount += 1;
              }
            }
            const ratingResult = { options: [], answers: [], ratings: [], similarSum: 0, similarCount: 0 };
            const ratings = answerSimilar(
              answers,
              options.map((o) => removeRedundant(o.innerText))
            );
            for (let j = 0; j < ratings.length; j++) {
              const rating = ratings[j];
              if (rating.rating > 0.6) {
                ratingResult.options.push(options[j]);
                ratingResult.answers.push(ratings[j].target);
                ratingResult.ratings.push(ratings[j].rating);
                ratingResult.similarSum += rating.rating;
                ratingResult.similarCount += 1;
              }
            }
            if (matchResult.similarSum > ratingResult.similarSum) {
              similar_list[i] = matchResult;
            } else {
              similar_list[i] = ratingResult;
            }
          } else if (ctx.answerMatchMode === "exact") {
            exact_list[i] = answerExactMatch(
              answers,
              options.map((o) => removeRedundant(o.innerText))
            ).map((option) => options.find((o) => removeRedundant(o.innerText) === option)).filter(Boolean);
          }
        }
        if (ctx.answerMatchMode === "similar") {
          const sorted_similar_list = similar_list.filter((i) => i.similarCount !== 0).sort((a, b) => {
            const bsc = b.similarCount * 100;
            const asc = a.similarCount * 100;
            const bss = b.similarSum;
            const ass = a.similarSum;
            return bsc + bss - asc + ass;
          });
          if (sorted_similar_list[0]) {
            for (let i = 0; i < sorted_similar_list[0].options.length; i++) {
              await handler("multiple", sorted_similar_list[0].answers[i], sorted_similar_list[0].options[i], ctx);
            }
            return { finish: true, sorted_similar_list, targetOptions, targetAnswers };
          }
        } else if (ctx.answerMatchMode === "exact") {
          const sorted_exact_list = exact_list.sort((a, b) => b.length - a.length);
          if ((_a = sorted_exact_list[0]) == null ? void 0 : _a.length) {
            for (let i = 0; i < sorted_exact_list[0].length; i++) {
              await handler("multiple", sorted_exact_list[0][i].innerText, sorted_exact_list[0][i], ctx);
            }
            return {
              finish: true,
              sorted_exact_list: sorted_exact_list.map((i) => i.map((e) => e.innerText)),
              targetOptions,
              targetAnswers
            };
          }
        }
        const plainOptions = [];
        for (const result of results) {
          const ans = StringUtils.nowrap(result.answer, "").trim();
          const plainAnswer = resolvePlainAnswer(ans);
          if (plainAnswer) {
            for (const char of ans) {
              const index = char.charCodeAt(0) - 65;
              if (options[index] === void 0) {
                continue;
              }
              await handler("single", options[index].innerText, options[index], ctx);
              plainOptions.push(options[index]);
            }
          }
        }
        if (plainOptions.length) {
          return { finish: true, plainOptions };
        } else {
          return { finish: false };
        }
      },
      async judgement(infos, options, handler) {
        for (const answers of infos.map((info) => info.results.map((res) => res.answer))) {
          let matches = function(target, options2) {
            return options2.some(
              (option) => clearString(removeRedundant(option), "\u221A", "\xD7") === clearString(removeRedundant(target), "\u221A", "\xD7")
            );
          };
          const correctWords = [
            "\u662F",
            "\u5BF9",
            "\u6B63\u786E",
            "\u786E\u5B9A",
            "\u221A",
            "\u5BF9\u7684",
            "\u662F\u7684",
            "\u6B63\u786E\u7684",
            "true",
            "True",
            "T",
            "yes",
            "1"
          ];
          const incorrectWords = [
            "\u975E",
            "\u5426",
            "\u9519",
            "\u9519\u8BEF",
            "\xD7",
            "X",
            "\u9519\u7684",
            "\u4E0D\u5BF9",
            "\u4E0D\u6B63\u786E\u7684",
            "\u4E0D\u6B63\u786E",
            "\u4E0D\u662F",
            "\u4E0D\u662F\u7684",
            "false",
            "False",
            "F",
            "no",
            "0"
          ];
          const answerShowCorrect = answers.find((answer) => matches(answer, correctWords));
          const answerShowIncorrect = answers.find((answer) => matches(answer, incorrectWords));
          if (answerShowCorrect || answerShowIncorrect) {
            let option;
            for (const el of options) {
              const textShowCorrect = matches(el.innerText, correctWords);
              const textShowIncorrect = matches(el.innerText, incorrectWords);
              if (answerShowCorrect && textShowCorrect) {
                option = el;
                await handler("judgement", answerShowCorrect, el, ctx);
                break;
              }
              if (answerShowIncorrect && textShowIncorrect) {
                option = el;
                await handler("judgement", answerShowIncorrect, el, ctx);
                break;
              }
            }
            return { finish: true, option };
          }
        }
        return { finish: false };
      },
      async completion(infos, options, handler) {
        for (const answers of infos.map((info) => info.results.map((res) => res.answer))) {
          let ans = answers.filter((ans2) => ans2);
          if (ans.length === 1) {
            ans = splitAnswer(ans[0], ctx.answerSeparators);
          }
          if (ans.length !== 0 && (ans.length === options.length || options.length === 1)) {
            if (ans.length === options.length) {
              for (let index = 0; index < options.length; index++) {
                const element = options[index];
                await handler("completion", ans[index], element, ctx);
              }
              return { finish: true };
            } else if (options.length === 1) {
              await handler("completion", ans.join(" "), options[0], ctx);
              return { finish: true };
            }
            return { finish: false };
          }
        }
        return { finish: false };
      }
    };
  }
  class OCSWorker extends lib.CommonEventEmitter {
    constructor(opts) {
      super();
      this.isRunning = false;
      this.isClose = false;
      this.isStop = false;
      this.totalQuestionCount = 0;
      this.opts = opts;
    }
    async doWork(options) {
      var _a, _b, _c, _d;
      this.emit("start");
      this.isRunning = true;
      this.once("close", () => {
        this.isClose = true;
      });
      this.on("stop", () => {
        this.isStop = true;
      });
      this.on("continuate", () => {
        this.isStop = false;
      });
      const questionRoots = typeof this.opts.root === "string" ? Array.from(document.querySelectorAll(this.opts.root)) : this.opts.root;
      this.totalQuestionCount += questionRoots.length;
      if (options == null ? void 0 : options.enable_debug) {
        console.debug("\u5F00\u59CB\u7B54\u9898", this);
        console.debug("\u9898\u76EE\u6570\u91CF: ", questionRoots.length);
        console.debug("\u7236\u8282\u70B9\u5217\u8868: ", questionRoots);
      }
      const results = [];
      if (questionRoots.length === 0) {
        throw new Error("\u672A\u627E\u5230\u4EFB\u4F55\u9898\u76EE\uFF0C\u7B54\u9898\u7ED3\u675F\u3002");
      }
      for (const questionRoot of questionRoots) {
        const ctx = {
          searchInfos: [],
          root: questionRoot,
          elements: domSearchAll(this.opts.elements, questionRoot),
          type: void 0,
          answerSeparators: this.opts.answerSeparators,
          answerMatchMode: this.opts.answerMatchMode || "similar"
        };
        await ((_b = (_a = this.opts).onElementSearched) == null ? void 0 : _b.call(_a, ctx.elements, questionRoot));
        ctx.elements.title = (_c = ctx.elements.title) == null ? void 0 : _c.filter(Boolean);
        ctx.elements.options = (_d = ctx.elements.options) == null ? void 0 : _d.filter(Boolean);
        results.push({
          requested: false,
          resolved: false,
          ctx
        });
      }
      if (options == null ? void 0 : options.enable_debug) {
        console.debug("\u4E0A\u4E0B\u6587\u5DF2\u521D\u59CB\u5316: ", results);
      }
      const requestThread = async (index) => {
        var _a2, _b2;
        let error;
        const result = results[index];
        const ctx = result.ctx || {};
        if (this.isClose === true) {
          this.isRunning = false;
          return;
        }
        if (this.isStop) {
          await waitForContinuate(() => this.isStop);
        }
        if (typeof this.opts.work === "object") {
          ctx.type = this.opts.work.type === void 0 ? defaultWorkTypeResolver(ctx) : typeof this.opts.work.type === "string" ? this.opts.work.type : this.opts.work.type(ctx);
        }
        ctx.searchInfos = [];
        if (options == null ? void 0 : options.enable_debug) {
          console.debug("\u5F00\u59CB\u641C\u9898: ", result.ctx);
        }
        try {
          ctx.searchInfos = await this.opts.answerer(ctx.elements, ctx) || [];
          ctx.searchInfos.forEach((info) => {
            info.results = info.results.map((ans) => {
              ans.answer = ans.answer ? ans.answer.trim() : "";
              return ans;
            });
          });
        } catch (err) {
          error = String(err);
        }
        result.ctx = ctx;
        result.requested = true;
        result.error = error;
        if (options == null ? void 0 : options.enable_debug) {
          console.debug("\u641C\u9898\u5B8C\u6210: ", index, result.ctx);
        }
        await ((_b2 = (_a2 = this.opts).onResultsUpdate) == null ? void 0 : _b2.call(_a2, results[index], index, results));
      };
      const resolverThread = async () => {
        var _a2, _b2;
        const waitForRequested = async (result) => {
          return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
              if ((result == null ? void 0 : result.requested) === true) {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve();
              }
            }, 200);
            const timeout = setTimeout(() => {
              clearInterval(interval);
              reject(new Error("\u7B54\u9898\u8D85\u65F6\uFF01"));
            }, 60 * 1e3);
          });
        };
        for (let index = 0; index < results.length; index++) {
          const result = results[index];
          let error;
          let res;
          try {
            if (this.isClose === true) {
              this.isRunning = false;
              return;
            }
            if (this.isStop) {
              await waitForContinuate(() => this.isStop);
            }
            await waitForRequested(result);
            if (result.ctx && result.ctx.searchInfos.length !== 0) {
              if (typeof this.opts.work === "object") {
                if (result.ctx.elements.options) {
                  if (result.ctx.type) {
                    const resolver = defaultQuestionResolve(result.ctx)[result.ctx.type];
                    const handler = this.opts.work.handler;
                    res = await resolver(result.ctx.searchInfos, result.ctx.elements.options, handler);
                  } else {
                    error = "\u9898\u76EE\u7C7B\u578B\u89E3\u6790\u5931\u8D25, \u8BF7\u81EA\u884C\u63D0\u4F9B\u89E3\u6790\u5668, \u6216\u8005\u5FFD\u7565\u6B64\u9898\u3002";
                  }
                } else {
                  error = "elements.options \u4E3A\u7A7A ! \u4F7F\u7528\u9ED8\u8BA4\u5904\u7406\u5668, \u5FC5\u987B\u63D0\u4F9B\u9898\u76EE\u9009\u9879\u7684\u9009\u62E9\u5668\u3002";
                }
              } else {
                const work2 = this.opts.work;
                res = await work2(result.ctx);
              }
            } else {
              error = "\u641C\u7D22\u4E0D\u5230\u7B54\u6848, \u8BF7\u91CD\u65B0\u8FD0\u884C, \u6216\u8005\u5FFD\u7565\u6B64\u9898\u3002";
            }
          } catch (err) {
            error = (err == null ? void 0 : err.message) || err;
          }
          result.error = error;
          result.result = res || { finish: false };
          result.resolved = true;
          if (options == null ? void 0 : options.enable_debug) {
            console.debug("\u7B54\u9898\u5B8C\u6210: ", index, result);
          }
          await ((_b2 = (_a2 = this.opts).onResultsUpdate) == null ? void 0 : _b2.call(_a2, result, index, results));
        }
      };
      const requestThreadHandler = async () => {
        const locks = [];
        const waitForLock = () => {
          return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
              if (locks.length > 0) {
                const lock = locks.shift();
                if (lock) {
                  resolve(lock);
                  clearInterval(interval);
                  clearTimeout(timeout);
                }
              }
            }, 100);
            const timeout = setTimeout(() => {
              clearInterval(interval);
              reject(new Error("\u83B7\u53D6\u7EBF\u7A0B\u9501\u8D85\u65F6\uFF01"));
            }, 3 * 60 * 1e3);
          });
        };
        const requestThreads = [];
        for (let index = 0; index < results.length; index++) {
          requestThreads.push(() => requestThread(index));
        }
        for (let index = 0; index < (this.opts.thread || 1); index++) {
          locks.push(index + 1);
        }
        let requestFinished = 0;
        const promises = [];
        for (let index = 0; index < (this.opts.thread || 1); index++) {
          promises.push(async () => {
            try {
              while (requestFinished < results.length && requestThreads.length > 0 && this.isClose === false) {
                const thread = requestThreads.shift();
                if (thread) {
                  const lock = await waitForLock();
                  await thread();
                  requestFinished++;
                  locks.push(lock);
                }
              }
            } catch (err) {
              console.error(err);
            }
          });
        }
        await Promise.all(promises.map((f) => f()));
      };
      await Promise.all([resolverThread(), requestThreadHandler()]);
      this.isRunning = false;
      return results;
    }
    uploadHandler(options) {
      var _a;
      const { results, type, callback } = options;
      if (type !== "nomove") {
        let finished = 0;
        for (const result of results) {
          if ((_a = result.result) == null ? void 0 : _a.finish) {
            finished++;
          }
        }
        const rate = results.length === 0 ? 0 : finished / results.length * 100;
        if (type === "force") {
          return callback(rate, true);
        } else {
          return callback(rate, type === "save" ? false : rate >= parseFloat(type.toString()));
        }
      }
    }
  }
  async function waitForContinuate(isStopping) {
    if (isStopping()) {
      await new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (isStopping() === false) {
            clearInterval(interval);
            resolve();
          }
        }, 200);
      });
    }
  }
  async function defaultAnswerWrapperHandler(answererWrappers, env) {
    const searchInfos = [];
    const temp = JSON.parse(JSON.stringify(answererWrappers));
    if (temp.length === 0) {
      throw new Error("\u9898\u5E93\u914D\u7F6E\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u914D\u7F6E\u540E\u91CD\u65B0\u5F00\u59CB\u81EA\u52A8\u7B54\u9898\u3002");
    }
    await Promise.all(
      temp.map(async (wrapper) => {
        const {
          name = "\u672A\u77E5\u9898\u5E93",
          homepage = "#",
          method = "get",
          type = "fetch",
          contentType = "json",
          headers = {},
          data: wrapperData = {},
          handler = "return (res)=> [JSON.stringify(res), undefined]"
        } = wrapper;
        try {
          let results = [];
          let requestData;
          let url;
          if (method.toLocaleLowerCase() === "get") {
            url = new URL(resolvePlaceHolder(wrapper.url, { encodeURI: true }));
            Object.keys(wrapperData).forEach((key) => {
              url.searchParams.set(key, resolvePlaceHolder(wrapperData[key]));
            });
            requestData = {};
          } else if (method.toLocaleLowerCase() === "post") {
            url = new URL(wrapper.url);
            const data = /* @__PURE__ */ Object.create({});
            Object.keys(wrapperData).forEach((key) => {
              if (typeof wrapperData[key] === "object" && Reflect.has(wrapperData[key], "handler")) {
                const handler2 = Function(Reflect.get(wrapperData[key], "handler"))();
                if (typeof handler2 !== "function") {
                  throw new Error("data \u5B57\u6BB5\u89E3\u6790\u5668\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570");
                }
                const result = handler2(env);
                if (result) {
                  Reflect.set(data, key, result);
                }
              } else {
                Reflect.set(data, key, resolvePlaceHolder(wrapperData[key]));
              }
            });
            requestData = data;
          } else {
            throw new Error("\u4E0D\u652F\u6301\u7684\u8BF7\u6C42\u65B9\u5F0F");
          }
          const responseData = await Promise.race([
            request(url.toString(), {
              method,
              responseType: contentType,
              data: requestData,
              type,
              headers: JSON.parse(JSON.stringify(headers || {}))
            }),
            $.sleep(30 * 1e3)
          ]);
          if (responseData === void 0) {
            throw new Error("\u9898\u5E93\u8FDE\u63A5\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u8005\u91CD\u8BD5\u3002");
          }
          const responseHandler = Function(handler)();
          if (typeof responseHandler !== "function") {
            throw new Error("handler \u54CD\u5E94\u5904\u7406\u5668\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570");
          }
          const info = responseHandler(responseData);
          if (info && Array.isArray(info)) {
            if (info.every((item) => Array.isArray(item))) {
              results = results.concat(
                info.map((item) => ({
                  question: item[0],
                  answer: item[1]
                }))
              );
            } else {
              results.push({
                question: info[0],
                answer: info[1]
              });
            }
          }
          searchInfos.push({
            url: wrapper.url,
            name,
            homepage,
            results,
            response: responseData,
            data: requestData
          });
        } catch (error) {
          console.error(error);
          searchInfos.push({
            url: wrapper.url,
            name,
            homepage,
            results: [],
            response: void 0,
            data: void 0,
            error: (error == null ? void 0 : error.message) || "\u9898\u5E93\u8FDE\u63A5\u5931\u8D25"
          });
        }
      })
    );
    function resolvePlaceHolder(data, options) {
      if (typeof data === "string") {
        const matches = data.match(/\${(.*?)}/g) || [];
        matches.forEach((placeHolder) => {
          const value = env[placeHolder.replace(/\${(.*)}/, "$1")];
          data = data.replace(placeHolder, (options == null ? void 0 : options.encodeURI) ? encodeURIComponent(value) : value);
        });
      } else if (typeof data === "object") {
        const keys = Object.keys(data);
        for (const key of keys) {
          data[key] = resolvePlaceHolder(data[key], options);
        }
      }
      return data;
    }
    return searchInfos;
  }
  class AnswerWrapperParser {
    static fromObject(json) {
      const aw = json;
      if (aw && Array.isArray(aw)) {
        if (aw.length) {
          for (let i = 0; i < aw.length; i++) {
            const item = aw[i];
            if (typeof item.name !== "string") {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 \u540D\u5B57(name) \u4E3A\u7A7A`);
            }
            if (typeof item.url !== "string") {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 \u63A5\u53E3\u5730\u5740(url) \u4E3A\u7A7A`);
            }
            if (typeof item.handler !== "string") {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 \u89E3\u6790\u5668(handler) \u4E3A\u7A7A`);
            }
            if (item.headers && typeof item.headers !== "object") {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 \u5934\u90E8\u4FE1\u606F(header) \u5E94\u4E3A \u5BF9\u8C61 \u683C\u5F0F`);
            }
            if (item.data && typeof item.data !== "object") {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 \u63D0\u4EA4\u6570\u636E(data) \u5E94\u4E3A \u5BF9\u8C61 \u683C\u5F0F`);
            }
            const contentTypes = ["json", "text"];
            if (item.contentType && contentTypes.every((i2) => i2 !== item.contentType)) {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 contentType \u5FC5\u987B\u4E3A\u4EE5\u4E0B\u9009\u9879\u4E2D\u7684\u4E00\u4E2A  ${contentTypes.join(", ")}`);
            }
            const methods = ["post", "get"];
            if (item.method && methods.every((i2) => i2 !== item.method)) {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 method \u5FC5\u987B\u4E3A\u4EE5\u4E0B\u9009\u9879\u4E2D\u7684\u4E00\u4E2A  ${methods.join(", ")}`);
            }
            const types = ["fetch", "GM_xmlhttpRequest"];
            if (item.type && types.every((i2) => i2 !== item.type)) {
              throw new Error(`\u7B2C ${i + 1} \u4E2A\u9898\u5E93\u7684 type \u5FC5\u987B\u4E3A\u4EE5\u4E0B\u9009\u9879\u4E2D\u7684\u4E00\u4E2A  ${types.join(", ")}`);
            }
          }
          return aw;
        } else {
          throw new Error("\u9898\u5E93\u4E3A\u7A7A\uFF01");
        }
      } else {
        throw new Error("\u9898\u5E93\u914D\u7F6E\u683C\u5F0F\u9519\u8BEF\uFF01");
      }
    }
    static fromJSONString(json) {
      const raw = json.toString();
      try {
        return JSON.parse(raw);
      } catch {
        throw new Error(`\u683C\u5F0F\u9519\u8BEF\uFF0C\u5FC5\u987B\u4E3A\uFF1Ajson\u5B57\u7B26\u4E32 \u6216 \u9898\u5E93\u914D\u7F6E\u94FE\u63A5`);
      }
    }
    static async fromURL(url) {
      const text = await request(url, {
        responseType: "text",
        method: "get",
        type: "fetch"
      });
      return this.fromJSONString(text);
    }
    static fromBase64(base64) {
      return this.fromJSONString(Buffer.from(base64, "base64").toString("utf8"));
    }
    static from(value) {
      if (typeof value === "string") {
        if (value.startsWith("http")) {
          return this.fromURL(value);
        } else {
          return this.fromJSONString(value);
        }
      } else {
        return this.fromObject(value);
      }
    }
  }
  function getDefaults() {
    return {
      async: false,
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: "",
      highlight: null,
      hooks: null,
      langPrefix: "language-",
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }
  let defaults = getDefaults();
  function changeDefaults(newDefaults) {
    defaults = newDefaults;
  }
  const escapeTest = /[&<>"']/;
  const escapeReplace = new RegExp(escapeTest.source, "g");
  const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
  const escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  const getEscapeReplacement = (ch) => escapeReplacements[ch];
  function escape$1(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function unescape$1(html) {
    return html.replace(unescapeTest, (_, n) => {
      n = n.toLowerCase();
      if (n === "colon")
        return ":";
      if (n.charAt(0) === "#") {
        return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return "";
    });
  }
  const caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    regex = typeof regex === "string" ? regex : regex.source;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        val = val.source || val;
        val = val.replace(caret, "$1");
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: () => {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  const nonWordAndColonTest = /[^\w:]/g;
  const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      let prot;
      try {
        prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, "").toLowerCase();
      } catch (e) {
        return null;
      }
      if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
        return null;
      }
    }
    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return href;
  }
  const baseUrls = {};
  const justDomain = /^[^:]+:\/*[^/]*$/;
  const protocol = /^([^:]+:)[\s\S]*$/;
  const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function resolveUrl(base, href) {
    if (!baseUrls[" " + base]) {
      if (justDomain.test(base)) {
        baseUrls[" " + base] = base + "/";
      } else {
        baseUrls[" " + base] = rtrim(base, "/", true);
      }
    }
    base = baseUrls[" " + base];
    const relativeBase = base.indexOf(":") === -1;
    if (href.substring(0, 2) === "//") {
      if (relativeBase) {
        return href;
      }
      return base.replace(protocol, "$1") + href;
    } else if (href.charAt(0) === "/") {
      if (relativeBase) {
        return href;
      }
      return base.replace(domain, "$1") + href;
    } else {
      return base + href;
    }
  }
  const noopTest = { exec: function noopTest2() {
  } };
  function splitCells(tableRow, count) {
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false, curr = offset;
      while (--curr >= 0 && str[curr] === "\\")
        escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row.split(/ \|/);
    let i = 0;
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
    for (; i < cells.length; i++) {
      cells[i] = cells[i].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l) {
      const currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    const l = str.length;
    let level = 0, i = 0;
    for (; i < l; i++) {
      if (str[i] === "\\") {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
  }
  function repeatString(pattern, count) {
    if (count < 1) {
      return "";
    }
    let result = "";
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  }
  function outputLink(cap, link, raw, lexer) {
    const href = link.href;
    const title = link.title ? escape$1(link.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      lexer.state.inLink = true;
      const token = {
        type: "link",
        raw,
        href,
        title,
        text,
        tokens: lexer.inlineTokens(text)
      };
      lexer.state.inLink = false;
      return token;
    }
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$1(text)
    };
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  class Tokenizer {
    constructor(options) {
      this.options = options || defaults;
    }
    space(src2) {
      const cap = this.rules.block.newline.exec(src2);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
    code(src2) {
      const cap = this.rules.block.code.exec(src2);
      if (cap) {
        const text = cap[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
    fences(src2) {
      const cap = this.rules.block.fences.exec(src2);
      if (cap) {
        const raw = cap[0];
        const text = indentCodeCompensation(raw, cap[3] || "");
        return {
          type: "code",
          raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
          text
        };
      }
    }
    heading(src2) {
      const cap = this.rules.block.heading.exec(src2);
      if (cap) {
        let text = cap[2].trim();
        if (/#$/.test(text)) {
          const trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    hr(src2) {
      const cap = this.rules.block.hr.exec(src2);
      if (cap) {
        return {
          type: "hr",
          raw: cap[0]
        };
      }
    }
    blockquote(src2) {
      const cap = this.rules.block.blockquote.exec(src2);
      if (cap) {
        const text = cap[0].replace(/^ *>[ \t]?/gm, "");
        const top2 = this.lexer.state.top;
        this.lexer.state.top = true;
        const tokens = this.lexer.blockTokens(text);
        this.lexer.state.top = top2;
        return {
          type: "blockquote",
          raw: cap[0],
          tokens,
          text
        };
      }
    }
    list(src2) {
      let cap = this.rules.block.list.exec(src2);
      if (cap) {
        let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        let bull = cap[1].trim();
        const isordered = bull.length > 1;
        const list = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        while (src2) {
          endEarly = false;
          if (!(cap = itemRegex.exec(src2))) {
            break;
          }
          if (this.rules.block.hr.test(src2)) {
            break;
          }
          raw = cap[0];
          src2 = src2.substring(raw.length);
          line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t2) => " ".repeat(3 * t2.length));
          nextLine = src2.split("\n", 1)[0];
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            raw += nextLine + "\n";
            src2 = src2.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
            const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
            const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
            const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
            while (src2) {
              rawLine = src2.split("\n", 1)[0];
              nextLine = rawLine;
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(src2)) {
                break;
              }
              if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLine.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (line.search(/[^ ]/) >= 4) {
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src2 = src2.substring(rawLine.length + 1);
              line = nextLine.slice(indent);
            }
          }
          if (!list.loose) {
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
            }
          }
          list.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
        }
        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        const l = list.items.length;
        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
          if (!list.loose) {
            const spacers = list.items[i].tokens.filter((t2) => t2.type === "space");
            const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t2) => /\n.*\n/.test(t2.raw));
            list.loose = hasMultipleLineBreaks;
          }
        }
        if (list.loose) {
          for (i = 0; i < l; i++) {
            list.items[i].loose = true;
          }
        }
        return list;
      }
    }
    html(src2) {
      const cap = this.rules.block.html.exec(src2);
      if (cap) {
        const token = {
          type: "html",
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
          text: cap[0]
        };
        if (this.options.sanitize) {
          const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]);
          token.type = "paragraph";
          token.text = text;
          token.tokens = this.lexer.inline(text);
        }
        return token;
      }
    }
    def(src2) {
      const cap = this.rules.block.def.exec(src2);
      if (cap) {
        const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
        const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
        const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
        return {
          type: "def",
          tag,
          raw: cap[0],
          href,
          title
        };
      }
    }
    table(src2) {
      const cap = this.rules.block.table.exec(src2);
      if (cap) {
        const item = {
          type: "table",
          header: splitCells(cap[1]).map((c) => {
            return { text: c };
          }),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
        };
        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          let l = item.align.length;
          let i, j, k, row;
          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = "right";
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = "center";
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = "left";
            } else {
              item.align[i] = null;
            }
          }
          l = item.rows.length;
          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
              return { text: c };
            });
          }
          l = item.header.length;
          for (j = 0; j < l; j++) {
            item.header[j].tokens = this.lexer.inline(item.header[j].text);
          }
          l = item.rows.length;
          for (j = 0; j < l; j++) {
            row = item.rows[j];
            for (k = 0; k < row.length; k++) {
              row[k].tokens = this.lexer.inline(row[k].text);
            }
          }
          return item;
        }
      }
    }
    lheading(src2) {
      const cap = this.rules.block.lheading.exec(src2);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
    paragraph(src2) {
      const cap = this.rules.block.paragraph.exec(src2);
      if (cap) {
        const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    text(src2) {
      const cap = this.rules.block.text.exec(src2);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
    escape(src2) {
      const cap = this.rules.inline.escape.exec(src2);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: escape$1(cap[1])
        };
      }
    }
    tag(src2) {
      const cap = this.rules.inline.tag.exec(src2);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: this.options.sanitize ? "text" : "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0]
        };
      }
    }
    link(src2) {
      const cap = this.rules.inline.link.exec(src2);
      if (cap) {
        const trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          const lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex > -1) {
            const start2 = cap[0].indexOf("!") === 0 ? 5 : 4;
            const linkLen = start2 + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        let href = cap[2];
        let title = "";
        if (this.options.pedantic) {
          const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
          title: title ? title.replace(this.rules.inline._escapes, "$1") : title
        }, cap[0], this.lexer);
      }
    }
    reflink(src2, links) {
      let cap;
      if ((cap = this.rules.inline.reflink.exec(src2)) || (cap = this.rules.inline.nolink.exec(src2))) {
        let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
        link = links[link.toLowerCase()];
        if (!link) {
          const text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return outputLink(cap, link, cap[0], this.lexer);
      }
    }
    emStrong(src2, maskedSrc, prevChar = "") {
      let match = this.rules.inline.emStrong.lDelim.exec(src2);
      if (!match)
        return;
      if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
        return;
      const nextChar = match[1] || match[2] || "";
      if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
        const lLength = match[0].length - 1;
        let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
        const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src2.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim)
            continue;
          rLength = rDelim.length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0)
            continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          const raw = src2.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
          if (Math.min(lLength, rLength) % 2) {
            const text2 = raw.slice(1, -1);
            return {
              type: "em",
              raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          const text = raw.slice(2, -2);
          return {
            type: "strong",
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
    codespan(src2) {
      const cap = this.rules.inline.code.exec(src2);
      if (cap) {
        let text = cap[2].replace(/\n/g, " ");
        const hasNonSpaceChars = /[^ ]/.test(text);
        const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$1(text, true);
        return {
          type: "codespan",
          raw: cap[0],
          text
        };
      }
    }
    br(src2) {
      const cap = this.rules.inline.br.exec(src2);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
    del(src2) {
      const cap = this.rules.inline.del.exec(src2);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
    autolink(src2, mangle2) {
      const cap = this.rules.inline.autolink.exec(src2);
      if (cap) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(this.options.mangle ? mangle2(cap[1]) : cap[1]);
          href = "mailto:" + text;
        } else {
          text = escape$1(cap[1]);
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    url(src2, mangle2) {
      let cap;
      if (cap = this.rules.inline.url.exec(src2)) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(this.options.mangle ? mangle2(cap[0]) : cap[0]);
          href = "mailto:" + text;
        } else {
          let prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape$1(cap[0]);
          if (cap[1] === "www.") {
            href = "http://" + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    inlineText(src2, smartypants2) {
      const cap = this.rules.inline.text.exec(src2);
      if (cap) {
        let text;
        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0];
        } else {
          text = escape$1(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
        }
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  }
  const block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
  block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
  block.normal = { ...block };
  block.gfm = {
    ...block.normal,
    table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  };
  block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.pedantic = {
    ...block.normal,
    html: edit(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
  };
  const inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  };
  inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
  inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
  inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
  inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
  inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
  inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
  inline.normal = { ...inline };
  inline.pedantic = {
    ...inline.normal,
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
  };
  inline.gfm = {
    ...inline.normal,
    escape: edit(inline.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  };
  inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
  inline.breaks = {
    ...inline.gfm,
    br: edit(inline.br).replace("{2,}", "*").getRegex(),
    text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  };
  function smartypants(text) {
    return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
  }
  function mangle(text) {
    let out = "", i, ch;
    const l = text.length;
    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = "x" + ch.toString(16);
      }
      out += "&#" + ch + ";";
    }
    return out;
  }
  class Lexer {
    constructor(options) {
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options || defaults;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const rules = {
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    static get rules() {
      return {
        block,
        inline
      };
    }
    static lex(src2, options) {
      const lexer = new Lexer(options);
      return lexer.lex(src2);
    }
    static lexInline(src2, options) {
      const lexer = new Lexer(options);
      return lexer.inlineTokens(src2);
    }
    lex(src2) {
      src2 = src2.replace(/\r\n|\r/g, "\n");
      this.blockTokens(src2, this.tokens);
      let next2;
      while (next2 = this.inlineQueue.shift()) {
        this.inlineTokens(next2.src, next2.tokens);
      }
      return this.tokens;
    }
    blockTokens(src2, tokens = []) {
      if (this.options.pedantic) {
        src2 = src2.replace(/\t/g, "    ").replace(/^ +$/gm, "");
      } else {
        src2 = src2.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
          return leading + "    ".repeat(tabs.length);
        });
      }
      let token, lastToken, cutSrc, lastParagraphClipped;
      while (src2) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
            src2 = src2.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.space(src2)) {
          src2 = src2.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            tokens[tokens.length - 1].raw += "\n";
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.code(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.fences(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        }
        if (token = this.tokenizer.table(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src2;
        if (this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = Infinity;
          const tempSrc = src2.slice(1);
          let tempStart;
          this.options.extensions.startBlock.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src2.substring(0, startIndex + 1);
          }
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken.type === "paragraph") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src2.length;
          src2 = src2.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src2) {
          const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    }
    inline(src2, tokens = []) {
      this.inlineQueue.push({ src: src2, tokens });
      return tokens;
    }
    inlineTokens(src2, tokens = []) {
      let token, lastToken, cutSrc;
      let maskedSrc = src2;
      let match;
      let keepPrevChar, prevChar;
      if (this.tokens.links) {
        const links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
      }
      while (src2) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
            src2 = src2.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.escape(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.link(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src2, this.tokens.links)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.emStrong(src2, maskedSrc, prevChar)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src2, mangle)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src2, mangle))) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src2;
        if (this.options.extensions && this.options.extensions.startInline) {
          let startIndex = Infinity;
          const tempSrc = src2.slice(1);
          let tempStart;
          this.options.extensions.startInline.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src2.substring(0, startIndex + 1);
          }
        }
        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src2 = src2.substring(token.raw.length);
          if (token.raw.slice(-1) !== "_") {
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src2) {
          const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    }
  }
  class Renderer {
    constructor(options) {
      this.options = options || defaults;
    }
    code(code, infostring, escaped) {
      const lang = (infostring || "").match(/\S*/)[0];
      if (this.options.highlight) {
        const out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }
      code = code.replace(/\n$/, "") + "\n";
      if (!lang) {
        return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="' + this.options.langPrefix + escape$1(lang) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    blockquote(quote) {
      return `<blockquote>
${quote}</blockquote>
`;
    }
    html(html) {
      return html;
    }
    heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        const id = this.options.headerPrefix + slugger.slug(raw);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
      return `<h${level}>${text}</h${level}>
`;
    }
    hr() {
      return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
    }
    list(body, ordered, start2) {
      const type = ordered ? "ol" : "ul", startatt = ordered && start2 !== 1 ? ' start="' + start2 + '"' : "";
      return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
    }
    listitem(text) {
      return `<li>${text}</li>
`;
    }
    checkbox(checked) {
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
    }
    paragraph(text) {
      return `<p>${text}</p>
`;
    }
    table(header2, body) {
      if (body)
        body = `<tbody>${body}</tbody>`;
      return "<table>\n<thead>\n" + header2 + "</thead>\n" + body + "</table>\n";
    }
    tablerow(content) {
      return `<tr>
${content}</tr>
`;
    }
    tablecell(content, flags) {
      const type = flags.header ? "th" : "td";
      const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
      return tag + content + `</${type}>
`;
    }
    strong(text) {
      return `<strong>${text}</strong>`;
    }
    em(text) {
      return `<em>${text}</em>`;
    }
    codespan(text) {
      return `<code>${text}</code>`;
    }
    br() {
      return this.options.xhtml ? "<br/>" : "<br>";
    }
    del(text) {
      return `<del>${text}</del>`;
    }
    link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      let out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
    image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      let out = `<img src="${href}" alt="${text}"`;
      if (title) {
        out += ` title="${title}"`;
      }
      out += this.options.xhtml ? "/>" : ">";
      return out;
    }
    text(text) {
      return text;
    }
  }
  class TextRenderer {
    strong(text) {
      return text;
    }
    em(text) {
      return text;
    }
    codespan(text) {
      return text;
    }
    del(text) {
      return text;
    }
    html(text) {
      return text;
    }
    text(text) {
      return text;
    }
    link(href, title, text) {
      return "" + text;
    }
    image(href, title, text) {
      return "" + text;
    }
    br() {
      return "";
    }
  }
  class Slugger {
    constructor() {
      this.seen = {};
    }
    serialize(value) {
      return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
    }
    getNextSafeSlug(originalSlug, isDryRun) {
      let slug = originalSlug;
      let occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + "-" + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }
    slug(value, options = {}) {
      const slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    }
  }
  class Parser {
    constructor(options) {
      this.options = options || defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer();
      this.slugger = new Slugger();
    }
    static parse(tokens, options) {
      const parser = new Parser(options);
      return parser.parse(tokens);
    }
    static parseInline(tokens, options) {
      const parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    parse(tokens, top2 = true) {
      let out = "", i, j, k, l2, l3, row, cell, header2, body, token, ordered, start2, loose, itemBody, item, checked, task, checkbox, ret;
      const l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "space": {
            continue;
          }
          case "hr": {
            out += this.renderer.hr();
            continue;
          }
          case "heading": {
            out += this.renderer.heading(
              this.parseInline(token.tokens),
              token.depth,
              unescape$1(this.parseInline(token.tokens, this.textRenderer)),
              this.slugger
            );
            continue;
          }
          case "code": {
            out += this.renderer.code(
              token.text,
              token.lang,
              token.escaped
            );
            continue;
          }
          case "table": {
            header2 = "";
            cell = "";
            l2 = token.header.length;
            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(
                this.parseInline(token.header[j].tokens),
                { header: true, align: token.align[j] }
              );
            }
            header2 += this.renderer.tablerow(cell);
            body = "";
            l2 = token.rows.length;
            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = "";
              l3 = row.length;
              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(
                  this.parseInline(row[k].tokens),
                  { header: false, align: token.align[k] }
                );
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header2, body);
            continue;
          }
          case "blockquote": {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
          case "list": {
            ordered = token.ordered;
            start2 = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = "";
            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = "";
              if (item.task) {
                checkbox = this.renderer.checkbox(checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }
            out += this.renderer.list(body, ordered, start2);
            continue;
          }
          case "html": {
            out += this.renderer.html(token.text);
            continue;
          }
          case "paragraph": {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }
          case "text": {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;
            while (i + 1 < l && tokens[i + 1].type === "text") {
              token = tokens[++i];
              body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }
            out += top2 ? this.renderer.paragraph(body) : body;
            continue;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
    parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      let out = "", i, token, ret;
      const l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "escape": {
            out += renderer.text(token.text);
            break;
          }
          case "html": {
            out += renderer.html(token.text);
            break;
          }
          case "link": {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }
          case "image": {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }
          case "strong": {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }
          case "em": {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }
          case "codespan": {
            out += renderer.codespan(token.text);
            break;
          }
          case "br": {
            out += renderer.br();
            break;
          }
          case "del": {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }
          case "text": {
            out += renderer.text(token.text);
            break;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
  }
  class Hooks {
    constructor(options) {
      this.options = options || defaults;
    }
    preprocess(markdown2) {
      return markdown2;
    }
    postprocess(html) {
      return html;
    }
  }
  __publicField(Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess"
  ]));
  function onError(silent, async, callback) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        if (callback) {
          callback(null, msg);
          return;
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      if (callback) {
        callback(e);
        return;
      }
      throw e;
    };
  }
  function parseMarkdown(lexer, parser) {
    return (src2, opt, callback) => {
      if (typeof opt === "function") {
        callback = opt;
        opt = null;
      }
      const origOpt = { ...opt };
      opt = { ...marked.defaults, ...origOpt };
      const throwError = onError(opt.silent, opt.async, callback);
      if (typeof src2 === "undefined" || src2 === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src2 !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected"));
      }
      checkSanitizeDeprecation(opt);
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (callback) {
        const highlight = opt.highlight;
        let tokens;
        try {
          if (opt.hooks) {
            src2 = opt.hooks.preprocess(src2);
          }
          tokens = lexer(src2, opt);
        } catch (e) {
          return throwError(e);
        }
        const done = function(err) {
          let out;
          if (!err) {
            try {
              if (opt.walkTokens) {
                marked.walkTokens(tokens, opt.walkTokens);
              }
              out = parser(tokens, opt);
              if (opt.hooks) {
                out = opt.hooks.postprocess(out);
              }
            } catch (e) {
              err = e;
            }
          }
          opt.highlight = highlight;
          return err ? throwError(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3) {
          return done();
        }
        delete opt.highlight;
        if (!tokens.length)
          return done();
        let pending = 0;
        marked.walkTokens(tokens, function(token) {
          if (token.type === "code") {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, function(err, code) {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });
        if (pending === 0) {
          done();
        }
        return;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src2) : src2).then((src3) => lexer(src3, opt)).then((tokens) => opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src2 = opt.hooks.preprocess(src2);
        }
        const tokens = lexer(src2, opt);
        if (opt.walkTokens) {
          marked.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  function marked(src2, opt, callback) {
    return parseMarkdown(Lexer.lex, Parser.parse)(src2, opt, callback);
  }
  marked.options = marked.setOptions = function(opt) {
    marked.defaults = { ...marked.defaults, ...opt };
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = getDefaults;
  marked.defaults = defaults;
  marked.use = function(...args) {
    const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = marked.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if (ext.renderer) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = marked.defaults.renderer || new Renderer();
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = marked.defaults.tokenizer || new Tokenizer();
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = marked.defaults.hooks || new Hooks();
        for (const prop in pack.hooks) {
          const prevHook = hooks[prop];
          if (Hooks.passThroughHooks.has(prop)) {
            hooks[prop] = (arg) => {
              if (marked.defaults.async) {
                return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = pack.hooks[prop].call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[prop] = (...args2) => {
              let ret = pack.hooks[prop].apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens = marked.defaults.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      marked.setOptions(opts);
    });
  };
  marked.walkTokens = function(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(marked, token));
      switch (token.type) {
        case "table": {
          for (const cell of token.header) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }
          for (const row of token.rows) {
            for (const cell of row) {
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          values = values.concat(marked.walkTokens(token.items, callback));
          break;
        }
        default: {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
              values = values.concat(marked.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(marked.walkTokens(token.tokens, callback));
          }
        }
      }
    }
    return values;
  };
  marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);
  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.Hooks = Hooks;
  marked.parse = marked;
  marked.options;
  marked.setOptions;
  marked.use;
  marked.walkTokens;
  marked.parseInline;
  Parser.parse;
  Lexer.lex;
  function markdown(md) {
    return marked.parse(md);
  }
  const debug$1 = typeof process === "object" && process.env && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  var debug_1 = debug$1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH$1 = 256;
  const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  var constants = {
    MAX_LENGTH: MAX_LENGTH$1,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  var re$1 = { exports: {} };
  (function(module2, exports3) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
      MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
      MAX_LENGTH: MAX_LENGTH2
    } = constants;
    const debug2 = debug_1;
    exports3 = module2.exports = {};
    const re2 = exports3.re = [];
    const safeRe = exports3.safeRe = [];
    const src2 = exports3.src = [];
    const safeSrc = exports3.safeSrc = [];
    const t2 = exports3.t = {};
    let R2 = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH2],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R2++;
      debug2(name, index, value);
      t2[name] = index;
      src2[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src2[t2.NUMERICIDENTIFIER]}|${src2[t2.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src2[t2.NUMERICIDENTIFIERLOOSE]}|${src2[t2.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src2[t2.PRERELEASEIDENTIFIER]}(?:\\.${src2[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src2[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src2[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src2[t2.BUILDIDENTIFIER]}(?:\\.${src2[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src2[t2.MAINVERSION]}${src2[t2.PRERELEASE]}?${src2[t2.BUILD]}?`);
    createToken("FULL", `^${src2[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src2[t2.MAINVERSIONLOOSE]}${src2[t2.PRERELEASELOOSE]}?${src2[t2.BUILD]}?`);
    createToken("LOOSE", `^${src2[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src2[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src2[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:${src2[t2.PRERELEASE]})?${src2[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:${src2[t2.PRERELEASELOOSE]})?${src2[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
    createToken("COERCE", `${src2[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src2[t2.COERCEPLAIN] + `(?:${src2[t2.PRERELEASE]})?(?:${src2[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src2[t2.COERCE], true);
    createToken("COERCERTLFULL", src2[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src2[t2.LONETILDE]}\\s+`, true);
    exports3.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src2[t2.LONECARET]}\\s+`, true);
    exports3.caretTrimReplace = "$1^";
    createToken("CARET", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src2[t2.GTLT]}\\s*(${src2[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]}|${src2[t2.XRANGEPLAIN]})`, true);
    exports3.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src2[t2.XRANGEPLAIN]})\\s+-\\s+(${src2[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src2[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src2[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re$1, re$1.exports);
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions$1 = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  var parseOptions_1 = parseOptions$1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers$1 = (a, b) => {
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
  var identifiers = {
    compareIdentifiers: compareIdentifiers$1,
    rcompareIdentifiers
  };
  const debug = debug_1;
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants;
  const { safeRe: re, safeSrc: src, t } = re$1.exports;
  const parseOptions = parseOptions_1;
  const { compareIdentifiers } = identifiers;
  class SemVer$2 {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer$2) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
      if (!m) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer$2)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer$2(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer$2)) {
        other = new SemVer$2(other, this.options);
      }
      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
      if (!(other instanceof SemVer$2)) {
        other = new SemVer$2(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i = 0;
      do {
        const a = this.prerelease[i];
        const b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer$2)) {
        other = new SemVer$2(other, this.options);
      }
      let i = 0;
      do {
        const a = this.build[i];
        const b = other.build[i];
        debug("build compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const r = new RegExp(`^${this.options.loose ? src[t.PRERELEASELOOSE] : src[t.PRERELEASE]}$`);
          const match = `-${identifier}`.match(r);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === "number") {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  var semver = SemVer$2;
  const SemVer$1 = semver;
  const compare$1 = (a, b, loose) => new SemVer$1(a, loose).compare(new SemVer$1(b, loose));
  var compare_1 = compare$1;
  const compare = compare_1;
  const gt = (a, b, loose) => compare(a, b, loose) > 0;
  var gt_1 = gt;
  const SemVer = semver;
  const parse$1 = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  var parse_1 = parse$1;
  const parse = parse_1;
  const valid = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  var valid_1 = valid;
  const RenderScript = lib.createRenderScript({
    name: "\u{1F5BC}\uFE0F \u7A97\u53E3\u8BBE\u7F6E"
  });
  const transformImgLinkOfQuestion = (question) => {
    const dom2 = new DOMParser().parseFromString(question, "text/html");
    for (const img of Array.from(dom2.querySelectorAll("img"))) {
      img.replaceWith(img.src);
    }
    return dom2.documentElement.innerText.replace(/https?:\/\/.+?\.(png|jpg|jpeg|gif)/g, (img) => {
      return `<img src="${img}" />`;
    });
  };
  class SearchInfosElement extends HTMLElement {
    constructor() {
      super(...arguments);
      this.infos = [];
      this.question = "";
    }
    connectedCallback() {
      const question = transformImgLinkOfQuestion(this.question || "\u65E0");
      this.append(
        lib.h("div", [lib.h("span", { innerHTML: question }), createQuestionTitleExtra(this.question)], (div) => {
          div.style.padding = "4px";
        }),
        lib.h("hr")
      );
      this.append(
        ...this.infos.map((info) => {
          return lib.h("details", { open: true }, [
            lib.h("summary", [lib.h("a", { href: info.homepage, innerText: info.name, target: "_blank" })]),
            ...(info.error ? [lib.h("span", { className: "error" }, [info.error || "\u7F51\u7EDC\u9519\u8BEF\u6216\u8005\u672A\u77E5\u9519\u8BEF"])] : []).concat([
              ...info.results.map((ans) => {
                const title = transformImgLinkOfQuestion(ans[0] || this.question || "\u65E0");
                const answer = transformImgLinkOfQuestion(ans[1] || "\u65E0");
                return lib.h("div", { className: "search-result" }, [
                  lib.h("div", { className: "question" }, [lib.h("span", { innerHTML: title })]),
                  lib.h("div", { className: "answer" }, [
                    lib.h("span", "\u7B54\u6848\uFF1A"),
                    ...splitAnswer(answer).map((a) => lib.h("code", { innerHTML: a }))
                  ])
                ]);
              })
            ])
          ]);
        })
      );
      $.onresize(this, (sr) => {
        sr.style.maxHeight = window.innerHeight / 2 + "px";
      });
    }
  }
  const $render = {
    moveToEdge() {
      CommonProject.scripts.render.methods.minimize();
      CommonProject.scripts.render.methods.setPosition(80, 100);
    }
  };
  const state$6 = {
    console: {
      listenerIds: {
        logs: 0
      }
    },
    app: {
      listenerIds: {
        sync: 0,
        connected: 0,
        closeSync: 0
      }
    }
  };
  const BackgroundProject = lib.Project.create({
    name: "\u540E\u53F0",
    domains: [],
    scripts: {
      elementRegister: new lib.Script({
        name: "\u{1F517} \u5143\u7D20\u6CE8\u518C",
        hideInPanel: true,
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        onstart() {
          lib.$.loadCustomElements([SearchInfosElement]);
        }
      }),
      console: new lib.Script({
        name: "\u{1F4C4} \u65E5\u5FD7\u8F93\u51FA",
        matches: [["\u6240\u6709", /.*/]],
        namespace: "render.console",
        configs: {
          logs: {
            defaultValue: []
          }
        },
        onrender({ panel }) {
          const getTypeDesc = (type) => type === "info" ? "\u4FE1\u606F" : type === "error" ? "\u9519\u8BEF" : type === "warn" ? "\u8B66\u544A" : type === "debug" ? "\u8C03\u8BD5" : "\u65E5\u5FD7";
          const createLog = (log) => {
            const date = new Date(log.time);
            const item = lib.h(
              "div",
              {
                title: "\u53CC\u51FB\u590D\u5236\u65E5\u5FD7\u4FE1\u606F",
                className: "item"
              },
              [
                lib.h(
                  "span",
                  { className: "time" },
                  `${date.getHours().toFixed(0).padStart(2, "0")}:${date.getMinutes().toFixed(0).padStart(2, "0")} `
                ),
                lib.h("span", { className: log.type }, `[${getTypeDesc(log.type)}]`),
                lib.h("span", ":" + log.content)
              ]
            );
            item.addEventListener("dblclick", () => {
              navigator.clipboard.writeText(
                Object.keys(log).map((k) => `${k}: ${log[k]}`).join("\n")
              );
            });
            return item;
          };
          const showLogs = () => {
            const div2 = lib.h("div", { className: "card console" });
            const logs2 = this.cfg.logs.map((log) => createLog(log));
            if (logs2.length) {
              div2.replaceChildren(...logs2);
            } else {
              div2.replaceChildren(
                lib.h("div", "\u6682\u65E0\u4EFB\u4F55\u65E5\u5FD7", (div3) => {
                  div3.style.textAlign = "center";
                })
              );
            }
            return { div: div2, logs: logs2 };
          };
          const isScrollBottom = (div2) => {
            const { scrollHeight, scrollTop, clientHeight } = div2;
            return scrollTop + clientHeight + 50 > scrollHeight;
          };
          const { div, logs } = showLogs();
          this.offConfigChange(state$6.console.listenerIds.logs);
          state$6.console.listenerIds.logs = this.onConfigChange("logs", (logs2) => {
            const log = createLog(logs2[logs2.length - 1]);
            div.append(log);
            setTimeout(() => {
              if (isScrollBottom(div)) {
                log.scrollIntoView();
              }
            }, 10);
          });
          const show = () => {
            panel.body.replaceChildren(div);
            setTimeout(() => {
              var _a;
              (_a = logs[logs.length - 1]) == null ? void 0 : _a.scrollIntoView();
            }, 10);
          };
          show();
        }
      }),
      appConfigSync: new lib.Script({
        name: "\u{1F504}\uFE0F \u8F6F\u4EF6\u914D\u7F6E\u540C\u6B65",
        namespace: "background.app",
        matches: [["\u6240\u6709\u9875\u9762", /./]],
        hideInPanel: lib.$gm.getInfos() === void 0,
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              [
                lib.h("span", [
                  "\u5982\u679C\u60A8\u4F7F\u7528",
                  lib.h("a", { href: "https://docs.ocsjs.com/docs/app", target: "_blank" }, "OCS\u684C\u9762\u8F6F\u4EF6"),
                  "\u542F\u52A8\u6D4F\u89C8\u5668\uFF0C\u5E76\u4F7F\u7528\u6B64\u811A\u672C\uFF0C"
                ]),
                "\u6211\u4EEC\u4F1A\u540C\u6B65\u8F6F\u4EF6\u4E2D\u7684\u914D\u7F6E\u5230\u6B64\u811A\u672C\u4E0A\uFF0C\u65B9\u4FBF\u591A\u4E2A\u6D4F\u89C8\u5668\u7684\u7BA1\u7406\u3002",
                "\u7A97\u53E3\u8BBE\u7F6E\u4EE5\u53CA\u540E\u53F0\u9762\u677F\u6240\u6709\u8BBE\u7F6E\u4E0D\u4F1A\u8FDB\u884C\u540C\u6B65\u3002"
              ],
              "\u5982\u679C\u4E0D\u662F\uFF0C\u60A8\u53EF\u4EE5\u5FFD\u7565\u6B64\u811A\u672C\u3002"
            ]).outerHTML
          },
          sync: {
            defaultValue: false
          },
          connected: {
            defaultValue: false
          },
          closeSync: {
            defaultValue: false,
            label: "\u5173\u95ED\u540C\u6B65",
            attrs: {
              type: "checkbox"
            }
          }
        },
        onrender({ panel }) {
          panel.lockWrapper.remove();
          panel.configsContainer.classList.remove("lock");
          const update = () => {
            if (this.cfg.sync) {
              const tip = lib.h("div", { className: "notes card" }, [`\u5DF2\u6210\u529F\u540C\u6B65\u8F6F\u4EF6\u4E2D\u7684\u914D\u7F6E.`]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else if (this.cfg.connected) {
              const tip = lib.h("div", { className: "notes card" }, [`\u5DF2\u6210\u529F\u8FDE\u63A5\u5230\u8F6F\u4EF6\uFF0C\u4F46\u914D\u7F6E\u4E3A\u7A7A\u3002`]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            }
          };
          update();
          this.offConfigChange(state$6.app.listenerIds.sync);
          this.offConfigChange(state$6.app.listenerIds.connected);
          this.offConfigChange(state$6.app.listenerIds.closeSync);
          state$6.app.listenerIds.sync = this.onConfigChange("sync", update);
          state$6.app.listenerIds.connected = this.onConfigChange("connected", update);
          state$6.app.listenerIds.closeSync = this.onConfigChange("closeSync", (closeSync) => {
            if (closeSync) {
              this.cfg.sync = false;
              this.cfg.connected = false;
              lib.$message.success({ content: "\u5DF2\u5173\u95ED\u540C\u6B65\uFF0C\u5237\u65B0\u9875\u9762\u540E\u751F\u6548" });
            }
          });
        },
        async onactive() {
          var _a;
          if (lib.$.isInTopWindow() && this.cfg.closeSync === false) {
            this.cfg.sync = false;
            try {
              const res = await request("http://localhost:15319/browser", {
                type: "GM_xmlhttpRequest",
                method: "get",
                responseType: "json"
              });
              this.cfg.connected = true;
              if (res && Object.keys(res).length) {
                for (const key in res) {
                  if (Object.prototype.hasOwnProperty.call(res, key)) {
                    if (RenderScript.namespace && key.startsWith(RenderScript.namespace)) {
                      Reflect.deleteProperty(res, key);
                    }
                    for (const scriptKey in BackgroundProject.scripts) {
                      if (Object.prototype.hasOwnProperty.call(BackgroundProject.scripts, scriptKey)) {
                        const script2 = Reflect.get(BackgroundProject.scripts, scriptKey);
                        if (script2.namespace && key.startsWith(script2.namespace)) {
                          Reflect.deleteProperty(res, key);
                        }
                      }
                    }
                  }
                }
                for (const project2 of definedProjects()) {
                  for (const key in project2.scripts) {
                    if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
                      const script2 = project2.scripts[key];
                      for (const ck in script2.configs) {
                        if (Object.prototype.hasOwnProperty.call(script2.configs, ck)) {
                          if (((_a = script2.configs[ck].extra) == null ? void 0 : _a.appConfigSync) === false) {
                            Reflect.deleteProperty(res, lib.$.namespaceKey(script2.namespace, ck));
                          }
                        }
                      }
                    }
                  }
                }
                for (const key in res) {
                  if (Object.prototype.hasOwnProperty.call(res, key)) {
                    lib.$store.set(key, res[key]);
                  }
                }
                for (const project2 of definedProjects()) {
                  if (project2.name === BackgroundProject.name) {
                    continue;
                  }
                  for (const key in project2.scripts) {
                    if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
                      const script2 = project2.scripts[key];
                      const originalRender = script2.onrender;
                      script2.onrender = ({ panel, header: header2 }) => {
                        var _a2, _b;
                        originalRender == null ? void 0 : originalRender({ panel, header: header2 });
                        if (panel.configsContainer.children.length) {
                          panel.configsContainer.classList.add("lock");
                          panel.lockWrapper.style.width = ((_a2 = panel.configsContainer.clientWidth) != null ? _a2 : panel.clientWidth) + "px";
                          panel.lockWrapper.style.height = ((_b = panel.configsContainer.clientHeight) != null ? _b : panel.clientHeight) + "px";
                          panel.configsContainer.prepend(panel.lockWrapper);
                          panel.lockWrapper.title = "\u{1F6AB}\u5DF2\u540C\u6B65OCS\u684C\u9762\u7248\u8F6F\u4EF6\u914D\u7F6E\uFF0C\u5982\u9700\u4FEE\u6539\u8BF7\u5728\u684C\u9762\u7248\u8F6F\u4EF6\u7684\u5DE6\u4FA7\u680F\u8BBE\u7F6E-\u901A\u7528\u8BBE\u7F6E-OCS\u914D\u7F6E\uFF0C\u4E2D\u8FDB\u884C\u4FEE\u6539\u3002\u6216\u8005\u524D\u5F80\u811A\u672C\u60AC\u6D6E\u7A97:\u540E\u53F0-\u8F6F\u4EF6\u914D\u7F6E\u540C\u6B65 \u5173\u95ED\u914D\u7F6E\u540C\u6B65\u529F\u80FD\u3002";
                          panel.lockWrapper = lib.$ui.tooltip(panel.lockWrapper);
                        }
                      };
                      if (script2.panel && script2.header) {
                        script2.onrender({ panel: script2.panel, header: script2.header });
                      }
                    }
                  }
                }
                this.cfg.sync = true;
              }
            } catch (e) {
              console.error(e);
              this.cfg.sync = false;
              this.cfg.connected = false;
            }
          }
        }
      }),
      update: new lib.Script({
        name: "\u{1F4E5} \u66F4\u65B0\u6A21\u5757",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        namespace: "background.update",
        configs: {
          notes: {
            defaultValue: "\u811A\u672C\u81EA\u52A8\u66F4\u65B0\u6A21\u5757\uFF0C\u5982\u679C\u6709\u65B0\u7684\u7248\u672C\u4F1A\u81EA\u52A8\u901A\u77E5\u3002"
          },
          autoNotify: {
            defaultValue: true,
            label: "\u5F00\u542F\u66F4\u65B0\u901A\u77E5",
            attrs: { type: "checkbox", title: "\u5F53\u6709\u6700\u65B0\u7684\u7248\u672C\u65F6\u81EA\u52A8\u5F39\u7A97\u901A\u77E5\uFF0C\u9ED8\u8BA4\u5F00\u542F" }
          },
          notToday: {
            defaultValue: -1
          },
          ignoreVersions: {
            defaultValue: []
          }
        },
        methods() {
          return {
            getLastVersion: async () => {
              return await request("https://cdn.ocsjs.com/ocs-version.json?t=" + Date.now(), {
                method: "get",
                type: "GM_xmlhttpRequest"
              });
            }
          };
        },
        async onrender({ panel }) {
          var _a;
          const version = await this.methods.getLastVersion();
          const infos = lib.$gm.getInfos();
          if (!infos) {
            return;
          }
          const changeLog = lib.h("button", { className: "base-style-button-secondary" }, "\u{1F4C4}\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7");
          changeLog.onclick = () => CommonProject.scripts.apps.methods.showChangelog();
          const updatePage = ((_a = this.startConfig) == null ? void 0 : _a.updatePage) || "";
          panel.body.replaceChildren(
            lib.h("div", { className: "card" }, [
              lib.h("hr"),
              lib.h("div", ["\u6700\u65B0\u7248\u672C\uFF1A" + version["last-version"] + " - ", changeLog]),
              lib.h("hr"),
              lib.h("div", "\u5F53\u524D\u7248\u672C\uFF1A" + infos.script.version),
              lib.h("div", "\u811A\u672C\u7BA1\u7406\u5668\uFF1A" + infos.scriptHandler),
              lib.h("div", ["\u811A\u672C\u66F4\u65B0\u94FE\u63A5\uFF1A", lib.h("a", { target: "_blank", href: updatePage }, [updatePage || "\u65E0"])])
            ])
          );
          console.log("versions", {
            notToday: this.cfg.notToday,
            ignoreVersions: this.cfg.ignoreVersions,
            version
          });
        },
        oncomplete() {
          if (this.cfg.autoNotify && lib.$.isInTopWindow()) {
            if (this.cfg.notToday === -1 || this.cfg.notToday !== new Date().getDate()) {
              const infos = lib.$gm.getInfos();
              if (infos) {
                if (!!valid_1(infos.script.version) === false) {
                  lib.$message.error(`\u5F53\u524D\u7248\u672C\u53F7 (${infos.script.version}) \u4E0D\u7B26\u5408semver\u7248\u672C\u4E66\u5199\u89C4\u8303\uFF0C\u8BF7\u91CD\u65B0\u4FEE\u6539\u7248\u672C\u3002`);
                  return;
                }
                setTimeout(async () => {
                  var _a;
                  const version = await this.methods.getLastVersion();
                  const last = version["last-version"];
                  if (this.cfg.ignoreVersions.includes(last) === false && gt_1(last, infos.script.version)) {
                    const updatePage = ((_a = this.startConfig) == null ? void 0 : _a.updatePage) || "";
                    const modal2 = lib.$modal.confirm({
                      maskCloseable: false,
                      width: 600,
                      content: lib.$ui.notes([`\u68C0\u6D4B\u5230\u65B0\u7248\u672C\u53D1\u5E03 ${last} \uFF1A`, [...version.notes || []]]),
                      footer: lib.h("div", [
                        lib.h("button", { className: "base-style-button-secondary", innerText: "\u8DF3\u8FC7\u6B64\u7248\u672C" }, (btn) => {
                          btn.onclick = () => {
                            this.cfg.ignoreVersions = [...this.cfg.ignoreVersions, last];
                            modal2 == null ? void 0 : modal2.remove();
                          };
                        }),
                        lib.h("button", { className: "base-style-button-secondary", innerText: "\u4ECA\u65E5\u4E0D\u518D\u63D0\u793A" }, (btn) => {
                          btn.onclick = () => {
                            this.cfg.notToday = new Date().getDate();
                            modal2 == null ? void 0 : modal2.remove();
                          };
                        }),
                        lib.h("button", { className: "base-style-button", innerText: "\u524D\u5F80\u66F4\u65B0" }, (btn) => {
                          btn.onclick = () => {
                            if (updatePage) {
                              window.open(updatePage, "_blank");
                              modal2 == null ? void 0 : modal2.remove();
                            } else {
                              lib.$message.error({ content: "\u65E0\u6CD5\u524D\u5F80\u66F4\u65B0\u9875\u9762\uFF0C\u66F4\u65B0\u94FE\u63A5\u4E3A\u7A7A" });
                            }
                          };
                        })
                      ])
                    });
                  }
                }, 5 * 1e3);
              }
            }
          }
        }
      }),
      dev: new lib.Script({
        name: "\u{1F6E0}\uFE0F \u5F00\u53D1\u8005\u8C03\u8BD5",
        namespace: "background.dev",
        matches: [["\u6240\u6709\u9875\u9762", /./]],
        configs: {
          notes: {
            defaultValue: "\u5F00\u53D1\u4EBA\u5458\u8C03\u8BD5\u7528\u3002<br>\u6CE8\u5165OCS_CONTEXT\u5168\u5C40\u53D8\u91CF\u3002\u7528\u6237\u53EF\u5FFD\u7565\u6B64\u9875\u9762\u3002"
          }
        },
        onrender({ panel }) {
          const injectBtn = lib.h("button", { className: "base-style-button" }, "\u70B9\u51FB\u6CE8\u5165\u5168\u5C40\u53D8\u91CF");
          injectBtn.addEventListener("click", () => {
            lib.$gm.unsafeWindow.OCS_CONTEXT = self;
          });
          const showTabDataBtn = lib.h("button", { className: "base-style-button" }, "\u663E\u793ATab\u5B58\u50A8");
          lib.$gm.getTab((tab) => {
            const els = [];
            for (const key in tab) {
              if (Object.prototype.hasOwnProperty.call(tab, key)) {
                els.push(lib.h("div", [lib.h("b", key + " : "), lib.h("code", JSON.stringify(tab[key]))]));
              }
            }
            showTabDataBtn.addEventListener("click", () => {
              lib.$modal.simple({
                content: lib.h("div", els),
                width: window.document.documentElement.clientWidth / 2
              });
            });
          });
          panel.body.replaceChildren(lib.h("div", { className: "card" }, [injectBtn, showTabDataBtn]));
        }
      }),
      appLoginHelper: new lib.Script({
        name: "\u8F6F\u4EF6\u767B\u5F55\u8F85\u52A9",
        matches: [
          ["\u8D85\u661F\u767B\u5F55", "passport2.chaoxing.com/login"],
          ["\u667A\u6167\u6811\u767B\u5F55", "passport.zhihuishu.com/login"],
          ["\u804C\u6559\u4E91\u767B\u5F55", "zjy2.icve.com.cn/portal/login.html"],
          ["\u667A\u6167\u804C\u6559\u767B\u5F55", "sso.icve.com.cn/sso/auth"]
        ],
        hideInPanel: true,
        oncomplete() {
          if (lib.$.isInTopWindow()) {
            $render.moveToEdge();
          }
        }
      }),
      errorHandle: new lib.Script({
        name: "\u5168\u5C40\u9519\u8BEF\u6355\u83B7",
        matches: [["", /.*/]],
        hideInPanel: true,
        onstart() {
          const projects = definedProjects();
          for (const project2 of projects) {
            for (const key in project2.scripts) {
              if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
                const script2 = project2.scripts[key];
                script2.on("scripterror", (err) => {
                  const msg = `[${project2.name} - ${script2.name}] : ${err}`;
                  console.error(msg);
                  $console.error(msg);
                });
              }
            }
          }
        }
      }),
      requestList: new lib.Script({
        name: "\u{1F4C4} \u8BF7\u6C42\u8BB0\u5F55",
        matches: [["", /.*/]],
        priority: 99,
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u5F00\u53D1\u4EBA\u5458\u8BF7\u6C42\u8C03\u8BD5\u8BB0\u5F55\u9875\u9762\uFF0C\u5C0F\u767D\u52FF\u5165\uFF0C\u6700\u591A\u53EA\u8BB0\u5F55\u6700\u8FD1\u7684100\u4E2A\u8BF7\u6C42\u6570\u636E",
              "\u53EF\u6253\u5F00F12\u63A7\u5236\u53F0\u67E5\u770B\u8BF7\u6C42\u65E5\u5FD7\uFF0C\u6216\u8005\u4E0B\u65B9\u7684\u8BF7\u6C42\u5217\u8868"
            ]).outerHTML
          },
          enable: {
            label: "\u5F00\u542F\u8BF7\u6C42\u8BB0\u5F55",
            attrs: { type: "checkbox" },
            defaultValue: false
          },
          methodFilter: {
            label: "\u65B9\u6CD5\u8FC7\u6EE4",
            tag: "select",
            attrs: { placeholder: "\u9009\u62E9\u9009\u9879" },
            options: [["none", "\u65E0"], ["GET"], ["POST"], ["OPTIONS"], ["HEAD"]],
            defaultValue: "none"
          },
          typeFilter: {
            label: "\u7C7B\u578B\u8FC7\u6EE4",
            tag: "select",
            attrs: { placeholder: "\u9009\u62E9\u9009\u9879" },
            options: [
              ["none", "\u65E0"],
              ["gmxhr", "\u6CB9\u7334API\u8BF7\u6C42\uFF08gmxhr\uFF09"],
              ["fetch", "\u666E\u901A\u8BF7\u6C42\uFF08fetch\uFF09"]
            ],
            defaultValue: "none"
          },
          searchValue: {
            label: "\u5185\u5BB9\u641C\u7D22",
            attrs: { placeholder: "\u641C\u7D22 URL/\u8BF7\u6C42\u4F53/\u54CD\u5E94" },
            defaultValue: ""
          },
          list: {
            defaultValue: []
          }
        },
        methods() {
          const render2 = (list) => {
            var _a, _b;
            (_a = this.panel) == null ? void 0 : _a.body.replaceChildren();
            (_b = this.panel) == null ? void 0 : _b.body.append(
              lib.h("div", { className: "card" }, [
                lib.h("div", { style: { padding: "8px 0px", textAlign: "end" } }, [
                  lib.h(
                    "button",
                    {
                      className: "base-style-button-secondary",
                      style: { marginRight: "12px" },
                      innerText: "\u{1F5D1}\uFE0F\u6E05\u7A7A\u8BB0\u5F55"
                    },
                    (btn) => {
                      btn.onclick = () => {
                        this.cfg.list = [];
                        render2(this.cfg.list);
                      };
                    }
                  ),
                  lib.h("button", { className: "base-style-button", innerText: "\u{1F50D}\u6267\u884C\u641C\u7D22" }, (btn) => {
                    btn.onclick = () => {
                      if (this.cfg.methodFilter === "none" && this.cfg.typeFilter === "none" && this.cfg.searchValue === "") {
                        render2(this.cfg.list);
                      } else {
                        const list2 = this.cfg.list.filter((item) => {
                          if (this.cfg.methodFilter !== "none" && item.method.toLowerCase() !== this.cfg.methodFilter.toLowerCase()) {
                            return false;
                          }
                          return true;
                        }).filter((item) => {
                          if (this.cfg.typeFilter !== "none" && item.type !== this.cfg.typeFilter) {
                            return false;
                          }
                          return true;
                        }).filter((item) => {
                          var _a2, _b2;
                          if (this.cfg.searchValue && item.url.includes(this.cfg.searchValue) || ((_a2 = item.data) == null ? void 0 : _a2.includes(this.cfg.searchValue)) || ((_b2 = item.response) == null ? void 0 : _b2.includes(this.cfg.searchValue))) {
                            return true;
                          }
                          return false;
                        });
                        render2(list2);
                      }
                    };
                  })
                ]),
                lib.h(
                  "div",
                  { style: { backgroundColor: "#292929", overflow: "auto", maxHeight: window.innerHeight / 2 + "px" } },
                  [
                    ...list.length === 0 ? [lib.h("div", { style: { color: "white", textAlign: "center" } }, "\u6682\u65E0\u6570\u636E")] : [],
                    ...list.map(
                      (item) => lib.h(
                        "div",
                        {
                          title: Object.entries(item).map(
                            ([key, val]) => key === "time" ? `${key} : ${new Date(val).toLocaleString().replace(/\//g, "-")}` : `${key} : ${val}`
                          ).join("\n"),
                          style: {
                            maxWidth: "800px",
                            padding: "4px 0px",
                            margin: "4px 0px",
                            textWrap: "nowrap"
                          }
                        },
                        [
                          lib.h("div", [
                            lib.h("span", { style: { marginRight: "8px" } }, new Date(item.time).toLocaleTimeString()),
                            lib.h(
                              "span",
                              {
                                style: {
                                  backgroundColor: "#2196f3a3",
                                  color: "#ececec",
                                  marginRight: "8px",
                                  padding: "0px 2px"
                                }
                              },
                              item.method
                            ),
                            lib.h(
                              "span",
                              { style: { color: item.response ? "#4eb74e" : "#eb6262", marginRight: "8px" } },
                              "\u25CF"
                            ),
                            lib.h(
                              "div",
                              { style: { display: "inline-block", color: "#ececec" } },
                              item.url ? item.url.length > 100 ? item.url.slice(0, 100) + "..." : item.url : "-"
                            )
                          ]),
                          lib.h(
                            "div",
                            { style: { overflow: "hidden", fontSize: "12px", color: "#8f8f8f" } },
                            item.data ? "data: " + item.data : ""
                          ),
                          lib.h(
                            "div",
                            { style: { overflow: "hidden", fontSize: "12px", color: "#8f8f8f" } },
                            item.response ? "resp: " + item.response : item.error ? "err : " + item.error : ""
                          )
                        ]
                      )
                    )
                  ]
                )
              ])
            );
          };
          return {
            render: render2
          };
        },
        onrender() {
          this.methods.render(this.cfg.list);
        },
        onstart() {
          if (lib.$gm.isInGMContext() === false) {
            return;
          }
          const gmRequest = GM_xmlhttpRequest;
          const originalFetch = fetch;
          const getId = () => Math.random().toString(16).slice(2);
          const addRecord = (item) => {
            this.cfg.list = [item, ...this.cfg.list];
            if (this.cfg.list.length > 100) {
              this.cfg.list = this.cfg.list.slice(0, 100);
            }
          };
          const setItem = (id, response, error) => {
            const list = JSON.parse(JSON.stringify(this.cfg.list));
            const index = list.findIndex((item) => item.id === id);
            if (index !== -1) {
              list[index].response = response;
              list[index].error = error;
            }
            this.cfg.list = list;
          };
          GM_xmlhttpRequest = (details) => {
            if (this.cfg.enable) {
              const id = getId();
              const data = {
                id,
                url: details.url,
                method: details.method || "unknown",
                type: "gmxhr",
                data: details.data,
                headers: details.headers,
                response: "",
                error: "",
                time: Date.now()
              };
              addRecord(data);
              const onload = details.onload;
              const onerror = details.onerror;
              details.onload = function(response) {
                setItem(id, response.responseText, "");
                data.response = details.responseType === "json" ? response.response : response.responseText;
                console.log("%c [\u8BF7\u6C42\u6210\u529F]", "color: green; font-weight: bold", data.url, data);
                onload == null ? void 0 : onload.apply(this, [response]);
              };
              details.onerror = function(response) {
                setItem(id, "", response.error);
                data.error = response.error;
                console.log("%c [\u8BF7\u6C42\u5931\u8D25]", "color: red; font-weight: bold", data.url, data);
                onerror == null ? void 0 : onerror.apply(this, [response]);
              };
            }
            return gmRequest.apply(this, [details]);
          };
          fetch = (input, init) => {
            if (this.cfg.enable) {
              const id = getId();
              const data = {
                id,
                url: typeof input === "string" ? input : input instanceof URL ? input.href : input.url,
                method: (init == null ? void 0 : init.method) || "unknown",
                type: "fetch",
                data: init == null ? void 0 : init.body,
                headers: init == null ? void 0 : init.headers,
                response: "",
                error: "",
                time: Date.now()
              };
              addRecord(data);
              const res = originalFetch.apply(this, [input, init]);
              res.then((result) => {
                return result.clone().text();
              }).then((result) => {
                setItem(id, result, "");
                data.response = result;
                console.log("%c [\u8BF7\u6C42\u6210\u529F]", "color: green; font-weight: bold", data.url, data);
              });
              res.catch((err) => {
                setItem(id, "", String(err));
                data.error = String(err);
                console.log("%c [\u8BF7\u6C42\u5931\u8D25]", "color: red; font-weight: bold", data.url, data);
              });
              return res;
            } else {
              return originalFetch.apply(this, [input, init]);
            }
          };
        }
      })
    }
  });
  const $console = new Proxy({}, {
    get(target, key) {
      return (...msg) => {
        var _a;
        let logs = BackgroundProject.scripts.console.cfg.logs;
        if (logs.length > 50) {
          logs = logs.slice(-50);
        }
        const stack_str = Error().stack || "";
        const stacks = (_a = stack_str.replace("Error", "").match(/at (.*) \(.+:\/\/.+:(.+):(.+)\)/g)) == null ? void 0 : _a.map((s) => {
          const match = s.match(/at (.*) \(.+:\/\/.+:(.+):(.+)\)/) || [];
          return [match[1], match[2], match[3]];
        });
        logs = logs.concat({
          type: key.toString(),
          content: msg.join(" "),
          time: Date.now(),
          stack: JSON.stringify([stack_str.split("\n")[0], ...stacks || []])
        });
        BackgroundProject.scripts.console.cfg.logs = logs;
      };
    }
  });
  function workPreCheckMessage(options) {
    const { onrun, onNoAnswererWrappers, onclose, ...opts } = options;
    if (opts.answererWrappers.length === 0) {
      onNoAnswererWrappers == null ? void 0 : onNoAnswererWrappers(opts);
      return lib.$message.warn({
        content: "\u68C0\u6D4B\u5230\u9898\u5E93\u914D\u7F6E\u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u81EA\u52A8\u7B54\u9898\uFF0C\u8BF7\u524D\u5F80 \u901A\u7528-\u5168\u5C40\u8BBE\u7F6E \u9875\u9762\u8FDB\u884C\u914D\u7F6E\u3002",
        duration: 0
      });
    } else {
      return lib.$message.info({
        duration: 5,
        content: lib.h("span", [
          "5\u79D2\u540E\u81EA\u52A8\u7B54\u9898\uFF0C",
          lib.$ui.preventText({
            name: "\u70B9\u51FB\u53D6\u6D88",
            delay: 5,
            ondefault: (span) => {
              onrun(opts);
            },
            onprevent(span) {
              const closedMessage = lib.$message.warn({
                content: "\u5DF2\u5173\u95ED\u6B64\u6B21\u7684\u81EA\u52A8\u7B54\u9898\uFF0C\u8BF7\u624B\u52A8\u5F00\u542F\u6216\u8005\u5FFD\u7565\u6B64\u8B66\u544A\u3002",
                duration: 0
              });
              if (closedMessage) {
                onclose == null ? void 0 : onclose(opts, closedMessage);
              }
            }
          })
        ])
      });
    }
  }
  function createRangeTooltip(input, defaultValue, transform) {
    input.addEventListener("change", () => {
      input.setAttribute("data-title", transform(input.value || input.getAttribute("value") || defaultValue));
    });
    input.setAttribute("data-title", transform(input.value || input.getAttribute("value") || defaultValue));
  }
  async function playMedia(playFunction) {
    const tryPlayMedia = () => {
      return new Promise((resolve, reject) => {
        try {
          const playRes = playFunction();
          if (playRes) {
            playRes.then(resolve).catch(reject);
          } else {
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      });
    };
    try {
      await tryPlayMedia();
      return true;
    } catch (err) {
      console.error(err);
      if (String(err).includes(`failed because the user didn't interact with the document first`)) {
        lib.$modal.alert({
          content: "\u64AD\u653E\u97F3\u89C6\u9891\u5931\u8D25\uFF0C\u7531\u4E8E\u6D4F\u89C8\u5668\u7684\u7528\u6237\u9690\u79C1\u4FDD\u62A4\u63AA\u65BD\uFF0C\u5982\u679C\u8981\u64AD\u653E\u5E26\u6709\u97F3\u91CF\u7684\u89C6\u9891\uFF0C\u6216\u8005\u67D0\u4E9B\u65E0\u6CD5\u81EA\u52A8\u64AD\u653E\u97F3\u89C6\u9891\u7684\u7F51\u7AD9\uFF0C\u60A8\u5FC5\u987B\u5148\u70B9\u51FB\u4E00\u6B21\u9875\u9762\u4E0A\u7684\u4EFB\u610F\u4F4D\u7F6E\u811A\u672C\u624D\u80FD\u8FDB\u884C\u97F3\u89C6\u9891\u7684\u64AD\u653E\uFF0C\u540E\u7EED\u65E0\u9700\u91CD\u65B0\u70B9\u51FB\u3002",
          onClose: async () => {
            await tryPlayMedia();
          }
        });
        return true;
      } else if (String(err).includes("The element has no supported sources")) {
        $console.error("\u5F53\u524D\u89C6\u9891\u65E0\u6CD5\u64AD\u653E\u3002");
      } else {
        $console.error("\u64AD\u653E\u89C6\u9891\u65F6\u53D1\u751F\u672A\u77E5\u9519\u8BEF\uFF1A" + String(err));
      }
      return false;
    }
  }
  function enableCopy(elements2) {
    function hackSelect(target) {
      if (target) {
        const _original_select = target.onselectstart;
        const _original_oncopy = target.oncopy;
        const _original_onpaste = target.onpaste;
        const _original_onkeydown = target.onkeydown;
        target.onselectstart = (e) => {
          _original_select == null ? void 0 : _original_select.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
        target.oncopy = (e) => {
          _original_oncopy == null ? void 0 : _original_oncopy.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
        target.onpaste = (e) => {
          _original_onpaste == null ? void 0 : _original_onpaste.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
        target.onkeydown = (e) => {
          _original_onkeydown == null ? void 0 : _original_onkeydown.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
      }
    }
    for (const el of elements2) {
      hackSelect(el);
    }
  }
  let popupWin;
  window.addEventListener("beforeunload", () => {
    popupWin == null ? void 0 : popupWin.close();
  });
  function createQuestionTitleExtra(question) {
    const space = lib.$ui.space(
      [
        lib.$ui.copy("\u590D\u5236", question),
        lib.h("span", { className: "question-title-extra-btn", innerText: "\u{1F30F}\u767E\u5EA6\u4E00\u4E0B" }, (btn) => {
          btn.onclick = () => {
            popupWin == null ? void 0 : popupWin.close();
            popupWin = $.createCenteredPopupWindow(`https://www.baidu.com/s?wd=${question}`, "\u767E\u5EA6\u641C\u7D22", {
              width: 1e3,
              height: 800,
              resizable: true,
              scrollbars: true
            });
          };
        })
      ],
      { x: 4 }
    );
    space.style.marginTop = "6px";
    space.style.textAlign = "right";
    return lib.h("div", { style: { textAlign: "right" } }, [space]);
  }
  const TAB_WORK_RESULTS_KEY = "common.work-results.results";
  const gotoHome = () => {
    const btn = lib.h("button", { className: "base-style-button-secondary" }, "\u{1F3E1}\u5B98\u7F51\u6559\u7A0B");
    btn.onclick = () => window.open("https://docs.ocsjs.com", "_blank");
    return btn;
  };
  const state$5 = {
    workResult: {
      questionPositionSyncHandler: {
        cx: (index) => {
          var _a;
          const el = (_a = document.querySelectorAll('[id*="sigleQuestionDiv"], .questionLi')) == null ? void 0 : _a.item(index);
          if (el) {
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.pageYOffset - 50,
              behavior: "smooth"
            });
          }
        },
        "zhs-gxk": (index) => {
          var _a;
          (_a = document.querySelectorAll(".answerCard_list ul li").item(index)) == null ? void 0 : _a.click();
        },
        "zhs-xnk": (index) => {
          var _a;
          (_a = document.querySelectorAll(".jobclassallnumber-div li[questionid]").item(index)) == null ? void 0 : _a.click();
        },
        "zhs-smart": (index) => {
          var _a;
          (_a = document.querySelectorAll('[role="treeitem"] .font-sec-style-node').item(index)) == null ? void 0 : _a.click();
        },
        "zhs-fusion": (index) => {
          var _a;
          (_a = document.querySelectorAll(".right-box .list .item").item(index)) == null ? void 0 : _a.click();
        },
        icve: (index) => {
          var _a;
          (_a = document.querySelectorAll(`.sheet_nums [id*="sheetSeq"]`).item(index)) == null ? void 0 : _a.click();
        },
        zjy: (index) => {
          var _a;
          (_a = document.querySelectorAll(".subjectDet").item(index)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        },
        icourse: (index) => {
          var _a;
          (_a = document.querySelectorAll(".u-questionItem").item(index)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    setting: {
      listenerIds: {
        aw: 0
      }
    }
  };
  const CommonProject = lib.Project.create({
    name: "\u901A\u7528",
    domains: [],
    scripts: {
      guide: new lib.Script({
        name: "\u{1F3E0} \u811A\u672C\u9996\u9875",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        namespace: "common.guide",
        onrender({ panel }) {
          const guide = createGuide();
          const contactUs = lib.h("button", { className: "base-style-button-secondary" }, "\u{1F5E8}\uFE0F\u4EA4\u6D41\u7FA4");
          contactUs.onclick = () => window.open("https://docs.ocsjs.com/docs/about#\u4EA4\u6D41\u65B9\u5F0F", "_blank");
          const changeLog = lib.h("button", { className: "base-style-button-secondary" }, "\u{1F4C4}\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7");
          changeLog.onclick = () => CommonProject.scripts.apps.methods.showChangelog();
          changeLog.style.marginBottom = "12px";
          guide.style.width = "480px";
          panel.body.replaceChildren(lib.h("div", { className: "card" }, [gotoHome(), contactUs, changeLog]), guide);
        }
      }),
      settings: new lib.Script({
        name: "\u2699\uFE0F \u5168\u5C40\u8BBE\u7F6E",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        namespace: "common.settings",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u2728\u9F20\u6807\u79FB\u52A8\u5230\u6309\u94AE\u6216\u8005\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u770B\u5230\u63D0\u793A\uFF01",
              "\u60F3\u8981\u81EA\u52A8\u7B54\u9898\u5FC5\u987B\u8BBE\u7F6E \u201C\u9898\u5E93\u914D\u7F6E\u201D ",
              "\u8BBE\u7F6E\u540E\u8FDB\u5165\u7AE0\u8282\u6D4B\u8BD5\uFF0C\u4F5C\u4E1A\uFF0C\u8003\u8BD5\u9875\u9762\u5373\u53EF\u81EA\u52A8\u7B54\u9898\u3002"
            ]).outerHTML
          },
          notification: {
            label: "\u7CFB\u7EDF\u901A\u77E5",
            attrs: {
              title: "\u5141\u8BB8\u811A\u672C\u53D1\u9001\u7CFB\u7EDF\u901A\u77E5\uFF0C\u53EA\u6709\u91CD\u8981\u4E8B\u60C5\u53D1\u751F\u65F6\u4F1A\u53D1\u9001\u7CFB\u7EDF\u901A\u77E5\uFF0C\u5C3D\u91CF\u907F\u514D\u7528\u6237\u53D7\u5230\u9A9A\u6270\uFF08\u5728\u7535\u8111\u5C4F\u5E55\u53F3\u4FA7\u663E\u793A\u901A\u77E5\u5F39\u7A97\uFF0C\u4F8B\u5982\u811A\u672C\u6267\u884C\u5B8C\u6BD5\uFF0C\u56FE\u5F62\u9A8C\u8BC1\u7801\uFF0C\u7248\u672C\u66F4\u65B0\u7B49\u901A\u77E5\uFF09\u3002"
            },
            tag: "select",
            defaultValue: "only-notify",
            options: [
              ["only-notify", "\u53EA\u663E\u793A\u53F3\u4E0B\u89D2\u901A\u77E5"],
              ["notify-and-voice", "\u901A\u77E5\u4EE5\u53CA\u63D0\u793A\u97F3\uFF08\u53EE\u7684\u4E00\u58F0\uFF09"],
              ["all", "\u901A\u77E5\uFF0C\u63D0\u793A\u97F3\uFF0C\u4EE5\u53CA\u4EFB\u52A1\u680F\u95EA\u70C1\u63D0\u793A"],
              ["no-notify", "\u5173\u95ED\u7CFB\u7EDF\u901A\u77E5"]
            ]
          },
          notificationWebhooks: {
            label: "\u901A\u77E5\u56DE\u8C03",
            attrs: {
              title: "\u53D1\u9001\u7CFB\u7EDF\u901A\u77E5\u65F6\u53D1\u9001\u56DE\u8C03\u8BF7\u6C42\uFF0C\u7528\u4E8E\u4E13\u4E1A\u5F00\u53D1\u4EBA\u5458\u5BF9\u63A5\u5176\u4ED6\u901A\u77E5\u7CFB\u7EDF\u3002\uFF08\u6BCF\u884C\u586B\u5199\u4E00\u4E2AURL\uFF0C\u987A\u5E8F\u53D1\u9001GET\u8BF7\u6C42\uFF0C${message} \u4E3A\u6D88\u606F\u5360\u4F4D\u7B26\uFF0C\u53EF\u7528\u4E8E\u6D88\u606F\u53D8\u91CF\u66FF\u6362\uFF09"
            },
            tag: "textarea",
            defaultValue: ""
          },
          enableQuestionCaches: {
            label: "\u9898\u5E93\u7F13\u5B58\u529F\u80FD",
            defaultValue: true,
            attrs: { type: "checkbox", title: "\u8BE6\u60C5\u8BF7\u524D\u5F80 \u901A\u7528-\u5176\u4ED6\u5E94\u7528-\u9898\u5E93\u62D3\u5C55\u67E5\u770B\u3002" }
          },
          answererWrappers: {
            separator: "\u81EA\u52A8\u7B54\u9898\u8BBE\u7F6E",
            defaultValue: []
          },
          disabledAnswererWrapperNames: {
            defaultValue: []
          },
          answererWrappersButton: {
            label: "\u9898\u5E93\u914D\u7F6E",
            defaultValue: "\u70B9\u51FB\u914D\u7F6E",
            attrs: {
              type: "button"
            },
            onload() {
              const aws = CommonProject.scripts.settings.cfg.answererWrappers || [];
              this.value = aws.length ? "\u5F53\u524D\u6709" + aws.length + "\u4E2A\u53EF\u7528\u9898\u5E93\uFF0C\u70B9\u51FB\u91CD\u65B0\u914D\u7F6E" : "\u70B9\u51FB\u914D\u7F6E";
              this.onclick = () => {
                const aw = CommonProject.scripts.settings.cfg.answererWrappers || [];
                const copy = lib.$ui.copy("\u590D\u5236\u9898\u5E93\u914D\u7F6E", JSON.stringify(aw, null, 4));
                const list = lib.h("div", [
                  lib.h("div", aw.length ? ["\u4EE5\u4E0B\u662F\u5DF2\u7ECF\u89E3\u6790\u8FC7\u7684\u9898\u5E93\u914D\u7F6E\uFF1A", copy] : ""),
                  ...createAnswererWrapperList(aw)
                ]);
                const textarea = lib.h(
                  "textarea",
                  {
                    className: "modal-input",
                    style: { minHeight: "250px", width: "calc(100% - 20px)", maxWidth: "100%" },
                    placeholder: aw.length ? "\u91CD\u65B0\u8F93\u5165\u9898\u5E93\u914D\u7F6E" : "\u8F93\u5165\u4F60\u7684\u9898\u5E93\u914D\u7F6E..."
                  },
                  aw.length === 0 ? "" : JSON.stringify(aw, null, 4)
                );
                const select = lib.$ui.tooltip(
                  lib.h(
                    "select",
                    {
                      className: "base-style-active-form-control",
                      style: { backgroundColor: "#eef2f7", borderRadius: "2px", padding: "2px 8px" }
                    },
                    [
                      lib.h("option", "\u9ED8\u8BA4"),
                      lib.h(
                        "option",
                        {
                          title: "\u5927\u5B66\u751F\u7F51\u8BFE\u9898\u5E93\u63A5\u53E3\u9002\u914D\u5668: \u5C06\u4E0D\u540C\u7684\u9898\u5E93\u6574\u5408\u4E3A\u4E00\u4E2AAPI\u63A5\u53E3\u3002\u8BE6\u7EC6\u67E5\u770B https://github.com/DokiDoki1103/tikuAdapter"
                        },
                        "TikuAdapter"
                      )
                    ]
                  )
                );
                const modal2 = lib.$modal.prompt({
                  width: 600,
                  maskCloseable: false,
                  content: lib.$ui.notes([
                    [
                      lib.h("div", [
                        "\u9898\u5E93\u914D\u7F6E\u586B\u5199\u6559\u7A0B\uFF1A",
                        lib.h("a", { href: "https://docs.ocsjs.com/docs/work" }, "https://docs.ocsjs.com/docs/work")
                      ])
                    ],
                    [
                      lib.h("div", [
                        "\u3010\u6CE8\u610F\u3011\u5982\u679C\u65E0\u6CD5\u7C98\u8D34\uFF0C\u8BF7\u70B9\u51FB\u6B64\u6309\u94AE\uFF1A",
                        lib.h("button", "\u8BFB\u53D6\u526A\u8D34\u677F", (btn) => {
                          btn.classList.add("base-style-button");
                          btn.onclick = () => {
                            navigator.clipboard.readText().then((result) => {
                              textarea.value = result;
                            });
                          };
                        }),
                        "\uFF0C\u5E76\u540C\u610F\u6D4F\u89C8\u5668\u4E0A\u65B9\u7684\u526A\u8D34\u677F\u8BFB\u53D6\u7533\u8BF7\u3002"
                      ])
                    ],
                    ["\u5982\u679C\u60F3\u6DFB\u52A0\u591A\u4E2A\u4E0D\u540C\u7684\u9898\u5E93\u914D\u7F6E\uFF0C\u8BF7\u5728\u6BCF\u4E2A\u914D\u7F6E\u4E4B\u95F4\u4F7F\u7528\u4E09\u4E2A\u4E95\u53F7\u9694\u5F00: ###\u3002"],
                    ...aw.length ? [list] : []
                  ]),
                  footer: lib.h("div", { style: { width: "100%" } }, [
                    textarea,
                    lib.h("div", { style: { display: "flex", flexWrap: "wrap", marginTop: "12px", fontSize: "12px" } }, [
                      lib.h("div", ["\u89E3\u6790\u5668\uFF1A", select], (div) => {
                        div.style.marginRight = "12px";
                        div.style.flex = "1";
                      }),
                      lib.h("div", { style: { flex: "1", display: "flex", flexWrap: "wrap", justifyContent: "end" } }, [
                        lib.h("button", "\u6E05\u7A7A\u9898\u5E93\u914D\u7F6E", (btn) => {
                          btn.className = "modal-cancel-button";
                          btn.style.marginRight = "48px";
                          btn.onclick = () => {
                            lib.$modal.confirm({
                              content: "\u786E\u5B9A\u8981\u6E05\u7A7A\u9898\u5E93\u914D\u7F6E\u5417\uFF1F",
                              onConfirm: () => {
                                lib.$message.success({ content: "\u5DF2\u6E05\u7A7A\uFF0C\u5728\u7B54\u9898\u524D\u8BF7\u8BB0\u5F97\u91CD\u65B0\u914D\u7F6E\u3002" });
                                modal2 == null ? void 0 : modal2.remove();
                                CommonProject.scripts.settings.cfg.answererWrappers = [];
                                this.value = "\u70B9\u51FB\u914D\u7F6E";
                              }
                            });
                          };
                        }),
                        lib.h("button", "\u5173\u95ED", (btn) => {
                          btn.className = "modal-cancel-button";
                          btn.style.marginRight = "12px";
                          btn.onclick = () => modal2 == null ? void 0 : modal2.remove();
                        }),
                        lib.h("button", "\u4FDD\u5B58\u914D\u7F6E", (btn) => {
                          btn.className = "modal-confirm-button";
                          btn.onclick = async () => {
                            const connects = lib.$gm.getMetadataFromScriptHead("connect");
                            const value = textarea.value;
                            if (!value) {
                              lib.$modal.alert({
                                content: lib.h("div", "\u4E0D\u80FD\u4E3A\u7A7A\uFF01")
                              });
                              return;
                            }
                            if (value.includes("adapter-service/search") && select.value === "TikuAdapter" === false) {
                              lib.$modal.alert({
                                content: lib.h("div", [
                                  "\u68C0\u6D4B\u5230\u60A8\u53EF\u80FD\u6B63\u5728\u4F7F\u7528 ",
                                  lib.h(
                                    "a",
                                    { href: "https://github.com/DokiDoki1103/tikuAdapter#readme" },
                                    "TikuAdapter \u9898\u5E93"
                                  ),
                                  "\uFF0C\u4F46\u662F\u60A8\u9009\u62E9\u7684\u89E3\u6790\u5668\u4E0D\u662F TikuAdapter\uFF0C\u8BF7\u9009\u62E9 TikuAdapter \u89E3\u6790\u5668\uFF0C\u5E76\u586B\u5199\u63A5\u53E3\u5730\u5740\u5373\u53EF\uFF0C\u4F8B\u5982\uFF1Ahttp://localhost:8060/adapter-service/search\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u8B66\u544A\u3002"
                                ]),
                                confirmButtonText: "\u5207\u6362\u81F3 TikuAdapter \u89E3\u6790\u5668\uFF0C\u5E76\u8BC6\u522B\u63A5\u53E3\u5730\u5740",
                                onConfirm() {
                                  var _a;
                                  const origin = ((_a = textarea.value.match(/http:\/\/(.+)\/adapter-service\/search/)) == null ? void 0 : _a[1]) || "";
                                  textarea.value = `http://${origin}/adapter-service/search`;
                                  select.value = "TikuAdapter";
                                }
                              });
                              return;
                            }
                            try {
                              let awsResult = [];
                              if (select.value === "TikuAdapter") {
                                if (value.startsWith("http") === false) {
                                  lib.$modal.alert({
                                    content: lib.h("div", [
                                      "\u683C\u5F0F\u9519\u8BEF\uFF0CTikuAdapter\u89E3\u6790\u5668\u53EA\u80FD\u89E3\u6790 url \u94FE\u63A5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01\u6216\u8005\u67E5\u770B\uFF1A",
                                      lib.h(
                                        "a",
                                        { href: "https://github.com/DokiDoki1103/tikuAdapter#readme" },
                                        "https://github.com/DokiDoki1103/tikuAdapter#readme"
                                      )
                                    ])
                                  });
                                  return;
                                }
                                select.value = "\u9ED8\u8BA4";
                                awsResult.push({
                                  name: "TikuAdapter\u9898\u5E93",
                                  url: value,
                                  homepage: "https://github.com/DokiDoki1103/tikuAdapter",
                                  method: "post",
                                  type: "GM_xmlhttpRequest",
                                  contentType: "json",
                                  headers: {},
                                  data: {
                                    question: "${title}",
                                    options: {
                                      handler: "return (env)=>env.options?.split('\\n')"
                                    },
                                    type: {
                                      handler: " return (env)=> env.type === 'single' ? 0 : env.type === 'multiple' ? 1 : env.type === 'completion' ? 3 : env.type === 'judgement' ? 4 : undefined"
                                    }
                                  },
                                  handler: "return (res)=>res.answer.allAnswer.map(i=>([res.question,i.join('#')]))"
                                });
                              } else {
                                const contents = value.split("###").map((i) => i.trim()).filter(Boolean);
                                for (const content of contents) {
                                  awsResult.push(...await AnswerWrapperParser.from(content));
                                }
                              }
                              if (awsResult.length === 0) {
                                lib.$modal.alert({ content: "\u9898\u5E93\u914D\u7F6E\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u91CD\u65B0\u914D\u7F6E\u3002" });
                                return;
                              }
                              const result_set = [];
                              for (const res of awsResult) {
                                if (result_set.find((i) => JSON.stringify(i) === JSON.stringify(res))) {
                                  continue;
                                }
                                result_set.push(res);
                              }
                              awsResult = result_set;
                              if (JSON.stringify(CommonProject.scripts.settings.cfg.answererWrappers) === JSON.stringify(awsResult)) {
                                lib.$modal.alert({ content: lib.h("div", ["\u9898\u5E93\u914D\u7F6E\u6CA1\u6709\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u914D\u7F6E\uFF01"]) });
                                return;
                              }
                              CommonProject.scripts.settings.cfg.answererWrappers = awsResult;
                              this.value = "\u5F53\u524D\u6709" + awsResult.length + "\u4E2A\u53EF\u7528\u9898\u5E93";
                              lib.$modal.confirm({
                                width: 600,
                                content: lib.h("div", [
                                  lib.h("div", [
                                    "\u{1F389} \u914D\u7F6E\u6210\u529F\uFF0C",
                                    lib.h("b", " \u5237\u65B0\u7F51\u9875\u540E "),
                                    "\u91CD\u65B0\u8FDB\u5165",
                                    lib.h("b", " \u7B54\u9898\u9875\u9762 "),
                                    "\u5373\u53EF\u3002",
                                    "\u89E3\u6790\u5230\u7684\u9898\u5E93\u5982\u4E0B\u6240\u793A:"
                                  ]),
                                  ...createAnswererWrapperList(awsResult)
                                ]),
                                onConfirm: () => {
                                  if (lib.$gm.isInGMContext()) {
                                    top == null ? void 0 : top.document.location.reload();
                                  }
                                },
                                ...lib.$gm.isInGMContext() ? {
                                  confirmButtonText: "\u7ACB\u5373\u5237\u65B0",
                                  cancelButtonText: "\u7A0D\u540E\u5237\u65B0"
                                } : {}
                              });
                              textarea.value = JSON.stringify(awsResult, null, 4);
                              if (connects.length) {
                                const notAllowed = [];
                                if (connects.includes("*")) {
                                  return;
                                }
                                for (const aw2 of awsResult) {
                                  if (connects.some((connect) => new URL(aw2.url).hostname.includes(connect)) === false) {
                                    notAllowed.push(aw2.url);
                                  }
                                }
                                if (notAllowed.length) {
                                  lib.$modal.alert({
                                    width: 600,
                                    maskCloseable: false,
                                    title: "\u26A0\uFE0F\u8B66\u544A",
                                    content: lib.h("div", [
                                      lib.h("div", [
                                        "\u914D\u7F6E\u6210\u529F\uFF0C\u4F46\u68C0\u6D4B\u5230\u4EE5\u4E0B \u57DF\u540D/ip \u4E0D\u5728\u811A\u672C\u7684\u767D\u540D\u5355\u4E2D\uFF0C\u8BF7\u5B89\u88C5 : ",
                                        lib.h(
                                          "a",
                                          {
                                            href: "https://docs.ocsjs.com/docs/other/api#\u5168\u57DF\u540D\u901A\u7528\u7248\u672C"
                                          },
                                          "OCS\u5168\u57DF\u540D\u901A\u7528\u7248\u672C"
                                        ),
                                        "\uFF0C\u6216\u8005\u624B\u52A8\u6DFB\u52A0 @connect \uFF0C\u5426\u5219\u65E0\u6CD5\u8FDB\u884C\u8BF7\u6C42\u3002",
                                        lib.h(
                                          "ul",
                                          notAllowed.map((url) => lib.h("li", new URL(url).hostname))
                                        )
                                      ])
                                    ])
                                  });
                                }
                              }
                            } catch (e) {
                              lib.$modal.alert({
                                content: lib.h("div", [lib.h("div", "\u89E3\u6790\u5931\u8D25\uFF0C\u539F\u56E0\u5982\u4E0B :"), lib.h("div", e.message)])
                              });
                            }
                          };
                        })
                      ])
                    ])
                  ])
                });
              };
            }
          },
          upload: {
            label: "\u7B54\u9898\u5B8C\u6210\u540E",
            tag: "select",
            defaultValue: 80,
            options: [
              ["save", "\u81EA\u52A8\u4FDD\u5B58", "\u5B8C\u6210\u540E\u81EA\u52A8\u4FDD\u5B58\u7B54\u6848, \u6CE8\u610F\u5982\u679C\u4F60\u5F00\u542F\u4E86\u968F\u673A\u4F5C\u7B54, \u6709\u53EF\u80FD\u5206\u8FA8\u4E0D\u51FA\u7B54\u6848\u662F\u5426\u6B63\u786E\u3002"],
              ["nomove", "\u4E0D\u4FDD\u5B58\u4E5F\u4E0D\u63D0\u4EA4", "\u7B49\u5F85\u65F6\u95F4\u8FC7\u540E\u5C06\u4F1A\u81EA\u52A8\u4E0B\u4E00\u8282, \u9002\u5408\u5728\u6D4B\u8BD5\u811A\u672C\u65F6\u4F7F\u7528\u3002"],
              ...[10, 20, 30, 40, 50, 60, 70, 80, 90].map((rate) => [
                rate,
                `\u641C\u5230${rate}%\u7684\u9898\u76EE\u5219\u81EA\u52A8\u63D0\u4EA4`,
                `\u4F8B\u5982: 100\u9898\u4E2D\u67E5\u8BE2\u5230 ${rate} \u9898\u7684\u7B54\u6848,\uFF08\u7B54\u6848\u4E0D\u4E00\u5B9A\u6B63\u786E\uFF09, \u5219\u4F1A\u81EA\u52A8\u63D0\u4EA4\u3002`
              ]),
              ["100", "\u6BCF\u4E2A\u9898\u76EE\u90FD\u67E5\u5230\u7B54\u6848\u624D\u81EA\u52A8\u63D0\u4EA4", "\u7B54\u6848\u4E0D\u4E00\u5B9A\u6B63\u786E"],
              ["force", "\u5F3A\u5236\u81EA\u52A8\u63D0\u4EA4", "\u4E0D\u7BA1\u7B54\u6848\u662F\u5426\u6B63\u786E\u76F4\u63A5\u5F3A\u5236\u81EA\u52A8\u63D0\u4EA4\uFF0C\u5982\u9700\u5F00\u542F\uFF0C\u8BF7\u914D\u5408\u968F\u673A\u4F5C\u7B54\u8C28\u614E\u4F7F\u7528\u3002"]
            ],
            attrs: {
              title: "\u81EA\u52A8\u7B54\u9898\u5B8C\u6210\u540E\u7684\u8BBE\u7F6E\uFF0C\u76EE\u524D\u4EC5\u5728 \u8D85\u661F\u5B66\u4E60\u901A\u7684\u7AE0\u8282\u6D4B\u8BD5 \u4E2D\u751F\u6548, \u9F20\u6807\u60AC\u6D6E\u5728\u9009\u9879\u4E0A\u53EF\u4EE5\u67E5\u770B\u6BCF\u4E2A\u9009\u9879\u7684\u5177\u4F53\u89E3\u91CA\u3002"
            }
          },
          stopSecondWhenFinish: {
            label: "\u7B54\u9898\u7ED3\u675F\u540E\u6682\u505C\uFF08\u79D2\uFF09",
            attrs: {
              type: "number",
              min: 3,
              step: 1,
              max: 9999,
              title: "\u81EA\u52A8\u7B54\u9898\u811A\u672C\u7ED3\u675F\u540E\u6682\u505C\u7684\u65F6\u95F4\uFF08\u65B9\u4FBF\u67E5\u770B\u548C\u68C0\u67E5\uFF09\u3002"
            },
            defaultValue: 3
          },
          thread: {
            label: "\u7EBF\u7A0B\u6570\u91CF\uFF08\u4E2A\uFF09",
            attrs: {
              type: "number",
              min: 1,
              step: 1,
              max: 3,
              title: "\u540C\u4E00\u65F6\u95F4\u5185\u7B54\u9898\u7EBF\u7A0B\u5DE5\u4F5C\u7684\u6570\u91CF\uFF08\u4F8B\u5B50\uFF1A\u4E09\u4E2A\u7EBF\u7A0B\u5219\u4EE3\u8868\u4E00\u79D2\u5185\u540C\u65F6\u641C\u7D22\u4E09\u9053\u9898\uFF09\uFF0C\u8FC7\u591A\u53EF\u80FD\u5BFC\u81F4\u9898\u5E93\u670D\u52A1\u5668\u538B\u529B\u8FC7\u5927\uFF0C\u8BF7\u9002\u5F53\u8C03\u4F4E\u3002"
            },
            defaultValue: 1
          },
          period: {
            label: "\u641C\u9898\u95F4\u9694\uFF08\u79D2\uFF09",
            attrs: {
              type: "number",
              min: 1,
              step: 1,
              max: 60,
              title: "\u6BCF\u9053\u9898\u7684\u641C\u9898\u95F4\u9694\u65F6\u95F4\uFF0C\u4E0D\u5EFA\u8BAE\u592A\u4F4E\uFF0C\u907F\u514D\u589E\u52A0\u670D\u52A1\u5668\u538B\u529B\u3002"
            },
            defaultValue: 3
          },
          "work-when-no-job": {
            defaultValue: false,
            label: "(\u4EC5\u8D85\u661F)\u5F3A\u5236\u7B54\u9898",
            attrs: {
              type: "checkbox",
              title: "\u5F53\u7AE0\u8282\u6D4B\u8BD5\u5DE6\u4E0A\u89D2\u5E76\u6CA1\u6709\u9EC4\u8272\u4EFB\u52A1\u70B9\u7684\u65F6\u5019\u4F9D\u7136\u8FDB\u884C\u7B54\u9898\uFF08\u6CA1\u6709\u4EFB\u52A1\u70B9\u8BF4\u660E\u6B64\u4F5C\u4E1A\u53EF\u80FD\u4E0D\u8BA1\u5165\u603B\u6210\u7EE9\uFF0C\u5982\u679C\u8001\u5E08\u8981\u6C42\u5219\u53EF\u4EE5\u5F00\u542F\uFF09"
            }
          },
          "randomWork-choice": {
            defaultValue: false,
            label: "(\u4EC5\u8D85\u661F)\u968F\u673A\u9009\u62E9",
            attrs: { type: "checkbox", title: "\u9898\u5E93\u641C\u7D22\u4E0D\u5230\u7B54\u6848\u65F6\uFF0C\u968F\u673A\u9009\u62E9\u4EFB\u610F\u4E00\u4E2A\u9009\u9879" }
          },
          "randomWork-complete": {
            defaultValue: false,
            label: "(\u4EC5\u8D85\u661F)\u968F\u673A\u586B\u7A7A",
            attrs: { type: "checkbox", title: "\u9898\u5E93\u641C\u7D22\u4E0D\u5230\u7B54\u6848\u65F6\uFF0C\u968F\u673A\u586B\u5199\u4EE5\u4E0B\u4EFB\u610F\u4E00\u4E2A\u6587\u6848" }
          },
          "randomWork-completeTexts-textarea": {
            defaultValue: ["\u4E0D\u4F1A", "\u4E0D\u77E5\u9053", "\u4E0D\u6E05\u695A", "\u4E0D\u61C2", "\u4E0D\u4F1A\u5199"].join("\n"),
            label: "(\u4EC5\u8D85\u661F)\u968F\u673A\u586B\u7A7A\u6587\u6848",
            tag: "textarea",
            attrs: { title: "\u6BCF\u884C\u4E00\u4E2A\uFF0C\u968F\u673A\u586B\u5165", style: { minWidth: "200px", minHeight: "50px" } },
            onload(el) {
              el.addEventListener("change", () => {
                if (String(el.value).trim() === "") {
                  el.value = el.defaultValue;
                }
              });
            }
          },
          answerSeparators: {
            label: "\u7B54\u6848\u5206\u9694\u7B26",
            attrs: {
              title: "\u5206\u9694\u7B54\u6848\u7684\u7B26\u53F7\uFF0C\u4F8B\u5982\uFF1A\u7B54\u68481#\u7B54\u68482#\u7B54\u68483\uFF0C\u5206\u9694\u7B26\u4E3A #\uFF0C \u4F7F\u7528\u82F1\u6587\u9017\u53F7\u8FDB\u884C\u9694\u5F00 : ',' "
            },
            defaultValue: ["===", "#", "---", "###", "|", ";", "\uFF1B"].join(","),
            onload(el) {
              el.addEventListener("change", () => {
                if (String(el.value).trim() === "") {
                  el.value = el.defaultValue;
                }
              });
            }
          },
          redundanceWordsText: {
            defaultValue: [
              "\u5355\u9009\u9898(\u5FC5\u8003)",
              "\u586B\u7A7A\u9898(\u5FC5\u8003)",
              "\u591A\u9009\u9898(\u5FC5\u8003)",
              "(\u5355\u9009\u9898)",
              "(\u591A\u9009\u9898)",
              "(\u5224\u65AD\u9898)",
              "(\u586B\u7A7A\u9898)",
              "\u3010\u5355\u9009\u9898\u3011",
              "\u3010\u591A\u9009\u9898\u3011",
              "\u3010\u586B\u7A7A\u9898\u3011",
              "\u3010\u5224\u65AD\u9898\u3011",
              "\u3010\u55AE\u9078\u9898\u3011",
              "\u3010\u591A\u9078\u9898\u3011",
              "\u3010\u5224\u65B7\u9898\u3011",
              "\u3010Single Choice\u3011",
              "\u3010Multiple Choice\u3011",
              "\u3010single choice\u3011",
              "\u3010multiple choice\u3011",
              "\u3010True or False\u3011"
            ].join("\n"),
            label: "\u9898\u76EE\u5197\u4F59\u5B57\u6BB5\u81EA\u52A8\u5220\u9664",
            tag: "textarea",
            attrs: {
              title: "\u5728\u641C\u9898\u7684\u65F6\u5019\u81EA\u52A8\u5220\u9664\u591A\u4F59\u7684\u6587\u5B57\uFF0C\u4EE5\u4FBF\u63D0\u9AD8\u641C\u9898\u7684\u51C6\u786E\u5EA6\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002",
              style: { minWidth: "200px", minHeight: "50px" }
            },
            onload(el) {
              el.addEventListener("change", () => {
                if (String(el.value).trim() === "") {
                  el.value = el.defaultValue;
                }
              });
            }
          },
          answerMatchMode: {
            label: "\u7B54\u6848\u5339\u914D\u6A21\u5F0F",
            tag: "select",
            defaultValue: "similar",
            options: [
              ["similar", "\u76F8\u4F3C\u5339\u914D", "\u7B54\u6848\u76F8\u4F3C\u5EA6\u8FBE\u523060%\u4EE5\u4E0A\u5C31\u5339\u914D"],
              ["exact", "\u7CBE\u786E\u5339\u914D", "\u7B54\u6848\u5FC5\u987B\u5B8C\u5168\u4E00\u81F4\u624D\u5339\u914D"]
            ]
          }
        },
        methods() {
          return {
            getWorkOptions: () => {
              const workOptions = JSON.parse(JSON.stringify(this.cfg));
              workOptions.answererWrappers = workOptions.answererWrappers.filter(
                (aw) => this.cfg.disabledAnswererWrapperNames.find((daw) => daw === aw.name) === void 0
              );
              return workOptions;
            },
            notificationBySetting: (content, opts) => {
              var _a;
              if (this.cfg.notification !== "no-notify") {
                lib.$gm.notification(content, {
                  extraTitle: opts == null ? void 0 : opts.extraTitle,
                  duration: (_a = opts == null ? void 0 : opts.duration) != null ? _a : 30,
                  important: this.cfg.notification === "all",
                  silent: this.cfg.notification === "only-notify"
                });
                const message2 = ((opts == null ? void 0 : opts.extraTitle) ? (opts == null ? void 0 : opts.extraTitle) + "\uFF1A" : "") + content;
                const webhooks = this.cfg.notificationWebhooks.split("\n").map((i) => i.trim()).filter(Boolean);
                for (const webhook of webhooks) {
                  let resolved_webhook = webhook;
                  resolved_webhook = webhook.replace("${message}", encodeURIComponent(message2));
                  request(resolved_webhook, {
                    method: "get",
                    type: "GM_xmlhttpRequest"
                  }).then((result) => {
                    console.debug("\u901A\u77E5\u56DE\u8C03\u6210\u529F", { webhook: resolved_webhook, result });
                  }).catch((err) => {
                    console.debug("\u901A\u77E5\u56DE\u8C03\u5931\u8D25", { webhook: resolved_webhook, err });
                  });
                }
              }
            }
          };
        },
        onrender({ panel }) {
          if (lib.$gm.isInGMContext()) {
            panel.body.replaceChildren(...this.cfg.answererWrappers.length ? [lib.h("hr")] : []);
            const testNotification = lib.h(
              "button",
              { className: "base-style-button", disabled: this.cfg.answererWrappers.length === 0 },
              "\u{1F4E2}\u6D4B\u8BD5\u7CFB\u7EDF\u901A\u77E5"
            );
            testNotification.onclick = () => {
              this.methods.notificationBySetting("\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u901A\u77E5");
            };
            const refresh = lib.h(
              "button",
              { className: "base-style-button", disabled: this.cfg.answererWrappers.length === 0 },
              "\u{1F504}\uFE0F\u5237\u65B0\u9898\u5E93\u72B6\u6001"
            );
            refresh.onclick = () => {
              updateState();
            };
            const tableContainer = lib.h("div");
            refresh.style.display = "none";
            tableContainer.style.display = "none";
            panel.body.append(lib.h("div", { style: { display: "flex" } }, [testNotification, refresh]), tableContainer);
            const updateState = async () => {
              tableContainer.replaceChildren();
              let loadedCount = 0;
              if (this.cfg.answererWrappers.length) {
                refresh.style.display = "block";
                tableContainer.style.display = "block";
                refresh.textContent = "\u{1F6AB}\u6B63\u5728\u52A0\u8F7D\u9898\u5E93\u72B6\u6001...";
                refresh.setAttribute("disabled", "true");
                const table = lib.h("table");
                table.style.width = "100%";
                this.cfg.answererWrappers.forEach(async (item) => {
                  const t2 = Date.now();
                  let success = false;
                  let error;
                  const isDisabled = this.cfg.disabledAnswererWrapperNames.find((name) => name === item.name);
                  const res = isDisabled ? false : await Promise.race([
                    (async () => {
                      try {
                        return await request(new URL(item.url).origin + "/?t=" + t2, {
                          type: "GM_xmlhttpRequest",
                          method: "head",
                          responseType: "text"
                        });
                      } catch (err) {
                        error = err;
                        return false;
                      }
                    })(),
                    (async () => {
                      await $.sleep(10 * 1e3);
                      return false;
                    })()
                  ]);
                  if (typeof res === "string") {
                    success = true;
                  } else {
                    success = false;
                  }
                  const body = lib.h("tbody");
                  body.append(lib.h("td", item.name));
                  body.append(
                    lib.h("td", [
                      lib.$ui.tooltip(
                        lib.h(
                          "span",
                          { title: isDisabled ? "\u9898\u76EE\u5DF2\u7ECF\u88AB\u505C\u7528\uFF0C\u8BF7\u5728\u4E0A\u65B9\u9898\u5E93\u914D\u7F6E\u4E2D\u70B9\u51FB\u5F00\u542F\u3002" : "" },
                          success ? "\u8FDE\u63A5\u6210\u529F\u{1F7E2}" : isDisabled ? "\u5DF2\u505C\u7528\u26AA" : error ? "\u8FDE\u63A5\u5931\u8D25\u{1F534}" : "\u8FDE\u63A5\u8D85\u65F6\u{1F7E1}"
                        )
                      )
                    ])
                  );
                  body.append(lib.h("td", `\u5EF6\u8FDF : ${success ? Date.now() - t2 : "---"}/ms`));
                  table.append(body);
                  loadedCount++;
                  if (loadedCount === this.cfg.answererWrappers.length) {
                    setTimeout(() => {
                      refresh.textContent = "\u{1F504}\uFE0F\u5237\u65B0\u9898\u5E93\u72B6\u6001";
                      refresh.removeAttribute("disabled");
                    }, 2e3);
                  }
                });
                tableContainer.append(table);
              } else {
                refresh.style.display = "none";
                tableContainer.style.display = "none";
              }
            };
            updateState();
            this.offConfigChange(state$5.setting.listenerIds.aw);
            state$5.setting.listenerIds.aw = this.onConfigChange("answererWrappers", (_, __, remote) => {
              if (remote === false) {
                updateState();
              }
            });
          }
        }
      }),
      workResults: new lib.Script({
        name: "\u{1F30F} \u641C\u7D22\u7ED3\u679C",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        namespace: "common.work-results",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["\u70B9\u51FB\u9898\u76EE\u5E8F\u53F7\uFF0C\u67E5\u770B\u641C\u7D22\u7ED3\u679C", "\u6BCF\u6B21\u81EA\u52A8\u7B54\u9898\u5F00\u59CB\u524D\uFF0C\u90FD\u4F1A\u6E05\u7A7A\u4E0A\u4E00\u6B21\u7684\u641C\u7D22\u7ED3\u679C\u3002"]).outerHTML
          },
          type: {
            label: "\u663E\u793A\u7C7B\u578B",
            tag: "select",
            options: [
              ["numbers", "\u5E8F\u53F7\u5217\u8868"],
              ["questions", "\u9898\u76EE\u5217\u8868"]
            ],
            attrs: {
              title: "\u4F7F\u7528\u9898\u76EE\u5217\u8868\u53EF\u80FD\u4F1A\u9020\u6210\u9875\u9762\u5361\u987F\u3002"
            },
            defaultValue: "numbers"
          },
          totalQuestionCount: {
            defaultValue: 0
          },
          requestedCount: {
            defaultValue: 0
          },
          resolvedCount: {
            defaultValue: 0
          },
          currentResultIndex: {
            defaultValue: 0
          },
          questionPositionSyncHandlerType: {
            defaultValue: void 0
          }
        },
        methods() {
          return {
            updateWorkStateByResults: (results) => {
              this.cfg.totalQuestionCount = results.length;
              this.cfg.requestedCount = results.filter((result) => result.requested).length;
              this.cfg.resolvedCount = results.filter((result) => result.resolved).length;
            },
            updateWorkState: (state2) => {
              this.cfg.totalQuestionCount = state2.totalQuestionCount;
              this.cfg.requestedCount = state2.requestedCount;
              this.cfg.resolvedCount = state2.resolvedCount;
            },
            refreshState: () => {
              this.cfg.totalQuestionCount = 0;
              this.cfg.requestedCount = 0;
              this.cfg.resolvedCount = 0;
            },
            clearResults: () => {
              return lib.$store.setTab(TAB_WORK_RESULTS_KEY, []);
            },
            getResults() {
              return lib.$store.getTab(TAB_WORK_RESULTS_KEY) || void 0;
            },
            setResults(results) {
              return lib.$store.setTab(TAB_WORK_RESULTS_KEY, results);
            },
            init(opts) {
              CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = opts == null ? void 0 : opts.questionPositionSyncHandlerType;
              CommonProject.scripts.workResults.methods.refreshState();
              CommonProject.scripts.workResults.methods.clearResults();
            },
            createWorkResultsPanel: (mount2) => {
              const container2 = mount2 || lib.h("div");
              let scrollPercent = 0;
              const list = lib.h("div");
              let mouseoverIndex = -1;
              list.onscroll = () => {
                scrollPercent = list.scrollTop / list.scrollHeight;
              };
              const setNumStyle = (result, num, index) => {
                var _a;
                if (result.requested) {
                  num.classList.add("requested");
                }
                if (index === this.cfg.currentResultIndex) {
                  num.classList.add("active");
                }
                if (result.finish) {
                  num.classList.add("finish");
                } else {
                  if (result.requested && result.resolved && (((_a = result.error) == null ? void 0 : _a.trim().length) !== 0 || result.searchInfos.length === 0 || result.finish === false)) {
                    num.classList.add("error");
                  }
                }
              };
              const render2 = debounce_1$1(async () => {
                const results = await CommonProject.scripts.workResults.methods.getResults();
                if (results == null ? void 0 : results.length) {
                  if (results[this.cfg.currentResultIndex] === void 0) {
                    this.cfg.currentResultIndex = 0;
                  }
                  if (this.cfg.type === "numbers") {
                    const resultContainer = lib.h("div", {}, (res) => {
                      res.style.width = "400px";
                    });
                    list.style.width = "400px";
                    list.style.marginBottom = "12px";
                    list.style.overflow = "auto";
                    list.style.maxHeight = "200px";
                    const nums = results.map((result, index) => {
                      return lib.h("span", { className: "search-infos-num", innerText: (index + 1).toString() }, (num) => {
                        setNumStyle(result, num, index);
                        num.onclick = () => {
                          var _a, _b;
                          for (const n of nums) {
                            n.classList.remove("active");
                          }
                          num.classList.add("active");
                          this.cfg.currentResultIndex = index;
                          resultContainer.replaceChildren(createResult(result));
                          if (this.cfg.questionPositionSyncHandlerType) {
                            (_b = (_a = state$5.workResult.questionPositionSyncHandler)[this.cfg.questionPositionSyncHandlerType]) == null ? void 0 : _b.call(
                              _a,
                              index
                            );
                          }
                        };
                      });
                    });
                    list.replaceChildren(...nums);
                    resultContainer.replaceChildren(createResult(results[this.cfg.currentResultIndex]));
                    container2.replaceChildren(list, resultContainer);
                  } else {
                    list.style.width = "400px";
                    list.style.overflow = "auto";
                    list.style.maxHeight = window.innerHeight / 2 + "px";
                    const resultContainer = lib.h("div", { className: "work-result-question-container" });
                    const nums = [];
                    const questions = results.map((result, index) => {
                      const num = lib.h(
                        "span",
                        {
                          className: "search-infos-num",
                          innerHTML: (index + 1).toString()
                        },
                        (num2) => {
                          num2.style.marginRight = "12px";
                          num2.style.display = "inline-block";
                          setNumStyle(result, num2, index);
                        }
                      );
                      nums.push(num);
                      return lib.h(
                        "div",
                        [num, result.question],
                        (question) => {
                          question.onmouseover = () => {
                            mouseoverIndex = index;
                            resultContainer.replaceChildren(createResult(result));
                          };
                          question.onmouseleave = () => {
                            mouseoverIndex = -1;
                            resultContainer.replaceChildren(createResult(results[this.cfg.currentResultIndex]));
                          };
                          question.onclick = () => {
                            var _a, _b;
                            for (const n of nums) {
                              n.classList.remove("active");
                            }
                            for (const q of questions) {
                              q.classList.remove("active");
                            }
                            nums[index].classList.add("active");
                            question.classList.add("active");
                            this.cfg.currentResultIndex = index;
                            resultContainer.replaceChildren(createResult(result));
                            if (this.cfg.questionPositionSyncHandlerType) {
                              (_b = (_a = state$5.workResult.questionPositionSyncHandler)[this.cfg.questionPositionSyncHandlerType]) == null ? void 0 : _b.call(
                                _a,
                                index
                              );
                            }
                          };
                        }
                      );
                    });
                    list.replaceChildren(...questions);
                    if (mouseoverIndex === -1) {
                      resultContainer.replaceChildren(createResult(results[this.cfg.currentResultIndex]));
                    } else {
                      resultContainer.replaceChildren(createResult(results[mouseoverIndex]));
                    }
                    container2.replaceChildren(
                      lib.h("div", [list, lib.h("div", {}, [resultContainer])], (div) => {
                        div.style.display = "flex";
                      })
                    );
                  }
                } else {
                  container2.replaceChildren(
                    lib.h("div", "\u26A0\uFE0F\u6682\u65E0\u4EFB\u4F55\u641C\u7D22\u7ED3\u679C", (div) => {
                      div.style.textAlign = "center";
                    })
                  );
                }
                list.scrollTo({
                  top: scrollPercent * list.scrollHeight,
                  behavior: "auto"
                });
                const tip = lib.h("div", [
                  lib.h("div", { className: "search-infos-num" }, "1"),
                  "\u8868\u793A\u7B49\u5F85\u5904\u7406\u4E2D",
                  lib.h("br"),
                  lib.h("div", { className: "search-infos-num requested" }, "1"),
                  "\u8868\u793A\u5DF2\u5B8C\u6210\u641C\u7D22 ",
                  lib.h("br"),
                  lib.h("div", { className: "search-infos-num finish" }, "1"),
                  "\u8868\u793A\u5DF2\u641C\u7D22\u5DF2\u7B54\u9898 "
                ]);
                container2.prepend(
                  lib.h("hr"),
                  lib.h(
                    "div",
                    [
                      lib.$ui.space(
                        [
                          lib.h("span", `\u5DF2\u641C\u9898: ${this.cfg.requestedCount}/${this.cfg.totalQuestionCount}`),
                          lib.h("span", `\u5DF2\u7B54\u9898: ${this.cfg.resolvedCount}/${this.cfg.totalQuestionCount}`),
                          lib.h("a", "\u63D0\u793A", (btn) => {
                            btn.style.cursor = "pointer";
                            btn.onclick = () => {
                              lib.$modal.confirm({ content: tip, footer: void 0 });
                            };
                          })
                        ],
                        { separator: "|" }
                      )
                    ],
                    (div) => {
                      div.style.marginBottom = "12px";
                    }
                  ),
                  lib.h("hr")
                );
              }, 100);
              const createResult = (result) => {
                if (result) {
                  const error = lib.h("span", {}, (el) => el.style.color = "red");
                  if (result.requested === false && result.resolved === false) {
                    return lib.h("div", [
                      result.question,
                      createQuestionTitleExtra(result.question),
                      lib.h("hr"),
                      "\u5F53\u524D\u9898\u76EE\u8FD8\u672A\u5F00\u59CB\u641C\u7D22\uFF0C\u8BF7\u7A0D\u7B49\u3002"
                    ]);
                  } else {
                    if (result.error) {
                      error.innerText = result.error;
                      return lib.h("div", [result.question, createQuestionTitleExtra(result.question), lib.h("hr"), error]);
                    } else if (result.searchInfos.length === 0) {
                      error.innerText = "\u6B64\u9898\u672A\u641C\u7D22\u5230\u7B54\u6848";
                      return lib.h("div", [result.question, createQuestionTitleExtra(result.question), lib.h("hr"), error]);
                    } else {
                      error.innerText = "\u6B64\u9898\u672A\u5B8C\u6210, \u53EF\u80FD\u662F\u6CA1\u6709\u5339\u914D\u7684\u9009\u9879\u3002";
                      return lib.h("div", [
                        ...result.finish ? [] : [result.resolved === false ? "\u6B63\u5728\u7B49\u5F85\u7B54\u9898\u4E2D\uFF0C\u8BF7\u7A0D\u7B49\u3002" : error],
                        lib.h(SearchInfosElement, {
                          infos: result.searchInfos,
                          question: result.question
                        })
                      ]);
                    }
                  }
                } else {
                  return lib.h("div", "undefined");
                }
              };
              render2();
              this.onConfigChange("type", render2);
              this.onConfigChange("requestedCount", render2);
              this.onConfigChange("resolvedCount", render2);
              lib.$store.addChangeListener(TAB_WORK_RESULTS_KEY, render2);
              return container2;
            }
          };
        },
        onrender({ panel }) {
          panel.body.replaceChildren(this.methods.createWorkResultsPanel());
        }
      }),
      onlineSearch: new lib.Script({
        name: "\u{1F50E} \u5728\u7EBF\u641C\u9898",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        namespace: "common.online-search",
        configs: {
          notes: {
            defaultValue: "\u67E5\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\uFF0C\u624D\u80FD\u8FDB\u884C\u5728\u7EBF\u641C\u9898\u3002"
          },
          selectSearch: {
            label: "\u5212\u8BCD\u641C\u7D22",
            defaultValue: true,
            attrs: { type: "checkbox", title: "\u4F7F\u7528\u9F20\u6807\u6ED1\u52A8\u9009\u62E9\u9875\u9762\u4E2D\u7684\u9898\u76EE\u8FDB\u884C\u641C\u7D22\u3002" }
          },
          searchValue: {
            sync: true,
            label: "\u641C\u7D22\u9898\u76EE",
            tag: "textarea",
            attrs: {
              placeholder: "\u8F93\u5165\u9898\u76EE\uFF0C\u8BF7\u5C3D\u91CF\u4FDD\u8BC1\u9898\u76EE\u5B8C\u6574\uFF0C\u4E0D\u8981\u6F0F\u5B57",
              style: {
                minWidth: "300px",
                minHeight: "64px"
              }
            },
            defaultValue: ""
          }
        },
        oncomplete() {
          document.addEventListener(
            "selectionchange",
            debounce_1$1(() => {
              var _a;
              if (this.cfg.selectSearch) {
                const val = ((_a = document.getSelection()) == null ? void 0 : _a.toString()) || "";
                if (val) {
                  this.cfg.searchValue = val;
                }
              }
            }, 500)
          );
        },
        onrender({ panel }) {
          const content = lib.h("div", "", (content2) => {
            content2.style.marginBottom = "12px";
          });
          const search = async (value) => {
            if (CommonProject.scripts.settings.cfg.answererWrappers.length === 0) {
              lib.$modal.alert({ content: "\u8BF7\u5148\u5728 \u901A\u7528-\u5168\u5C40\u8BBE\u7F6E \u914D\u7F6E\u9898\u5E93\uFF0C\u624D\u80FD\u8FDB\u884C\u5728\u7EBF\u641C\u9898\u3002" });
              return;
            }
            content.replaceChildren(lib.h("span", "\u641C\u7D22\u4E2D..."));
            if (value) {
              const t2 = Date.now();
              const infos = await defaultAnswerWrapperHandler(CommonProject.scripts.settings.cfg.answererWrappers, {
                title: value
              });
              const resume = ((Date.now() - t2) / 1e3).toFixed(2);
              content.replaceChildren(
                lib.h(
                  "div",
                  [
                    lib.h("hr"),
                    lib.h(
                      "div",
                      { style: { color: "#a1a1a1" } },
                      `\u641C\u7D22\u5230 ${infos.map((i) => i.results).flat().length} \u4E2A\u7ED3\u679C\uFF0C\u5171\u8017\u65F6 ${resume} \u79D2`
                    ),
                    lib.h(SearchInfosElement, {
                      infos: infos.map((info) => ({
                        results: info.results.map((res) => [res.question, res.answer]),
                        homepage: info.homepage,
                        name: info.name
                      })),
                      question: value
                    })
                  ],
                  (div) => {
                    div.classList.add("card");
                    div.style.width = "480px";
                  }
                )
              );
            } else {
              content.replaceChildren(lib.h("span", "\u9898\u76EE\u4E0D\u80FD\u4E3A\u7A7A\uFF01"));
            }
          };
          const button = lib.h("button", "\u641C\u7D22", (button2) => {
            button2.className = "base-style-button";
            button2.style.width = "120px";
            button2.onclick = () => {
              search(this.cfg.searchValue);
            };
          });
          const searchContainer = lib.h("div", { style: { textAlign: "end" } }, [button]);
          panel.body.append(lib.h("div", [content, searchContainer]));
        }
      }),
      render: RenderScript,
      hack: new lib.Script({
        name: "\u9875\u9762\u590D\u5236\u7C98\u8D34\u9650\u5236\u89E3\u9664",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        hideInPanel: true,
        onactive() {
          enableCopy([document, document.body]);
        },
        oncomplete() {
          enableCopy([document, document.body]);
          insertCopyableStyle();
          setTimeout(() => {
            enableCopy([document, document.body]);
            insertCopyableStyle();
          }, 3e3);
        }
      }),
      disableDialog: new lib.Script({
        name: "\u7981\u6B62\u5F39\u7A97",
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        hideInPanel: true,
        priority: 1,
        onstart() {
          function disableDialog(msg) {
            lib.$modal.alert({
              profile: "\u5F39\u7A97\u6765\u81EA\uFF1A" + location.origin,
              content: msg
            });
          }
          try {
            lib.$gm.unsafeWindow.alert = disableDialog;
            window.alert = disableDialog;
          } catch (e) {
            console.error(e);
          }
        }
      }),
      apps: new lib.Script({
        name: "\u{1F4F1} \u62D3\u5C55\u5E94\u7528",
        matches: [["", /.*/]],
        namespace: "common.apps",
        configs: {
          notes: {
            defaultValue: "\u8FD9\u91CC\u662F\u4E00\u4E9B\u5176\u4ED6\u7684\u5E94\u7528\u6216\u8005\u62D3\u5C55\u529F\u80FD\u3002"
          },
          localQuestionCaches: {
            defaultValue: [],
            extra: {
              appConfigSync: false
            }
          }
        },
        methods() {
          return {
            addQuestionCache: async (...questionCacheItems) => {
              const questionCaches = this.cfg.localQuestionCaches;
              for (const item of questionCacheItems) {
                if (questionCaches.find((c) => c.title === item.title && c.answer === item.answer) === void 0) {
                  questionCaches.unshift(item);
                }
              }
              questionCaches.splice(200);
              this.cfg.localQuestionCaches = questionCaches;
            },
            addQuestionCacheFromWorkResult(swr) {
              CommonProject.scripts.apps.methods.addQuestionCache(
                ...swr.map(
                  (r) => r.searchInfos.map(
                    (i) => i.results.filter((res) => res[1]).map((res) => ({
                      title: r.question,
                      answer: res[1],
                      from: i.name.replace(/【题库缓存】/g, ""),
                      homepage: i.homepage || ""
                    })).flat()
                  ).flat()
                ).flat()
              );
            },
            searchAnswerInCaches: async (title, whenSearchEmpty) => {
              if (CommonProject.scripts.settings.cfg.enableQuestionCaches === false) {
                return await whenSearchEmpty();
              }
              let results = [];
              const caches = this.cfg.localQuestionCaches;
              for (const cache of caches) {
                if (cache.title.trim() === title.trim()) {
                  results.push({
                    name: `\u3010\u9898\u5E93\u7F13\u5B58\u3011${cache.from}`,
                    homepage: cache.homepage,
                    results: [{ answer: cache.answer, question: cache.title }]
                  });
                }
              }
              if (results.length === 0) {
                results = await whenSearchEmpty();
              }
              return results;
            },
            async showChangelog() {
              const changelog = lib.h("div", {
                className: "markdown card",
                innerHTML: "\u52A0\u8F7D\u4E2D...",
                style: { maxWidth: "600px" }
              });
              lib.$modal.simple({
                width: 600,
                content: lib.h("div", [
                  lib.h("div", { className: "notes card" }, [
                    lib.$ui.notes(["\u6B64\u9875\u9762\u5B9E\u65F6\u66F4\u65B0\uFF0C\u9047\u5230\u95EE\u9898\u53EF\u4EE5\u67E5\u770B\u6700\u65B0\u7248\u672C\u662F\u5426\u4FEE\u590D\u3002"])
                  ]),
                  changelog
                ])
              });
              const md = await request("https://cdn.ocsjs.com/articles/ocs/changelog.md?t=" + Date.now(), {
                type: "GM_xmlhttpRequest",
                responseType: "text",
                method: "get"
              });
              changelog.innerHTML = markdown(md);
            }
          };
        },
        onrender({ panel }) {
          const btnStyle = {
            padding: "6px 12px",
            margin: "4px",
            marginBottom: "8px",
            boxShadow: "0px 0px 4px #bebebe",
            borderRadius: "8px",
            cursor: "pointer"
          };
          const cachesBtn = lib.h("div", { innerText: "\u{1F4BE} \u9898\u5E93\u7F13\u5B58", style: btnStyle }, (btn) => {
            btn.onclick = () => {
              const questionCaches = this.cfg.localQuestionCaches;
              const list = questionCaches.map(
                (c) => lib.h(
                  "div",
                  {
                    className: "question-cache",
                    style: {
                      margin: "8px",
                      border: "1px solid lightgray",
                      borderRadius: "4px",
                      padding: "8px"
                    }
                  },
                  [
                    lib.h("div", { className: "title" }, [
                      lib.$ui.tooltip(
                        lib.h(
                          "span",
                          {
                            title: `\u6765\u81EA\uFF1A${c.from || "\u672A\u77E5\u9898\u5E93"}
\u4E3B\u9875\uFF1A${c.homepage || "\u672A\u77E5\u4E3B\u9875"}`,
                            style: { fontWeight: "bold" }
                          },
                          c.title
                        )
                      )
                    ]),
                    lib.h("div", { className: "answer", style: { marginTop: "6px" } }, c.answer)
                  ]
                )
              );
              lib.$modal.simple({
                width: 800,
                content: lib.h("div", [
                  lib.h("div", { className: "notes card" }, [
                    lib.$ui.notes([
                      "\u9898\u5E93\u7F13\u5B58\u662F\u5C06\u9898\u5E93\u7684\u9898\u76EE\u548C\u7B54\u6848\u4FDD\u5B58\u5728\u5185\u5B58\uFF0C\u5728\u91CD\u590D\u4F7F\u7528\u65F6\u53EF\u4EE5\u76F4\u63A5\u4ECE\u5185\u5B58\u83B7\u53D6\uFF0C\u4E0D\u9700\u8981\u518D\u6B21\u8BF7\u6C42\u9898\u5E93\u3002",
                      "\u4EE5\u4E0B\u662F\u5F53\u524D\u5B58\u50A8\u7684\u9898\u5E93\uFF0C\u9ED8\u8BA4\u5B58\u50A8200\u9898\uFF0C\u5F53\u524D\u9875\u9762\u5173\u95ED\u540E\u4F1A\u81EA\u52A8\u6E05\u9664\u3002"
                    ])
                  ]),
                  lib.h("div", { className: "card" }, [
                    lib.$ui.space(
                      [
                        lib.h("span", ["\u5F53\u524D\u7F13\u5B58\u6570\u91CF\uFF1A" + questionCaches.length]),
                        lib.$ui.button("\u6E05\u7A7A\u9898\u5E93\u7F13\u5B58", {}, (btn2) => {
                          btn2.onclick = () => {
                            this.cfg.localQuestionCaches = [];
                            list.forEach((el) => el.remove());
                          };
                        })
                      ],
                      { separator: "|" }
                    )
                  ]),
                  lib.h(
                    "div",
                    questionCaches.length === 0 ? [lib.h("div", { style: { textAlign: "center" } }, "\u6682\u65E0\u9898\u5E93\u7F13\u5B58")] : list
                  )
                ])
              });
            };
          });
          const exportSetting = lib.$ui.tooltip(
            lib.h(
              "div",
              {
                innerText: "\u{1F4E4} \u5BFC\u51FA\u5168\u90E8\u8BBE\u7F6E",
                style: btnStyle,
                title: "\u5BFC\u51FA\u5168\u90E8\u9875\u9762\u7684\u8BBE\u7F6E\uFF0C\u5305\u62EC\u5168\u5C40\u8BBE\u7F6E\uFF0C\u9898\u5E93\u914D\u7F6E\uFF0C\u5B66\u4E60\u8BBE\u7F6E\u7B49\u7B49\u3002\uFF08\u6587\u4EF6\u540E\u7F00\u540D\u4E3A\uFF1A.ocssetting\uFF09"
              },
              (btn) => {
                btn.onclick = () => {
                  const setting = /* @__PURE__ */ Object.create({});
                  for (const key of lib.$store.list()) {
                    const val = lib.$store.get(key);
                    if (val) {
                      Reflect.set(setting, key, val);
                    }
                  }
                  const blob = new Blob([JSON.stringify(setting, null, 2)], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const a = lib.h("a", { href: url, download: "ocs-setting-export.ocssetting" });
                  a.click();
                  URL.revokeObjectURL(url);
                };
              }
            )
          );
          const importSetting = lib.$ui.tooltip(
            lib.h(
              "div",
              {
                innerText: "\u{1F4E5} \u5BFC\u5165\u5168\u90E8\u8BBE\u7F6E",
                style: btnStyle,
                title: "\u5BFC\u5165\u5E76\u4E14\u8986\u76D6\u5F53\u524D\u7684\u5168\u90E8\u8BBE\u7F6E\u3002\uFF08\u6587\u4EF6\u540E\u7F00\u540D\u4E3A\uFF1A.ocssetting\uFF09"
              },
              (btn) => {
                btn.onclick = () => {
                  const input = lib.h("input", { type: "file", accept: ".ocssetting" });
                  input.onchange = async () => {
                    var _a;
                    const file = (_a = input.files) == null ? void 0 : _a[0];
                    if (file) {
                      const setting = await file.text();
                      const obj = JSON.parse(setting);
                      for (const key of Object.keys(obj)) {
                        lib.$store.set(key, obj[key]);
                      }
                      lib.$message.success({ content: "\u8BBE\u7F6E\u5BFC\u5165\u6210\u529F\uFF0C\u9875\u9762\u5373\u5C06\u5237\u65B0\u3002", duration: 3 });
                      setTimeout(() => {
                        location.reload();
                      }, 3e3);
                    }
                  };
                  input.click();
                };
              }
            )
          );
          [cachesBtn, exportSetting, importSetting].forEach((btn) => {
            btn.onmouseover = () => {
              btn.style.boxShadow = "0px 0px 4px #0099ff9c";
            };
            btn.onmouseout = () => {
              btn.style.boxShadow = "0px 0px 4px #bebebe";
            };
          });
          const sep = (text) => lib.h("div", { className: "separator", style: { padding: "4px 0px" } }, text);
          panel.body.replaceChildren(
            lib.h("div", [sep("\u9898\u5E93\u62D3\u5C55"), cachesBtn, sep("\u5176\u4ED6\u529F\u80FD"), exportSetting, importSetting])
          );
        }
      })
    }
  });
  function insertCopyableStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
		html * {
		  -webkit-user-select: text !important;
		  -khtml-user-select: text !important;
		  -moz-user-select: text !important;
		  -ms-user-select: text !important;
		  user-select: text !important;
		}`;
    document.head.append(style);
  }
  function createAnswererWrapperList(aw) {
    return aw.map(
      (item) => lib.h(
        "details",
        [
          lib.h("summary", [
            lib.$ui.space([
              (() => {
                let isDisabled = CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames.includes(item.name);
                const checkbox = lib.h("input", { type: "checkbox", checked: !isDisabled, className: "base-style-switch" });
                checkbox.onclick = () => {
                  isDisabled = !isDisabled;
                  if (isDisabled) {
                    CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames = [
                      ...CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames,
                      item.name
                    ];
                    lib.$message.warn({
                      content: "\u9898\u5E93\uFF1A" + item.name + " \u5DF2\u88AB\u505C\u7528\uFF0C\u5982\u9700\u5F00\u542F\u8BF7\u5728\uFF1A\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E-\u9898\u5E93\u914D\u7F6E\u4E2D\u5F00\u542F\u3002",
                      duration: 30
                    });
                  } else {
                    CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames = CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames.filter(
                      (name) => name !== item.name
                    );
                    lib.$message.success({
                      content: "\u9898\u5E93\uFF1A" + item.name + " \u5DF2\u542F\u7528\u3002",
                      duration: 3
                    });
                  }
                };
                checkbox.title = "\u70B9\u51FB\u505C\u7528\u6216\u8005\u542F\u7528\u9898\u5E93\uFF0C\u505C\u7528\u9898\u5E93\u540E\u5C06\u65E0\u6CD5\u5728\u81EA\u52A8\u7B54\u9898\u4E2D\u67E5\u8BE2\u9898\u76EE";
                return lib.$ui.tooltip(checkbox);
              })(),
              lib.h("span", item.name)
            ])
          ]),
          lib.h("ul", [
            lib.h("li", ["\u540D\u5B57	", item.name]),
            lib.h("li", { innerHTML: `\u5B98\u7F51	<a target="_blank" href=${item.homepage}>${item.homepage || "\u65E0"}</a>` }),
            lib.h("li", ["\u63A5\u53E3	", item.url]),
            lib.h("li", ["\u8BF7\u6C42\u65B9\u6CD5	", item.method]),
            lib.h("li", ["\u8BF7\u6C42\u7C7B\u578B	", item.type]),
            lib.h("li", ["\u8BF7\u6C42\u5934	", JSON.stringify(item.headers, null, 4) || "\u65E0"]),
            lib.h("li", ["\u8BF7\u6C42\u4F53	", JSON.stringify(item.data, null, 4) || "\u65E0"])
          ])
        ],
        (details) => {
          details.style.paddingLeft = "12px";
        }
      )
    );
  }
  const createGuide = () => {
    const showProjectDetails = (project2) => {
      lib.$modal.simple({
        title: project2.name,
        width: 800,
        content: lib.h("div", [
          lib.h("div", [
            "\u8FD0\u884C\u57DF\u540D\uFF1A",
            ...(project2.domains || []).map(
              (d) => lib.h(
                "a",
                { href: d.startsWith("http") ? d : "https://" + d, target: "_blank", style: { margin: "0px 4px" } },
                d
              )
            )
          ]),
          lib.h("div", "\u811A\u672C\u5217\u8868\uFF1A"),
          lib.h(
            "ul",
            Object.keys(project2.scripts).sort((a, b) => project2.scripts[b].hideInPanel ? -1 : 1).map((key) => {
              const script2 = project2.scripts[key];
              return lib.h(
                "li",
                [
                  lib.h("b", script2.name),
                  lib.$ui.notes([
                    lib.h("span", ["\u64CD\u4F5C\u9762\u677F\uFF1A", script2.hideInPanel ? "\u9690\u85CF" : "\u663E\u793A"]),
                    [
                      "\u8FD0\u884C\u9875\u9762\uFF1A",
                      lib.h(
                        "ul",
                        script2.matches.map((m) => Array.isArray(m) ? m : ["\u65E0\u63CF\u8FF0", m]).map(
                          (i) => lib.h("li", [
                            i[0],
                            "\uFF1A",
                            i[1] instanceof RegExp ? i[1].toString().replace(/\\/g, "").slice(1, -1) : lib.h("span", i[1])
                          ])
                        )
                      )
                    ]
                  ])
                ],
                (li) => {
                  li.style.marginBottom = "12px";
                }
              );
            }),
            (ul) => {
              ul.style.paddingLeft = "42px";
            }
          )
        ])
      });
    };
    return lib.h("div", { className: "user-guide card" }, [
      lib.h("div", { className: "separator", style: { padding: "12px 0px" } }, "\u2728 \u652F\u6301\u7684\u7F51\u8BFE\u5E73\u53F0"),
      lib.h("div", [
        ...[CXProject, ZHSProject, ZJYProject, IcveMoocProject, ICourseProject].map((project2) => {
          const btn = lib.h("button", { className: "base-style-button-secondary", style: { margin: "4px" } }, [project2.name]);
          btn.onclick = () => {
            showProjectDetails(project2);
          };
          return btn;
        })
      ]),
      lib.h("div", { className: "separator", style: { padding: "12px 0px" } }, "\u{1F4D6} \u4F7F\u7528\u6559\u7A0B"),
      lib.$ui.notes(
        [
          "\u6253\u5F00\u4EFB\u610F\u7F51\u8BFE\u5E73\u53F0\uFF0C\u7B49\u5F85\u811A\u672C\u52A0\u8F7D\uFF0C",
          "\u811A\u672C\u52A0\u8F7D\u540E\u67E5\u770B\u6BCF\u4E2A\u7F51\u8BFE\u4E0D\u540C\u7684\u4F7F\u7528\u63D0\u793A\u3002",
          "\u5982\u679C\u4E0D\u652F\u6301\u5F53\u524D\u7F51\u8BFE\uFF0C\u5219\u4E0D\u4F1A\u6709\u76F8\u5E94\u7684\u63D0\u793A\u4EE5\u53CA\u8BBE\u7F6E\u9762\u677F\u3002",
          [
            "\u6700\u540E\u6E29\u99A8\u63D0\u793A: ",
            "- \u7981\u6B62\u4E0E\u5176\u4ED6\u811A\u672C\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u51FA\u73B0\u7B54\u6848\u9009\u4E0D\u4E0A\u6216\u8005\u9875\u9762\u5361\u6B7B\uFF0C\u65E0\u9650\u5237\u65B0\uFF0C\u7B49\u95EE\u9898\u4E00\u5F8B\u540E\u679C\u81EA\u8D1F\u3002",
            "- \u4EFB\u4F55\u7591\u95EE\u8BF7\u524D\u5F80\u5B98\u7F51\u67E5\u770B\u4EA4\u6D41\u7FA4\uFF0C\u8FDB\u5165\u4EA4\u6D41\u7FA4\u540E\u5E26\u622A\u56FE\u8FDB\u884C\u53CD\u9988\u3002",
            "- \u8BF7\u5C06\u6D4F\u89C8\u5668\u9875\u9762\u4FDD\u6301\u6700\u5927\u5316\uFF0C\u6216\u8005\u7F29\u5C0F\u7A97\u53E3\uFF0C\u4E0D\u80FD\u6700\u5C0F\u5316\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u811A\u672C\u5361\u6B7B\uFF01"
          ]
        ],
        "ol"
      )
    ]);
  };
  const playbackRate = {
    label: "\u89C6\u9891\u500D\u901F",
    tag: "select",
    options: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 6, 8, 16].map((rate) => [rate.toString(), rate + " x"]),
    defaultValue: "1"
  };
  const volume = {
    label: "\u97F3\u91CF\u8C03\u8282",
    attrs: { type: "range", step: "0.05", min: "0", max: "1" },
    defaultValue: 0,
    onload() {
      createRangeTooltip(this, "0", (val) => `${parseFloat(val) * 100}%`);
    }
  };
  const restudy = {
    label: "\u590D\u4E60\u6A21\u5F0F",
    attrs: { title: "\u5DF2\u7ECF\u5B8C\u6210\u7684\u89C6\u9891\u7EE7\u7EED\u5B66\u4E60", type: "checkbox" },
    defaultValue: false
  };
  const definition = {
    label: "\u6E05\u6670\u5EA6",
    tag: "select",
    defaultValue: "line1bq",
    options: [
      ["line1bq", "\u6D41\u7545"],
      ["line1gq", "\u9AD8\u6E05"]
    ]
  };
  const workNotes = {
    defaultValue: lib.$ui.notes(["\u81EA\u52A8\u7B54\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\u3002", "\u53EF\u4EE5\u642D\u914D \u201C\u901A\u7528-\u5728\u7EBF\u641C\u9898\u201D \u4E00\u8D77\u4F7F\u7528\u3002"]).outerHTML
  };
  function commonWork(script2, options) {
    CommonProject.scripts.render.methods.pin(script2);
    let worker;
    let startBtnPressed = false;
    let checkFailed = false;
    let running = false;
    const createControls = () => {
      const { controlBtn, restartBtn, startBtn } = createWorkerControl({
        workerProvider: () => worker,
        onStart: async () => {
          startBtnPressed = true;
          checkMessage == null ? void 0 : checkMessage.remove();
          start2();
        },
        onRestart: async () => {
          var _a;
          worker == null ? void 0 : worker.emit("close");
          await ((_a = options.onRestart) == null ? void 0 : _a.call(options));
          start2();
        }
      });
      startBtn.style.flex = "1";
      startBtn.style.padding = "4px";
      restartBtn.style.flex = "1";
      restartBtn.style.padding = "4px";
      controlBtn.style.flex = "1";
      controlBtn.style.padding = "4px";
      const container2 = lib.h(
        "div",
        { style: { marginTop: "12px", display: "flex" } },
        running ? [controlBtn, restartBtn] : [startBtn]
      );
      return { container: container2, startBtn, restartBtn, controlBtn };
    };
    const workResultPanel = () => CommonProject.scripts.workResults.methods.createWorkResultsPanel();
    script2.on("render", () => {
      var _a, _b;
      let gotoSettingsBtnContainer = "";
      if (checkFailed) {
        const gotoSettingsBtn = lib.$ui.button("\u{1F449} \u524D\u5F80\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E", {
          className: "base-style-button",
          style: { flex: "1", padding: "4px" }
        });
        gotoSettingsBtn.style.flex = "1";
        gotoSettingsBtn.style.padding = "4px";
        gotoSettingsBtn.onclick = () => {
          CommonProject.scripts.render.methods.pin(CommonProject.scripts.settings);
        };
        gotoSettingsBtnContainer = lib.h("div", { style: { display: "flex" } }, [gotoSettingsBtn]);
      }
      (_b = (_a = script2.panel) == null ? void 0 : _a.body) == null ? void 0 : _b.replaceChildren(
        lib.h("div", { style: { marginTop: "12px" } }, [
          gotoSettingsBtnContainer,
          createControls().container,
          workResultPanel()
        ])
      );
    });
    const workOptions = CommonProject.scripts.settings.methods.getWorkOptions();
    let checkMessage = workPreCheckMessage({
      onrun: () => startBtnPressed === false && start2(),
      onclose: (_, closedMsg) => checkMessage = closedMsg,
      onNoAnswererWrappers: () => {
        checkFailed = true;
      },
      ...workOptions
    });
    const start2 = async () => {
      var _a, _b, _c, _d;
      await ((_a = options.beforeRunning) == null ? void 0 : _a.call(options));
      running = true;
      worker = options.workerProvider(workOptions);
      if (worker) {
        (_b = options.onWorkerCreated) == null ? void 0 : _b.call(options, worker);
      }
      const { container: container2, controlBtn } = createControls();
      (_d = (_c = script2.panel) == null ? void 0 : _c.body) == null ? void 0 : _d.replaceChildren(container2, workResultPanel());
      worker == null ? void 0 : worker.once("done", () => {
        running = false;
        controlBtn.disabled = true;
      });
    };
  }
  function createWorkerControl(options) {
    let stop = false;
    let stopMessage;
    const startBtn = lib.$ui.button("\u25B6\uFE0F\u5F00\u59CB\u7B54\u9898");
    const restartBtn = lib.$ui.button("\u{1F503}\u91CD\u65B0\u7B54\u9898");
    const controlBtn = lib.$ui.button("\u23F8\u6682\u505C");
    startBtn.onclick = () => {
      startBtn.remove();
      options.onStart();
    };
    restartBtn.onclick = () => {
      stopMessage == null ? void 0 : stopMessage.remove();
      options.onRestart();
    };
    controlBtn.onclick = () => {
      var _a;
      stop = !stop;
      const worker = options.workerProvider();
      (_a = worker == null ? void 0 : worker.emit) == null ? void 0 : _a.call(worker, stop ? "stop" : "continuate");
      controlBtn.value = stop ? "\u25B6\uFE0F\u7EE7\u7EED" : "\u23F8\uFE0F\u6682\u505C";
      if (stop) {
        stopMessage = lib.$message.warn({ duration: 0, content: "\u6682\u505C\u4E2D..." });
      } else {
        stopMessage == null ? void 0 : stopMessage.remove();
      }
    };
    return { startBtn, restartBtn, controlBtn };
  }
  function optimizationElementWithImage(root2, clone_node = false) {
    const clone = clone_node ? root2.cloneNode(true) : root2;
    for (const img of Array.from(clone.querySelectorAll("img"))) {
      const src2 = document.createElement("span");
      src2.innerText = img.src;
      src2.style.fontSize = "0px";
      img.after(src2);
    }
    return clone;
  }
  function createUnVisibleTextOfImage(img) {
    const src2 = document.createElement("span");
    src2.innerText = img.src;
    src2.style.fontSize = "0px";
    img.after(src2);
  }
  function simplifyWorkResult(results, titleTransform) {
    var _a, _b, _c, _d, _e;
    const res = [];
    let i = 0;
    for (const wr of results) {
      res.push({
        requested: wr.requested,
        resolved: wr.resolved,
        error: wr.error,
        question: (titleTransform == null ? void 0 : titleTransform(((_a = wr.ctx) == null ? void 0 : _a.elements.title) || [], i)) || ((_c = (_b = wr.ctx) == null ? void 0 : _b.elements.title) == null ? void 0 : _c.join(",")) || "",
        finish: (_d = wr.result) == null ? void 0 : _d.finish,
        searchInfos: ((_e = wr.ctx) == null ? void 0 : _e.searchInfos.map((sr) => ({
          error: sr.error,
          name: sr.name,
          homepage: sr.homepage,
          results: sr.results.map((ans) => [ans.question, ans.answer])
        }))) || []
      });
      i++;
    }
    return res;
  }
  function removeRedundantWords(str, words) {
    for (const word of words.map((w) => w.trim())) {
      str = str.replace(word, "");
    }
    return str;
  }
  async function waitForMedia(options) {
    var _a;
    const res = await Promise.race([
      new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          const video = ((options == null ? void 0 : options.root) || document).querySelector(
            `${(options == null ? void 0 : options.videoSelector) || "video"},${(options == null ? void 0 : options.audioSelector) || "audio"}`
          );
          if (video && (!(options == null ? void 0 : options.filter) || options.filter(video))) {
            clearInterval(interval);
            resolve(video);
          }
        }, 200);
      }),
      $.sleep((_a = options == null ? void 0 : options.timeout) != null ? _a : 3 * 60 * 1e3)
    ]);
    if (res) {
      return res;
    } else {
      throw new Error("\u89C6\u9891/\u97F3\u9891\u672A\u627E\u5230\uFF0C\u6216\u8005\u52A0\u8F7D\u8D85\u65F6\u3002");
    }
  }
  function waitForElement(selector, opts) {
    return new Promise((resolve, reject) => {
      let timeout;
      const interval = setInterval(() => {
        const el = typeof selector === "function" ? selector() : document.querySelector(selector);
        if (el) {
          clearInterval(interval);
          timeout && clearTimeout(timeout);
          resolve(el);
        }
      }, 1e3);
      if (opts == null ? void 0 : opts.timeout_seconds) {
        timeout = setTimeout(() => {
          clearInterval(interval);
          resolve(void 0);
        }, ((opts == null ? void 0 : opts.timeout_seconds) || 10) * 1e3);
      }
    });
  }
  const $playwright = {
    showError: () => {
      const href = "https://docs.ocsjs.com/docs/script-helper";
      const errorEl = lib.h("div", [
        "\u5F53\u524D\u9875\u9762\u9700\u8981\u4E0B\u8F7DOCS\u684C\u9762\u7AEF\uFF0C\u5E76\u5728\u684C\u9762\u7AEF\u4E2D\u65B0\u5EFA\u6D4F\u89C8\u5668\uFF0C\u5728\u65B0\u5EFA\u7684\u6D4F\u89C8\u5668\u4E2D\u624D\u80FD\u8FDB\u884C\u6B63\u5E38\u5237\u8BFE\uFF0C\u70B9\u51FB\u94FE\u63A5\u67E5\u770B\u8BE6\u60C5 => ",
        lib.h("a", { href, target: "_blank" }, href)
      ]);
      lib.$modal.alert({
        maskCloseable: false,
        title: "\u26D4 \u9519\u8BEF",
        confirmButtonText: "\u67E5\u770B\u8BE6\u60C5",
        content: errorEl.cloneNode(true),
        onConfirm() {
          window.open(href, "_blank");
        }
      });
      lib.$message.error({ content: errorEl.cloneNode(true), duration: 0 });
    }
  };
  const state$4 = {
    study: {
      stop: false,
      currentMedia: void 0,
      stopInterval: 0,
      stopMessage: void 0
    }
  };
  class StudyVideoH5 {
    constructor() {
      this.remotePage = void 0;
    }
    async init() {
      this.remotePage = await RemotePlaywright.getCurrentPage();
      if (!this.remotePage) {
        throw $playwright.showError();
      }
    }
    getCourseName() {
      var _a;
      return ((_a = lib.$el(".source-name")) == null ? void 0 : _a.textContent) || "\u65E0\u540D\u79F0";
    }
    getChapterName(root2) {
      var _a;
      return ((_a = root2.querySelector(".catalogue_title")) == null ? void 0 : _a.textContent) || "\u672A\u77E5\u7AE0\u8282";
    }
    getNext(opts) {
      let videoItems = Array.from(document.querySelectorAll(".clearfix.video"));
      if (!opts.restudy) {
        videoItems = videoItems.filter((el) => el.querySelector(".time_icofinish") === null);
      }
      for (let i = 0; i < videoItems.length; i++) {
        const item = videoItems[i];
        if (item.classList.contains("current_play")) {
          return videoItems[i + (opts.next ? 1 : 0)];
        }
      }
      return videoItems[0];
    }
    async switchPlaybackRate(rate) {
      var _a;
      const controlsBar = lib.$el(".controlsBar");
      const sl = lib.$el(".speedList");
      if (controlsBar && sl) {
        controlsBar.style.display = "block";
        sl.style.display = "block";
        const selector = `.speedList [rate="${rate === 1 ? "1.0" : rate}"]`;
        if (this.remotePage) {
          await this.remotePage.click(selector);
        } else {
          (_a = document.querySelector(selector)) == null ? void 0 : _a.click();
        }
      }
    }
    async switchLine(definition2) {
      const controlsBar = lib.$el(".controlsBar");
      const dl = lib.$el(".definiLines");
      if (controlsBar && dl) {
        controlsBar.style.display = "block";
        dl.style.display = "block";
        const selector = `.definiLines .${definition2}:not(.active)`;
        const el = document.querySelector(selector);
        if (el) {
          if (this.remotePage) {
            await this.remotePage.click(selector);
          } else {
            el.click();
          }
        }
      }
    }
    hasJob() {
      var _a;
      return ((_a = lib.$$el(".clearfix.video")) == null ? void 0 : _a.length) > 0;
    }
    hideDialog() {
      lib.$$el(".el-dialog__wrapper").forEach((dialog) => {
        dialog.remove();
      });
    }
    async handleTestDialog() {
      var _a, _b;
      const items = lib.$$el("#playTopic-dialog .el-pager .number");
      if (items.length) {
        for (const item of items) {
          if (item.classList.contains("active") === false) {
            item.click();
            await lib.$.sleep(500);
          }
          const options = lib.$$el("#playTopic-dialog ul .topic-item");
          if (options.length !== 0) {
            await waitForCaptcha();
            $render.moveToEdge();
            const random = Math.floor(Math.random() * options.length);
            await lib.$.sleep(1e3);
            const btn_selector = `#playTopic-dialog .topic .radio ul > li:nth-child(${random + 1})`;
            if (this.remotePage) {
              await this.remotePage.click(btn_selector);
            } else {
              (_a = lib.$el(btn_selector)) == null ? void 0 : _a.click();
            }
            await lib.$.sleep(1e3);
          }
        }
        await lib.$.sleep(1e3);
        const close_btn_selector = "#playTopic-dialog .close-btn,#playTopic-dialog .btn";
        if (this.remotePage) {
          await this.remotePage.click(close_btn_selector);
        } else {
          (_b = lib.$el(close_btn_selector)) == null ? void 0 : _b.click();
        }
      }
      await lib.$.sleep(3e3);
      await this.handleTestDialog();
    }
  }
  class FusionCourseH5 extends StudyVideoH5 {
    getCourseName() {
      return "\u667A\u6167\u8BFE\u7A0B-AI";
    }
    getNext(opts) {
      const is_resource_box_mode = !!document.querySelector(".resource-box");
      let videoItems = Array.from(document.querySelectorAll(".clearfix.video")).filter((el) => {
        if (is_resource_box_mode) {
          return !!el.querySelector(".resource-box");
        }
        return true;
      });
      console.log(videoItems);
      if (!opts.restudy) {
        if (is_resource_box_mode) {
          videoItems = videoItems.filter((el) => {
            var _a;
            const text = ((_a = el.querySelector(".resource-text")) == null ? void 0 : _a.textContent) || "";
            const [progress, total] = text.replace("\u5FC5\u5B66", "").trim().split("/").map((s) => parseInt(s));
            return progress < total;
          });
        } else {
          videoItems = videoItems.filter((el) => {
            const num_el = el.querySelector(".progress-num");
            return num_el === null || num_el.textContent !== "100%";
          });
        }
      }
      for (let i = 0; i < videoItems.length; i++) {
        const item = videoItems[i];
        if (is_resource_box_mode) {
          if (item.classList.contains("activeNode")) {
            return videoItems[i + (opts.next ? 1 : 0)];
          }
        } else {
          if (item.classList.contains("current_play")) {
            return videoItems[i + (opts.next ? 1 : 0)];
          }
        }
      }
      return videoItems[0];
    }
  }
  class StudyPlusH5 extends StudyVideoH5 {
    getCourseName() {
      var _a, _b, _c;
      return ((_c = (_b = (_a = lib.$el(".top-back-box > span:nth-child(2)")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.match(/课程名称：(.+)/)) == null ? void 0 : _c[1]) || "\u65E0\u540D\u79F0";
    }
    getChapterName(item) {
      var _a;
      return ((_a = item.parentElement) == null ? void 0 : _a.textContent) || "\u672A\u77E5\u7AE0\u8282";
    }
    hasJob() {
      var _a;
      return ((_a = lib.$$el(".child-main")) == null ? void 0 : _a.length) > 0;
    }
    getNext(opts) {
      let videoItems = Array.from(document.querySelectorAll(".child-main")).filter(
        (el) => el.querySelector(".child-time")
      );
      console.log(videoItems);
      if (!opts.restudy) {
        videoItems = videoItems.filter((el) => {
          if (el.querySelector(".child-check")) {
            return false;
          }
          return true;
        });
      }
      for (let i = 0; i < videoItems.length; i++) {
        const item = videoItems[i];
        if (item.classList.contains("current")) {
          return videoItems[i + (opts.next ? 1 : 0)];
        }
      }
      return videoItems[0];
    }
    hideDialog() {
      lib.$$el(".el-overlay,.el-dialog").forEach((dialog) => {
        dialog.style.display = "none";
      });
    }
    async handleTestDialog(remotePage) {
      const question_box = lib.$el(".class-question-box");
      if (question_box) {
        const options = lib.$$el(".options option");
        if (options.length !== 0) {
          await waitForCaptcha();
          $render.moveToEdge();
          const random = Math.floor(Math.random() * options.length);
          await lib.$.sleep(1e3);
          if (remotePage) {
            await remotePage.click(options[random]);
          } else {
            options[random].click();
          }
          await lib.$.sleep(1e3);
        }
        await lib.$.sleep(1e3);
        const close_btn = lib.$el(".close_btn");
        if (close_btn) {
          if (remotePage) {
            await remotePage.click(close_btn);
          } else {
            close_btn.click();
          }
        }
        const submit_btn = lib.$el(".submit-btn");
        if (submit_btn) {
          if (remotePage) {
            await remotePage.click(submit_btn);
          } else {
            submit_btn.click();
          }
        }
      }
      await lib.$.sleep(3e3);
      await this.handleTestDialog(remotePage);
    }
  }
  const ZHSProject = lib.Project.create({
    name: "\u77E5\u5230\u667A\u6167\u6811",
    domains: ["zhihuishu.com"],
    scripts: {
      guide: new lib.Script({
        name: "\u{1F4A1} \u4F7F\u7528\u63D0\u793A",
        matches: [
          ["\u5B66\u4E60\u9996\u9875", "https://onlineweb.zhihuishu.com/onlinestuh5"],
          ["\u9996\u9875", "https://www.zhihuishu.com/"]
        ],
        namespace: "zhs.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u8BF7\u624B\u52A8\u8FDB\u5165\u89C6\u9891\u3001\u4F5C\u4E1A\u3001\u8003\u8BD5\u9875\u9762\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u8FD0\u884C\u3002",
              "\u5174\u8DA3\u8BFE\u4F1A\u81EA\u52A8\u4E0B\u4E00\u4E2A\uFF0C\u6240\u4EE5\u4E0D\u63D0\u4F9B\u811A\u672C\u3002"
            ]).outerHTML
          }
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
        }
      }),
      "gxk-study": new lib.Script({
        name: "\u{1F5A5}\uFE0F \u5171\u4EAB\u8BFE-\u5B66\u4E60\u811A\u672C",
        matches: [
          ["\u5171\u4EAB\u8BFE\u5B66\u4E60\u9875\u9762", "studyvideoh5.zhihuishu.com"],
          ["\u65B0\u5171\u4EAB\u8BFE\u5B66\u4E60\u9875\u9762", "studyplush5.zhihuishu.com"],
          ["\u65B0\u7248AI\u8BFE\u9875\u9762", "fusioncourseh5.zhihuishu.com/stuStudy"]
        ],
        namespace: "zhs.gxk.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u7AE0\u8282\u6D4B\u8BD5\u8BF7\u5927\u5BB6\u89C2\u770B\u5B8C\u89C6\u9891\u540E\u624B\u52A8\u6253\u5F00\u3002",
              [
                "\u8BF7\u5927\u5BB6\u4ED4\u7EC6\u6253\u5F00\u89C6\u9891\u4E0A\u65B9\u7684\u201D\u5B66\u524D\u5FC5\u8BFB\u201C\uFF0C\u67E5\u770B\u6210\u7EE9\u5206\u5E03\u3002",
                "\u5982\u679C \u201C\u5E73\u65F6\u6210\u7EE9-\u5B66\u4E60\u4E60\u60EF\u6210\u7EE9\u201D \u5360\u6BD4\u591A\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u89C4\u5F8B\u5B66\u4E60\u3002",
                "\u6BCF\u5929\u5B9A\u65F6\u534A\u5C0F\u65F6\u53EF\u83B7\u5F97\u4E00\u5206\u4E60\u60EF\u5206\u3002",
                "\u5982\u679C\u4E0D\u60F3\u8981\u4E60\u60EF\u5206\u53EF\u5FFD\u7565\u3002"
              ],
              "\u8BF7\u4F7F\u7528\u65F6\u5173\u95ED\u5361\u5DF4\u65AF\u57FA\u8F6F\u4EF6\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u8FD0\u884C\u3002",
              "\u4E0D\u8981\u6700\u5C0F\u5316\u6D4F\u89C8\u5668\uFF0C\u53EF\u80FD\u5BFC\u81F4\u811A\u672C\u6682\u505C\u3002",
              "\u8FD0\u884C\u4E2D\u8BF7\u5C06\u6D4F\u89C8\u5668\u7F29\u653E\u8C03\u6574\u81F3\u9002\u5408\u7684\u5927\u5C0F\uFF0C\u907F\u514D\u5143\u7D20\u906E\u6321\uFF0C\u65E0\u6CD5\u70B9\u51FB",
              "\u4F8B\u5982\uFF1A\u8C03\u6574\u7F29\u653E\u5230 50%\uFF0C\u7136\u540E\u5237\u65B0\u9875\u9762\u5373\u53EF"
            ]).outerHTML
          },
          studyRecord: {
            defaultValue: [],
            extra: {
              appConfigSync: false
            }
          },
          stopTime: {
            label: "\u5B9A\u65F6\u505C\u6B62",
            tag: "select",
            attrs: { title: "\u5230\u65F6\u95F4\u540E\u81EA\u52A8\u6682\u505C\u811A\u672C" },
            defaultValue: "0",
            options: [
              ["0", "\u5173\u95ED"],
              ["0.5", "\u534A\u5C0F\u65F6\u540E"],
              ["1", "\u4E00\u5C0F\u65F6\u540E"],
              ["2", "\u4E24\u5C0F\u65F6\u540E"]
            ]
          },
          restudy,
          reloadWhenError: {
            label: "\u9ED1\u5C4F\u81EA\u52A8\u5237\u65B0",
            attrs: { title: "\u89C6\u9891\u9ED1\u5C4F\u6216\u8005\u68C0\u6D4B\u4E0D\u5230\u89C6\u9891\u65F6\u81EA\u52A8\u5237\u65B0\u9875\u9762", type: "checkbox" },
            defaultValue: true
          },
          volume,
          definition,
          playbackRate: {
            label: "\u89C6\u9891\u500D\u901F",
            tag: "select",
            defaultValue: 1,
            options: [
              ["1", "1 x"],
              ["1.25", "1.25 x"],
              ["1.5", "1.5 x"]
            ]
          }
        },
        methods() {
          return {
            increaseStudyTime: (courseName, val) => {
              const records = this.cfg.studyRecord;
              const record = records.find(
                (r) => new Date(r.date).toLocaleDateString() === new Date().toLocaleDateString()
              );
              let courses = [];
              if (record) {
                courses = record.courses;
              } else {
                records.push({ date: Date.now(), courses });
              }
              const course = courses.find((c) => c.name === courseName);
              if (course) {
                course.time = course.time + val;
                if (typeof course.time === "string") {
                  course.time = parseFloat(course.time);
                }
              } else {
                courses.push({ name: courseName, time: 0 });
              }
              this.cfg.studyRecord = records;
            }
          };
        },
        onrender({ panel }) {
          panel.body.replaceChildren(
            lib.h("hr"),
            lib.$ui.button("\u23F0\u68C0\u6D4B\u662F\u5426\u9700\u8981\u89C4\u5F8B\u5B66\u4E60", {}, (btn) => {
              btn.style.marginRight = "12px";
              btn.onclick = () => {
                var _a;
                const href = ((_a = document.querySelector("[href*=stuLearnReportNew]")) == null ? void 0 : _a.getAttribute("href")) || "";
                if (href) {
                  lib.$modal.alert({
                    title: "\u89C4\u5F8B\u5B66\u4E60\u68C0\u6D4B",
                    content: `\u81EA\u52A8\u68C0\u6D4B\u529F\u80FD\u5DF2\u5931\u6548\uFF0C<a href="${href}"> -> \u70B9\u51FB\u6B64\u5904 <- </a> \u524D\u5F80\u6210\u7EE9\u5206\u6790\u9875\u9762\uFF0C\u70B9\u51FB <b>\u201C\u5B66\u4E60\u4E60\u60EF\u201D</b> \u5373\u53EF\u67E5\u770B\u4E60\u60EF\u5206\u8BE6\u60C5\u3002`
                  });
                } else {
                  lib.$modal.alert({
                    title: "\u63D0\u793A",
                    content: "\u81EA\u52A8\u68C0\u6D4B\u529F\u80FD\u5DF2\u5931\u6548\uFF0C\u8BF7\u81EA\u884C\u524D\u5F80\u6210\u7EE9\u5206\u6790\u9875\u9762\uFF0C\u70B9\u51FB\u5B66\u4E60\u4E60\u60EF\u5373\u53EF\u67E5\u770B\u4E60\u60EF\u5206\u8BE6\u60C5\u3002"
                  });
                }
              };
            }),
            lib.$ui.button("\u{1F4D8}\u67E5\u770B\u5B66\u4E60\u8BB0\u5F55", {}, (btn) => {
              btn.onclick = () => {
                lib.$modal.alert({
                  title: "\u5B66\u4E60\u8BB0\u5F55",
                  content: lib.$ui.notes(
                    this.cfg.studyRecord.map((r) => {
                      const date = new Date(r.date);
                      return [
                        `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`,
                        lib.$ui.notes(r.courses.map((course) => `${course.name} - ${optimizeSecond(course.time)}`))
                      ];
                    })
                  )
                });
              };
            })
          );
        },
        onactive() {
          this.cfg.stopTime = "0";
          if (this.cfg.playbackRate) {
            this.cfg.playbackRate = parseFloat(this.cfg.playbackRate.toString());
          }
        },
        async oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
          const type = location.href.includes("fusioncourseh5") ? "AI\u8BFE\u7A0B" : location.href.includes("studyplush5") ? "\u65B0\u5171\u4EAB\u8BFE" : "\u5171\u4EAB\u8BFE";
          const ProcessorConstructor = location.href.includes("fusioncourseh5") ? FusionCourseH5 : location.href.includes("studyplush5") ? StudyPlusH5 : StudyVideoH5;
          const processor = new ProcessorConstructor();
          setTimeout(() => {
            if (processor.hasJob() === false) {
              finishAlert();
            }
          }, 10 * 1e3);
          const waitForVideoJob = () => {
            return new Promise((resolve, reject) => {
              if (processor.hasJob()) {
                resolve();
              } else {
                setTimeout(() => {
                  resolve(waitForVideoJob());
                }, 1e3);
              }
            });
          };
          await waitForVideoJob();
          await processor.init();
          this.onConfigChange("stopTime", (stopTime) => {
            if (stopTime === "0") {
              lib.$message.info({ content: "\u5B9A\u65F6\u505C\u6B62\u5DF2\u5173\u95ED" });
            } else {
              autoStop(stopTime);
            }
          });
          this.onConfigChange("volume", (curr) => {
            state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
          });
          this.onConfigChange("playbackRate", (curr) => {
            if (typeof curr === "string") {
              this.cfg.playbackRate = parseFloat(curr);
            }
            processor.switchPlaybackRate(curr);
          });
          this.onConfigChange("definition", (curr) => {
            processor.switchLine(curr);
          });
          const recordStudyTimeLoop = () => {
            this.methods.increaseStudyTime(processor.getCourseName(), this.cfg.playbackRate);
            setTimeout(recordStudyTimeLoop, 1e3);
          };
          closeDialogRead();
          recordStudyTimeLoop();
          autoStop(this.cfg.stopTime);
          processor.hideDialog();
          processor.handleTestDialog();
          setInterval(async () => {
            lib.$$el(".v-modal,.mask").forEach((modal2) => {
              modal2.remove();
            });
            fixProcessBar();
          }, 3e3);
          lib.$message.info({ content: "3\u79D2\u540E\u5F00\u59CB\u5B66\u4E60", duration: 3 });
          const remotePage = processor.remotePage;
          const study2 = async (opts) => {
            if (state$4.study.stop === false) {
              const item = processor.getNext({ next: opts.next, restudy: this.cfg.restudy });
              if (item) {
                const msg = "\u5373\u5C06\u5B66\u4E60\uFF1A" + processor.getChapterName(item);
                lib.$message.info({ content: msg });
                $console.log(msg);
                await lib.$.sleep(3e3);
                $render.moveToEdge();
                if (remotePage) {
                  if (type === "\u65B0\u5171\u4EAB\u8BFE") {
                    await remotePage.click(".title-box");
                    await lib.$.sleep(200);
                  }
                  item.scrollIntoView();
                  await remotePage.click(item);
                  await lib.$.sleep(200);
                  await remotePage.click(item);
                } else {
                  item.click();
                }
                watch(
                  processor,
                  {
                    reloadWhenError: this.cfg.reloadWhenError,
                    volume: this.cfg.volume,
                    playbackRate: this.cfg.playbackRate,
                    definition: this.cfg.definition
                  },
                  {
                    reload() {
                      if (type === "\u5171\u4EAB\u8BFE") {
                        study2({ next: false });
                      } else {
                        location.reload();
                      }
                    },
                    onended({ next: next2 }) {
                      study2({ next: next2 });
                    }
                  }
                );
              } else {
                finishAlert();
              }
            } else {
              const msg = "\u68C0\u6D4B\u5230\u5F53\u524D\u89C6\u9891\u5168\u90E8\u64AD\u653E\u5B8C\u6BD5\uFF0C\u5982\u679C\u8FD8\u6709\u672A\u5B8C\u6210\u7684\u89C6\u9891\u8BF7\u5237\u65B0\u91CD\u8BD5\uFF0C\u6216\u8005\u6253\u5F00\u590D\u4E60\u6A21\u5F0F\u3002";
              lib.$message.warn({ content: msg });
              CommonProject.scripts.settings.methods.notificationBySetting(msg, {
                duration: 0,
                extraTitle: "\u77E5\u9053\u667A\u6167\u6811\u5B66\u4E60\u811A\u672C"
              });
            }
          };
          study2({ next: false });
        }
      }),
      "gxk-work": new lib.Script({
        name: "\u270D\uFE0F \u5171\u4EAB\u8BFE-\u4F5C\u4E1A\u8003\u8BD5\u811A\u672C",
        matches: [
          ["\u5171\u4EAB\u8BFE\u4F5C\u4E1A\u9875\u9762", "zhihuishu.com/stuExamWeb.html#/webExamList/dohomework"],
          ["\u5171\u4EAB\u8BFE\u8003\u8BD5\u9875\u9762", "zhihuishu.com/stuExamWeb.html#/webExamList/doexamination"],
          ["\u4F5C\u4E1A\u8003\u8BD5\u5217\u8868", "zhihuishu.com/stuExamWeb.html#/webExamList\\?"]
        ],
        namespace: "zhs.gxk.work",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u81EA\u52A8\u7B54\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\u3002",
              "\u53EF\u4EE5\u642D\u914D \u201C\u901A\u7528-\u5728\u7EBF\u641C\u9898\u201D \u4E00\u8D77\u4F7F\u7528\u3002",
              "\u26A0\uFE0F\u5F00\u59CB\u524D\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u4E8B\u9879\uFF1A\u26A0\uFE0F",
              "\u26A0\uFE0F-\u5982\u679C\u672A\u5F00\u59CB\u7B54\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u9875\u9762\u3002",
              ["\u26A0\uFE0F-\u7B54\u9898\u4E2D\u8BF7\u52FF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u5982\u9700\u6682\u505C\u7B54\u9898", "\u8BF7\u7B49\u5F85\u5168\u90E8\u9898\u76EE\u641C\u7D22\u5B8C\u6210\u5E76\u6267\u884C\u81EA\u52A8\u4FDD\u5B58\u529F\u80FD\u540E\u624D\u80FD\u64CD\u4F5C\u3002"],
              ["\u26A0\uFE0F-\u6682\u505C\u540E\u624B\u52A8\u64CD\u4F5C\u8BF7\u786E\u4FDD\u6BCF\u4E2A\u9898\u76EE\u90FD\u70B9\u51FB\u4E0B\u4E00\u9898", "\u8FDB\u884C\u7B54\u6848\u4FDD\u5B58\uFF08\u4E0D\u7136\u4E0D\u4F1A\u4FDD\u5B58\uFF0C\u63D0\u4EA4\u6CA1\u5206\uFF09"]
            ]).outerHTML
          }
        },
        methods() {
          async function getWorkInfo(remotePage) {
            const isExam2 = location.href.includes("doexamination");
            let url = "";
            if (isExam2) {
              url = "/taurusExam/gateway/t/v1/student/doExam";
            } else {
              url = "/studentExam/gateway/t/v1/student/doHomework";
            }
            return JSON.parse((await remotePage.waitForResponse(url)).body);
          }
          return {
            getWorkInfo,
            work: async () => {
              const remotePage = await RemotePlaywright.getCurrentPage();
              if (!remotePage) {
                return $playwright.showError();
              }
              const isExam2 = location.href.includes("doexamination");
              const isWork2 = location.href.includes("dohomework");
              if (isExam2 || isWork2) {
                const workInfo = await getWorkInfo(remotePage);
                setTimeout(() => {
                  lib.$message.info({ content: `\u5F00\u59CB${isExam2 ? "\u8003\u8BD5" : "\u4F5C\u4E1A"}` });
                  commonWork(this, {
                    workerProvider: (opts) => gxkWorkAndExam(workInfo, opts)
                  });
                }, 1e3);
              } else {
                lib.$message.info({ content: "\u{1F4E2} \u8BF7\u624B\u52A8\u8FDB\u5165\u4F5C\u4E1A/\u8003\u8BD5\uFF0C\u5982\u679C\u672A\u5F00\u59CB\u7B54\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u9875\u9762\u3002", duration: 0 });
                CommonProject.scripts.render.methods.pin(this);
              }
            }
          };
        },
        async onactive() {
          this.methods.work();
          this.on("historychange", () => {
            this.methods.work();
          });
        }
      }),
      "smart-study": new lib.Script({
        name: "\u{1F5A5}\uFE0F \u667A\u6167\u8BFE\u7A0B-\u5B66\u4E60\u811A\u672C",
        matches: [
          ["\u667A\u6167\u8BFE\u7A0B\u5B66\u4E60\u9875\u9762", "smartcoursestudent.zhihuishu.com/learnPage"],
          ["\u667A\u6167\u8BFE\u7A0B\u9996\u9875", "smartcoursestudent.zhihuishu.com/singleCourse"]
        ],
        namespace: "zhs.smart.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u4F5C\u4E1A\u8BF7\u5927\u5BB6\u89C2\u770B\u5B8C\u89C6\u9891\u540E\u624B\u52A8\u6253\u5F00\u3002",
              "\u4E0D\u8981\u6700\u5C0F\u5316\u6D4F\u89C8\u5668\uFF0C\u53EF\u80FD\u5BFC\u81F4\u811A\u672C\u6682\u505C\u3002",
              "\u4EFB\u610F\u9009\u62E9\u4E00\u4E2A\u7AE0\u8282\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u5F80\u4E0B\u5B66\u201C\u5FC5\u5B66\u201D\u8BFE\u7A0B\u3002",
              "\u638C\u63E1\u5EA6\u81EA\u52A8\u7B54\u9898\u8BF7\u5B66\u4E60\u5B8C\u6210\u540E\u81EA\u884C\u624B\u52A8\u70B9\u51FB\u8FDB\u5165"
            ]).outerHTML
          },
          restudy,
          volume,
          definition,
          playbackRate: {
            label: "\u89C6\u9891\u500D\u901F",
            tag: "select",
            defaultValue: 1,
            options: [
              ["1", "1 x"],
              ["1.25", "1.25 x"],
              ["1.5", "1.5 x"]
            ]
          }
        },
        oncomplete() {
          this.methods.start();
        },
        onhistorychange(type, ...args) {
          if (type === "push") {
            this.methods.start();
          }
        },
        methods() {
          return {
            start: async () => {
              if (location.href.includes("smartcoursestudent.zhihuishu.com/learnPage") === false) {
                lib.$message.info({ content: "\u8BF7\u70B9\u51FB\u4EFB\u610F\u7AE0\u8282\u5F00\u59CB\u8FDB\u884C\u81EA\u52A8\u5B66\u4E60" });
                return;
              }
              CommonProject.scripts.render.methods.pin(this);
              const processor = new StudyVideoH5();
              const getInfos = () => Array.from(document.querySelectorAll(".section-item-collapse-info"));
              const getChapterName = () => {
                var _a, _b;
                return (((_a = document.querySelector(".point-title-text")) == null ? void 0 : _a.textContent) || "\u672A\u77E5\u7AE0\u8282") + "-" + (((_b = document.querySelector(".resources-item .active .video-title")) == null ? void 0 : _b.textContent) || "\u672A\u77E5\u5C0F\u8282");
              };
              const include_jobs = ["video", "book", "other", "text"];
              const getNextJob = () => {
                const cards = Array.from(document.querySelectorAll(".resources-item"));
                let target_el;
                let start2 = false;
                for (let index = 0; index < cards.length; index++) {
                  const card = cards[index];
                  if (start2) {
                    if (this.cfg.restudy) {
                      target_el = card;
                      break;
                    } else {
                      if (card.querySelector(".finished-icon")) {
                        continue;
                      }
                      target_el = card;
                      break;
                    }
                  }
                  if (card.querySelector(".active")) {
                    start2 = true;
                  }
                }
                return target_el;
              };
              const getNext = () => {
                var _a, _b;
                const infos = getInfos();
                const works = [];
                for (let index = 0; index < infos.length; index++) {
                  const info = infos[index];
                  const text = ((_a = info.querySelector(".collapse-info-progress .progress-text")) == null ? void 0 : _a.textContent) || "";
                  const [progress, total] = text.replace("\u5FC5\u5B66", "").trim().split("/").map((s) => parseInt(s));
                  if (progress < total) {
                    works.push({ progress, total, info });
                  }
                }
                let start2 = false;
                for (let index = 0; index < works.length; index++) {
                  const work2 = works[index];
                  if (start2) {
                    if (work2.progress < work2.total) {
                      return works[index].info;
                    }
                  }
                  if (work2.info.classList.contains("active")) {
                    if (this.cfg.restudy) {
                      return works[index + 1].info;
                    } else {
                      start2 = true;
                    }
                  }
                }
                return (_b = works[0]) == null ? void 0 : _b.info;
              };
              this.onConfigChange("volume", (curr) => {
                state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
              });
              this.onConfigChange("playbackRate", (curr) => {
                if (typeof curr === "string") {
                  this.cfg.playbackRate = parseFloat(curr);
                }
                processor.switchPlaybackRate(curr);
              });
              this.onConfigChange("definition", (curr) => {
                processor.switchLine(curr);
              });
              const doWork = async () => {
                await lib.$.sleep(5 * 1e3);
                const next2 = async () => {
                  var _a, _b;
                  const nextJob = getNextJob();
                  if (nextJob) {
                    const job_title = nextJob.querySelector(".common-text");
                    if (include_jobs.some((job) => nextJob.getElementsByClassName(job).length > 0)) {
                      job_title.click();
                      await doWork();
                    } else {
                      const _open = lib.$gm.unsafeWindow.open;
                      lib.$gm.unsafeWindow.open = () => null;
                      (_a = document.querySelector(".basic-info-video-card-container.active")) == null ? void 0 : _a.classList.remove("active");
                      job_title.click();
                      (_b = nextJob.querySelector(".basic-info-video-card-container")) == null ? void 0 : _b.classList.add("active");
                      setTimeout(async () => {
                        lib.$gm.unsafeWindow.open = _open;
                        await next2();
                      }, 1e3);
                    }
                    return;
                  }
                  const nextEl = getNext();
                  if (nextEl) {
                    nextEl.click();
                  } else {
                    finishAlert();
                  }
                };
                try {
                  const wrapper = document.querySelector(".video-player-wrapper");
                  if (!wrapper || wrapper.style.display === "none") {
                    throw new Error("\u89C6\u9891\u52A0\u8F7D\u5931\u8D25");
                  }
                  await waitForMedia({
                    timeout: 5 * 1e3,
                    filter: (m) => m.src.length !== 0
                  });
                } catch {
                  const msg = "\u672A\u627E\u5230\u5B66\u4E60\u89C6\u9891\uFF0C\u5373\u5C06\u81EA\u52A8\u4E0B\u4E00\u8282\uFF01";
                  lib.$message.error(msg);
                  $console.error(msg);
                  await lib.$.sleep(3e3);
                  await next2();
                  return;
                }
                const set = async () => {
                  try {
                    await processor.switchLine(this.cfg.definition || "line1bq");
                    await lib.$.sleep(1e3);
                    await processor.switchPlaybackRate(this.cfg.playbackRate);
                    await lib.$.sleep(1e3);
                    const media = await waitForMedia({ timeout: 5 * 1e3, filter: (m) => m.src.length !== 0 });
                    await lib.$.sleep(1e3);
                    state$4.study.currentMedia = media;
                    if (media) {
                      media.currentTime = 1;
                      media.volume = this.cfg.volume;
                    }
                    return state$4.study.currentMedia;
                  } catch (e) {
                    $console.log("\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u9875\u9762\uFF01\uFF1A" + e);
                    lib.$message.error({ content: "\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u9875\u9762\uFF01\uFF1A" + e, duration: 0 });
                  }
                };
                const video = await set();
                if (!video) {
                  return;
                }
                playMedia(() => video == null ? void 0 : video.play()).then(() => {
                  const cn = getChapterName();
                  lib.$message.info({ content: "\u6B63\u5728\u5B66\u4E60\uFF1A" + cn });
                  $console.log("\u6B63\u5728\u5B66\u4E60\uFF1A" + cn);
                });
                video.onpause = async () => {
                  if (!(video == null ? void 0 : video.ended) && state$4.study.stop === false) {
                    await lib.$.sleep(1e3);
                    video == null ? void 0 : video.play();
                  }
                };
                video.onended = async () => {
                  lib.$message.info({ content: "\u5373\u5C06\u81EA\u52A8\u8DF3\u8F6C\u4E0B\u4E00\u8282" });
                  await lib.$.sleep(3e3);
                  await next2();
                };
              };
              doWork();
            }
          };
        }
      }),
      "smart-work": new lib.Script({
        name: "\u270D\uFE0F \u667A\u6167\u8BFE\u7A0B-\u4F5C\u4E1A\u811A\u672C",
        matches: [
          ["\u667A\u6167\u8BFE\u7A0B\u4F5C\u4E1A\u9875\u9762", "smartcourseexam.zhihuishu.com/ReviewExam"],
          ["\u667A\u6167\u8BFE\u7A0B-\u638C\u63E1\u63D0\u5347\u9875\u9762", "studentexamcomh5.zhihuishu.com/studentReviewTestOrExam"],
          ["\u667A\u6167\u8BFE\u7A0B-AI\u52A9\u6559\u638C\u63E1\u5EA6", "fusioncourseh5.zhihuishu.com/exam"]
        ],
        namespace: "zhs.smart.work",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u81EA\u52A8\u7B54\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\u3002",
              "\u53EF\u4EE5\u642D\u914D \u201C\u901A\u7528-\u5728\u7EBF\u641C\u9898\u201D \u4E00\u8D77\u4F7F\u7528\u3002",
              "\u591A\u4E2A\u638C\u63E1\u5EA6\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u91CD\u65B0\u7B54\u9898\u6309\u94AE\u4EE5\u4FBF\u5FEB\u901F\u5B8C\u6210\u3002",
              "\u26A0\uFE0F\u5F00\u59CB\u524D\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u4E8B\u9879\uFF1A\u26A0\uFE0F",
              "\u26A0\uFE0F-\u5982\u679C\u672A\u5F00\u59CB\u7B54\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u9875\u9762\u3002",
              ["\u26A0\uFE0F-\u7B54\u9898\u4E2D\u8BF7\u52FF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u5982\u9700\u6682\u505C\u7B54\u9898", "\u8BF7\u7B49\u5F85\u5168\u90E8\u9898\u76EE\u641C\u7D22\u5B8C\u6210\u5E76\u6267\u884C\u81EA\u52A8\u4FDD\u5B58\u529F\u80FD\u540E\u624D\u80FD\u64CD\u4F5C\u3002"]
            ]).outerHTML
          }
        },
        methods() {
          return {
            start: async () => {
              await lib.$.sleep(3e3);
              const remotePage = await RemotePlaywright.getCurrentPage();
              if (!remotePage) {
                return $playwright.showError();
              }
              lib.$message.warn({ content: "\u5373\u5C06\u5F00\u59CB\u7B54\u9898\uFF0C\u7B54\u9898\u5B8C\u6BD5\u4E4B\u524D\u8BF7\u52FF\u64CD\u4F5C\u9875\u9762\uFF01", duration: 0 });
              setTimeout(() => {
                commonWork(this, {
                  workerProvider: (opts) => {
                    if (location.href.includes("fusioncourseh5.zhihuishu.com/exam")) {
                      return fusioncourseWork(remotePage, opts);
                    } else {
                      return smartWork(remotePage, opts);
                    }
                  }
                });
              }, 3e3);
            }
          };
        },
        oncomplete() {
          this.methods.start();
        },
        onhistorychange(type, ...args) {
          if (type === "push") {
            this.methods.start();
          }
        }
      }),
      "xnk-study": new lib.Script({
        name: "\u{1F5A5}\uFE0F \u6821\u5185\u8BFE\uFF08\u7FFB\u8F6C\u8BFE\uFF09-\u5B66\u4E60\u811A\u672C",
        matches: [["\u6821\u5185\u8BFE\u5B66\u4E60\u9875\u9762", "zhihuishu.com/aidedteaching/sourceLearning"]],
        namespace: "zhs.xnk.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["\u7AE0\u8282\u6D4B\u8BD5\u8BF7\u5927\u5BB6\u89C2\u770B\u5B8C\u89C6\u9891\u540E\u624B\u52A8\u6253\u5F00\u3002", "\u6B64\u8BFE\u7A0B\u4E0D\u80FD\u4F7F\u7528\u500D\u901F\u3002"]).outerHTML
          },
          restudy,
          volume
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
          const finish = () => {
            lib.$modal.alert({
              content: "\u68C0\u6D4B\u5230\u5F53\u524D\u89C6\u9891\u5168\u90E8\u64AD\u653E\u5B8C\u6BD5\uFF0C\u5982\u679C\u8FD8\u6709\u672A\u5B8C\u6210\u7684\u89C6\u9891\u8BF7\u5237\u65B0\u91CD\u8BD5\uFF0C\u6216\u8005\u6253\u5F00\u590D\u4E60\u6A21\u5F0F\u3002"
            });
            CommonProject.scripts.settings.methods.notificationBySetting(
              "\u68C0\u6D4B\u5230\u5F53\u524D\u89C6\u9891\u5168\u90E8\u64AD\u653E\u5B8C\u6BD5\uFF0C\u5982\u679C\u8FD8\u6709\u672A\u5B8C\u6210\u7684\u89C6\u9891\u8BF7\u5237\u65B0\u91CD\u8BD5\uFF0C\u6216\u8005\u6253\u5F00\u590D\u4E60\u6A21\u5F0F\u3002",
              { duration: 0, extraTitle: "\u77E5\u9053\u667A\u6167\u6811\u5B66\u4E60\u811A\u672C" }
            );
          };
          this.onConfigChange("volume", (curr) => {
            state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
          });
          const nextElement = () => {
            const list = document.querySelectorAll(".file-item");
            let passActive = false;
            for (let index = 0; index < list.length; index++) {
              const item = list[index];
              const finish2 = !!item.querySelector(".icon-finish");
              const needsStudy = !finish2 || finish2 && this.cfg.restudy;
              if (item.classList.contains("active")) {
                if (needsStudy) {
                  return list[index + 1];
                } else {
                  passActive = true;
                }
              }
              if (passActive && needsStudy) {
                return item;
              }
            }
          };
          const interval = setInterval(async () => {
            var _a, _b;
            const next2 = nextElement();
            if (next2) {
              clearInterval(interval);
              if (document.querySelector("#mediaPlayer")) {
                (_a = document.querySelector(".file-item.active")) == null ? void 0 : _a.scrollIntoView();
                const name = ((_b = next2.querySelector("#sourceTit")) == null ? void 0 : _b.textContent) || "\u672A\u77E5\u89C6\u9891";
                lib.$message.info("\u6B63\u5728\u5B66\u4E60\uFF1A" + name);
                watchXnk({ volume: this.cfg.volume }, () => {
                  lib.$message.info("\u89C6\u9891\u5B8C\u6210\u64AD\u653E\uFF0C\u6B63\u5728\u81EA\u52A8\u8DF3\u8F6C\u4E0B\u4E00\u8282\uFF01");
                  setTimeout(() => {
                    const next22 = nextElement();
                    if (next22)
                      next22.click();
                  }, 3e3);
                });
              } else {
                setTimeout(() => {
                  const msg = "\u672A\u627E\u5230\u5B66\u4E60\u89C6\u9891\uFF0C\u5373\u5C06\u81EA\u52A8\u4E0B\u4E00\u8282\uFF01";
                  lib.$message.warn(msg);
                  $console.warn(msg);
                  const next22 = nextElement();
                  if (next22)
                    next22.click();
                }, 3e3);
              }
            }
          }, 1e3);
          setTimeout(() => {
            if (!nextElement()) {
              finish();
              clearInterval(interval);
            }
          }, 10 * 1e3);
        }
      }),
      "xnk-work": new lib.Script({
        name: "\u270D\uFE0F \u6821\u5185\u8BFE-\u4F5C\u4E1A\u8003\u8BD5\u811A\u672C",
        matches: [
          ["\u6821\u5185\u8BFE\u4F5C\u4E1A\u9875\u9762", "zhihuishu.com/atHomeworkExam/stu/homeworkQ/exerciseList"],
          ["\u6821\u5185\u8BFE\u8003\u8BD5\u9875\u9762", "zhihuishu.com/atHomeworkExam/stu/examQ/examexercise"]
        ],
        namespace: "zhs.xnk.work",
        configs: { notes: workNotes },
        async oncomplete() {
          commonWork(this, {
            workerProvider: xnkWork
          });
        }
      })
    }
  });
  async function watch(processor, options, actions) {
    const reload = async (e) => {
      $console.error(e);
      if (options.reloadWhenError) {
        const msg = "\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u5373\u5C06\u5237\u65B0\u9875\u9762\u3002";
        const reload_count = await lib.$store.getTab("reload-count");
        if (reload_count && reload_count > 3) {
          const msg2 = "\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\u5BFC\u81F4\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u6B21\u6570\u8D85\u8FC73\u6B21\uFF0C\u8BF7\u5C1D\u8BD5\u5173\u95ED\u9875\u9762\u91CD\u65B0\u6253\u5F00\uFF0C\u6216\u8005\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\uFF01";
          await lib.$store.setTab("reload-count", 0);
          lib.$message.error({ content: msg2, duration: 0 });
          $console.log(msg2);
          return;
        }
        await lib.$store.setTab("reload-count", (reload_count != null ? reload_count : 0) + 1);
        lib.$message.error(msg);
        $console.log(msg);
        setTimeout(() => {
          actions.reload();
        }, 5e3);
      } else {
        const msg = "\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u5373\u5C06\u8DF3\u8FC7\u3002";
        lib.$message.error(msg);
        $console.log(msg);
        actions.onended({ next: true });
      }
    };
    try {
      const media = await waitForMedia({ timeout: 10 * 1e3 });
      if (media) {
        media.currentTime = 1;
        media.volume = options.volume;
      }
    } catch (e) {
      return await reload(e);
    }
    const set = async () => {
      try {
        await processor.switchLine(options.definition || "line1bq");
        await lib.$.sleep(1e3);
        await processor.switchPlaybackRate(options.playbackRate);
        const media = await waitForMedia({ timeout: 10 * 1e3 });
        state$4.study.currentMedia = media;
        if (media) {
          media.currentTime = 1;
          media.volume = options.volume;
        }
        return state$4.study.currentMedia;
      } catch (e) {
        return await reload(e);
      }
    };
    const video = await set();
    if (!video) {
      return;
    }
    const videoCheckInterval = setInterval(async () => {
      if ((video == null ? void 0 : video.isConnected) === false) {
        clearInterval(videoCheckInterval);
        lib.$message.info({ content: "\u68C0\u6D4B\u5230\u89C6\u9891\u5207\u6362\u4E2D..." });
        actions.onended({ next: false });
      }
    }, 3e3);
    playMedia(() => video == null ? void 0 : video.play());
    video.onpause = async () => {
      if (!(video == null ? void 0 : video.ended) && state$4.study.stop === false) {
        await waitForCaptcha();
        await lib.$.sleep(1e3);
        video == null ? void 0 : video.play();
      }
    };
    video.onended = () => {
      clearInterval(videoCheckInterval);
      actions.onended({ next: true });
    };
  }
  async function watchXnk(options, onended) {
    const media = await waitForMedia();
    media.volume = options.volume;
    media.currentTime = 1;
    state$4.study.currentMedia = media;
    playMedia(() => media == null ? void 0 : media.play());
    media.onpause = async () => {
      if (!(media == null ? void 0 : media.ended)) {
        await lib.$.sleep(1e3);
        media == null ? void 0 : media.play();
      }
    };
    media.onended = () => {
      onended();
    };
  }
  function checkForCaptcha(update) {
    let modal2;
    let notified = false;
    return setInterval(() => {
      if (lib.$el(".yidun_popup")) {
        update(true);
        if (modal2 === void 0) {
          modal2 = lib.$modal.alert({ content: "\u5F53\u524D\u68C0\u6D4B\u5230\u9A8C\u8BC1\u7801\uFF0C\u8BF7\u8F93\u5165\u540E\u65B9\u53EF\u7EE7\u7EED\u8FD0\u884C\u3002" });
        }
        if (!notified) {
          notified = true;
          CommonProject.scripts.settings.methods.notificationBySetting(
            "\u667A\u6167\u6811\u811A\u672C\uFF1A\u5F53\u524D\u68C0\u6D4B\u5230\u9A8C\u8BC1\u7801\uFF0C\u8BF7\u8F93\u5165\u540E\u65B9\u53EF\u7EE7\u7EED\u8FD0\u884C\u3002",
            { duration: 0 }
          );
        }
      } else {
        if (modal2) {
          update(false);
          modal2.remove();
          modal2 = void 0;
        }
      }
    }, 1e3);
  }
  function waitForCaptcha() {
    const popup = getPopupCaptcha();
    if (popup) {
      lib.$message.warn({ content: "\u5F53\u524D\u68C0\u6D4B\u5230\u9A8C\u8BC1\u7801\uFF0C\u8BF7\u8F93\u5165\u540E\u65B9\u53EF\u7EE7\u7EED\u8FD0\u884C\u3002" });
      CommonProject.scripts.settings.methods.notificationBySetting(
        "\u667A\u6167\u6811\u811A\u672C\uFF1A\u5F53\u524D\u68C0\u6D4B\u5230\u9A8C\u8BC1\u7801\uFF0C\u8BF7\u8F93\u5165\u540E\u65B9\u53EF\u7EE7\u7EED\u8FD0\u884C\u3002",
        { duration: 0 }
      );
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          const popup2 = getPopupCaptcha();
          if (popup2 === null) {
            clearInterval(interval);
            resolve();
          }
        }, 1e3);
      });
    }
  }
  function getPopupCaptcha() {
    return document.querySelector(".yidun_popup");
  }
  function gxkWorkAndExam(workInfo, {
    answererWrappers,
    period,
    thread,
    stopSecondWhenFinish,
    redundanceWordsText,
    answerSeparators,
    answerMatchMode
  }) {
    var _a, _b, _c;
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zhs-gxk"
    });
    const allExamParts = ((_c = ((_b = (_a = workInfo == null ? void 0 : workInfo.rt) == null ? void 0 : _a.examBase) == null ? void 0 : _b.workExamParts) || []) == null ? void 0 : _c.map((p) => p.questionDtos).flat()) || [];
    const titleTransform = (_, index) => {
      var _a2;
      const div = lib.h("div");
      div.innerHTML = ((_a2 = allExamParts[index]) == null ? void 0 : _a2.name) || "\u9898\u76EE\u8BFB\u53D6\u5931\u8D25";
      return removeRedundantWords(
        optimizationElementWithImage(div, true).innerText || "",
        redundanceWordsText.split("\n")
      );
    };
    let request_index = 0;
    const worker = new OCSWorker({
      root: ".examPaper_subject",
      elements: {
        title: ".subject_describe > div,.smallStem_describe > div:nth-child(2)",
        options: (root2) => lib.$$el(".subject_node .nodeLab", root2).map((t2) => {
          for (const img of Array.from(t2.querySelectorAll(".node_detail img"))) {
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            createUnVisibleTextOfImage(img);
          }
          return t2;
        })
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(void 0, request_index++);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: {
        type(ctx) {
          var _a2, _b2, _c2, _d;
          const type = (_d = (_c2 = (_b2 = (_a2 = ctx.elements.title[0].parentElement) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b2.querySelector(".subject_type")) == null ? void 0 : _c2.textContent) == null ? void 0 : _d.trim();
          if (type == null ? void 0 : type.includes("\u5355\u9009\u9898")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("\u591A\u9009\u9898")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("\u5224\u65AD\u9898")) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("\u586B\u7A7A\u9898")) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option) {
          var _a2;
          if (type === "judgement" || type === "single" || type === "multiple") {
            if (!((_a2 = option.querySelector("input")) == null ? void 0 : _a2.checked)) {
              option.click();
              await lib.$.sleep(200);
            }
          } else if (type === "completion" && answer.trim()) {
            const text = option.querySelector("textarea");
            if (text) {
              text.value = answer;
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(curr, index, res) {
        var _a2, _b2;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        if ((_a2 = curr.result) == null ? void 0 : _a2.finish) {
          const title = (_b2 = allExamParts[index]) == null ? void 0 : _b2.name;
          if (title) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([curr], (_, __) => title)
            );
          }
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    checkForCaptcha((hasCaptcha) => {
      if (hasCaptcha) {
        worker.emit("stop");
      } else {
        worker.emit("continuate");
      }
    });
    worker.doWork().then(async (res) => {
      var _a2;
      if (worker.isClose === true) {
        return;
      }
      lib.$message.success({ content: `\u7B54\u9898\u5B8C\u6210\uFF0C\u5C06\u7B49\u5F85 ${stopSecondWhenFinish} \u79D2\u540E\u8FDB\u884C\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002` });
      await lib.$.sleep(stopSecondWhenFinish * 1e3);
      if (worker.isClose === true) {
        return;
      }
      for (let index = 0; index < worker.totalQuestionCount; index++) {
        if (worker.isClose === true) {
          return;
        }
        const modal2 = lib.$modal.alert({
          content: "\u6B63\u5728\u4FDD\u5B58\u9898\u76EE\u4E2D\uFF08\u5FC5\u987B\u4FDD\u5B58\uFF0C\u5426\u5219\u586B\u5199\u7684\u7B54\u6848\u65E0\u6548\uFF09\uFF0C<br>\u8BF7\u52FF\u64CD\u4F5C...",
          confirmButton: null
        });
        await waitForCaptcha();
        await lib.$.sleep(2e3);
        (_a2 = document.querySelectorAll(".answerCard_list ul li").item(index)) == null ? void 0 : _a2.click();
        await lib.$.sleep(200);
        const next2 = lib.$el("div.examPaper_box > div.switch-btn-box > button:nth-child(2)");
        if (next2) {
          next2.click();
        } else {
          $console.error("\u672A\u627E\u5230\u4E0B\u4E00\u9875\u6309\u94AE\u3002");
        }
        modal2 == null ? void 0 : modal2.remove();
      }
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: "\u7B54\u9898\u7A0B\u5E8F\u53D1\u751F\u9519\u8BEF : " + err.message, duration: 0 });
    });
    return worker;
  }
  function xnkWork({ answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "\u5F00\u59CB\u4F5C\u4E1A" });
    CommonProject.scripts.workResults.methods.init();
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    const worker = new OCSWorker({
      root: ".questionBox",
      elements: {
        title: ".questionContent",
        options: ".optionUl label",
        questionTit: ".questionTit"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: {
        async handler(type, answer, option, ctx) {
          var _a;
          if (type === "judgement" || type === "single" || type === "multiple") {
            if (((_a = option.querySelector("input")) == null ? void 0 : _a.checked) === false) {
              option.click();
              await lib.$.sleep(200);
            }
          } else if (type === "completion" && answer.trim()) {
            const text = option.querySelector("textarea");
            if (text) {
              text.value = answer;
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          workResults.push(...simplifyWorkResult([current], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkState({
          totalQuestionCount,
          requestedCount,
          resolvedCount
        });
      }
    });
    const getBtn = () => document.querySelector("span.Topicswitchingbtn:nth-child(2)");
    let next2 = getBtn();
    (async () => {
      while (next2 && worker.isClose === false) {
        await worker.doWork();
        await lib.$.sleep(1e3);
        next2 = getBtn();
        next2 == null ? void 0 : next2.click();
        await lib.$.sleep(1e3);
      }
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "zhs-xnk";
    })();
    return worker;
  }
  function smartWork(remotePage, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "\u5F00\u59CB\u4F5C\u4E1A" });
    CommonProject.scripts.workResults.methods.init();
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    const worker = new OCSWorker({
      root: ".questionContent",
      elements: {
        title: ".questionName .centent-pre",
        options: ".radio-view li.clearfix, .checkbox-views label.el-checkbox"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: {
        type(ctx) {
          var _a, _b, _c;
          const type = (_c = (_b = (_a = ctx.elements.title[0]) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.querySelector(".letterSortNum")) == null ? void 0 : _c.textContent;
          if (type == null ? void 0 : type.includes("\u5355\u9009\u9898")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("\u591A\u9009\u9898")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("\u5224\u65AD\u9898")) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("\u586B\u7A7A\u9898")) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option, ctx) {
          if (type === "judgement" || type === "single" || type === "multiple") {
            let label = null;
            if (type === "multiple") {
              label = option.querySelector(".el-checkbox__input:not(.is-checked)");
            } else {
              label = option.querySelector("i.iconfont:not(.checkedIcon)");
            }
            if (label) {
              if (remotePage) {
                await remotePage.click(label);
              } else {
                label.click();
              }
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          workResults.push(...simplifyWorkResult([current], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkState({
          totalQuestionCount,
          requestedCount,
          resolvedCount
        });
      }
    });
    const getNextBtn = () => document.querySelector(".next-topic.next-t");
    let next2 = getNextBtn();
    (async () => {
      const first = document.querySelector('[role="treeitem"] .font-sec-style-node');
      if (first) {
        if (remotePage)
          await remotePage.click(first);
        else
          first.click();
        await lib.$.sleep(3e3);
      }
      while (next2 && worker.isClose === false) {
        await worker.doWork({ enable_debug: true });
        next2 = getNextBtn();
        if (next2) {
          await lib.$.sleep(1e3);
          if (remotePage)
            await remotePage.click(next2);
          else
            next2.click();
          await lib.$.sleep(1e3);
        }
      }
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "zhs-smart";
    })();
    return worker;
  }
  function fusioncourseWork(remotePage, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "\u5F00\u59CB\u4F5C\u4E1A" });
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zhs-fusion"
    });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const worker = new OCSWorker({
      root: ".exam-item",
      elements: {
        type: ".quest-type",
        title: ".quest-title .option-name",
        options: "label"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: {
        type(ctx) {
          const type = ctx.elements.type[0].textContent;
          if (type == null ? void 0 : type.includes("\u5355\u9009\u9898")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("\u591A\u9009\u9898")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("\u5224\u65AD\u9898")) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("\u586B\u7A7A\u9898")) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option, ctx) {
          if (type === "judgement" || type === "single" || type === "multiple") {
            let label = null;
            if (type === "multiple") {
              label = option.querySelector(".el-checkbox__input:not(.is-checked)");
            } else {
              label = option.querySelector(".radio__input:not(.is-checked)");
            }
            if (label) {
              label.click();
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    worker.doWork().then(async (res) => {
      if (worker.isClose === true) {
        return;
      }
      if (worker.isClose === true) {
        return;
      }
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: "\u7B54\u9898\u7A0B\u5E8F\u53D1\u751F\u9519\u8BEF : " + err.message, duration: 0 });
    });
    return worker;
  }
  function optimizeSecond(second) {
    if (second > 3600) {
      return `${Math.floor(second / 3600)}\u5C0F\u65F6${Math.floor(second % 3600 / 60)}\u5206\u949F`;
    } else if (second > 60) {
      return `${Math.floor(second / 60)}\u5206\u949F${second % 60}\u79D2`;
    } else {
      return `${second}\u79D2`;
    }
  }
  function autoStop(stopTime) {
    var _a, _b;
    clearInterval(state$4.study.stopInterval);
    (_a = state$4.study.stopMessage) == null ? void 0 : _a.remove();
    if (stopTime !== "0") {
      let stopCount = parseFloat(stopTime) * 60 * 60;
      state$4.study.stopInterval = setInterval(() => {
        var _a2;
        if (stopCount > 0) {
          if (getPopupCaptcha() === null) {
            stopCount--;
          }
        } else {
          clearInterval(state$4.study.stopInterval);
          state$4.study.stop = true;
          (_a2 = lib.$el("video")) == null ? void 0 : _a2.pause();
          lib.$modal.alert({ content: "\u811A\u672C\u6682\u505C\uFF0C\u5DF2\u83B7\u5F97\u4ECA\u65E5\u5E73\u65F6\u5206\uFF0C\u5982\u9700\u7EE7\u7EED\u89C2\u770B\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002" });
        }
      }, 1e3);
      const val = ((_b = ZHSProject.scripts["gxk-study"].configs.stopTime.options.find((t2) => t2[0] === stopTime)) == null ? void 0 : _b[0]) || "0";
      const date = new Date();
      date.setMinutes(date.getMinutes() + parseFloat(val) * 60);
      state$4.study.stopMessage = lib.$message.info({
        duration: 0,
        content: `\u5728 ${date.toLocaleTimeString()} \u811A\u672C\u5C06\u81EA\u52A8\u6682\u505C`
      });
    }
  }
  function fixProcessBar() {
    const bar = document.querySelector(".controlsBar");
    if (bar) {
      bar.style.display = "block";
    }
  }
  function closeDialogRead() {
    const div = document.querySelector(".dialog-read");
    if (div) {
      div.style.display = "none";
    }
  }
  function finishAlert() {
    lib.$modal.alert({
      content: "\u68C0\u6D4B\u5230\u5F53\u524D\u89C6\u9891\u5168\u90E8\u64AD\u653E\u5B8C\u6BD5\uFF0C\u5982\u679C\u8FD8\u6709\u672A\u5B8C\u6210\u7684\u89C6\u9891\u8BF7\u5237\u65B0\u91CD\u8BD5\uFF0C\u6216\u8005\u6253\u5F00\u590D\u4E60\u6A21\u5F0F\u3002"
    });
  }
  var md5$1 = { exports: {} };
  var crypt = { exports: {} };
  (function() {
    var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt$1 = {
      rotl: function(n, b) {
        return n << b | n >>> 32 - b;
      },
      rotr: function(n, b) {
        return n << 32 - b | n >>> b;
      },
      endian: function(n) {
        if (n.constructor == Number) {
          return crypt$1.rotl(n, 8) & 16711935 | crypt$1.rotl(n, 24) & 4278255360;
        }
        for (var i = 0; i < n.length; i++)
          n[i] = crypt$1.endian(n[i]);
        return n;
      },
      randomBytes: function(n) {
        for (var bytes = []; n > 0; n--)
          bytes.push(Math.floor(Math.random() * 256));
        return bytes;
      },
      bytesToWords: function(bytes) {
        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
          words[b >>> 5] |= bytes[i] << 24 - b % 32;
        return words;
      },
      wordsToBytes: function(words) {
        for (var bytes = [], b = 0; b < words.length * 32; b += 8)
          bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
        return bytes;
      },
      bytesToHex: function(bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 15).toString(16));
        }
        return hex.join("");
      },
      hexToBytes: function(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2)
          bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
      },
      bytesToBase64: function(bytes) {
        for (var base64 = [], i = 0; i < bytes.length; i += 3) {
          var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
          for (var j = 0; j < 4; j++)
            if (i * 8 + j * 6 <= bytes.length * 8)
              base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
            else
              base64.push("=");
        }
        return base64.join("");
      },
      base64ToBytes: function(base64) {
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
        for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
          if (imod4 == 0)
            continue;
          bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
        }
        return bytes;
      }
    };
    crypt.exports = crypt$1;
  })();
  var charenc = {
    utf8: {
      stringToBytes: function(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      bytesToString: function(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    bin: {
      stringToBytes: function(str) {
        for (var bytes = [], i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return bytes;
      },
      bytesToString: function(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++)
          str.push(String.fromCharCode(bytes[i]));
        return str.join("");
      }
    }
  };
  var charenc_1 = charenc;
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  var isBuffer_1 = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
  };
  function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
  }
  (function() {
    var crypt$1 = crypt.exports, utf8 = charenc_1.utf8, isBuffer2 = isBuffer_1, bin = charenc_1.bin, md52 = function(message2, options) {
      if (message2.constructor == String)
        if (options && options.encoding === "binary")
          message2 = bin.stringToBytes(message2);
        else
          message2 = utf8.stringToBytes(message2);
      else if (isBuffer2(message2))
        message2 = Array.prototype.slice.call(message2, 0);
      else if (!Array.isArray(message2) && message2.constructor !== Uint8Array)
        message2 = message2.toString();
      var m = crypt$1.bytesToWords(message2), l = message2.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
      for (var i = 0; i < m.length; i++) {
        m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
      }
      m[l >>> 5] |= 128 << l % 32;
      m[(l + 64 >>> 9 << 4) + 14] = l;
      var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
      for (var i = 0; i < m.length; i += 16) {
        var aa = a, bb = b, cc = c, dd = d;
        a = FF(a, b, c, d, m[i + 0], 7, -680876936);
        d = FF(d, a, b, c, m[i + 1], 12, -389564586);
        c = FF(c, d, a, b, m[i + 2], 17, 606105819);
        b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
        a = FF(a, b, c, d, m[i + 4], 7, -176418897);
        d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
        c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
        b = FF(b, c, d, a, m[i + 7], 22, -45705983);
        a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
        d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
        c = FF(c, d, a, b, m[i + 10], 17, -42063);
        b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
        a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
        d = FF(d, a, b, c, m[i + 13], 12, -40341101);
        c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
        b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
        a = GG(a, b, c, d, m[i + 1], 5, -165796510);
        d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
        c = GG(c, d, a, b, m[i + 11], 14, 643717713);
        b = GG(b, c, d, a, m[i + 0], 20, -373897302);
        a = GG(a, b, c, d, m[i + 5], 5, -701558691);
        d = GG(d, a, b, c, m[i + 10], 9, 38016083);
        c = GG(c, d, a, b, m[i + 15], 14, -660478335);
        b = GG(b, c, d, a, m[i + 4], 20, -405537848);
        a = GG(a, b, c, d, m[i + 9], 5, 568446438);
        d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
        c = GG(c, d, a, b, m[i + 3], 14, -187363961);
        b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
        a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
        d = GG(d, a, b, c, m[i + 2], 9, -51403784);
        c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
        b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
        a = HH(a, b, c, d, m[i + 5], 4, -378558);
        d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
        c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
        b = HH(b, c, d, a, m[i + 14], 23, -35309556);
        a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
        d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
        c = HH(c, d, a, b, m[i + 7], 16, -155497632);
        b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
        a = HH(a, b, c, d, m[i + 13], 4, 681279174);
        d = HH(d, a, b, c, m[i + 0], 11, -358537222);
        c = HH(c, d, a, b, m[i + 3], 16, -722521979);
        b = HH(b, c, d, a, m[i + 6], 23, 76029189);
        a = HH(a, b, c, d, m[i + 9], 4, -640364487);
        d = HH(d, a, b, c, m[i + 12], 11, -421815835);
        c = HH(c, d, a, b, m[i + 15], 16, 530742520);
        b = HH(b, c, d, a, m[i + 2], 23, -995338651);
        a = II(a, b, c, d, m[i + 0], 6, -198630844);
        d = II(d, a, b, c, m[i + 7], 10, 1126891415);
        c = II(c, d, a, b, m[i + 14], 15, -1416354905);
        b = II(b, c, d, a, m[i + 5], 21, -57434055);
        a = II(a, b, c, d, m[i + 12], 6, 1700485571);
        d = II(d, a, b, c, m[i + 3], 10, -1894986606);
        c = II(c, d, a, b, m[i + 10], 15, -1051523);
        b = II(b, c, d, a, m[i + 1], 21, -2054922799);
        a = II(a, b, c, d, m[i + 8], 6, 1873313359);
        d = II(d, a, b, c, m[i + 15], 10, -30611744);
        c = II(c, d, a, b, m[i + 6], 15, -1560198380);
        b = II(b, c, d, a, m[i + 13], 21, 1309151649);
        a = II(a, b, c, d, m[i + 4], 6, -145523070);
        d = II(d, a, b, c, m[i + 11], 10, -1120210379);
        c = II(c, d, a, b, m[i + 2], 15, 718787259);
        b = II(b, c, d, a, m[i + 9], 21, -343485551);
        a = a + aa >>> 0;
        b = b + bb >>> 0;
        c = c + cc >>> 0;
        d = d + dd >>> 0;
      }
      return crypt$1.endian([a, b, c, d]);
    };
    md52._ff = function(a, b, c, d, x, s, t2) {
      var n = a + (b & c | ~b & d) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._gg = function(a, b, c, d, x, s, t2) {
      var n = a + (b & d | c & ~d) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._hh = function(a, b, c, d, x, s, t2) {
      var n = a + (b ^ c ^ d) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._ii = function(a, b, c, d, x, s, t2) {
      var n = a + (c ^ (b | ~d)) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._blocksize = 16;
    md52._digestsize = 16;
    md5$1.exports = function(message2, options) {
      if (message2 === void 0 || message2 === null)
        throw new Error("Illegal argument " + message2);
      var digestbytes = crypt$1.wordsToBytes(md52(message2, options));
      return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt$1.bytesToHex(digestbytes);
    };
  })();
  var md5 = md5$1.exports;
  var Typr = {};
  Typr.parse = function(buff) {
    var bin = Typr._bin;
    var data = new Uint8Array(buff);
    var offset = 0;
    bin.readFixed(data, offset);
    offset += 4;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var tags = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "];
    var obj = { _data: data };
    var tabs = {};
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      var length = bin.readUint(data, offset);
      offset += 4;
      tabs[tag] = { offset: toffset, length };
    }
    for (var i = 0; i < tags.length; i++) {
      var t2 = tags[i];
      if (tabs[t2])
        obj[t2.trim()] = Typr[t2.trim()].parse(data, tabs[t2].offset, tabs[t2].length, obj);
    }
    return obj;
  };
  Typr._tabOffset = function(data, tab) {
    var bin = Typr._bin;
    var numTables = bin.readUshort(data, 4);
    var offset = 12;
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      if (tag == tab)
        return toffset;
    }
    return 0;
  };
  Typr._bin = { readFixed: function(data, o) {
    return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / (256 * 256 + 4);
  }, readF2dot14: function(data, o) {
    var num = Typr._bin.readShort(data, o);
    return num / 16384;
  }, readInt: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[0] = buff[p + 3];
    a[1] = buff[p + 2];
    a[2] = buff[p + 1];
    a[3] = buff[p];
    return Typr._bin.t.int32[0];
  }, readInt8: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[0] = buff[p];
    return Typr._bin.t.int8[0];
  }, readShort: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[1] = buff[p];
    a[0] = buff[p + 1];
    return Typr._bin.t.int16[0];
  }, readUshort: function(buff, p) {
    return buff[p] << 8 | buff[p + 1];
  }, readUshorts: function(buff, p, len) {
    var arr = [];
    for (var i = 0; i < len; i++)
      arr.push(Typr._bin.readUshort(buff, p + i * 2));
    return arr;
  }, readUint: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[3] = buff[p];
    a[2] = buff[p + 1];
    a[1] = buff[p + 2];
    a[0] = buff[p + 3];
    return Typr._bin.t.uint32[0];
  }, readUint64: function(buff, p) {
    return Typr._bin.readUint(buff, p) * (4294967295 + 1) + Typr._bin.readUint(buff, p + 4);
  }, readASCII: function(buff, p, l) {
    var s = "";
    for (var i = 0; i < l; i++)
      s += String.fromCharCode(buff[p + i]);
    return s;
  }, readUnicode: function(buff, p, l) {
    var s = "";
    for (var i = 0; i < l; i++) {
      var c = buff[p++] << 8 | buff[p++];
      s += String.fromCharCode(c);
    }
    return s;
  }, _tdec: window["TextDecoder"] ? new window["TextDecoder"]() : null, readUTF8: function(buff, p, l) {
    var tdec = Typr._bin._tdec;
    if (tdec && p == 0 && l == buff.length)
      return tdec["decode"](buff);
    return Typr._bin.readASCII(buff, p, l);
  }, readBytes: function(buff, p, l) {
    var arr = [];
    for (var i = 0; i < l; i++)
      arr.push(buff[p + i]);
    return arr;
  }, readASCIIArray: function(buff, p, l) {
    var s = [];
    for (var i = 0; i < l; i++)
      s.push(String.fromCharCode(buff[p + i]));
    return s;
  } };
  Typr._bin.t = { buff: new ArrayBuffer(8) };
  Typr._bin.t.int8 = new Int8Array(Typr._bin.t.buff);
  Typr._bin.t.uint8 = new Uint8Array(Typr._bin.t.buff);
  Typr._bin.t.int16 = new Int16Array(Typr._bin.t.buff);
  Typr._bin.t.uint16 = new Uint16Array(Typr._bin.t.buff);
  Typr._bin.t.int32 = new Int32Array(Typr._bin.t.buff);
  Typr._bin.t.uint32 = new Uint32Array(Typr._bin.t.buff);
  Typr._lctf = {};
  Typr._lctf.parse = function(data, offset, length, font, subt) {
    var bin = Typr._bin;
    var obj = {};
    var offset0 = offset;
    bin.readFixed(data, offset);
    offset += 4;
    var offScriptList = bin.readUshort(data, offset);
    offset += 2;
    var offFeatureList = bin.readUshort(data, offset);
    offset += 2;
    var offLookupList = bin.readUshort(data, offset);
    offset += 2;
    obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList);
    obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList);
    obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt);
    return obj;
  };
  Typr._lctf.readLookupList = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
      obj.push(lut);
    }
    return obj;
  };
  Typr._lctf.readLookupTable = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = { tabs: [] };
    obj.ltype = bin.readUshort(data, offset);
    offset += 2;
    obj.flag = bin.readUshort(data, offset);
    offset += 2;
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var tab = subt(data, obj.ltype, offset0 + noff);
      obj.tabs.push(tab);
    }
    return obj;
  };
  Typr._lctf.numOfOnes = function(n) {
    var num = 0;
    for (var i = 0; i < 32; i++)
      if ((n >>> i & 1) != 0)
        num++;
    return num;
  };
  Typr._lctf.readClassDef = function(data, offset) {
    var bin = Typr._bin;
    var obj = [];
    var format = bin.readUshort(data, offset);
    offset += 2;
    if (format == 1) {
      var startGlyph = bin.readUshort(data, offset);
      offset += 2;
      var glyphCount = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < glyphCount; i++) {
        obj.push(startGlyph + i);
        obj.push(startGlyph + i);
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    if (format == 2) {
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    return obj;
  };
  Typr._lctf.getInterval = function(tab, val) {
    for (var i = 0; i < tab.length; i += 3) {
      var start2 = tab[i], end = tab[i + 1];
      tab[i + 2];
      if (start2 <= val && val <= end)
        return i;
    }
    return -1;
  };
  Typr._lctf.readValueRecord = function(data, offset, valFmt) {
    var bin = Typr._bin;
    var arr = [];
    arr.push(valFmt & 1 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 1 ? 2 : 0;
    arr.push(valFmt & 2 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 2 ? 2 : 0;
    arr.push(valFmt & 4 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 4 ? 2 : 0;
    arr.push(valFmt & 8 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 8 ? 2 : 0;
    return arr;
  };
  Typr._lctf.readCoverage = function(data, offset) {
    var bin = Typr._bin;
    var cvg = {};
    cvg.fmt = bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    if (cvg.fmt == 1)
      cvg.tab = bin.readUshorts(data, offset, count);
    if (cvg.fmt == 2)
      cvg.tab = bin.readUshorts(data, offset, count * 3);
    return cvg;
  };
  Typr._lctf.coverageIndex = function(cvg, val) {
    var tab = cvg.tab;
    if (cvg.fmt == 1)
      return tab.indexOf(val);
    if (cvg.fmt == 2) {
      var ind = Typr._lctf.getInterval(tab, val);
      if (ind != -1)
        return tab[ind + 2] + (val - tab[ind]);
    }
    return -1;
  };
  Typr._lctf.readFeatureList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      obj.push({ tag: tag.trim(), tab: Typr._lctf.readFeatureTable(data, offset0 + noff) });
    }
    return obj;
  };
  Typr._lctf.readFeatureTable = function(data, offset) {
    var bin = Typr._bin;
    bin.readUshort(data, offset);
    offset += 2;
    var lookupCount = bin.readUshort(data, offset);
    offset += 2;
    var indices = [];
    for (var i = 0; i < lookupCount; i++)
      indices.push(bin.readUshort(data, offset + 2 * i));
    return indices;
  };
  Typr._lctf.readScriptList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
    }
    return obj;
  };
  Typr._lctf.readScriptTable = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var defLangSysOff = bin.readUshort(data, offset);
    offset += 2;
    obj.default = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
    var langSysCount = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < langSysCount; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var langSysOff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
    }
    return obj;
  };
  Typr._lctf.readLangSysTable = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    obj.reqFeature = bin.readUshort(data, offset);
    offset += 2;
    var featureCount = bin.readUshort(data, offset);
    offset += 2;
    obj.features = bin.readUshorts(data, offset, featureCount);
    return obj;
  };
  Typr.CFF = {};
  Typr.CFF.parse = function(data, offset, length) {
    var bin = Typr._bin;
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    var ninds = [];
    offset = Typr.CFF.readIndex(data, offset, ninds);
    var names = [];
    for (var i = 0; i < ninds.length - 1; i++)
      names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
    offset += ninds[ninds.length - 1];
    var tdinds = [];
    offset = Typr.CFF.readIndex(data, offset, tdinds);
    var topDicts = [];
    for (var i = 0; i < tdinds.length - 1; i++)
      topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
    offset += tdinds[tdinds.length - 1];
    var topdict = topDicts[0];
    var sinds = [];
    offset = Typr.CFF.readIndex(data, offset, sinds);
    var strings = [];
    for (var i = 0; i < sinds.length - 1; i++)
      strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
    offset += sinds[sinds.length - 1];
    Typr.CFF.readSubrs(data, offset, topdict);
    if (topdict.CharStrings) {
      offset = topdict.CharStrings;
      var sinds = [];
      offset = Typr.CFF.readIndex(data, offset, sinds);
      var cstr = [];
      for (var i = 0; i < sinds.length - 1; i++)
        cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
      topdict.CharStrings = cstr;
    }
    if (topdict.Encoding)
      topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length);
    if (topdict.charset)
      topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length);
    if (topdict.Private) {
      offset = topdict.Private[1];
      topdict.Private = Typr.CFF.readDict(data, offset, offset + topdict.Private[0]);
      if (topdict.Private.Subrs)
        Typr.CFF.readSubrs(data, offset + topdict.Private.Subrs, topdict.Private);
    }
    var obj = {};
    for (var p in topdict) {
      if (["FamilyName", "FullName", "Notice", "version", "Copyright"].indexOf(p) != -1)
        obj[p] = strings[topdict[p] - 426 + 35];
      else
        obj[p] = topdict[p];
    }
    return obj;
  };
  Typr.CFF.readSubrs = function(data, offset, obj) {
    var bin = Typr._bin;
    var gsubinds = [];
    offset = Typr.CFF.readIndex(data, offset, gsubinds);
    var bias, nSubrs = gsubinds.length;
    if (nSubrs < 1240)
      bias = 107;
    else if (nSubrs < 33900)
      bias = 1131;
    else
      bias = 32768;
    obj.Bias = bias;
    obj.Subrs = [];
    for (var i = 0; i < gsubinds.length - 1; i++)
      obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
  };
  Typr.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0];
  Typr.CFF.glyphByUnicode = function(cff, code) {
    for (var i = 0; i < cff.charset.length; i++)
      if (cff.charset[i] == code)
        return i;
    return -1;
  };
  Typr.CFF.glyphBySE = function(cff, charcode) {
    if (charcode < 0 || charcode > 255)
      return -1;
    return Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
  };
  Typr.CFF.readEncoding = function(data, offset, num) {
    Typr._bin;
    var array = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      var nCodes = data[offset];
      offset++;
      for (var i = 0; i < nCodes; i++)
        array.push(data[offset + i]);
    } else
      throw "error: unknown encoding format: " + format;
    return array;
  };
  Typr.CFF.readCharset = function(data, offset, num) {
    var bin = Typr._bin;
    var charset = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      for (var i = 0; i < num; i++) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        charset.push(first);
      }
    } else if (format == 1 || format == 2) {
      while (charset.length < num) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        var nLeft = 0;
        if (format == 1) {
          nLeft = data[offset];
          offset++;
        } else {
          nLeft = bin.readUshort(data, offset);
          offset += 2;
        }
        for (var i = 0; i <= nLeft; i++) {
          charset.push(first);
          first++;
        }
      }
    } else
      throw "error: format: " + format;
    return charset;
  };
  Typr.CFF.readIndex = function(data, offset, inds) {
    var bin = Typr._bin;
    var count = bin.readUshort(data, offset);
    offset += 2;
    var offsize = data[offset];
    offset++;
    if (offsize == 1)
      for (var i = 0; i < count + 1; i++)
        inds.push(data[offset + i]);
    else if (offsize == 2)
      for (var i = 0; i < count + 1; i++)
        inds.push(bin.readUshort(data, offset + i * 2));
    else if (offsize == 3)
      for (var i = 0; i < count + 1; i++)
        inds.push(bin.readUint(data, offset + i * 3 - 1) & 16777215);
    else if (count != 0)
      throw "unsupported offset size: " + offsize + ", count: " + count;
    offset += (count + 1) * offsize;
    return offset - 1;
  };
  Typr.CFF.getCharString = function(data, offset, o) {
    var bin = Typr._bin;
    var b0 = data[offset], b1 = data[offset + 1];
    data[offset + 2];
    data[offset + 3];
    data[offset + 4];
    var vs = 1;
    var op = null, val = null;
    if (b0 <= 20) {
      op = b0;
      vs = 1;
    }
    if (b0 == 12) {
      op = b0 * 100 + b1;
      vs = 2;
    }
    if (21 <= b0 && b0 <= 27) {
      op = b0;
      vs = 1;
    }
    if (b0 == 28) {
      val = bin.readShort(data, offset + 1);
      vs = 3;
    }
    if (29 <= b0 && b0 <= 31) {
      op = b0;
      vs = 1;
    }
    if (32 <= b0 && b0 <= 246) {
      val = b0 - 139;
      vs = 1;
    }
    if (247 <= b0 && b0 <= 250) {
      val = (b0 - 247) * 256 + b1 + 108;
      vs = 2;
    }
    if (251 <= b0 && b0 <= 254) {
      val = -(b0 - 251) * 256 - b1 - 108;
      vs = 2;
    }
    if (b0 == 255) {
      val = bin.readInt(data, offset + 1) / 65535;
      vs = 5;
    }
    o.val = val != null ? val : "o" + op;
    o.size = vs;
  };
  Typr.CFF.readCharString = function(data, offset, length) {
    var end = offset + length;
    var bin = Typr._bin;
    var arr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var op = null, val = null;
      if (b0 <= 20) {
        op = b0;
        vs = 1;
      }
      if (b0 == 12) {
        op = b0 * 100 + b1;
        vs = 2;
      }
      if (b0 == 19 || b0 == 20) {
        op = b0;
        vs = 2;
      }
      if (21 <= b0 && b0 <= 27) {
        op = b0;
        vs = 1;
      }
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (29 <= b0 && b0 <= 31) {
        op = b0;
        vs = 1;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
      }
      arr.push(val != null ? val : "o" + op);
      offset += vs;
    }
    return arr;
  };
  Typr.CFF.readDict = function(data, offset, end) {
    var bin = Typr._bin;
    var dict = {};
    var carr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var key = null, val = null;
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (b0 == 29) {
        val = bin.readInt(data, offset + 1);
        vs = 5;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
        throw "unknown number";
      }
      if (b0 == 30) {
        var nibs = [];
        vs = 1;
        while (true) {
          var b = data[offset + vs];
          vs++;
          var nib0 = b >> 4, nib1 = b & 15;
          if (nib0 != 15)
            nibs.push(nib0);
          if (nib1 != 15)
            nibs.push(nib1);
          if (nib1 == 15)
            break;
        }
        var s = "";
        var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"];
        for (var i = 0; i < nibs.length; i++)
          s += chars[nibs[i]];
        val = parseFloat(s);
      }
      if (b0 <= 21) {
        var keys = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"];
        key = keys[b0];
        vs = 1;
        if (b0 == 12) {
          var keys = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"];
          key = keys[b1];
          vs = 2;
        }
      }
      if (key != null) {
        dict[key] = carr.length == 1 ? carr[0] : carr;
        carr = [];
      } else
        carr.push(val);
      offset += vs;
    }
    return dict;
  };
  Typr.cmap = {};
  Typr.cmap.parse = function(data, offset, length) {
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    var offs = [];
    obj.tables = [];
    for (var i = 0; i < numTables; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUint(data, offset);
      offset += 4;
      var id = "p" + platformID + "e" + encodingID;
      var tind = offs.indexOf(noffset);
      if (tind == -1) {
        tind = obj.tables.length;
        var subt;
        offs.push(noffset);
        var format = bin.readUshort(data, noffset);
        if (format == 0)
          subt = Typr.cmap.parse0(data, noffset);
        else if (format == 4)
          subt = Typr.cmap.parse4(data, noffset);
        else if (format == 6)
          subt = Typr.cmap.parse6(data, noffset);
        else if (format == 12)
          subt = Typr.cmap.parse12(data, noffset);
        else
          console.log("unknown format: " + format, platformID, encodingID, noffset);
        obj.tables.push(subt);
      }
      if (obj[id] != null)
        throw "multiple tables for one platform+encoding";
      obj[id] = tind;
    }
    return obj;
  };
  Typr.cmap.parse0 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var len = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.map = [];
    for (var i = 0; i < len - 6; i++)
      obj.map.push(data[offset + i]);
    return obj;
  };
  Typr.cmap.parse4 = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var length = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var segCountX2 = bin.readUshort(data, offset);
    offset += 2;
    var segCount = segCountX2 / 2;
    obj.searchRange = bin.readUshort(data, offset);
    offset += 2;
    obj.entrySelector = bin.readUshort(data, offset);
    offset += 2;
    obj.rangeShift = bin.readUshort(data, offset);
    offset += 2;
    obj.endCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    offset += 2;
    obj.startCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.idDelta = [];
    for (var i = 0; i < segCount; i++) {
      obj.idDelta.push(bin.readShort(data, offset));
      offset += 2;
    }
    obj.idRangeOffset = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.glyphIdArray = [];
    while (offset < offset0 + length) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse6 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.firstCode = bin.readUshort(data, offset);
    offset += 2;
    var entryCount = bin.readUshort(data, offset);
    offset += 2;
    obj.glyphIdArray = [];
    for (var i = 0; i < entryCount; i++) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse12 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    offset += 2;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    var nGroups = bin.readUint(data, offset);
    offset += 4;
    obj.groups = [];
    for (var i = 0; i < nGroups; i++) {
      var off = offset + i * 12;
      var startCharCode = bin.readUint(data, off + 0);
      var endCharCode = bin.readUint(data, off + 4);
      var startGlyphID = bin.readUint(data, off + 8);
      obj.groups.push([startCharCode, endCharCode, startGlyphID]);
    }
    return obj;
  };
  Typr.glyf = {};
  Typr.glyf.parse = function(data, offset, length, font) {
    var obj = [];
    for (var g = 0; g < font.maxp.numGlyphs; g++)
      obj.push(null);
    return obj;
  };
  Typr.glyf._parseGlyf = function(font, g) {
    var bin = Typr._bin;
    var data = font._data;
    var offset = Typr._tabOffset(data, "glyf") + font.loca[g];
    if (font.loca[g] == font.loca[g + 1])
      return null;
    var gl = {};
    gl.noc = bin.readShort(data, offset);
    offset += 2;
    gl.xMin = bin.readShort(data, offset);
    offset += 2;
    gl.yMin = bin.readShort(data, offset);
    offset += 2;
    gl.xMax = bin.readShort(data, offset);
    offset += 2;
    gl.yMax = bin.readShort(data, offset);
    offset += 2;
    if (gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
      return null;
    if (gl.noc > 0) {
      gl.endPts = [];
      for (var i = 0; i < gl.noc; i++) {
        gl.endPts.push(bin.readUshort(data, offset));
        offset += 2;
      }
      var instructionLength = bin.readUshort(data, offset);
      offset += 2;
      if (data.length - offset < instructionLength)
        return null;
      gl.instructions = bin.readBytes(data, offset, instructionLength);
      offset += instructionLength;
      var crdnum = gl.endPts[gl.noc - 1] + 1;
      gl.flags = [];
      for (var i = 0; i < crdnum; i++) {
        var flag = data[offset];
        offset++;
        gl.flags.push(flag);
        if ((flag & 8) != 0) {
          var rep = data[offset];
          offset++;
          for (var j = 0; j < rep; j++) {
            gl.flags.push(flag);
            i++;
          }
        }
      }
      gl.xs = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 2) != 0, same = (gl.flags[i] & 16) != 0;
        if (i8) {
          gl.xs.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.xs.push(0);
          else {
            gl.xs.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      gl.ys = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 4) != 0, same = (gl.flags[i] & 32) != 0;
        if (i8) {
          gl.ys.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.ys.push(0);
          else {
            gl.ys.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      var x = 0, y = 0;
      for (var i = 0; i < crdnum; i++) {
        x += gl.xs[i];
        y += gl.ys[i];
        gl.xs[i] = x;
        gl.ys[i] = y;
      }
    } else {
      var ARG_1_AND_2_ARE_WORDS = 1 << 0;
      var ARGS_ARE_XY_VALUES = 1 << 1;
      var WE_HAVE_A_SCALE = 1 << 3;
      var MORE_COMPONENTS = 1 << 5;
      var WE_HAVE_AN_X_AND_Y_SCALE = 1 << 6;
      var WE_HAVE_A_TWO_BY_TWO = 1 << 7;
      var WE_HAVE_INSTRUCTIONS = 1 << 8;
      gl.parts = [];
      var flags;
      do {
        flags = bin.readUshort(data, offset);
        offset += 2;
        var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
        gl.parts.push(part);
        part.glyphIndex = bin.readUshort(data, offset);
        offset += 2;
        if (flags & ARG_1_AND_2_ARE_WORDS) {
          var arg1 = bin.readShort(data, offset);
          offset += 2;
          var arg2 = bin.readShort(data, offset);
          offset += 2;
        } else {
          var arg1 = bin.readInt8(data, offset);
          offset++;
          var arg2 = bin.readInt8(data, offset);
          offset++;
        }
        if (flags & ARGS_ARE_XY_VALUES) {
          part.m.tx = arg1;
          part.m.ty = arg2;
        } else {
          part.p1 = arg1;
          part.p2 = arg2;
        }
        if (flags & WE_HAVE_A_SCALE) {
          part.m.a = part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_A_TWO_BY_TWO) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.b = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.c = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        }
      } while (flags & MORE_COMPONENTS);
      if (flags & WE_HAVE_INSTRUCTIONS) {
        var numInstr = bin.readUshort(data, offset);
        offset += 2;
        gl.instr = [];
        for (var i = 0; i < numInstr; i++) {
          gl.instr.push(data[offset]);
          offset++;
        }
      }
    }
    return gl;
  };
  Typr.GPOS = {};
  Typr.GPOS.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
  };
  Typr.GPOS.subt = function(data, ltype, offset) {
    if (ltype != 2)
      return null;
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.format = bin.readUshort(data, offset);
    offset += 2;
    var covOff = bin.readUshort(data, offset);
    offset += 2;
    tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
    tab.valFmt1 = bin.readUshort(data, offset);
    offset += 2;
    tab.valFmt2 = bin.readUshort(data, offset);
    offset += 2;
    var ones1 = Typr._lctf.numOfOnes(tab.valFmt1);
    var ones2 = Typr._lctf.numOfOnes(tab.valFmt2);
    if (tab.format == 1) {
      tab.pairsets = [];
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        var psoff = bin.readUshort(data, offset);
        offset += 2;
        psoff += offset0;
        var pvcount = bin.readUshort(data, psoff);
        psoff += 2;
        var arr = [];
        for (var j = 0; j < pvcount; j++) {
          var gid2 = bin.readUshort(data, psoff);
          psoff += 2;
          var value1, value2;
          if (tab.valFmt1 != 0) {
            value1 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt1);
            psoff += ones1 * 2;
          }
          if (tab.valFmt2 != 0) {
            value2 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt2);
            psoff += ones2 * 2;
          }
          arr.push({ gid2, val1: value1, val2: value2 });
        }
        tab.pairsets.push(arr);
      }
    }
    if (tab.format == 2) {
      var classDef1 = bin.readUshort(data, offset);
      offset += 2;
      var classDef2 = bin.readUshort(data, offset);
      offset += 2;
      var class1Count = bin.readUshort(data, offset);
      offset += 2;
      var class2Count = bin.readUshort(data, offset);
      offset += 2;
      tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1);
      tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2);
      tab.matrix = [];
      for (var i = 0; i < class1Count; i++) {
        var row = [];
        for (var j = 0; j < class2Count; j++) {
          var value1 = null, value2 = null;
          if (tab.valFmt1 != 0) {
            value1 = Typr._lctf.readValueRecord(data, offset, tab.valFmt1);
            offset += ones1 * 2;
          }
          if (tab.valFmt2 != 0) {
            value2 = Typr._lctf.readValueRecord(data, offset, tab.valFmt2);
            offset += ones2 * 2;
          }
          row.push({ val1: value1, val2: value2 });
        }
        tab.matrix.push(row);
      }
    }
    return tab;
  };
  Typr.GSUB = {};
  Typr.GSUB.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
  };
  Typr.GSUB.subt = function(data, ltype, offset) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    if (ltype != 1 && ltype != 4 && ltype != 5)
      return null;
    tab.fmt = bin.readUshort(data, offset);
    offset += 2;
    var covOff = bin.readUshort(data, offset);
    offset += 2;
    tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
    if (ltype == 1) {
      if (tab.fmt == 1) {
        tab.delta = bin.readShort(data, offset);
        offset += 2;
      } else if (tab.fmt == 2) {
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        tab.newg = bin.readUshorts(data, offset, cnt);
        offset += tab.newg.length * 2;
      }
    } else if (ltype == 4) {
      tab.vals = [];
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < cnt; i++) {
        var loff = bin.readUshort(data, offset);
        offset += 2;
        tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
      }
    } else if (ltype == 5) {
      if (tab.fmt == 2) {
        var cDefOffset = bin.readUshort(data, offset);
        offset += 2;
        tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset);
        tab.scset = [];
        var subClassSetCount = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < subClassSetCount; i++) {
          var scsOff = bin.readUshort(data, offset);
          offset += 2;
          tab.scset.push(scsOff == 0 ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
        }
      } else
        console.log("unknown table format", tab.fmt);
    }
    return tab;
  };
  Typr.GSUB.readSubClassSet = function(data, offset) {
    var rUs = Typr._bin.readUshort, offset0 = offset, lset = [];
    var cnt = rUs(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = rUs(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readSubClassRule = function(data, offset) {
    var rUs = Typr._bin.readUshort, rule = {};
    var gcount = rUs(data, offset);
    offset += 2;
    var scount = rUs(data, offset);
    offset += 2;
    rule.input = [];
    for (var i = 0; i < gcount - 1; i++) {
      rule.input.push(rUs(data, offset));
      offset += 2;
    }
    rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount);
    return rule;
  };
  Typr.GSUB.readSubstLookupRecords = function(data, offset, cnt) {
    var rUs = Typr._bin.readUshort;
    var out = [];
    for (var i = 0; i < cnt; i++) {
      out.push(rUs(data, offset), rUs(data, offset + 2));
      offset += 4;
    }
    return out;
  };
  Typr.GSUB.readChainSubClassSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readChainSubClassRule = function(data, offset) {
    var bin = Typr._bin, rule = {};
    var pps = ["backtrack", "input", "lookahead"];
    for (var pi = 0; pi < pps.length; pi++) {
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      if (pi == 1)
        cnt--;
      rule[pps[pi]] = bin.readUshorts(data, offset, cnt);
      offset += rule[pps[pi]].length * 2;
    }
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    rule.subst = bin.readUshorts(data, offset, cnt * 2);
    offset += rule.subst.length * 2;
    return rule;
  };
  Typr.GSUB.readLigatureSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var lcnt = bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < lcnt; j++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readLigature = function(data, offset) {
    var bin = Typr._bin, lig = { chain: [] };
    lig.nglyph = bin.readUshort(data, offset);
    offset += 2;
    var ccnt = bin.readUshort(data, offset);
    offset += 2;
    for (var k = 0; k < ccnt - 1; k++) {
      lig.chain.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return lig;
  };
  Typr.head = {};
  Typr.head.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.fontRevision = bin.readFixed(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    obj.flags = bin.readUshort(data, offset);
    offset += 2;
    obj.unitsPerEm = bin.readUshort(data, offset);
    offset += 2;
    obj.created = bin.readUint64(data, offset);
    offset += 8;
    obj.modified = bin.readUint64(data, offset);
    offset += 8;
    obj.xMin = bin.readShort(data, offset);
    offset += 2;
    obj.yMin = bin.readShort(data, offset);
    offset += 2;
    obj.xMax = bin.readShort(data, offset);
    offset += 2;
    obj.yMax = bin.readShort(data, offset);
    offset += 2;
    obj.macStyle = bin.readUshort(data, offset);
    offset += 2;
    obj.lowestRecPPEM = bin.readUshort(data, offset);
    offset += 2;
    obj.fontDirectionHint = bin.readShort(data, offset);
    offset += 2;
    obj.indexToLocFormat = bin.readShort(data, offset);
    offset += 2;
    obj.glyphDataFormat = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hhea = {};
  Typr.hhea.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.ascender = bin.readShort(data, offset);
    offset += 2;
    obj.descender = bin.readShort(data, offset);
    offset += 2;
    obj.lineGap = bin.readShort(data, offset);
    offset += 2;
    obj.advanceWidthMax = bin.readUshort(data, offset);
    offset += 2;
    obj.minLeftSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.minRightSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.xMaxExtent = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRise = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRun = bin.readShort(data, offset);
    offset += 2;
    obj.caretOffset = bin.readShort(data, offset);
    offset += 2;
    offset += 4 * 2;
    obj.metricDataFormat = bin.readShort(data, offset);
    offset += 2;
    obj.numberOfHMetrics = bin.readUshort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hmtx = {};
  Typr.hmtx.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = {};
    obj.aWidth = [];
    obj.lsBearing = [];
    var aw = 0, lsb = 0;
    for (var i = 0; i < font.maxp.numGlyphs; i++) {
      if (i < font.hhea.numberOfHMetrics) {
        aw = bin.readUshort(data, offset);
        offset += 2;
        lsb = bin.readShort(data, offset);
        offset += 2;
      }
      obj.aWidth.push(aw);
      obj.lsBearing.push(lsb);
    }
    return obj;
  };
  Typr.kern = {};
  Typr.kern.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var version = bin.readUshort(data, offset);
    offset += 2;
    if (version == 1)
      return Typr.kern.parseV1(data, offset - 2, length, font);
    var nTables = bin.readUshort(data, offset);
    offset += 2;
    var map = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      offset += 2;
      var length = bin.readUshort(data, offset);
      offset += 2;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map);
      else
        throw "unknown kern table format: " + format;
    }
    return map;
  };
  Typr.kern.parseV1 = function(data, offset, length, font) {
    var bin = Typr._bin;
    bin.readFixed(data, offset);
    offset += 4;
    var nTables = bin.readUint(data, offset);
    offset += 4;
    var map = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      bin.readUint(data, offset);
      offset += 4;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map);
      else
        throw "unknown kern table format: " + format;
    }
    return map;
  };
  Typr.kern.readFormat0 = function(data, offset, map) {
    var bin = Typr._bin;
    var pleft = -1;
    var nPairs = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < nPairs; j++) {
      var left = bin.readUshort(data, offset);
      offset += 2;
      var right = bin.readUshort(data, offset);
      offset += 2;
      var value = bin.readShort(data, offset);
      offset += 2;
      if (left != pleft) {
        map.glyph1.push(left);
        map.rval.push({ glyph2: [], vals: [] });
      }
      var rval = map.rval[map.rval.length - 1];
      rval.glyph2.push(right);
      rval.vals.push(value);
      pleft = left;
    }
    return offset;
  };
  Typr.loca = {};
  Typr.loca.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = [];
    var ver = font.head.indexToLocFormat;
    var len = font.maxp.numGlyphs + 1;
    if (ver == 0)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
    if (ver == 1)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUint(data, offset + (i << 2)));
    return obj;
  };
  Typr.maxp = {};
  Typr.maxp.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    var ver = bin.readUint(data, offset);
    offset += 4;
    obj.numGlyphs = bin.readUshort(data, offset);
    offset += 2;
    if (ver == 65536) {
      obj.maxPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositePoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositeContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxZones = bin.readUshort(data, offset);
      offset += 2;
      obj.maxTwilightPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStorage = bin.readUshort(data, offset);
      offset += 2;
      obj.maxFunctionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxInstructionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStackElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxSizeOfInstructions = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentDepth = bin.readUshort(data, offset);
      offset += 2;
    }
    return obj;
  };
  Typr.name = {};
  Typr.name.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var offset0 = offset;
    for (var i = 0; i < count; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var languageID = bin.readUshort(data, offset);
      offset += 2;
      var nameID = bin.readUshort(data, offset);
      offset += 2;
      var length = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUshort(data, offset);
      offset += 2;
      var plat = "p" + platformID;
      if (obj[plat] == null)
        obj[plat] = {};
      var names = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"];
      var cname = names[nameID];
      var soff = offset0 + count * 12 + noffset;
      var str;
      if (platformID == 0)
        str = bin.readUnicode(data, soff, length / 2);
      else if (platformID == 3 && encodingID == 0)
        str = bin.readUnicode(data, soff, length / 2);
      else if (encodingID == 0)
        str = bin.readASCII(data, soff, length);
      else if (encodingID == 1)
        str = bin.readUnicode(data, soff, length / 2);
      else if (encodingID == 3)
        str = bin.readUnicode(data, soff, length / 2);
      else if (platformID == 1) {
        str = bin.readASCII(data, soff, length);
        console.log("reading unknown MAC encoding " + encodingID + " as ASCII");
      } else
        throw "unknown encoding " + encodingID + ", platformID: " + platformID;
      obj[plat][cname] = str;
      obj[plat]._lang = languageID;
    }
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 1033)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 3084)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null)
        return obj[p];
    var tname;
    for (var p in obj) {
      tname = p;
      break;
    }
    console.log("returning name table with languageID " + obj[tname]._lang);
    return obj[tname];
  };
  Typr["OS/2"] = {};
  Typr["OS/2"].parse = function(data, offset, length) {
    var bin = Typr._bin;
    var ver = bin.readUshort(data, offset);
    offset += 2;
    var obj = {};
    if (ver == 0)
      Typr["OS/2"].version0(data, offset, obj);
    else if (ver == 1)
      Typr["OS/2"].version1(data, offset, obj);
    else if (ver == 2 || ver == 3 || ver == 4)
      Typr["OS/2"].version2(data, offset, obj);
    else if (ver == 5)
      Typr["OS/2"].version5(data, offset, obj);
    else
      throw "unknown OS/2 table version: " + ver;
    return obj;
  };
  Typr["OS/2"].version0 = function(data, offset, obj) {
    var bin = Typr._bin;
    obj.xAvgCharWidth = bin.readShort(data, offset);
    offset += 2;
    obj.usWeightClass = bin.readUshort(data, offset);
    offset += 2;
    obj.usWidthClass = bin.readUshort(data, offset);
    offset += 2;
    obj.fsType = bin.readUshort(data, offset);
    offset += 2;
    obj.ySubscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutSize = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutPosition = bin.readShort(data, offset);
    offset += 2;
    obj.sFamilyClass = bin.readShort(data, offset);
    offset += 2;
    obj.panose = bin.readBytes(data, offset, 10);
    offset += 10;
    obj.ulUnicodeRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange2 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange3 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange4 = bin.readUint(data, offset);
    offset += 4;
    obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)];
    offset += 4;
    obj.fsSelection = bin.readUshort(data, offset);
    offset += 2;
    obj.usFirstCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.usLastCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.sTypoAscender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoDescender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoLineGap = bin.readShort(data, offset);
    offset += 2;
    obj.usWinAscent = bin.readUshort(data, offset);
    offset += 2;
    obj.usWinDescent = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version1 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version0(data, offset, obj);
    obj.ulCodePageRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulCodePageRange2 = bin.readUint(data, offset);
    offset += 4;
    return offset;
  };
  Typr["OS/2"].version2 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version1(data, offset, obj);
    obj.sxHeight = bin.readShort(data, offset);
    offset += 2;
    obj.sCapHeight = bin.readShort(data, offset);
    offset += 2;
    obj.usDefault = bin.readUshort(data, offset);
    offset += 2;
    obj.usBreak = bin.readUshort(data, offset);
    offset += 2;
    obj.usMaxContext = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version5 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version2(data, offset, obj);
    obj.usLowerOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    obj.usUpperOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr.post = {};
  Typr.post.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    obj.version = bin.readFixed(data, offset);
    offset += 4;
    obj.italicAngle = bin.readFixed(data, offset);
    offset += 4;
    obj.underlinePosition = bin.readShort(data, offset);
    offset += 2;
    obj.underlineThickness = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.SVG = {};
  Typr.SVG.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = { entries: [] };
    var offset0 = offset;
    bin.readUshort(data, offset);
    offset += 2;
    var svgDocIndexOffset = bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    offset = svgDocIndexOffset + offset0;
    var numEntries = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < numEntries; i++) {
      var startGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var endGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var svgDocOffset = bin.readUint(data, offset);
      offset += 4;
      var svgDocLength = bin.readUint(data, offset);
      offset += 4;
      var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength);
      var svg = bin.readUTF8(sbuf, 0, sbuf.length);
      for (var f = startGlyphID; f <= endGlyphID; f++) {
        obj.entries[f] = svg;
      }
    }
    return obj;
  };
  Typr.SVG.toPath = function(str) {
    var pth = { cmds: [], crds: [] };
    if (str == null)
      return pth;
    var prsr = new DOMParser();
    var doc = prsr["parseFromString"](str, "image/svg+xml");
    var svg = doc.firstChild;
    while (svg.tagName != "svg")
      svg = svg.nextSibling;
    var vb = svg.getAttribute("viewBox");
    if (vb)
      vb = vb.trim().split(" ").map(parseFloat);
    else
      vb = [0, 0, 1e3, 1e3];
    Typr.SVG._toPath(svg.children, pth);
    for (var i = 0; i < pth.crds.length; i += 2) {
      var x = pth.crds[i], y = pth.crds[i + 1];
      x -= vb[0];
      y -= vb[1];
      y = -y;
      pth.crds[i] = x;
      pth.crds[i + 1] = y;
    }
    return pth;
  };
  Typr.SVG._toPath = function(nds, pth, fill) {
    for (var ni = 0; ni < nds.length; ni++) {
      var nd = nds[ni], tn = nd.tagName;
      var cfl = nd.getAttribute("fill");
      if (cfl == null)
        cfl = fill;
      if (tn == "g")
        Typr.SVG._toPath(nd.children, pth, cfl);
      else if (tn == "path") {
        pth.cmds.push(cfl ? cfl : "#000000");
        var d = nd.getAttribute("d");
        var toks = Typr.SVG._tokens(d);
        Typr.SVG._toksToPath(toks, pth);
        pth.cmds.push("X");
      } else if (tn == "defs")
        ;
      else
        console.log(tn, nd);
    }
  };
  Typr.SVG._tokens = function(d) {
    var ts = [], off = 0, rn = false, cn = "";
    while (off < d.length) {
      var cc = d.charCodeAt(off), ch = d.charAt(off);
      off++;
      var isNum = 48 <= cc && cc <= 57 || ch == "." || ch == "-";
      if (rn) {
        if (ch == "-") {
          ts.push(parseFloat(cn));
          cn = ch;
        } else if (isNum)
          cn += ch;
        else {
          ts.push(parseFloat(cn));
          if (ch != "," && ch != " ")
            ts.push(ch);
          rn = false;
        }
      } else {
        if (isNum) {
          cn = ch;
          rn = true;
        } else if (ch != "," && ch != " ")
          ts.push(ch);
      }
    }
    if (rn)
      ts.push(parseFloat(cn));
    return ts;
  };
  Typr.SVG._toksToPath = function(ts, pth) {
    var i = 0, x = 0, y = 0, ox = 0, oy = 0;
    var pc = { M: 2, L: 2, H: 1, V: 1, S: 4, C: 6 };
    var cmds = pth.cmds, crds = pth.crds;
    while (i < ts.length) {
      var cmd = ts[i];
      i++;
      if (cmd == "z") {
        cmds.push("Z");
        x = ox;
        y = oy;
      } else {
        var cmu = cmd.toUpperCase();
        var ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps);
        for (var j = 0; j < reps; j++) {
          var xi = 0, yi = 0;
          if (cmd != cmu) {
            xi = x;
            yi = y;
          }
          if (cmu == "M") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("M");
            crds.push(x, y);
            ox = x;
            oy = y;
          } else if (cmu == "L") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "H") {
            x = xi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "V") {
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "C") {
            var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else if (cmu == "S") {
            var co = Math.max(crds.length - 4, 0);
            var x1 = x + x - crds[co], y1 = y + y - crds[co + 1];
            var x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else
            console.log("Unknown SVG command " + cmd);
        }
      }
    }
  };
  Typr.SVG._reps = function(ts, off, ps) {
    var i = off;
    while (i < ts.length) {
      if (typeof ts[i] == "string")
        break;
      i += ps;
    }
    return (i - off) / ps;
  };
  if (Typr == null)
    Typr = {};
  if (Typr.U == null)
    Typr.U = {};
  Typr.U.codeToGlyph = function(font, code) {
    var cmap = font.cmap;
    var tind = -1;
    if (cmap.p0e4 != null)
      tind = cmap.p0e4;
    else if (cmap.p3e1 != null)
      tind = cmap.p3e1;
    else if (cmap.p1e0 != null)
      tind = cmap.p1e0;
    if (tind == -1)
      throw "no familiar platform and encoding!";
    var tab = cmap.tables[tind];
    if (tab.format == 0) {
      if (code >= tab.map.length)
        return 0;
      return tab.map[code];
    } else if (tab.format == 4) {
      var sind = -1;
      for (var i = 0; i < tab.endCount.length; i++)
        if (code <= tab.endCount[i]) {
          sind = i;
          break;
        }
      if (sind == -1)
        return 0;
      if (tab.startCount[sind] > code)
        return 0;
      var gli = 0;
      if (tab.idRangeOffset[sind] != 0)
        gli = tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)];
      else
        gli = code + tab.idDelta[sind];
      return gli & 65535;
    } else if (tab.format == 12) {
      if (code > tab.groups[tab.groups.length - 1][1])
        return 0;
      for (var i = 0; i < tab.groups.length; i++) {
        var grp = tab.groups[i];
        if (grp[0] <= code && code <= grp[1])
          return grp[2] + (code - grp[0]);
      }
      return 0;
    } else
      throw "unknown cmap table format " + tab.format;
  };
  Typr.U.glyphToPath = function(font, gid) {
    var path = { cmds: [], crds: [] };
    if (font.SVG && font.SVG.entries[gid]) {
      var p = font.SVG.entries[gid];
      if (p == null)
        return path;
      if (typeof p == "string") {
        p = Typr.SVG.toPath(p);
        font.SVG.entries[gid] = p;
      }
      return p;
    } else if (font.CFF) {
      var state2 = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
      Typr.U._drawCFF(font.CFF.CharStrings[gid], state2, font.CFF, path);
    } else if (font.glyf) {
      Typr.U._drawGlyf(gid, font, path);
    }
    return path;
  };
  Typr.U._drawGlyf = function(gid, font, path) {
    var gl = font.glyf[gid];
    if (gl == null)
      gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid);
    if (gl != null) {
      if (gl.noc > -1)
        Typr.U._simpleGlyph(gl, path);
      else
        Typr.U._compoGlyph(gl, font, path);
    }
  };
  Typr.U._simpleGlyph = function(gl, p) {
    for (var c = 0; c < gl.noc; c++) {
      var i0 = c == 0 ? 0 : gl.endPts[c - 1] + 1;
      var il = gl.endPts[c];
      for (var i = i0; i <= il; i++) {
        var pr = i == i0 ? il : i - 1;
        var nx = i == il ? i0 : i + 1;
        var onCurve = gl.flags[i] & 1;
        var prOnCurve = gl.flags[pr] & 1;
        var nxOnCurve = gl.flags[nx] & 1;
        var x = gl.xs[i], y = gl.ys[i];
        if (i == i0) {
          if (onCurve) {
            if (prOnCurve)
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            else {
              Typr.U.P.moveTo(p, x, y);
              continue;
            }
          } else {
            if (prOnCurve)
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            else
              Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
          }
        }
        if (onCurve) {
          if (prOnCurve)
            Typr.U.P.lineTo(p, x, y);
        } else {
          if (nxOnCurve)
            Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]);
          else
            Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
        }
      }
      Typr.U.P.closePath(p);
    }
  };
  Typr.U._compoGlyph = function(gl, font, p) {
    for (var j = 0; j < gl.parts.length; j++) {
      var path = { cmds: [], crds: [] };
      var prt = gl.parts[j];
      Typr.U._drawGlyf(prt.glyphIndex, font, path);
      var m = prt.m;
      for (var i = 0; i < path.crds.length; i += 2) {
        var x = path.crds[i], y = path.crds[i + 1];
        p.crds.push(x * m.a + y * m.b + m.tx);
        p.crds.push(x * m.c + y * m.d + m.ty);
      }
      for (var i = 0; i < path.cmds.length; i++)
        p.cmds.push(path.cmds[i]);
    }
  };
  Typr.U._getGlyphClass = function(g, cd) {
    var intr = Typr._lctf.getInterval(cd, g);
    return intr == -1 ? 0 : cd[intr + 2];
  };
  Typr.U.getPairAdjustment = function(font, g1, g2) {
    if (font.GPOS) {
      var ltab = null;
      for (var i = 0; i < font.GPOS.featureList.length; i++) {
        var fl = font.GPOS.featureList[i];
        if (fl.tag == "kern") {
          for (var j = 0; j < fl.tab.length; j++)
            if (font.GPOS.lookupList[fl.tab[j]].ltype == 2)
              ltab = font.GPOS.lookupList[fl.tab[j]];
        }
      }
      if (ltab) {
        for (var i = 0; i < ltab.tabs.length; i++) {
          var tab = ltab.tabs[i];
          var ind = Typr._lctf.coverageIndex(tab.coverage, g1);
          if (ind == -1)
            continue;
          var adj;
          if (tab.format == 1) {
            var right = tab.pairsets[ind];
            for (var j = 0; j < right.length; j++)
              if (right[j].gid2 == g2)
                adj = right[j];
            if (adj == null)
              continue;
          } else if (tab.format == 2) {
            var c1 = Typr.U._getGlyphClass(g1, tab.classDef1);
            var c2 = Typr.U._getGlyphClass(g2, tab.classDef2);
            var adj = tab.matrix[c1][c2];
          }
          return adj.val1[2];
        }
      }
    }
    if (font.kern) {
      var ind1 = font.kern.glyph1.indexOf(g1);
      if (ind1 != -1) {
        var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
        if (ind2 != -1)
          return font.kern.rval[ind1].vals[ind2];
      }
    }
    return 0;
  };
  Typr.U.stringToGlyphs = function(font, str) {
    var gls = [];
    for (var i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      if (cc > 65535)
        i++;
      gls.push(Typr.U.codeToGlyph(font, cc));
    }
    var gsub = font["GSUB"];
    if (gsub == null)
      return gls;
    var llist = gsub.lookupList, flist = gsub.featureList;
    var wsep = '\n	" ,.:;!?()  \u060C';
    var R2 = "\u0622\u0623\u0624\u0625\u0627\u0629\u062F\u0630\u0631\u0632\u0648\u0671\u0672\u0673\u0675\u0676\u0677\u0688\u0689\u068A\u068B\u068C\u068D\u068E\u068F\u0690\u0691\u0692\u0693\u0694\u0695\u0696\u0697\u0698\u0699\u06C0\u06C3\u06C4\u06C5\u06C6\u06C7\u06C8\u06C9\u06CA\u06CB\u06CD\u06CF\u06D2\u06D3\u06D5\u06EE\u06EF\u0710\u0715\u0716\u0717\u0718\u0719\u071E\u0728\u072A\u072C\u072F\u074D\u0759\u075A\u075B\u076B\u076C\u0771\u0773\u0774\u0778\u0779\u0840\u0846\u0847\u0849\u0854\u0867\u0869\u086A\u08AA\u08AB\u08AC\u08AE\u08B1\u08B2\u08B9\u0AC5\u0AC7\u0AC9\u0ACA\u0ACE\u0ACF\u0AD0\u0AD1\u0AD2\u0ADD\u0AE1\u0AE4\u0AEF\u0B81\u0B83\u0B84\u0B85\u0B89\u0B8C\u0B8E\u0B8F\u0B91\u0BA9\u0BAA\u0BAB\u0BAC";
    var L = "\uA872\u0ACD\u0AD7";
    for (var ci = 0; ci < gls.length; ci++) {
      var gl = gls[ci];
      var slft = ci == 0 || wsep.indexOf(str[ci - 1]) != -1;
      var srgt = ci == gls.length - 1 || wsep.indexOf(str[ci + 1]) != -1;
      if (!slft && R2.indexOf(str[ci - 1]) != -1)
        slft = true;
      if (!srgt && R2.indexOf(str[ci]) != -1)
        srgt = true;
      if (!srgt && L.indexOf(str[ci + 1]) != -1)
        srgt = true;
      if (!slft && L.indexOf(str[ci]) != -1)
        slft = true;
      var feat = null;
      if (slft)
        feat = srgt ? "isol" : "init";
      else
        feat = srgt ? "fina" : "medi";
      for (var fi = 0; fi < flist.length; fi++) {
        if (flist[fi].tag != feat)
          continue;
        for (var ti = 0; ti < flist[fi].tab.length; ti++) {
          var tab = llist[flist[fi].tab[ti]];
          if (tab.ltype != 1)
            continue;
          Typr.U._applyType1(gls, ci, tab);
        }
      }
    }
    var cligs = ["rlig", "liga", "mset"];
    for (var ci = 0; ci < gls.length; ci++) {
      var gl = gls[ci];
      var rlim = Math.min(3, gls.length - ci - 1);
      for (var fi = 0; fi < flist.length; fi++) {
        var fl = flist[fi];
        if (cligs.indexOf(fl.tag) == -1)
          continue;
        for (var ti = 0; ti < fl.tab.length; ti++) {
          var tab = llist[fl.tab[ti]];
          for (var j = 0; j < tab.tabs.length; j++) {
            if (tab.tabs[j] == null)
              continue;
            var ind = Typr._lctf.coverageIndex(tab.tabs[j].coverage, gl);
            if (ind == -1)
              continue;
            if (tab.ltype == 4) {
              var vals = tab.tabs[j].vals[ind];
              for (var k = 0; k < vals.length; k++) {
                var lig = vals[k], rl = lig.chain.length;
                if (rl > rlim)
                  continue;
                var good = true;
                for (var l = 0; l < rl; l++)
                  if (lig.chain[l] != gls[ci + (1 + l)])
                    good = false;
                if (!good)
                  continue;
                gls[ci] = lig.nglyph;
                for (var l = 0; l < rl; l++)
                  gls[ci + l + 1] = -1;
              }
            } else if (tab.ltype == 5) {
              var ltab = tab.tabs[j];
              if (ltab.fmt != 2)
                continue;
              var cind = Typr._lctf.getInterval(ltab.cDef, gl);
              var cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
              for (var i = 0; i < scs.length; i++) {
                var sc = scs[i], inp = sc.input;
                if (inp.length > rlim)
                  continue;
                var good = true;
                for (var l = 0; l < inp.length; l++) {
                  var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
                  if (cind == -1 && ltab.cDef[cind2 + 2] != inp[l]) {
                    good = false;
                    break;
                  }
                }
                if (!good)
                  continue;
                var lrs = sc.substLookupRecords;
                for (var k = 0; k < lrs.length; k += 2) {
                  lrs[k];
                  lrs[k + 1];
                }
              }
            }
          }
        }
      }
    }
    return gls;
  };
  Typr.U._applyType1 = function(gls, ci, tab) {
    var gl = gls[ci];
    for (var j = 0; j < tab.tabs.length; j++) {
      var ttab = tab.tabs[j];
      var ind = Typr._lctf.coverageIndex(ttab.coverage, gl);
      if (ind == -1)
        continue;
      if (ttab.fmt == 1)
        gls[ci] = gls[ci] + ttab.delta;
      else
        gls[ci] = ttab.newg[ind];
    }
  };
  Typr.U.glyphsToPath = function(font, gls, clr) {
    var tpath = { cmds: [], crds: [] };
    var x = 0;
    for (var i = 0; i < gls.length; i++) {
      var gid = gls[i];
      if (gid == -1)
        continue;
      var gid2 = i < gls.length - 1 && gls[i + 1] != -1 ? gls[i + 1] : 0;
      var path = Typr.U.glyphToPath(font, gid);
      for (var j = 0; j < path.crds.length; j += 2) {
        tpath.crds.push(path.crds[j] + x);
        tpath.crds.push(path.crds[j + 1]);
      }
      if (clr)
        tpath.cmds.push(clr);
      for (var j = 0; j < path.cmds.length; j++)
        tpath.cmds.push(path.cmds[j]);
      if (clr)
        tpath.cmds.push("X");
      x += font.hmtx.aWidth[gid];
      if (i < gls.length - 1)
        x += Typr.U.getPairAdjustment(font, gid, gid2);
    }
    return tpath;
  };
  Typr.U.pathToSVG = function(path, prec) {
    if (prec == null)
      prec = 5;
    var out = [], co = 0, lmap = { M: 2, L: 2, Q: 4, C: 6 };
    for (var i = 0; i < path.cmds.length; i++) {
      var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
      out.push(cmd);
      while (co < cn) {
        var c = path.crds[co++];
        out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
      }
    }
    return out.join("");
  };
  Typr.U.pathToContext = function(path, ctx) {
    var c = 0, crds = path.crds;
    for (var j = 0; j < path.cmds.length; j++) {
      var cmd = path.cmds[j];
      if (cmd == "M") {
        ctx.moveTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "L") {
        ctx.lineTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "C") {
        ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]);
        c += 6;
      } else if (cmd == "Q") {
        ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]);
        c += 4;
      } else if (cmd.charAt(0) == "#") {
        ctx.beginPath();
        ctx.fillStyle = cmd;
      } else if (cmd == "Z") {
        ctx.closePath();
      } else if (cmd == "X") {
        ctx.fill();
      }
    }
  };
  Typr.U.P = {};
  Typr.U.P.moveTo = function(p, x, y) {
    p.cmds.push("M");
    p.crds.push(x, y);
  };
  Typr.U.P.lineTo = function(p, x, y) {
    p.cmds.push("L");
    p.crds.push(x, y);
  };
  Typr.U.P.curveTo = function(p, a, b, c, d, e, f) {
    p.cmds.push("C");
    p.crds.push(a, b, c, d, e, f);
  };
  Typr.U.P.qcurveTo = function(p, a, b, c, d) {
    p.cmds.push("Q");
    p.crds.push(a, b, c, d);
  };
  Typr.U.P.closePath = function(p) {
    p.cmds.push("Z");
  };
  Typr.U._drawCFF = function(cmds, state2, font, p) {
    var stack = state2.stack;
    var nStems = state2.nStems, haveWidth = state2.haveWidth, width = state2.width, open = state2.open;
    var i = 0;
    var x = state2.x, y = state2.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0;
    var o = { val: 0, size: 0 };
    while (i < cmds.length) {
      Typr.CFF.getCharString(cmds, i, o);
      var v = o.val;
      i += o.size;
      if (v == "o1" || v == "o18") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o3" || v == "o23") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o4") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
          haveWidth = true;
        }
        if (open)
          Typr.U.P.closePath(p);
        y += stack.pop();
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o5") {
        while (stack.length > 0) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o6" || v == "o7") {
        var count = stack.length;
        var isX = v == "o6";
        for (var j = 0; j < count; j++) {
          var sval = stack.shift();
          if (isX)
            x += sval;
          else
            y += sval;
          isX = !isX;
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o8" || v == "o24") {
        var count = stack.length;
        var index = 0;
        while (index + 6 <= count) {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 6;
        }
        if (v == "o24") {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o11")
        break;
      else if (v == "o1234" || v == "o1235" || v == "o1236" || v == "o1237") {
        if (v == "o1234") {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = y;
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1235") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          y = c4y + stack.shift();
          stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1236") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1237") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
            x = c4x + stack.shift();
          } else {
            y = c4y + stack.shift();
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
      } else if (v == "o14") {
        if (stack.length > 0 && !haveWidth) {
          width = stack.shift() + font.nominalWidthX;
          haveWidth = true;
        }
        if (stack.length == 4) {
          var adx = stack.shift();
          var ady = stack.shift();
          var bchar = stack.shift();
          var achar = stack.shift();
          var bind = Typr.CFF.glyphBySE(font, bchar);
          var aind = Typr.CFF.glyphBySE(font, achar);
          Typr.U._drawCFF(font.CharStrings[bind], state2, font, p);
          state2.x = adx;
          state2.y = ady;
          Typr.U._drawCFF(font.CharStrings[aind], state2, font, p);
        }
        if (open) {
          Typr.U.P.closePath(p);
          open = false;
        }
      } else if (v == "o19" || v == "o20") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
        i += nStems + 7 >> 3;
      } else if (v == "o21") {
        if (stack.length > 2 && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
          haveWidth = true;
        }
        y += stack.pop();
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o22") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
          haveWidth = true;
        }
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o25") {
        while (stack.length > 6) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
        c1x = x + stack.shift();
        c1y = y + stack.shift();
        c2x = c1x + stack.shift();
        c2y = c1y + stack.shift();
        x = c2x + stack.shift();
        y = c2y + stack.shift();
        Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
      } else if (v == "o26") {
        if (stack.length % 2) {
          x += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x;
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x;
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o27") {
        if (stack.length % 2) {
          y += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y;
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o10" || v == "o29") {
        var obj = v == "o10" ? font.Private : font;
        if (stack.length == 0) {
          console.log("error: empty stack");
        } else {
          var ind = stack.pop();
          var subr = obj.Subrs[ind + obj.Bias];
          state2.x = x;
          state2.y = y;
          state2.nStems = nStems;
          state2.haveWidth = haveWidth;
          state2.width = width;
          state2.open = open;
          Typr.U._drawCFF(subr, state2, font, p);
          x = state2.x;
          y = state2.y;
          nStems = state2.nStems;
          haveWidth = state2.haveWidth;
          width = state2.width;
          open = state2.open;
        }
      } else if (v == "o30" || v == "o31") {
        var count, count1 = stack.length;
        var index = 0;
        var alternate = v == "o31";
        count = count1 & ~2;
        index += count1 - count;
        while (index < count) {
          if (alternate) {
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y = c2y + stack.shift();
            if (count - index == 5) {
              x = c2x + stack.shift();
              index++;
            } else
              x = c2x;
            alternate = false;
          } else {
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            if (count - index == 5) {
              y = c2y + stack.shift();
              index++;
            } else
              y = c2y;
            alternate = true;
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 4;
        }
      } else if ((v + "").charAt(0) == "o") {
        console.log("Unknown operation: " + v, cmds);
        throw v;
      } else
        stack.push(v);
    }
    state2.x = x;
    state2.y = y;
    state2.nStems = nStems;
    state2.haveWidth = haveWidth;
    state2.width = width;
    state2.open = open;
  };
  var typr_js = Typr;
  let top$1 = window.top;
  try {
    let _self = lib.$gm.unsafeWindow;
    let _try_count = 10;
    while (_self.parent !== void 0 && _try_count > 0) {
      if (_self.location.href.includes("/mycourse/studentstudy")) {
        top$1 = _self;
        console.log("[ocsjs] top change to :" + top$1.location.href);
        break;
      } else {
        _try_count--;
        _self = _self.parent;
      }
    }
  } catch (e) {
    console.warn("[ocsjs] fail of find top");
    console.warn(e);
    top$1 = window.top;
  }
  try {
    top$1.typrMapping = top$1.typrMapping || void 0;
    top$1.jobs = top$1.jobs || [];
    top$1.currentMedia = top$1.currentMedia || void 0;
  } catch {
  }
  const state$3 = {
    study: {
      videojs: /* @__PURE__ */ Object.create({}),
      hacked: false,
      answererWrapperUnsetMessage: void 0,
      playbackRateWarningListenerId: 0
    }
  };
  const CXProject = lib.Project.create({
    name: "\u8D85\u661F\u5B66\u4E60\u901A",
    domains: [
      "chaoxing.com",
      "edu.cn",
      "org.cn",
      "xueyinonline.com",
      "hnsyu.net",
      "qutjxjy.cn",
      "ynny.cn",
      "hnvist.cn",
      "fjlecb.cn",
      "gdhkmooc.com",
      "cugbonline.cn",
      "zjelib.cn",
      "cqrspx.cn",
      "neauce.com",
      "zhihui-yun.com",
      "cqie.cn",
      "ccqmxx.com"
    ],
    scripts: {
      guide: new lib.Script({
        name: "\u{1F4A1} \u4F7F\u7528\u63D0\u793A",
        matches: [
          ["\u9996\u9875", "https://www.chaoxing.com"],
          ["\u65E7\u7248\u4E2A\u4EBA\u9996\u9875", "chaoxing.com/space/index"],
          ["\u65B0\u7248\u4E2A\u4EBA\u9996\u9875", "chaoxing.com/base"],
          ["\u8BFE\u7A0B\u9996\u9875", "chaoxing.com/mycourse"],
          ["\u65B0\u7248\u8BFE\u7A0B\u9996\u9875", "chaoxing.com/mooc2-ans/mycourse"]
        ],
        namespace: "cx.guide",
        configs: {
          notes: {
            defaultValue: `\u8BF7\u624B\u52A8\u8FDB\u5165\u89C6\u9891\u3001\u4F5C\u4E1A\u3001\u8003\u8BD5\u9875\u9762\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u8FD0\u884C\u3002`
          }
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
        }
      }),
      study: new lib.Script({
        name: "\u{1F5A5}\uFE0F \u8BFE\u7A0B\u5B66\u4E60",
        namespace: "cx.new.study",
        matches: [
          ["\u4EFB\u52A1\u70B9\u9875\u9762", "/knowledge/cards"],
          ["\u9605\u8BFB\u4EFB\u52A1\u70B9", "/readsvr/book/mooc"]
        ],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u81EA\u52A8\u7B54\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\u3002",
              ["\u4EFB\u52A1\u70B9\u4E0D\u662F\u987A\u5E8F\u6267\u884C\uFF0C\u5982\u679C\u67D0\u4E00\u4E2A\u4EFB\u52A1\u6CA1\u6709\u52A8", "\u8BF7\u67E5\u770B\u662F\u5426\u6709\u5176\u4ED6\u4EFB\u52A1\u6B63\u5728\u5B66\u4E60\uFF0C\u8010\u5FC3\u7B49\u5F85\u5373\u53EF\u3002"],
              "\u95EF\u5173\u6A21\u5F0F\u8BF7\u6CE8\u610F\u9898\u5E93\u5982\u679C\u6CA1\u5B8C\u6210\uFF0C\u9700\u8981\u81EA\u5DF1\u5B8C\u6210\u624D\u80FD\u89E3\u9501\u7AE0\u8282\u3002",
              "\u4E0D\u8981\u6700\u5C0F\u5316\u6D4F\u89C8\u5668\uFF0C\u53EF\u80FD\u5BFC\u81F4\u811A\u672C\u6682\u505C\u3002",
              "\u811A\u672C\u8BE6\u60C5\u8FD0\u884C\u65E5\u5FD7\u8BF7\u524D\u5F80\uFF1A\u540E\u53F0-\u65E5\u5FD7 \u67E5\u770B"
            ]).outerHTML
          },
          playbackRate,
          volume,
          videoQuizStrategy: {
            label: "\u89C6\u9891\u5185\u9898\u76EE",
            tag: "select",
            options: [
              ["random", "\u968F\u673A\u7B54\u9898"],
              ["ignore", "\u5FFD\u7565"]
            ],
            attrs: {
              title: "\u89C6\u9891\u6709\u65F6\u5728\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u4F1A\u5F39\u51FA\u9898\u76EE\uFF0C\u8FD9\u4E2A\u597D\u50CF\u5E76\u4E0D\u8BA1\u7B97\u5728\u5206\u6570\u5185\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5FFD\u7565\uFF0C\u89C6\u9891\u53EF\u4EE5\u6B63\u5E38\u89C2\u770B\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u51E0\u4E2A\u65B9\u6CD5\u5904\u7406\u9898\u76EE"
            },
            defaultValue: "random"
          },
          mode: {
            label: "\u8DF3\u8F6C\u6A21\u5F0F",
            tag: "select",
            options: [
              ["next", "\u5B8C\u6210\u540E\u8DF3\u8F6C\u4E0B\u4E00\u8282", "\u5B8C\u6210\u5C0F\u8282\u540E\uFF0C\u81EA\u52A8\u70B9\u51FB\u4E0B\u4E00\u8282\u6309\u94AE"],
              ["job", "\u5B8C\u6210\u540E\u8DF3\u8F6C\u672A\u5B8C\u6210\u4EFB\u52A1\u70B9\uFF08\u8BD5\u9A8C\u529F\u80FD\uFF09", "\u5982\u679C\u672A\u627E\u5230\u4EFB\u52A1\u70B9\uFF0C\u5219\u4F1A\u76F4\u63A5\u7ED3\u675F\u811A\u672C\u8FD0\u884C\uFF0C\u76EE\u524D\u5904\u4E8E\u8BD5\u9A8C\u9636\u6BB5\u3002"],
              ["manually", "\u5B8C\u6210\u540E\u6682\u505C\uFF0C\u7B49\u5F85\u624B\u52A8\u8DF3\u8F6C", "\u9002\u7528\u4E8E\u81EA\u5DF1\u624B\u52A8\u8FD0\u884C"]
            ],
            defaultValue: "next"
          },
          restudy: {
            label: "\u590D\u4E60\u6A21\u5F0F",
            attrs: { title: "\u5DF2\u7ECF\u5B8C\u6210\u7684\u89C6\u9891\u7EE7\u7EED\u5B66\u4E60\uFF0C\u5E76\u4ECE\u5F53\u524D\u7684\u7AE0\u8282\u5F80\u4E0B\u5F00\u59CB\u5B66\u4E60", type: "checkbox" },
            defaultValue: false
          },
          forceLearn: {
            label: "\u5F3A\u5236\u5B66\u4E60",
            attrs: {
              title: "\u89C6\u9891\u4E00\u822C\u5206\u4E3A\uFF1A\u975E\u4EFB\u52A1\u70B9\u3001\u4EFB\u52A1\u70B9\u3001\u548C\u5DF2\u5B8C\u6210\u4EFB\u52A1\u70B9\uFF0C\u5F53\u9047\u5230\u201C\u975E\u4EFB\u52A1\u70B9\u201D\u65F6\u9700\u8981\u5F00\u542F\u6B64\u9009\u9879\u624D\u4F1A\u8FDB\u884C\u5B66\u4E60",
              type: "checkbox"
            },
            defaultValue: false
          },
          backToFirstWhenFinish: {
            label: "\u5B8C\u6210\u5168\u90E8\u540E\u91CD\u65B0\u5B66\u4E60",
            attrs: {
              type: "checkbox",
              title: "\u5F53\u7AE0\u8282\u5DF2\u7ECF\u5B66\u4E60\u5B8C\u6210\u81F3\u6700\u540E\u4E00\u7AE0\u65F6\uFF0C\u8DF3\u8F6C\u5230\u7B2C\u4E00\u4E2A\u7AE0\u8282\u91CD\u65B0\u5F00\u59CB\u5B66\u4E60\u3002"
            },
            defaultValue: false
          },
          showTextareaWhenEdit: {
            label: "\u7F16\u8F91\u65F6\u663E\u793A\u81EA\u5B9A\u4E49\u7F16\u8F91\u6846",
            attrs: {
              type: "checkbox",
              title: "\u8D85\u661F\u9ED8\u8BA4\u7981\u6B62\u5728\u7F16\u8F91\u6846\u4E2D\u590D\u5236\u7C98\u8D34\uFF0C\u5F00\u542F\u6B64\u9009\u9879\u53EF\u4EE5\u5728\u6587\u672C\u6846\u7F16\u8F91\u65F6\u751F\u6210\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7F16\u8F91\u6846\u8FDB\u884C\u7F16\u8F91\uFF0C\u811A\u672C\u4F1A\u5C06\u5185\u5BB9\u540C\u6B65\u5230\u7F16\u8F91\u6846\u4E2D\u3002"
            },
            defaultValue: true
          },
          notifyWhenHasFaceRecognition: {
            label: "\u51FA\u73B0\u4EBA\u8138\u8BC6\u522B\u65F6\u901A\u77E5\u6211",
            attrs: {
              type: "checkbox"
            },
            defaultValue: true
          },
          enableMedia: {
            separator: "\u4EFB\u52A1\u70B9\u5F00\u5173",
            label: "\u89C6\u9891/\u97F3\u9891\u81EA\u52A8\u64AD\u653E",
            attrs: { type: "checkbox", title: "\u5F00\u542F\uFF1A\u97F3\u9891\u548C\u89C6\u9891\u7684\u81EA\u52A8\u64AD\u653E" },
            defaultValue: true
          },
          enablePPT: {
            label: "PPT/\u4E66\u7C4D\u81EA\u52A8\u5B8C\u6210",
            attrs: { type: "checkbox", title: "\u5F00\u542F\uFF1APPT/\u4E66\u7C4D\u81EA\u52A8\u7FFB\u9605" },
            defaultValue: true
          },
          enableChapterTest: {
            label: "\u7AE0\u8282\u6D4B\u8BD5\u81EA\u52A8\u7B54\u9898",
            attrs: { type: "checkbox", title: "\u5F00\u542F\uFF1A\u7AE0\u8282\u6D4B\u8BD5\u81EA\u52A8\u7B54\u9898" },
            defaultValue: true
          },
          enableHyperlink: {
            label: "\u94FE\u63A5\u4EFB\u52A1\u81EA\u52A8\u5B8C\u6210",
            attrs: { type: "checkbox", title: "\u5F00\u542F\uFF1A\u94FE\u63A5\u4EFB\u52A1\u81EA\u52A8\u5B8C\u6210" },
            defaultValue: true
          }
        },
        onrender({ panel }) {
          var _a;
          if (!((_a = CommonProject.scripts.settings.cfg.answererWrappers) == null ? void 0 : _a.length)) {
            answerWrapperEmptyWarning(10);
          }
          this.offConfigChange(state$3.study.playbackRateWarningListenerId);
          state$3.study.playbackRateWarningListenerId = this.onConfigChange("playbackRate", (playbackRate2) => {
            if (playbackRate2 > 3) {
              lib.$modal.alert({
                title: "\u26A0\uFE0F\u9AD8\u500D\u901F\u8B66\u544A",
                content: lib.$ui.notes(["\u9AD8\u500D\u901F\u53EF\u80FD\u5BFC\u81F4\u5B66\u4E60\u8BB0\u5F55\u6E05\u7A7A", "\u8D85\u661F\u540E\u53F0\u53EF\u4EE5\u770B\u5230\u5B66\u4E60\u65F6\u957F\uFF0C\u8BF7\u8C28\u614E\u8BBE\u7F6E\u2757"])
              });
            }
          }) || 0;
        },
        async oncomplete() {
          if (/\/readsvr\/book\/mooc/.test(location.href)) {
            $console.log("\u6B63\u5728\u5B8C\u6210\u4E66\u7C4D/PPT...");
            setTimeout(() => {
              readweb.goto(epage);
            }, 5e3);
            return;
          }
          if (/\/knowledge\/cards/.test(location.href)) {
            const updateMediaState = () => {
              if (top$1.currentMedia) {
                top$1.currentMedia.playbackRate = parseFloat(this.cfg.playbackRate.toString());
                top$1.currentMedia.volume = this.cfg.volume;
              }
            };
            this.onConfigChange("playbackRate", updateMediaState);
            this.onConfigChange("volume", updateMediaState);
            await study({
              ...this.cfg,
              playbackRate: parseFloat(this.cfg.playbackRate.toString()),
              workOptions: CommonProject.scripts.settings.methods.getWorkOptions()
            });
          }
        }
      }),
      work: new lib.Script({
        name: "\u270D\uFE0F \u4F5C\u4E1A\u8003\u8BD5\u811A\u672C",
        matches: [
          ["\u4F5C\u4E1A\u9875\u9762", "/mooc2/work/dowork"],
          ["\u8003\u8BD5\u6574\u5377\u9884\u89C8\u9875\u9762", "/mooc2/exam/preview"]
        ],
        namespace: "cx.new.work",
        configs: { notes: workNotes },
        async oncomplete() {
          const isExam2 = /\/exam\/preview/.test(location.href);
          commonWork(this, {
            workerProvider: (opts) => workOrExam$1(isExam2 ? "exam" : "work", opts)
          });
        }
      }),
      autoRead: new lib.Script({
        name: "\u{1F5A5}\uFE0F \u81EA\u52A8\u9605\u8BFB",
        matches: [
          ["\u9605\u8BFB\u9875\u9762", "/ztnodedetailcontroller/visitnodedetail"],
          ["\u8BFE\u7A0B\u76EE\u5F55", /chaoxing.com\/course\/\d+\.html/],
          ["\u8BFE\u7A0B\u76EE\u5F55", /chaoxing.com\/mooc-ans\/course\/\d+\.html/]
        ],
        namespace: "cx.new.auto-read",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["\u9605\u8BFB\u4EFB\u52A1\u6B21\u65E5\u624D\u4F1A\u7EDF\u8BA1\u9605\u8BFB\u65F6\u957F"]).outerHTML
          },
          restartAfterFinish: {
            label: "\u65E0\u9650\u9605\u8BFB",
            attrs: { type: "checkbox", title: "\u9605\u8BFB\u5B8C\u6210\u6700\u540E\u4E00\u7AE0\u540E\u4ECE\u5934\u7B2C\u4E00\u7AE0\u7EE7\u7EED\u9605\u8BFB" },
            defaultValue: false
          }
        },
        oncomplete() {
          if (location.href.includes("/ztnodedetailcontroller/visitnodedetail") === false) {
            startAtFirst();
            return;
          }
          let top2 = 0;
          const interval = setInterval(() => {
            top2 += (document.documentElement.scrollHeight - window.innerHeight) / 60;
            window.scrollTo({
              behavior: "smooth",
              top: top2
            });
          }, 1e3);
          setTimeout(() => {
            clearInterval(interval);
            const next2 = lib.$el(".nodeItem.r i");
            if (next2) {
              next2.click();
            } else {
              if (this.cfg.restartAfterFinish) {
                setTimeout(() => startAtFirst(), 3e3);
                lib.$message.info({ content: "\u5373\u5C06\u91CD\u65B0\u4ECE\u5934\u5F00\u59CB\u9605\u8BFB", duration: 10 });
                $console.log("\u5373\u5C06\u91CD\u65B0\u4ECE\u5934\u5F00\u59CB\u9605\u8BFB");
              } else {
                lib.$message.success({ content: "\u9605\u8BFB\u4EFB\u52A1\u5DF2\u5B8C\u6210", duration: 0 });
                $console.log("\u672A\u68C0\u6D4B\u5230\u4E0B\u4E00\u9875");
              }
            }
          }, (60 + 3) * 1e3);
          function startAtFirst() {
            const texts = lib.$$el(".course_section .chapterText");
            if (texts.length) {
              texts[0].click();
            }
          }
        }
      }),
      pageRedirect: new lib.Script({
        name: "\u7AE0\u8282\u9875\u9762\u81EA\u52A8\u5207\u6362\u811A\u672C",
        matches: [["\u8BFE\u7A0B\u4EFB\u52A1\u9875\u9762", "pageHeader=0"]],
        hideInPanel: true,
        async oncomplete() {
          if (top$1 === window) {
            const a = document.querySelector('a[title="\u7AE0\u8282"]');
            if (a) {
              await $.sleep(1e3);
              a.click();
              lib.$message.info({
                content: "\u5DF2\u7ECF\u4E3A\u60A8\u81EA\u52A8\u5207\u6362\u5230\u7AE0\u8282\u5217\u8868\u9875\u9762\uFF0C\u624B\u52A8\u8FDB\u5165\u4EFB\u610F\u7AE0\u8282\u5373\u53EF\u5F00\u59CB\u81EA\u52A8\u5B66\u4E60\uFF01"
              });
            }
          }
        }
      }),
      versionRedirect: new lib.Script({
        name: "\u7248\u672C\u5207\u6362\u811A\u672C",
        matches: [
          ["", "mooc2=0"],
          ["", "mycourse/studentcourse"],
          ["", "work/getAllWork"],
          ["", "work/doHomeWorkNew"],
          ["", "exam/test\\?"],
          ["", "exam/test/reVersionTestStartNew.*examsystem.*"],
          ["", "mooc-ans/mycourse/studentstudy"]
        ],
        hideInPanel: true,
        async oncomplete() {
          if (top$1 === window) {
            lib.$message.warn({
              content: "OCS\u7F51\u8BFE\u52A9\u624B\u4E0D\u652F\u6301\u65E7\u7248\u8D85\u661F, \u5373\u5C06\u5207\u6362\u5230\u8D85\u661F\u65B0\u7248, \u5982\u6709\u5176\u4ED6\u7B2C\u4E09\u65B9\u63D2\u4EF6\u8BF7\u5173\u95ED, \u53EF\u80FD\u6709\u517C\u5BB9\u95EE\u9898\u5BFC\u81F4\u9891\u7E41\u5207\u6362\u3002",
              duration: 0
            });
            await $.sleep(2e3);
            await waitForFaceRecognition();
            const experience = document.querySelector(".experience");
            if (experience) {
              experience.click();
            } else {
              const newUrl = new URL(window.location.href);
              if (window.location.href.includes("mooc-ans/mycourse/studentstudy")) {
                newUrl.pathname = "/mycourse/studentstudy";
              }
              const params = newUrl.searchParams;
              params.set("mooc2", "1");
              params.set("newMooc", "true");
              params.delete("examsystem");
              window.location.replace(newUrl);
            }
          }
        }
      }),
      examRedirect: new lib.Script({
        name: "\u8003\u8BD5\u6574\u5377\u9884\u89C8\u811A\u672C",
        matches: [
          ["\u65B0\u7248\u8003\u8BD5\u9875\u9762", "exam-ans/exam/test/reVersionTestStartNew"],
          ["\u65B0\u7248\u8003\u8BD5\u9875\u97622", "mooc-ans/exam/test/reVersionTestStartNew"]
        ],
        hideInPanel: true,
        oncomplete() {
          lib.$message.info({ content: "\u5373\u5C06\u8DF3\u8F6C\u5230\u6574\u5377\u9884\u89C8\u9875\u9762\u8FDB\u884C\u8003\u8BD5\u3002" });
          setTimeout(() => lib.$gm.unsafeWindow.topreview(), 3e3);
        }
      }),
      rateHack: new lib.Script({
        name: "\u5C4F\u853D\u500D\u901F\u9650\u5236",
        hideInPanel: true,
        matches: [["", "/ananas/modules/video/"]],
        onstart() {
          rateHack();
        }
      }),
      copyHack: new lib.Script({
        name: "\u5C4F\u853D\u590D\u5236\u7C98\u8D34\u9650\u5236",
        hideInPanel: true,
        matches: [["\u6240\u6709\u9875\u9762", /.*/]],
        methods() {
          return {
            hackEditorPaste() {
              var _a, _b;
              try {
                const instants = ((_b = (_a = lib.$gm.unsafeWindow) == null ? void 0 : _a.UE) == null ? void 0 : _b.instants) || [];
                for (const key in instants) {
                  const ue = instants[key];
                  if (ue == null ? void 0 : ue.textarea) {
                    ue.body.addEventListener("click", async () => {
                      if (CXProject.scripts.study.cfg.showTextareaWhenEdit) {
                        const defaultText = lib.h("span", { innerHTML: ue.textarea.value }).textContent;
                        lib.$modal.prompt({
                          content: "\u8BF7\u5728\u6B64\u6587\u672C\u6846\u8FDB\u884C\u7F16\u8F91\uFF0C\u9632\u6B62\u8D85\u661F\u65E0\u6CD5\u590D\u5236\u7C98\u8D34\u3002(\u5982\u9700\u5173\u95ED\u8BF7\u524D\u5F80\u8BBE\u7F6E: \u8BFE\u7A0B\u5B66\u4E60-\u7F16\u8F91\u65F6\u663E\u793A\u81EA\u5B9A\u4E49\u7F16\u8F91\u6846)",
                          width: 800,
                          inputDefaultValue: defaultText || "",
                          modalInputType: "textarea",
                          onConfirm: (val = "") => {
                            ue.setContent(
                              val.split("\n").map((line) => `<p>${line}</p>`).join("")
                            );
                          }
                        });
                      }
                    });
                    if (lib.$gm.unsafeWindow.editorPaste) {
                      ue.removeListener("beforepaste", lib.$gm.unsafeWindow.editorPaste);
                    }
                    if (lib.$gm.unsafeWindow.myEditor_paste) {
                      ue.removeListener("beforepaste", lib.$gm.unsafeWindow.myEditor_paste);
                    }
                  }
                }
              } catch {
              }
            }
          };
        },
        oncomplete() {
          const hackInterval = setInterval(() => {
            if (typeof lib.$gm.unsafeWindow.UE !== "undefined") {
              clearInterval(hackInterval);
              this.methods.hackEditorPaste();
              console.log("\u5DF2\u89E3\u9664\u8F93\u5165\u6846\u65E0\u6CD5\u590D\u5236\u7C98\u8D34\u9650\u5236");
            }
          }, 500);
        }
      }),
      studyDispatcher: new lib.Script({
        name: "\u8BFE\u7A0B\u5B66\u4E60\u8C03\u5EA6\u5668",
        matches: [["\u8BFE\u7A0B\u5B66\u4E60\u9875\u9762", "/mycourse/studentstudy"]],
        namespace: "cx.new.study-dispatcher",
        hideInPanel: true,
        async oncomplete() {
          lib.$menu("\u{1F5A5}\uFE0F", { scriptPanelLink: CXProject.scripts.study });
          lib.$menu("\u2699\uFE0F", { scriptPanelLink: CommonProject.scripts.settings });
          lib.$menu("\u{1F30F}", { scriptPanelLink: CommonProject.scripts.workResults });
          lib.$menu("\u{1F4C4}", { scriptPanelLink: BackgroundProject.scripts.console });
          lib.$menu("\u{1F4E5}", { scriptPanelLink: BackgroundProject.scripts.update });
          const restudy2 = CXProject.scripts.study.cfg.restudy;
          CommonProject.scripts.render.methods.pin(CXProject.scripts.study);
          if (!restudy2) {
            const params = new URLSearchParams(window.location.href);
            const mooc = params.get("mooc2");
            if (mooc === null) {
              params.set("mooc2", "1");
              window.location.replace(decodeURIComponent(params.toString()));
              return;
            }
            let chapters = await CXAnalyses.waitForChapterInfos();
            chapters = chapters.filter((chapter) => chapter.unFinishCount !== 0);
            if (chapters.length === 0) {
              lib.$message.warn({ content: "\u9875\u9762\u4EFB\u52A1\u70B9\u6570\u91CF\u4E3A\u7A7A! \u8BF7\u5237\u65B0\u91CD\u8BD5!" });
            } else {
              const params2 = new URLSearchParams(window.location.href);
              const courseId = params2.get("courseId");
              const classId = params2.get("clazzid");
              setTimeout(() => {
                if (lib.$$el(`.posCatalog_active[id="cur${chapters[0].chapterId}"]`).length === 0) {
                  lib.$gm.unsafeWindow.getTeacherAjax(courseId, classId, chapters[0].chapterId);
                }
              }, 1e3);
            }
          }
        }
      }),
      cxSecretFontRecognize: new lib.Script({
        name: "\u7E41\u4F53\u5B57\u8BC6\u522B",
        hideInPanel: true,
        matches: [
          ["\u9898\u76EE\u9875\u9762", "work/doHomeWorkNew"],
          ["\u8003\u8BD5\u6574\u5377\u9884\u89C8", "/mooc2/exam/preview"],
          ["\u4F5C\u4E1A", "/mooc2/work/dowork"]
        ],
        async oncomplete() {
          await mappingRecognize();
        }
      }),
      jfkGuide: new lib.Script({
        name: "\u{1F4A1} \u79EF\u5206\u8BFE\u4F7F\u7528\u63D0\u793A",
        matches: [["\u79EF\u5206\u8BFE\u9875\u9762", "/plaza"]],
        namespace: "cx.jfk.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u79EF\u5206\u8BFE\u8BF7\u8FDB\u5165\u8BFE\u7A0B\u540E\uFF0C\u5F00\u542F\u590D\u4E60\u6A21\u5F0F\uFF0C\u5E76\u4E14\u5173\u95ED\u81EA\u52A8\u4E0B\u4E00\u7AE0",
              "\u8BFE\u7A0B\u5B8C\u6210\u540E\u8BF7\u624B\u52A8\u5207\u6362\uFF0C\u5982\u679C\u7531\u811A\u672C\u8FDB\u884C\u81EA\u52A8\u8DF3\u8F6C\u4F1A\u51FA\u73B0\u4E71\u8DF3\u8F6C\u7684\u53EF\u80FD\u3002"
            ]).outerHTML
          }
        },
        oncomplete(...args) {
          CommonProject.scripts.render.methods.pin(this);
        }
      })
    }
  });
  function workOrExam$1(type = "work", { answererWrappers, period, thread, redundanceWordsText, answerSeparators, answerMatchMode }) {
    lib.$message.info(`\u5F00\u59CB${type === "work" ? "\u4F5C\u4E1A" : "\u8003\u8BD5"}`);
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "cx"
    });
    const workOrExamQuestionTitleTransform = (titles) => {
      const optimizationTitle = titles.map((titleElement) => {
        if (titleElement) {
          const titleCloneEl = titleElement.cloneNode(true);
          const childNodes = titleCloneEl.childNodes;
          childNodes[0].remove();
          childNodes[0].remove();
          return optimizationElementWithImage(titleCloneEl, true).innerText;
        }
        return "";
      }).join(",");
      return removeRedundantWords(
        StringUtils.of(optimizationTitle).nowrap(" ").nospace().toString().trim(),
        redundanceWordsText.split("\n")
      );
    };
    const worker = new OCSWorker({
      root: ".questionLi",
      elements: {
        title: [
          (root2) => lib.$el("h3", root2)
        ],
        options: ".answerBg .answer_p, .textDIV, .eidtDiv",
        type: type === "exam" ? 'input[name^="type"]' : 'input[id^="answertype"]',
        lineAnswerInput: ".line_answer input[name^=answer]",
        lineSelectBox: ".line_answer_ct .selectBox ",
        reading: ".reading_answer",
        filling: ".filling_answer"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        if (elements2.title) {
          const title = workOrExamQuestionTitleTransform(elements2.title);
          if (title) {
            const typeInput = elements2.type[0];
            return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
              await $.sleep((period != null ? period : 3) * 1e3);
              return defaultAnswerWrapperHandler(answererWrappers, {
                type: (typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0) || "unknown",
                title,
                options: ctx.type === "completion" ? "" : ctx.elements.options.map((o) => optimizationElementWithImage(o, true).innerText).join("\n")
              });
            });
          } else {
            throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
          }
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: async (ctx) => {
        var _a;
        const { elements: elements2, searchInfos } = ctx;
        const typeInput = elements2.type[0];
        const type2 = getQuestionType(parseInt(typeInput.value));
        if (type2 && (type2 === "completion" || type2 === "multiple" || type2 === "judgement" || type2 === "single")) {
          const resolver = defaultQuestionResolve(ctx)[type2];
          return await resolver(
            searchInfos,
            elements2.options.map((option) => optimizationElementWithImage(option)),
            async (type3, answer, option) => {
              var _a2, _b, _c;
              if (type3 === "judgement" || type3 === "single" || type3 === "multiple") {
                if ((option == null ? void 0 : option.parentElement) && lib.$$el('[class*="check_answer"]', option.parentElement).length === 0) {
                  option.click();
                  await $.sleep(500);
                }
              } else if (type3 === "completion" && answer.trim()) {
                const text = option == null ? void 0 : option.querySelector("textarea");
                const textareaFrame = option == null ? void 0 : option.querySelector("iframe");
                if (text) {
                  text.value = answer;
                }
                if (textareaFrame == null ? void 0 : textareaFrame.contentDocument) {
                  textareaFrame.contentDocument.body.innerHTML = answer;
                }
                if ((_a2 = option == null ? void 0 : option.parentElement) == null ? void 0 : _a2.parentElement) {
                  (_c = lib.$el("[onclick*=saveQuestion]", (_b = option == null ? void 0 : option.parentElement) == null ? void 0 : _b.parentElement)) == null ? void 0 : _c.click();
                  await $.sleep(500);
                }
              }
            }
          );
        } else if (type2 && type2 === "line") {
          for (const answers of searchInfos.map((info) => info.results.map((res) => res.answer))) {
            let ans = answers;
            if (ans.length === 1) {
              ans = splitAnswer(ans[0]);
            }
            if (ans.filter(Boolean).length !== 0 && elements2.lineAnswerInput) {
              for (let index = 0; index < elements2.lineSelectBox.length; index++) {
                const box = elements2.lineSelectBox[index];
                if (ans[index]) {
                  (_a = lib.$el(`li[data=${ans[index]}] a`, box)) == null ? void 0 : _a.click();
                  await $.sleep(200);
                }
              }
              return { finish: true };
            }
          }
          return { finish: false };
        } else if (type2 && type2 === "fill") {
          return readerAndFillHandle(searchInfos, elements2.filling);
        } else if (type2 && type2 === "reader") {
          return readerAndFillHandle(searchInfos, elements2.reading);
        }
        return { finish: false };
      },
      onResultsUpdate(current, _, res) {
        var _a;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, workOrExamQuestionTitleTransform));
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], workOrExamQuestionTitleTransform)
          );
        }
      }
    });
    worker.doWork().then(() => {
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
    }).catch((err) => {
      console.error(err);
      lib.$message.error("\u7B54\u9898\u7A0B\u5E8F\u53D1\u751F\u9519\u8BEF : " + err.message);
    });
    return worker;
  }
  async function mappingRecognize(doc = document) {
    var _a, _b;
    let typrMapping = /* @__PURE__ */ Object.create({});
    try {
      top$1.typrMapping = top$1.typrMapping || await loadTyprMapping();
      typrMapping = top$1.typrMapping;
    } catch {
      typrMapping = await loadTyprMapping();
    }
    const fontFaceEl = Array.from(doc.head.querySelectorAll("style")).find(
      (style) => {
        var _a2;
        return (_a2 = style.textContent) == null ? void 0 : _a2.includes("font-cxsecret");
      }
    );
    const base64ToUint8Array = (base64) => {
      const data = window.atob(base64);
      const buffer = new Uint8Array(data.length);
      for (let i = 0; i < data.length; ++i) {
        buffer[i] = data.charCodeAt(i);
      }
      return buffer;
    };
    const fontMap = typrMapping;
    if (fontFaceEl && Object.keys(fontMap).length > 0) {
      const font = (_b = (_a = fontFaceEl.textContent) == null ? void 0 : _a.match(/base64,([\w\W]+?)'/)) == null ? void 0 : _b[1];
      if (font) {
        $console.log("\u6B63\u5728\u8BC6\u522B\u7E41\u4F53\u5B57");
        const code = typr_js.parse(base64ToUint8Array(font));
        const match = {};
        for (let i = 19968; i < 40870; i++) {
          const Glyph = typr_js.U.codeToGlyph(code, i);
          if (!Glyph)
            continue;
          const path = typr_js.U.glyphToPath(code, Glyph);
          const hex = md5(JSON.stringify(path)).slice(24);
          match[i.toString()] = fontMap[hex];
        }
        const fonts = CXAnalyses.getSecretFont(doc);
        fonts.forEach((el, index) => {
          let html = el.innerHTML;
          for (const key in match) {
            const word = String.fromCharCode(parseInt(key));
            const value = String.fromCharCode(match[key]);
            if (word === value) {
              continue;
            }
            while (html.indexOf(word) !== -1) {
              html = html.replace(word, value);
            }
          }
          el.innerHTML = html;
          el.classList.remove("font-cxsecret");
        });
        $console.log("\u8BC6\u522B\u7E41\u4F53\u5B57\u5B8C\u6210\u3002");
      } else {
        $console.log("\u672A\u68C0\u6D4B\u5230\u7E41\u4F53\u5B57\u3002");
      }
    }
  }
  async function loadTyprMapping() {
    try {
      $console.log("\u6B63\u5728\u52A0\u8F7D\u7E41\u4F53\u5B57\u5E93\u3002");
      return await request("https://cdn.ocsjs.com/resources/font/table.json", {
        type: "GM_xmlhttpRequest",
        method: "get",
        responseType: "json"
      });
    } catch (err) {
      $console.error("\u8F7D\u7E41\u4F53\u5B57\u5E93\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5\uFF1A", String(err));
    }
  }
  const CXAnalyses = {
    isInSpecialMode() {
      return Array.from((top$1 == null ? void 0 : top$1.document.querySelectorAll(".catalog_points_sa,.catalog_points_er")) || []).length !== 0;
    },
    async isStuckInBreakingMode() {
      if (this.isInSpecialMode()) {
        const chapter = top$1 == null ? void 0 : top$1.document.querySelector(".posCatalog_active");
        if (chapter) {
          const id = chapter.getAttribute("id");
          if (id) {
            const counter = await lib.$store.getTab("chapter_counter") || /* @__PURE__ */ Object.create({});
            let count = Reflect.get(counter, id);
            count = count ? count + 1 : 1;
            Reflect.set(counter, id, count);
            let res = false;
            if (count >= 3) {
              Reflect.set(counter, id, 1);
              res = true;
            }
            await lib.$store.setTab("chapter_counter", counter);
            return res;
          }
        }
      }
      return false;
    },
    isInFinalTab() {
      const tabs = Array.from((top$1 == null ? void 0 : top$1.document.querySelectorAll(".prev_ul li")) || []);
      if (tabs.length === 0) {
        return true;
      }
      return tabs[tabs.length - 1].classList.contains("active");
    },
    isInFinalChapter() {
      var _a;
      return (_a = Array.from((top$1 == null ? void 0 : top$1.document.querySelectorAll(".posCatalog_select")) || []).pop()) == null ? void 0 : _a.classList.contains("posCatalog_active");
    },
    isFinishedAllChapters() {
      return this.getChapterInfos().every((chapter) => chapter.unFinishCount === 0);
    },
    getChapterInfos() {
      return Array.from((top$1 == null ? void 0 : top$1.document.querySelectorAll('[onclick^="getTeacherAjax"]')) || []).map((el) => {
        var _a, _b, _c;
        return {
          chapterId: (_b = (_a = el.getAttribute("onclick")) == null ? void 0 : _a.match(/\('(.*)','(.*)','(.*)'\)/)) == null ? void 0 : _b[3],
          unFinishCount: parseInt(((_c = el.parentElement.querySelector(".jobUnfinishCount")) == null ? void 0 : _c.value) || "0")
        };
      });
    },
    waitForChapterInfos(timeout = 10) {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          const res = this.getChapterInfos();
          if (res.length > 0) {
            clearInterval(interval);
            clearInterval(to);
            resolve(res);
          }
        }, 1e3);
        const to = setTimeout(() => {
          clearInterval(interval);
          resolve([]);
        }, timeout * 1e3);
      });
    },
    getSecretFont(doc = document) {
      return Array.from(doc.querySelectorAll(".font-cxsecret")).map((font) => {
        const after = font.querySelector(".after");
        return after === null ? font : after;
      });
    },
    isCurrentChapterFinished() {
      const job = top$1 == null ? void 0 : top$1.document.querySelector(".posCatalog_active");
      if (job) {
        if (job.querySelector(".icon_Completed") !== null) {
          return true;
        }
      }
      return false;
    }
  };
  function rateHack() {
    state$3.study.hacked = false;
    let dragCount = 0;
    try {
      hack();
      window.document.addEventListener("readystatechange", hack);
      window.addEventListener("load", hack);
    } catch (e) {
      console.error(e);
    }
    function hack() {
      const videojs = lib.$gm.unsafeWindow.videojs;
      const Ext = lib.$gm.unsafeWindow.Ext;
      if (typeof videojs !== "undefined" && typeof Ext !== "undefined") {
        if (state$3.study.hacked) {
          return;
        }
        state$3.study.hacked = true;
        const _origin = videojs.getPlugin("seekBarControl");
        const plugin = videojs.extend(videojs.getPlugin("plugin"), {
          constructor: function(videoExt, data) {
            const _sendLog = data.sendLog;
            data.sendLog = (...args) => {
              var _a;
              if (args[1] === "drag") {
                dragCount++;
                if (dragCount > 100) {
                  dragCount = 0;
                  (_a = lib.$el("video")) == null ? void 0 : _a.pause();
                }
              } else {
                _sendLog.apply(data, args);
              }
            };
            _origin.apply(_origin.prototype, [videoExt, data]);
          }
        });
        videojs.registerPlugin("seekBarControl", plugin);
        Ext.define("ans.VideoJs", {
          override: "ans.VideoJs",
          constructor: function(data) {
            this.addEvents(["seekstart"]);
            this.mixins.observable.constructor.call(this, data);
            const vjs = videojs(data.videojs, this.params2VideoOpt(data.params), function() {
            });
            Ext.fly(data.videojs).on("contextmenu", function(f) {
              f.preventDefault();
            });
            Ext.fly(data.videojs).on("keydown", function(f) {
              if (f.keyCode === 32 || f.keyCode === 37 || f.keyCode === 39 || f.keyCode === 107) {
                f.preventDefault();
              }
            });
            if (vjs.videoJsResolutionSwitcher) {
              vjs.on("resolutionchange", function() {
                const cr = vjs.currentResolution();
                const re2 = cr.sources ? cr.sources[0].res : false;
                Ext.setCookie("resolution", re2);
              });
            }
            if (vjs.videoJsPlayLine) {
              vjs.on("playlinechange", function() {
                const cp = vjs.currentPlayline();
                Ext.setCookie("net", cp.net);
              });
            }
          }
        });
      }
    }
  }
  async function study(opts) {
    var _a;
    await $.sleep(3e3);
    const searchedJobs = [];
    let searching = true;
    let attachmentCount = ((_a = lib.$gm.unsafeWindow.attachments) == null ? void 0 : _a.length) || 0;
    setTimeout(() => {
      searching = false;
    }, 10 * 1e3);
    const runJobs = async () => {
      const job = searchJob(opts, searchedJobs);
      if (job && job.func) {
        try {
          await job.func();
        } catch (e) {
          $console.error("\u672A\u77E5\u9519\u8BEF", e);
        }
        await $.sleep(1e3);
        await runJobs();
      } else if (attachmentCount > 0) {
        attachmentCount--;
        await $.sleep(1e3);
        await runJobs();
      } else if (searching) {
        await $.sleep(1e3);
        await runJobs();
      }
    };
    await runJobs();
    top$1._preChapterId = "";
    const next2 = async () => {
      if (CXAnalyses.isInFinalTab()) {
        if (await CXAnalyses.isStuckInBreakingMode()) {
          return lib.$modal.alert({
            content: "\u68C0\u6D4B\u5230\u6B64\u7AE0\u8282\u91CD\u590D\u8FDB\u5165, \u4E3A\u4E86\u907F\u514D\u65E0\u9650\u91CD\u590D, \u8BF7\u81EA\u884C\u624B\u52A8\u5B8C\u6210\u540E\u624B\u52A8\u70B9\u51FB\u4E0B\u4E00\u7AE0, \u6216\u8005\u5237\u65B0\u91CD\u8BD5\u3002"
          });
        }
      }
      if (CXAnalyses.isInFinalChapter()) {
        let content = "";
        if (opts.backToFirstWhenFinish) {
          content = "\u5DF2\u7ECF\u62B5\u8FBE\u6700\u540E\u4E00\u4E2A\u7AE0\u8282\uFF0C10\u79D2\u540E\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7AE0\u8282\u91CD\u65B0\u5F00\u59CB\u3002";
          setTimeout(() => {
            var _a2;
            (_a2 = top$1 == null ? void 0 : top$1.document.querySelector(".posCatalog_name")) == null ? void 0 : _a2.click();
          }, 10 * 1e3);
          lib.$message.info({ content, duration: 30 });
        } else {
          if (CXAnalyses.isFinishedAllChapters()) {
            content = "\u5168\u90E8\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF01";
          } else {
            content = "\u5DF2\u7ECF\u62B5\u8FBE\u6700\u540E\u4E00\u4E2A\u7AE0\u8282\uFF01\u4F46\u4ECD\u7136\u6709\u4EFB\u52A1\u70B9\u672A\u5B8C\u6210\uFF0C\u8BF7\u624B\u52A8\u5207\u6362\u81F3\u672A\u5B8C\u6210\u7684\u7AE0\u8282\u3002";
          }
          lib.$modal.alert({ content });
        }
        CommonProject.scripts.settings.methods.notificationBySetting(content, {
          duration: 0,
          extraTitle: "\u8D85\u661F\u5B66\u4E60\u901A\u5B66\u4E60\u811A\u672C"
        });
        return;
      }
      if (CXProject.scripts.study.cfg.mode === "job") {
        if (await checkChapterFinishedAndSkip(CXAnalyses.isInFinalTab()) === false) {
          const content = "\u5168\u90E8\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF01";
          lib.$modal.alert({ content });
          CommonProject.scripts.settings.methods.notificationBySetting(content, {
            duration: 0,
            extraTitle: "\u8D85\u661F\u5B66\u4E60\u901A\u5B66\u4E60\u811A\u672C"
          });
        }
      } else if (CXProject.scripts.study.cfg.mode === "next") {
        const curCourseId = lib.$el("#curCourseId", top$1 == null ? void 0 : top$1.document);
        const curChapterId = lib.$el("#curChapterId", top$1 == null ? void 0 : top$1.document);
        const curClazzId = lib.$el("#curClazzId", top$1 == null ? void 0 : top$1.document);
        const count = lib.$$el("#prev_tab .prev_ul li", top$1 == null ? void 0 : top$1.document);
        if (curChapterId && curCourseId && curClazzId) {
          top$1._preChapterId = curChapterId.value;
          top$1 == null ? void 0 : top$1.PCount.next(count.length.toString(), curChapterId.value, curCourseId.value, curClazzId.value, "");
        } else {
          $console.warn("\u53C2\u6570\u9519\u8BEF\uFF0C\u65E0\u6CD5\u8DF3\u8F6C\u4E0B\u4E00\u7AE0\uFF0C\u8BF7\u5C1D\u8BD5\u624B\u52A8\u5207\u6362\u3002");
        }
      } else {
        $console.warn("\u672A\u77E5\u7684\u8DF3\u8F6C\u6A21\u5F0F\uFF0C\u8BF7\u8054\u7CFB\u4F5C\u8005\u53CD\u9988");
      }
    };
    if (CXProject.scripts.study.cfg.mode !== "manually") {
      const msg = "\u9875\u9762\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF0C\u5373\u5C06\u8DF3\u8F6C\u3002";
      lib.$message.success({ content: msg });
      $console.info(msg);
      await $.sleep(5e3);
      next2();
    } else {
      const msg = "\u9875\u9762\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF0C\u81EA\u52A8\u8DF3\u8F6C\u5DF2\u5173\u95ED\uFF0C\u8BF7\u624B\u52A8\u8DF3\u8F6C\u3002";
      lib.$message.warn({ content: msg, duration: 0 });
      $console.warn(msg);
    }
  }
  function searchIFrame(root2) {
    var _a, _b;
    let list = Array.from(root2.querySelectorAll("iframe"));
    const result = [];
    while (list.length) {
      const frame = list.shift();
      try {
        if (frame && ((_a = frame == null ? void 0 : frame.contentWindow) == null ? void 0 : _a.document)) {
          result.push(frame);
          const frames = (_b = frame == null ? void 0 : frame.contentWindow) == null ? void 0 : _b.document.querySelectorAll("iframe");
          list = list.concat(Array.from(frames || []));
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    return result;
  }
  function searchJob(opts, searchedJobs) {
    const knowCardWin = lib.$gm.unsafeWindow;
    const searchJobElement = (root2) => {
      return domSearch(
        {
          videojs: "#video,#audio",
          chapterTest: ".TiMu",
          read: "#img.imglook",
          pptWithAudio: ".swiper-container",
          hyperlink: "#hyperlink"
        },
        root2.contentWindow.document
      );
    };
    const search = (root2) => {
      var _a, _b, _c, _d;
      const win = root2.contentWindow;
      const { videojs, read, chapterTest, hyperlink, pptWithAudio } = searchJobElement(root2);
      if (win && (videojs || read || chapterTest || hyperlink || pptWithAudio)) {
        const frame_data_str = ((_a = win.frameElement) == null ? void 0 : _a.getAttribute("data")) || ((_d = (_c = (_b = win.frameElement) == null ? void 0 : _b.contentWindow) == null ? void 0 : _c.parent.frameElement) == null ? void 0 : _d.getAttribute("data")) || "{}";
        const frame_data = JSON.parse(frame_data_str);
        const target_jobid = frame_data.jobid || frame_data._jobid;
        if (!target_jobid) {
          return;
        }
        const attachment = knowCardWin.attachments.find((attachment2) => {
          const attachment_jobid = attachment2.jobid || attachment2.property._jobid;
          if (!attachment_jobid) {
            return false;
          }
          return String(attachment_jobid) === String(target_jobid);
        });
        if (attachment && searchedJobs.find((job2) => job2.mid === attachment.property.mid) === void 0) {
          const { name, title, bookname, author } = attachment.property;
          const jobName = name || title || (bookname ? bookname + author : void 0) || "\u672A\u77E5\u4EFB\u52A1";
          const work_type = attachment.job ? "job" : attachment.isPassed ? "finished" : "not-job";
          let func;
          if (videojs) {
            if (!CXProject.scripts.study.cfg.enableMedia) {
              const msg = `\u97F3\u89C6\u9891\u81EA\u52A8\u5B66\u4E60\u529F\u80FD\u5DF2\u88AB\u5173\u95ED\uFF08\u5728\u4E0A\u65B9\u83DC\u5355\u680F\uFF0C\u8D85\u661F\u5B66\u4E60\u901A-\u8BFE\u7A0B\u5B66\u4E60\u4E2D\u5F00\u542F\uFF09\u3002${jobName} \u5373\u5C06\u8DF3\u8FC7`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              if (work_type === "job" || work_type === "finished" && opts.restudy || work_type === "not-job" && opts.forceLearn) {
                func = () => {
                  const msg = `\u5373\u5C06${work_type === "finished" && opts.restudy ? "\u91CD\u65B0" : work_type === "not-job" && opts.forceLearn ? "\u5F3A\u5236" : ""}\u64AD\u653E : ` + jobName;
                  lib.$message.info({ content: msg });
                  $console.log(msg);
                  return JobRunner.media(opts, win.document);
                };
              }
            }
          } else if (chapterTest) {
            if (!CXProject.scripts.study.cfg.enableChapterTest) {
              const msg = `\u7AE0\u8282\u6D4B\u8BD5\u81EA\u52A8\u7B54\u9898\u529F\u80FD\u5DF2\u88AB\u5173\u95ED\uFF08\u5728\u4E0A\u65B9\u83DC\u5355\u680F\uFF0C\u8D85\u661F\u5B66\u4E60\u901A-\u8BFE\u7A0B\u5B66\u4E60\u4E2D\u5F00\u542F\uFF09\u3002${jobName} \u5373\u5C06\u8DF3\u8FC7`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              const status = win.document.querySelector(".testTit_status");
              if (status == null ? void 0 : status.classList.contains("testTit_status_complete")) {
                const msg = `\u7AE0\u8282\u6D4B\u8BD5\u5DF2\u5B8C\u6210 : ` + jobName;
                lib.$message.success({ content: msg });
                $console.log(msg);
              } else {
                if (work_type === "job" || work_type === "not-job" && CommonProject.scripts.settings.cfg["work-when-no-job"]) {
                  func = () => {
                    const msg = `\u5F00\u59CB\u7B54\u9898 : ` + jobName;
                    lib.$message.info({ content: msg });
                    $console.log(msg);
                    return JobRunner.chapter(root2, opts.workOptions);
                  };
                }
                if (work_type === "not-job" && CommonProject.scripts.settings.cfg["work-when-no-job"] === false) {
                  const msg = `\u5F53\u524D\u4F5C\u4E1A ${jobName} \u4E0D\u662F\u4EFB\u52A1\u70B9\uFF0C\u4F46\u5F85\u5B8C\u6210\uFF0C\u5982\u9700\u5F00\u542F\u81EA\u52A8\u7B54\u9898\u8BF7\u524D\u5F80\uFF1A\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\uFF0C\u5F00\u542F\u5F3A\u5236\u7B54\u9898\u3002`;
                  lib.$message.warn({ content: msg });
                  $console.warn(msg);
                }
              }
            }
          } else if (read || pptWithAudio) {
            if (!CXProject.scripts.study.cfg.enablePPT) {
              const msg = `PPT/\u4E66\u7C4D\u9605\u8BFB\u529F\u80FD\u5DF2\u88AB\u5173\u95ED\uFF08\u5728\u4E0A\u65B9\u83DC\u5355\u680F\uFF0C\u8D85\u661F\u5B66\u4E60\u901A-\u8BFE\u7A0B\u5B66\u4E60\u4E2D\u5F00\u542F\uFF09\u3002${jobName} \u5373\u5C06\u8DF3\u8FC7`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              if (attachment.job) {
                func = () => {
                  const msg = `\u6B63\u5728\u5B66\u4E60 : ` + jobName;
                  lib.$message.info({ content: msg });
                  $console.log(msg);
                  if (read) {
                    return JobRunner.read(win);
                  } else {
                    return JobRunner.readPPTWithAudio(win);
                  }
                };
              }
            }
          } else if (hyperlink) {
            if (!CXProject.scripts.study.cfg.enableHyperlink) {
              const msg = `\u94FE\u63A5\u4EFB\u52A1\u70B9\u5DF2\u88AB\u5173\u95ED\uFF08\u5728\u4E0A\u65B9\u83DC\u5355\u680F\uFF0C\u8D85\u661F\u5B66\u4E60\u901A-\u8BFE\u7A0B\u5B66\u4E60\u4E2D\u5F00\u542F\uFF09\u3002${jobName} \u5373\u5C06\u8DF3\u8FC7`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              if (attachment.job) {
                func = () => {
                  const msg = `\u6B63\u5728\u5B8C\u6210\u94FE\u63A5\u9605\u8BFB\u4EFB\u52A1 : ` + jobName;
                  lib.$message.info({ content: msg });
                  $console.log(msg);
                  return JobRunner.hyperlink(hyperlink);
                };
              }
            }
          }
          const job2 = {
            mid: attachment.property.mid,
            attachment,
            func
          };
          searchedJobs.push(job2);
          return job2;
        }
      }
    };
    let job;
    for (const iframe of searchIFrame(knowCardWin.document)) {
      job = search(iframe);
      if (job) {
        return job;
      }
    }
    return job;
  }
  function fixedVideoProgress() {
    if (state$3.study.videojs) {
      const { bar } = domSearch({ bar: ".vjs-control-bar" }, state$3.study.videojs);
      if (bar) {
        bar.style.opacity = "1";
      }
    }
  }
  const JobRunner = {
    async media(setting, doc) {
      const { playbackRate: playbackRate2 = 1, volume: volume2 = 0 } = setting;
      const media = await waitForMedia({ root: doc });
      const { videojs } = domSearch({ videojs: "#video,#audio" }, doc);
      if (!videojs || !media) {
        $console.error("\u89C6\u9891\u68C0\u6D4B\u4E0D\u5230\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u6216\u8005\u624B\u52A8\u5207\u6362\u4E0B\u4E00\u7AE0\u3002");
        return;
      }
      state$3.study.videojs = videojs;
      top$1.currentMedia = media;
      fixedVideoProgress();
      if (setting.videoQuizStrategy === "random") {
        const loop = async () => {
          var _a;
          const submitBtn = () => doc.querySelector("#videoquiz-submit");
          if (submitBtn()) {
            const list = Array.from(doc.querySelectorAll(".ans-videoquiz-opt label"));
            const answer = list[Math.floor(Math.random() * list.length)];
            answer == null ? void 0 : answer.click();
            (_a = submitBtn()) == null ? void 0 : _a.click();
            await $.sleep(3e3);
            const container2 = doc.querySelector("#video .ans-videoquiz");
            const components = Array.from(doc.querySelectorAll(".x-component-default"));
            if (container2) {
              container2.remove();
            }
            if (components.length) {
              for (const com of components) {
                com.style.display = "none";
              }
            }
          }
          await $.sleep(3e3);
          await loop();
        };
        loop();
      }
      return new Promise((resolve, reject) => {
        const reloadInterval = setInterval(() => {
          if (["\u89C6\u9891\u6587\u4EF6\u635F\u574F", "\u7F51\u7EDC\u9519\u8BEF\u5BFC\u81F4\u89C6\u9891\u4E0B\u8F7D\u4E2D\u9014\u5931\u8D25"].some((s) => doc.documentElement.innerText.includes(s))) {
            $console.error("\u68C0\u6D4B\u5230\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u5373\u5C06\u8DF3\u8FC7\u89C6\u9891\u3002");
            lib.$message.error("\u68C0\u6D4B\u5230\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u5373\u5C06\u8DF3\u8FC7\u89C6\u9891\u3002");
            setTimeout(resolve, 3e3);
          }
        }, 3e3);
        const playFunction = async () => {
          await waitForFaceRecognition();
          await waitForNewFaceRecognition();
          if (media.ended === false) {
            await $.sleep(1e3);
            media.play();
            media.playbackRate = playbackRate2;
          }
        };
        media.addEventListener("pause", playFunction);
        media.addEventListener("ended", () => {
          media.removeEventListener("pause", playFunction);
          $console.log("\u89C6\u9891\u64AD\u653E\u5B8C\u6BD5");
          clearInterval(reloadInterval);
          resolve();
        });
        $console.log("\u89C6\u9891\u5F00\u59CB\u64AD\u653E");
        media.volume = volume2;
        media.currentTime = 0;
        setTimeout(() => {
          playMedia(() => media.play()).then(() => {
            media.playbackRate = playbackRate2;
          }).catch(reject);
        }, 200);
      });
    },
    async read(win) {
      const finishJob = win.finishJob;
      if (finishJob)
        finishJob();
      await $.sleep(3e3);
    },
    async chapter(frame, {
      answererWrappers,
      period,
      upload,
      thread,
      stopSecondWhenFinish,
      redundanceWordsText,
      answerSeparators,
      answerMatchMode
    }) {
      if (answererWrappers === void 0 || answererWrappers.length === 0) {
        return answerWrapperEmptyWarning(0);
      }
      lib.$message.info({
        content: lib.h("div", ["\u6B63\u5728\u7B54\u9898\u4E2D\uFF0C\u7B54\u9898\u7ED3\u679C\u8BF7\u524D\u5F80\uFF1A\u901A\u7528-\u641C\u7D22\u7ED3\u679C \u8FDB\u884C\u67E5\u770B"]),
        duration: 10
      });
      $console.info("\u5F00\u59CB\u7AE0\u8282\u6D4B\u8BD5");
      const frameWindow = frame.contentWindow;
      const { TiMu } = domSearchAll({ TiMu: ".TiMu" }, frameWindow.document);
      CommonProject.scripts.workResults.methods.init();
      const chapterTestTaskQuestionTitleTransform = (titles) => {
        const removed = removeRedundantWords(
          titles.map((t2) => t2 ? optimizationElementWithImage(t2, true).innerText : "").join(","),
          redundanceWordsText.split("\n")
        );
        return removed.trim().replace(/^\d+[。、.]/, "").replace(/（\d+\.\d+分）/, "").replace(/\(..题, \d+?分\)/, "").replace(/\(..题, \d+\.\d+分\)/, "").replace(/[[(【（](..题|名词解释|完形填空|阅读理解)[\])】）]/, "").trim();
      };
      const worker = new OCSWorker({
        root: TiMu,
        elements: {
          title: ".Zy_TItle .clearfix",
          options: "ul li .after,ul li textarea,ul textarea,ul li label:not(.before)",
          type: 'input[id^="answertype"]',
          lineAnswerInput: ".line_answer input[name^=answer]",
          lineSelectBox: ".line_answer_ct .selectBox "
        },
        thread: thread != null ? thread : 1,
        answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
        answerMatchMode,
        answerer: (elements2, ctx) => {
          const title = chapterTestTaskQuestionTitleTransform(elements2.title);
          if (title) {
            const typeInput = elements2.type[0];
            return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
              await $.sleep((period != null ? period : 3) * 1e3);
              return defaultAnswerWrapperHandler(answererWrappers, {
                type: (typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0) || "unknown",
                title,
                options: ctx.type === "completion" ? "" : ctx.elements.options.map((o) => optimizationElementWithImage(o, true).innerText).join("\n")
              });
            });
          } else {
            throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
          }
        },
        work: async (ctx) => {
          var _a;
          const { elements: elements2, searchInfos } = ctx;
          const typeInput = elements2.type[0];
          const type = typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0;
          if (type && (type === "completion" || type === "multiple" || type === "judgement" || type === "single")) {
            const resolver = defaultQuestionResolve(ctx)[type];
            const handler = (type2, answer, option, ctx2) => {
              var _a2, _b, _c, _d, _e, _f, _g;
              if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
                const checked = ((_b = (_a2 = option == null ? void 0 : option.parentElement) == null ? void 0 : _a2.querySelector("label input")) == null ? void 0 : _b.getAttribute("checked")) === "checked" || ((_c = option == null ? void 0 : option.parentElement) == null ? void 0 : _c.getAttribute("aria-checked")) === "true";
                if (checked)
                  ;
                else {
                  option == null ? void 0 : option.click();
                }
              } else if (type2 === "completion" && answer.trim()) {
                const text = (_d = option == null ? void 0 : option.parentElement) == null ? void 0 : _d.querySelector("textarea");
                const textareaFrame = (_e = option == null ? void 0 : option.parentElement) == null ? void 0 : _e.querySelector("iframe");
                if (text) {
                  text.value = answer;
                }
                if (textareaFrame == null ? void 0 : textareaFrame.contentDocument) {
                  textareaFrame.contentDocument.body.innerHTML = answer;
                }
                if ((_f = option == null ? void 0 : option.parentElement) == null ? void 0 : _f.parentElement) {
                  (_g = lib.$el("[onclick*=saveQuestion]", option.parentElement.parentElement)) == null ? void 0 : _g.click();
                }
              }
            };
            return await resolver(
              searchInfos,
              elements2.options.map((option) => optimizationElementWithImage(option)),
              handler
            );
          } else if (type && type === "line") {
            for (const answers of searchInfos.map((info) => info.results.map((res) => res.answer))) {
              let ans = answers;
              if (ans.length === 1) {
                ans = splitAnswer(ans[0]);
              }
              if (ans.filter(Boolean).length !== 0 && elements2.lineAnswerInput) {
                for (let index = 0; index < elements2.lineSelectBox.length; index++) {
                  const box = elements2.lineSelectBox[index];
                  if (ans[index]) {
                    (_a = lib.$el(`li[data=${ans[index]}] a`, box)) == null ? void 0 : _a.click();
                    await $.sleep(200);
                  }
                }
                return { finish: true };
              }
            }
            return { finish: false };
          }
          return { finish: false };
        },
        async onResultsUpdate(curr, _, res) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          CommonProject.scripts.workResults.methods.setResults(
            simplifyWorkResult(res, chapterTestTaskQuestionTitleTransform)
          );
          if ((_a = curr.result) == null ? void 0 : _a.finish) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([curr], chapterTestTaskQuestionTitleTransform)
            );
          }
          CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
          if (((_b = curr.result) == null ? void 0 : _b.finish) === false && curr.resolved === true) {
            const options = ((_d = (_c = curr.ctx) == null ? void 0 : _c.elements) == null ? void 0 : _d.options) || [];
            const typeInput = (_f = (_e = curr.ctx) == null ? void 0 : _e.elements) == null ? void 0 : _f.type[0];
            const type = typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0;
            const commonSetting = CommonProject.scripts.settings.cfg;
            if (commonSetting["randomWork-choice"] && (type === "judgement" || type === "single" || type === "multiple")) {
              $console.log("\u6B63\u5728\u968F\u673A\u4F5C\u7B54");
              const option = options[Math.floor(Math.random() * options.length)];
              (_h = (_g = option == null ? void 0 : option.parentElement) == null ? void 0 : _g.querySelector("a,label")) == null ? void 0 : _h.click();
            } else if (commonSetting["randomWork-complete"] && type === "completion") {
              $console.log("\u6B63\u5728\u968F\u673A\u4F5C\u7B54");
              for (const option of options) {
                const textarea = (_i = option == null ? void 0 : option.parentElement) == null ? void 0 : _i.querySelector("textarea");
                const completeTexts = commonSetting["randomWork-completeTexts-textarea"].split("\n").filter(Boolean);
                const text = completeTexts[Math.floor(Math.random() * completeTexts.length)];
                const textareaFrame = (_j = option == null ? void 0 : option.parentElement) == null ? void 0 : _j.querySelector("iframe");
                if (text) {
                  if (textarea) {
                    textarea.value = text;
                  }
                  if (textareaFrame == null ? void 0 : textareaFrame.contentDocument) {
                    textareaFrame.contentDocument.body.innerHTML = text;
                  }
                } else {
                  $console.error("\u8BF7\u8BBE\u7F6E\u968F\u673A\u586B\u7A7A\u7684\u6587\u6848");
                }
                await $.sleep(500);
              }
            }
          }
        },
        async onElementSearched(elements2) {
          const typeInput = elements2.type[0];
          const type = typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0;
          if (type === "judgement") {
            elements2.options.forEach((option) => {
              var _a;
              const opt = ((_a = option == null ? void 0 : option.textContent) == null ? void 0 : _a.trim()) || "";
              if (opt.includes("\u5BF9") || opt.includes("\u9519"))
                ;
              else if (opt === "True") {
                option.textContent = "\u221A";
              } else if (opt === "False") {
                option.textContent = "x";
              } else {
                const ri = option.querySelector(".ri");
                const span = document.createElement("span");
                span.innerText = ri ? "\u221A" : "\xD7";
                option.appendChild(span);
              }
            });
          }
        }
      });
      const results = await worker.doWork();
      const msg = `\u7B54\u9898\u5B8C\u6210\uFF0C\u5C06\u7B49\u5F85 ${stopSecondWhenFinish} \u79D2\u540E\u8FDB\u884C\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002`;
      $console.info(msg);
      lib.$message.info({ content: msg, duration: stopSecondWhenFinish });
      await $.sleep(stopSecondWhenFinish * 1e3);
      await worker.uploadHandler({
        type: upload,
        results,
        async callback(finishedRate, uploadable) {
          const msg2 = `\u5B8C\u6210\u7387 ${finishedRate.toFixed(2)}% :  ${uploadable ? "3\u79D2\u540E\u5C06\u81EA\u52A8\u63D0\u4EA4" : "3\u79D2\u540E\u5C06\u81EA\u52A8\u4FDD\u5B58"} `;
          $console.info(msg2);
          lib.$message.success({ content: msg2, duration: 3 });
          await $.sleep(3e3);
          if (uploadable) {
            frameWindow.btnBlueSubmit();
            await $.sleep(3e3);
            frameWindow.submitCheckTimes();
            top$1.$("#workpop").hide();
          } else {
            frameWindow.alert = () => {
            };
            frameWindow.noSubmit();
          }
        }
      });
      worker.emit("done");
    },
    async readPPTWithAudio(win) {
      var _a;
      win.document.querySelectorAll("audio").forEach((audio) => {
        audio.addEventListener("play", () => {
          audio.muted = true;
        });
      });
      const len = win.document.querySelectorAll(".swiper-container .swiper-slide").length;
      for (let index = 0; index < len; index++) {
        (_a = win.swiperNext) == null ? void 0 : _a.call(win);
        await $.sleep(1e3);
      }
      await $.sleep(3e3);
    },
    async hyperlink(a) {
      const _click = a.onclick;
      a.onclick = () => false;
      a.click();
      a.onclick = _click;
      await $.sleep(3e3);
    }
  };
  function getQuestionType(val) {
    return val === 0 ? "single" : val === 1 ? "multiple" : val === 3 ? "judgement" : [2, 4, 5, 6, 7, 8, 9, 10].some((t2) => t2 === val) ? "completion" : val === 11 ? "line" : val === 14 ? "fill" : val === 15 ? "reader" : void 0;
  }
  async function readerAndFillHandle(searchInfos, list) {
    var _a;
    for (const answers of searchInfos.map((info) => info.results.map((res) => res.answer))) {
      let ans = answers;
      if (ans.length === 1) {
        ans = splitAnswer(ans[0]);
      }
      if (ans.filter(Boolean).length !== 0 && list.length !== 0) {
        for (let index = 0; index < ans.length; index++) {
          const item = list[index];
          if (item) {
            (_a = lib.$el(`span.saveSingleSelect[data="${ans[index]}"]`, item)) == null ? void 0 : _a.click();
            await $.sleep(200);
          }
        }
        return { finish: true };
      }
    }
    return { finish: false };
  }
  function waitForNewFaceRecognition() {
    let notified = false;
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const faces = lib.$$el(".chapterVideoFaceMaskDiv", top$1 == null ? void 0 : top$1.document);
        let active = false;
        for (const face of faces) {
          if (face.style.display !== "none") {
            active = true;
            break;
          }
        }
        if (active) {
          if (!notified) {
            notified = true;
            const msg = "\u68C0\u6D4B\u5230\u4EBA\u8138\u8BC6\u522B\uFF0C\u8BF7\u624B\u52A8\u8FDB\u884C\u8BC6\u522B\u540E\u811A\u672C\u624D\u4F1A\u7EE7\u7EED\u8FD0\u884C\u3002";
            if (CXProject.scripts.study.cfg.notifyWhenHasFaceRecognition) {
              CommonProject.scripts.settings.methods.notificationBySetting(msg, { duration: 0 });
            }
            lib.$message.warn({ content: msg, duration: 0 });
            $console.warn(msg);
          }
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 3e3);
    });
  }
  function waitForFaceRecognition() {
    let notified = false;
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const faces = lib.$$el("#fcqrimg", top$1 == null ? void 0 : top$1.document);
        let active = false;
        for (const face of faces) {
          const src2 = face.getAttribute("src");
          if (src2) {
            active = true;
            break;
          }
        }
        if (active) {
          if (!notified) {
            notified = true;
            const msg = "\u68C0\u6D4B\u5230\u4EBA\u8138\u8BC6\u522B\uFF0C\u8BF7\u624B\u52A8\u8FDB\u884C\u8BC6\u522B\u540E\u811A\u672C\u624D\u4F1A\u7EE7\u7EED\u8FD0\u884C\u3002";
            if (CXProject.scripts.study.cfg.notifyWhenHasFaceRecognition) {
              CommonProject.scripts.settings.methods.notificationBySetting(msg, { duration: 0 });
            }
            lib.$message.warn({ content: msg, duration: 0 });
            $console.warn(msg);
          }
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 3e3);
    });
  }
  function answerWrapperEmptyWarning(duration) {
    const setting = lib.h("button", { className: "base-style-button-secondary" }, "\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E");
    setting.onclick = () => CommonProject.scripts.render.methods.pin(CommonProject.scripts.settings);
    if (state$3.study.answererWrapperUnsetMessage === void 0) {
      state$3.study.answererWrapperUnsetMessage = lib.$message.warn({
        content: lib.h("span", {}, ["\u68C0\u6D4B\u5230\u672A\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\uFF0C\u5C06\u65E0\u6CD5\u81EA\u52A8\u7B54\u9898\uFF0C\u8BF7\u5207\u6362\u5230 ", setting, " \u9875\u9762\u8FDB\u884C\u914D\u7F6E\u3002"]),
        duration
      });
    }
  }
  const checkChapterFinishedAndSkip = lib.cors.defineTopFunction("cx.checkChapterFinishedAndSkip", (is_in_last_tab) => {
    var _a;
    if (CXAnalyses.isCurrentChapterFinished() || is_in_last_tab) {
      let start2 = false;
      const jobs = Array.from((top$1 == null ? void 0 : top$1.document.querySelectorAll(".posCatalog_select:not(.firstLayer)")) || []);
      for (const job of jobs) {
        if (job.classList.contains("posCatalog_active")) {
          start2 = true;
          continue;
        }
        if (start2) {
          if (job.querySelector(".icon_Completed") !== null) {
            continue;
          }
          if (job.querySelector(".jobUnfinishCount") !== null) {
            (_a = job.querySelector(".posCatalog_name")) == null ? void 0 : _a.click();
            return true;
          }
        }
      }
    }
    return false;
  });
  const state$2 = {
    study: {
      currentMedia: void 0,
      currentStudyLockId: 0,
      playbackRateWarningListenerId: 0,
      courseLengthListenerId: 0
    }
  };
  const _StudyLock = class {
    constructor() {
      _StudyLock.auto_inc++;
      this.id = _StudyLock.auto_inc;
      state$2.study.currentStudyLockId = this.id;
    }
    canStudy() {
      return this.id === state$2.study.currentStudyLockId;
    }
    static getLock() {
      return new _StudyLock();
    }
  };
  let StudyLock = _StudyLock;
  StudyLock.auto_inc = 0;
  const IcveMoocProject = lib.Project.create({
    name: "\u667A\u6167\u804C\u6559",
    domains: [
      "icve.com.cn",
      "course.icve.com.cn",
      "courshare.cn",
      "webtrn.cn"
    ],
    scripts: {
      guide: new lib.Script({
        name: "\u{1F4A1} \u4F7F\u7528\u63D0\u793A",
        matches: [
          ["\u4E2A\u4EBA\u9996\u9875", "icve.com.cn/studycenter"],
          ["\u5B66\u4E60\u9875\u9762", "icve.com.cn/study/directory"],
          ["MOOC\u5B66\u9662-\u4E2A\u4EBA\u9996\u9875", "user.icve.com.cn"],
          ["MOOC\u5B66\u9662-\u9996\u9875", "mooc.icve.com.cn"]
        ],
        namespace: "icve.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["\u8BF7\u70B9\u51FB\u4EFB\u610F\u8BFE\u7A0B\u8FDB\u5165", "\u8FDB\u5165\u8BFE\u7A0B\u540E\u70B9\u51FB\u4EFB\u610F\u7AE0\u8282\u8FDB\u5165\uFF0C\u5373\u53EF\u81EA\u52A8\u5B66\u4E60"]).outerHTML
          }
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
        }
      }),
      studyCenter: new lib.Script({
        name: "\u{1F5A5}\uFE0F \u667A\u6167\u804C\u6559-\u5B66\u4E60\u4E2D\u5FC3",
        namespace: "icve.study.center",
        matches: [
          ["\u5B66\u4E60\u4E2D\u5FC3\u9875\u9762", "/study/directory/dir_course.html"],
          ["\u8BFE\u7A0B\u5217\u8868", "icve.com.cn/study/directory/directory_list.html"]
        ],
        configs: {
          playbackRate,
          volume,
          currentCourseUrlList: {
            defaultValue: []
          }
        },
        async oncomplete() {
          if (location.href.includes("icve.com.cn/study/directory/directory_list.html")) {
            await waitForElement(".h_cells a");
            this.cfg.currentCourseUrlList = Array.from(document.querySelectorAll(".h_cells a")).map(
              (a) => a.href
            );
            return;
          }
          if (this.cfg.currentCourseUrlList.length === 0) {
            try {
              const url = "https://www.icve.com.cn/study/directory/directory_list.html?courseId=" + new URL(location.href).searchParams.get("courseId");
              const res = await fetch(url).then((res2) => res2.text());
              const doc = new DOMParser().parseFromString(res, "text/html");
              this.cfg.currentCourseUrlList = Array.from(doc.querySelectorAll(".h_cells a")).map(
                (a) => a.href
              );
            } catch (e) {
              console.error(e);
              lib.$message.error("\u8BFE\u7A0B\u5217\u8868\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002");
              return;
            }
          }
          CommonProject.scripts.render.methods.pin(this);
          this.onConfigChange("playbackRate", (playbackRate2) => {
            state$2.study.currentMedia && (state$2.study.currentMedia.playbackRate = parseFloat(playbackRate2.toString()));
          });
          this.onConfigChange("volume", (v) => state$2.study.currentMedia && (state$2.study.currentMedia.volume = v));
          const study2 = async () => {
            var _a;
            const res = await Promise.race([waitForElement("video, audio"), waitForElement(".docBox")]);
            if (res) {
              const jobName = ((_a = document.querySelector(".tabsel.seled")) == null ? void 0 : _a.getAttribute("title")) || "-";
              lib.$message.info("\u5F00\u59CB\u4EFB\u52A1\uFF1A" + jobName);
              $console.log(`\u4EFB\u52A1 ${jobName} \u5F00\u59CB\u3002`);
              if (document.querySelector("video, audio")) {
                const media = await waitForMedia();
                state$2.study.currentMedia = media;
                media.volume = this.cfg.volume;
                await new Promise((resolve, reject) => {
                  try {
                    console.log(document.hasFocus());
                    window.focus();
                    lib.$gm.unsafeWindow.jwplayer().onComplete(async () => {
                      $console.log("\u89C6\u9891/\u97F3\u9891\u64AD\u653E\u5B8C\u6210\u3002");
                      await $.sleep(3e3);
                      resolve();
                    });
                    const play = () => {
                      lib.$gm.unsafeWindow.jwplayer().play();
                      lib.$gm.unsafeWindow.jwplayer().play();
                      media.playbackRate = parseFloat(this.cfg.playbackRate.toString());
                    };
                    media.addEventListener("pause", async () => {
                      if (!media.ended) {
                        await $.sleep(1e3);
                        playMedia(play);
                      }
                    });
                    playMedia(play);
                  } catch (err) {
                    reject(err);
                  }
                });
              }
              lib.$message.success(`\u4EFB\u52A1 ${jobName} \u5B8C\u6210\uFF0C\u4E09\u79D2\u540E\u4E0B\u4E00\u7AE0`);
              $console.log(`\u4EFB\u52A1 ${jobName} \u5B8C\u6210\uFF0C\u4E09\u79D2\u540E\u4E0B\u4E00\u7AE0`);
            } else {
              $console.error(`\u4E0D\u652F\u6301\u7684\u4EFB\u52A1\u9875\u9762\uFF0C\u8BF7\u8DDF\u4F5C\u8005\u8FDB\u884C\u53CD\u9988\u3002\u4E09\u79D2\u540E\u4E0B\u4E00\u7AE0`);
            }
            await $.sleep(3e3);
            next2();
          };
          const next2 = () => {
            for (let index = 0; index < this.cfg.currentCourseUrlList.length; index++) {
              const url = this.cfg.currentCourseUrlList[index];
              const nextUrl = this.cfg.currentCourseUrlList[index + 1];
              if (new URL(url).hash === new URL(location.href).hash) {
                if (!nextUrl) {
                  lib.$modal.alert({ content: "\u5168\u90E8\u4EFB\u52A1\u5DF2\u5B8C\u6210" });
                  CommonProject.scripts.settings.methods.notificationBySetting("\u5168\u90E8\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF01", {
                    duration: 0,
                    extraTitle: "\u667A\u6167\u804C\u6559\u5B66\u4E60\u811A\u672C"
                  });
                  return;
                } else {
                  window.location.href = this.cfg.currentCourseUrlList[index + 1];
                }
              }
            }
          };
          study2();
        }
      }),
      study: new lib.Script({
        name: "\u{1F5A5}\uFE0F MOOC\u5B66\u9662-\u8BFE\u7A0B\u5B66\u4E60",
        namespace: "icve.study.main",
        matches: [["\u8BFE\u7A0B\u5B66\u4E60\u9875\u9762", "/learnspace/learn/learn/templateeight/index.action"]],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u5982\u679C\u89C6\u9891\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u4EE5\u624B\u52A8\u70B9\u51FB\u5176\u4ED6\u4EFB\u52A1\u8DF3\u8FC7\u89C6\u9891\u3002",
              "\u7ECF\u8FC7\u6D4B\u8BD5\u89C6\u9891\u500D\u901F\u6700\u591A\u4E8C\u500D\uFF0C\u5426\u5219\u4F1A\u5224\u5B9A\u65E0\u6548\u3002",
              "\u624B\u52A8\u8FDB\u5165\u4F5C\u4E1A\u9875\u9762\u624D\u80FD\u4F7F\u7528\u81EA\u52A8\u7B54\u9898\u3002"
            ]).outerHTML
          },
          playbackRate,
          volume,
          restudy,
          showScrollBar: {
            label: "\u663E\u793A\u53F3\u4FA7\u6EDA\u52A8\u6761",
            attrs: { type: "checkbox" },
            defaultValue: true
          },
          expandAll: {
            label: "\u5C55\u5F00\u6240\u6709\u7AE0\u8282",
            attrs: { type: "checkbox" },
            defaultValue: true
          },
          switchPeriod: {
            label: "\u4E0B\u4E00\u7AE0\u8282\u5207\u6362\u95F4\u9694\uFF08\u79D2\uFF09",
            defaultValue: 10,
            attrs: {
              type: "number",
              min: 0,
              max: 999,
              step: 1
            }
          }
        },
        onrender() {
          this.offConfigChange(state$2.study.playbackRateWarningListenerId);
          state$2.study.playbackRateWarningListenerId = this.onConfigChange("playbackRate", (playbackRate2) => {
            if (playbackRate2 > 4) {
              lib.$modal.alert({
                title: "\u26A0\uFE0F\u9AD8\u500D\u901F\u8B66\u544A",
                content: lib.$ui.notes(["\u9AD8\u500D\u901F\u53EF\u80FD\u5BFC\u81F4\u89C6\u9891\u65E0\u6CD5\u5B8C\u6210\uFF01"])
              });
            }
          }) || 0;
        },
        async oncomplete() {
          var _a;
          CommonProject.scripts.render.methods.pin(this);
          await $.sleep(3e3);
          this.onConfigChange("volume", (v) => state$2.study.currentMedia && (state$2.study.currentMedia.volume = v));
          this.onConfigChange(
            "playbackRate",
            (r) => state$2.study.currentMedia && (state$2.study.currentMedia.playbackRate = parseFloat(r.toString()))
          );
          const mainContentWin = (_a = lib.$el("#mainContent")) == null ? void 0 : _a.contentWindow;
          if (mainContentWin) {
            lib.$modal.confirm({
              content: lib.h("div", [
                "\u662F\u5426\u5F00\u59CB\u81EA\u52A8\u5B66\u4E60\u5F53\u524D\u7AE0\u8282\uFF1F",
                lib.h("br"),
                "\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u7684\u7AE0\u8282\u8FDB\u884C\u70B9\u51FB\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u5B66\u4E60\uFF0C\u5E76\u4E00\u76F4\u5F80\u4E0B\u5BFB\u627E\u7AE0\u8282\u3002"
              ]),
              cancelButtonText: "\u6211\u60F3\u624B\u52A8\u9009\u62E9\u7AE0\u8282",
              confirmButtonText: "\u5F00\u59CB\u5B66\u4E60",
              async onConfirm() {
                study2(StudyLock.getLock());
                scrollToJob();
              }
            });
          }
          if (this.cfg.showScrollBar) {
            const bar = lib.$el(".dumascroll_area", mainContentWin.document);
            bar && (bar.style.overflow = "auto");
          }
          if (this.cfg.expandAll) {
            lib.$$el(".s_sectionlist,.s_sectionwrap", mainContentWin.document).forEach((el) => el.style.display = "block");
          }
          for (const job of lib.$$el(".s_point[itemtype]", mainContentWin.document)) {
            job.addEventListener("click", (e) => {
              const lock = StudyLock.getLock();
              if (e.isTrusted) {
                if (job.getAttribute("itemtype") === "exam") {
                  return lib.$message.info({
                    duration: 60,
                    content: "\u68C0\u6D4B\u5230\u60A8\u624B\u52A8\u9009\u62E9\u4E86\u4F5C\u4E1A/\u8003\u8BD5\u7AE0\u8282\uFF0C\u5C06\u4E0D\u4F1A\u81EA\u52A8\u8DF3\u8F6C\uFF0C\u8BF7\u5B8C\u6210\u540E\u624B\u52A8\u9009\u62E9\u5176\u4ED6\u7AE0\u8282\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u5B66\u4E60\u3002"
                  });
                } else {
                  lib.$message.info("\u68C0\u6D4B\u5230\u7AE0\u8282\u5207\u6362\uFF0C\u5373\u5C06\u81EA\u52A8\u5B66\u4E60...");
                }
              }
              setTimeout(() => {
                study2(lock);
              }, 3e3);
            });
          }
          const scrollToJob = () => {
            var _a2;
            return (_a2 = lib.$el(".s_pointerct", mainContentWin.document)) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "center" });
          };
          const study2 = async (studyLock) => {
            var _a2;
            const iframe = lib.$el("iframe", mainContentWin.document);
            const win = iframe == null ? void 0 : iframe.contentWindow;
            if (win) {
              const doc = win.document;
              if (iframe.src.includes("content_video.action") || iframe.src.includes("content_audio.action")) {
                $console.log("\u89C6\u9891/\u97F3\u9891\u64AD\u653E\u4E2D...");
                try {
                  const media = await waitForMedia({ root: doc });
                  state$2.study.currentMedia = media;
                  media.playbackRate = parseFloat(this.cfg.playbackRate.toString());
                  media.volume = this.cfg.volume;
                  media.currentTime = 0;
                  await new Promise((resolve, reject) => {
                    try {
                      win.jwplayer().onComplete(async () => {
                        $console.log("\u89C6\u9891/\u97F3\u9891\u64AD\u653E\u5B8C\u6210\u3002");
                        await $.sleep(3e3);
                        resolve();
                      });
                      media.addEventListener("pause", async () => {
                        if (!media.ended) {
                          await Promise.race([
                            waitForPopupQuestion(doc),
                            handleContinueDialog()
                          ]);
                          await $.sleep(1e3);
                          playMedia(() => media.play());
                        }
                      });
                      playMedia(() => media.play());
                    } catch (err) {
                      reject(err);
                    }
                  });
                } catch (err) {
                  lib.$message.error(String(err));
                }
              } else if (iframe.src.includes("content_doc.action")) {
                await $.sleep(5e3);
              }
            }
            $console.log(this.cfg.switchPeriod + " \u79D2\u540E\u5207\u6362\u4E0B\u4E00\u7AE0\u8282\u3002");
            await $.sleep(this.cfg.switchPeriod * 1e3);
            if (studyLock.canStudy()) {
              let nextEl;
              let isBellowCurrentJob = false;
              const jobs = lib.$$el(".s_point[itemtype]", mainContentWin.document);
              for (let index = 0; index < jobs.length; index++) {
                const job = jobs[index];
                if (job.classList.contains("s_pointerct")) {
                  isBellowCurrentJob = true;
                } else if (isBellowCurrentJob) {
                  if (job.querySelector(".done_icon_show") === null || this.cfg.restudy) {
                    $console.log("\u4E0B\u4E00\u7AE0\uFF1A", job.title || ((_a2 = lib.$el(".s_pointti", job)) == null ? void 0 : _a2.title) || "\u672A\u77E5");
                    nextEl = job;
                    break;
                  }
                }
              }
              if (nextEl) {
                nextEl.click();
                scrollToJob();
              } else {
                lib.$modal.alert({ content: "\u5168\u90E8\u4EFB\u52A1\u5DF2\u5B8C\u6210" });
                CommonProject.scripts.settings.methods.notificationBySetting("\u5168\u90E8\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF01", {
                  duration: 0,
                  extraTitle: "\u667A\u6167\u804C\u6559\u5B66\u4E60\u811A\u672C"
                });
              }
            }
          };
        }
      }),
      work: new lib.Script({
        name: "\u270D\uFE0F \u4F5C\u4E1A\u8003\u8BD5\u811A\u672C",
        matches: [["\u4F5C\u4E1A\u8003\u8BD5\u9875\u9762", "/exam"]],
        namespace: "icve.work",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u81EA\u52A8\u7B54\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\u3002",
              "\u53EF\u4EE5\u642D\u914D \u201C\u901A\u7528-\u5728\u7EBF\u641C\u9898\u201D \u4E00\u8D77\u4F7F\u7528\u3002",
              "\u8BF7\u624B\u52A8\u8FDB\u5165\u4F5C\u4E1A\u8003\u8BD5\u9875\u9762\u624D\u80FD\u4F7F\u7528\u81EA\u52A8\u7B54\u9898\u3002"
            ]).outerHTML
          }
        },
        async oncomplete() {
          lib.$message.info("\u81EA\u52A8\u7B54\u9898\u65F6\u8BF7\u52FF\u5207\u6362\u9898\u76EE\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u91CD\u590D\u641C\u9898\u6216\u8005\u811A\u672C\u5361\u4E3B\u3002");
          const resetToBegin = () => {
            var _a;
            (_a = document.querySelectorAll(`.sheet_nums [id*="sheetSeq"]`).item(0)) == null ? void 0 : _a.click();
          };
          commonWork(this, {
            workerProvider: work,
            beforeRunning: async () => {
              resetToBegin();
              await $.sleep(1e3);
            },
            onRestart: () => resetToBegin()
          });
        }
      }),
      workDispatcher: new lib.Script({
        name: "\u4F5C\u4E1A\u8C03\u5EA6\u811A\u672C",
        matches: [
          ["\u4F5C\u4E1A\u8FDB\u5165\u9875\u9762", "/platformwebapi/student/exam/"],
          ["\u786E\u8BA4\u4F5C\u4E1A\u9875\u9762", "/student/exam/studentExam_studentInfo.action"]
        ],
        hideInPanel: true,
        oncomplete() {
          if (/\/platformwebapi\/student\/exam/.test(window.location.href)) {
            lib.cors.on("icve-work-start", () => {
              setTimeout(() => {
                lib.$gm.unsafeWindow.openExamInfo();
              }, 3e3);
            });
          }
          if (/\/student\/exam\/studentExam_studentInfo.action/.test(window.location.href)) {
            setTimeout(() => {
              lib.$gm.unsafeWindow.enterExamPage();
            }, 3e3);
          }
        }
      })
    }
  });
  function work({ answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info("\u5F00\u59CB\u4F5C\u4E1A");
    CommonProject.scripts.workResults.methods.init();
    console.log({ answererWrappers, period, thread });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => {
        var _a, _b;
        if (t2) {
          const title = t2.cloneNode(true);
          (_a = title.querySelector('[name*="questionIndex"]')) == null ? void 0 : _a.remove();
          (_b = title.querySelector(".q_score")) == null ? void 0 : _b.remove();
          return title.innerText.trim().replace(/^、/, "") || "";
        }
        return "";
      }).join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    function getType(options) {
      const radio_len = options.map((o) => o.querySelector('[type="radio"]')).reduce((a, b) => {
        return a + (b ? 1 : 0);
      }, 0);
      return radio_len > 0 ? radio_len === 2 ? "judgement" : "single" : options.some((o) => o.querySelector('[type="checkbox"]')) ? "multiple" : options.some((o) => o.querySelector("textarea")) ? "completion" : options.some((o) => o.querySelector(".fillblank_input input")) ? "fill-blank" : void 0;
    }
    const worker = new OCSWorker({
      root: ".q_content",
      elements: {
        title: '.divQuestionTitle, [name="fillblankTitle"]',
        options: ".questionOptions .q_option, .questionOptions.divTextarea, .answerOption"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: getType(ctx.elements.options) || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      async work(ctx) {
        const options = ctx.elements.options;
        const type = getType(options);
        if (!type) {
          throw new Error("\u65E0\u6CD5\u83B7\u53D6\u9898\u76EE\u7C7B\u578B\uFF01");
        }
        if (type === "fill-blank") {
          const inputs = options.map((o) => Array.from(o.querySelectorAll(".fillblank_input input"))).flat();
          for (const searchInfo of ctx.searchInfos) {
            for (const result of searchInfo.results) {
              const answers = splitAnswer(result.answer);
              if (answers.length === inputs.length) {
                for (let index = 0; index < inputs.length; index++) {
                  inputs[index].value = answers[index];
                }
                return { finish: true };
              }
            }
          }
        } else {
          const resolver = defaultQuestionResolve(ctx)[type];
          const res = await resolver(ctx.searchInfos, ctx.elements.options, (type2, answer, option) => {
            var _a, _b;
            if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
              if (option.querySelector(".checkbox_on") === null) {
                (_a = lib.$el("div", option)) == null ? void 0 : _a.click();
              }
            } else if (type2 === "completion" && answer.trim()) {
              const text = option.querySelector("textarea");
              const textIframe = option.querySelector('iframe[id*="ueditor"]');
              if (text) {
                text.value = answer;
              }
              if (textIframe) {
                const view = (_b = textIframe.contentWindow) == null ? void 0 : _b.document.querySelector("body.view > p");
                if (view) {
                  view.innerText = answer;
                }
              }
            }
          });
          return res;
        }
        return { finish: false };
      },
      onElementSearched(elements2, root2) {
        console.log("elements", elements2);
      },
      onResultsUpdate(currentResult) {
        var _a;
        if (currentResult.resolved) {
          workResults.push(...simplifyWorkResult([currentResult], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
          if ((_a = currentResult.result) == null ? void 0 : _a.finish) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([currentResult], titleTransform)
            );
          }
          CommonProject.scripts.workResults.methods.updateWorkState({
            totalQuestionCount,
            requestedCount,
            resolvedCount
          });
        }
      }
    });
    const getNextBtn = () => document.querySelector(".paging_next");
    let next2 = getNextBtn();
    (async () => {
      while (next2 && worker.isClose === false) {
        await worker.doWork({ enable_debug: true });
        await $.sleep(1e3);
        next2 = getNextBtn();
        if (next2.style.display === "none") {
          break;
        } else {
          next2 == null ? void 0 : next2.click();
          await $.sleep(1e3);
        }
      }
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "icve";
    })();
    return worker;
  }
  function waitForPopupQuestion(dom2) {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        var _a, _b;
        const el = lib.$el(".popup-test", dom2);
        if (el) {
          clearInterval(interval);
          const right_answer = ((_a = lib.$el("#right_answer", el)) == null ? void 0 : _a.value) || "A";
          for (const answer of right_answer.split("")) {
            const item = lib.$el(`li.test-item-cell[curval="${answer}"]`, el);
            item == null ? void 0 : item.click();
          }
          (_b = lib.$el('[name="save_btn"]', el)) == null ? void 0 : _b.click();
          setTimeout(() => {
            var _a2;
            (_a2 = lib.$el('[name="continue_btn"]', el)) == null ? void 0 : _a2.click();
            resolve();
          }, 3e3);
        }
      }, 1e3);
      setTimeout(() => {
        clearInterval(interval);
        resolve();
        console.log("\u672A\u627E\u5230\u5F39\u7A97\uFF0C\u7EE7\u7EED\u6267\u884C");
      }, 60 * 1e3);
    });
  }
  function handleContinueDialog() {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        const el = document.querySelector(".layui-layer-btn0");
        if (el) {
          el.click();
          setTimeout(() => {
            clearInterval(interval);
            resolve();
          }, 1e3);
        }
      }, 3e3);
      setTimeout(() => {
        clearInterval(interval);
        resolve();
        console.log("\u672A\u627E\u5230\u5F39\u7A97\uFF0C\u7EE7\u7EED\u6267\u884C");
      }, 60 * 1e3);
    });
  }
  const state$1 = {
    studying: false,
    studyingId: "",
    media: null
  };
  const work_pages = [
    ["\u8D44\u6E90\u5E93keep\u4F5C\u4E1A\u9875\u9762", "study/spockeepTest"],
    ["\u8D44\u6E90\u5E93job\u4F5C\u4E1A\u9875\u9762", "study/spocjobTest"],
    ["\u8D44\u6E90\u5E93\u8003\u8BD5", "study/spoctest"],
    ["\u4F5C\u4E1A\u9875\u9762", "icve-study/coursePreview/jobTes"],
    ["\u8003\u8BD5\u9875\u9762", "icve-study/coursePreview/test"],
    ["\u8003\u8BD5\u9875\u9762", "icve-study/test"],
    ["\u8D44\u6E90\u5E93\u6D4B\u9A8C\u9875\u9762", "icve-study/coursePreview/keepTest"]
  ];
  const isWork = () => {
    return window.location.href.includes("icve-study/coursePreview/jobTes") || window.location.href.includes("icve-study/coursePreview/keepTest") || window.location.href.includes("study/spockeepTest") || window.location.href.includes("study/spocjobTest");
  };
  const isExam = () => {
    return window.location.href.includes("icve-study/coursePreview/test") || window.location.href.includes("icve-study/test") || window.location.href.includes("study/spoctest");
  };
  const ZJYProject = lib.Project.create({
    name: "\u804C\u6559\u4E91",
    domains: ["icve.com.cn", "zjy2.icve.com.cn", "zyk.icve.com.cn"],
    scripts: {
      guide: new lib.Script({
        name: "\u{1F5A5}\uFE0F \u4F7F\u7528\u63D0\u793A",
        matches: [
          ["\u5B66\u4E60\u9875\u9762", "zjy2.icve.com.cn/study"],
          ["\u8D44\u6E90\u5E93", "zyk.icve.com.cn/icve-study/"]
        ],
        namespace: "zjy.study.guide",
        configs: {
          notes: {
            defaultValue: "\u8BF7\u70B9\u51FB\u4EFB\u610F\u7AE0\u8282\uFF0C\u8FDB\u5165\u5B66\u4E60\u3002"
          }
        }
      }),
      dispatcher: new lib.Script({
        name: "\u8C03\u5EA6\u5668",
        matches: [
          ["\u5B66\u4E60\u9875\u9762", "zjy2.icve.com.cn/study"],
          ["\u8D44\u6E90\u5E93", "zyk.icve.com.cn/icve-study/"]
        ],
        hideInPanel: true,
        methods() {
          return {
            dispatch: () => {
              if ([
                "zjy2.icve.com.cn/study/coursePreview/spoccourseIndex/courseware",
                "zyk.icve.com.cn/icve-study/coursePreview/courseware"
              ].some((i) => window.location.href.includes(i))) {
                ZJYProject.scripts.study.methods.main();
              } else if (work_pages.map(([_, p]) => p).some((i) => window.location.href.includes(i))) {
                ZJYProject.scripts.work.methods.main();
              }
            }
          };
        },
        onhistorychange(type) {
          if (type === "push") {
            this.methods.dispatch();
          }
        },
        oncomplete() {
          this.methods.dispatch();
        }
      }),
      study: new lib.Script({
        matches: [
          ["\u5B66\u4E60\u9875\u9762", "zjy2.icve.com.cn/study/coursePreview/spoccourseIndex/courseware"],
          ["\u8D44\u6E90\u5E93\u5B66\u4E60\u9875\u9762", "zyk.icve.com.cn/icve-study/coursePreview/courseware"]
        ],
        name: "\u270D\uFE0F \u8BFE\u7A0B\u5B66\u4E60",
        namespace: "zjy.study.main",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              ["\u5982\u679C\u811A\u672C\u5361\u6B7B\u6216\u8005\u60A8\u4E0D\u60F3\u5B66\u4E60\uFF0C", "\u53EF\u4EE5\u70B9\u51FB\u5176\u4ED6\u4EFB\u610F\u7AE0\u8282\u7EE7\u7EED\u8FDB\u884C\u5B66\u4E60\u3002"],
              "\u63D0\u793A\uFF1A\u804C\u6559\u4E91\u65E0\u6CD5\u4F7F\u7528\u500D\u901F\u3002"
            ]).outerHTML
          },
          volume,
          playbackRate: (() => {
            playbackRate.options = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 6, 8].map((rate) => [
              rate.toString(),
              rate + " x"
            ]);
            return playbackRate;
          })(),
          currentCourseId: {
            defaultValue: ""
          },
          courseList: {
            defaultValue: []
          }
        },
        methods() {
          return {
            main: async () => {
              var _a;
              const id = new URL(window.location.href).searchParams.get("id");
              if (!id) {
                return;
              }
              if (state$1.studying && id === state$1.studyingId) {
                return;
              }
              state$1.studyingId = id;
              state$1.studying = true;
              CommonProject.scripts.render.methods.pin(this);
              this.onConfigChange("volume", (val) => {
                if (state$1.media) {
                  state$1.media.volume = parseFloat(val.toString());
                }
              });
              this.onConfigChange("playbackRate", (val) => {
                if (state$1.media) {
                  state$1.media.playbackRate = parseFloat(val.toString());
                }
              });
              await waitForLoad();
              setTimeout(() => {
                var _a2, _b;
                (_a2 = lib.$el(".el-message-box__wrapper")) == null ? void 0 : _a2.remove();
                (_b = lib.$el(".v-modal")) == null ? void 0 : _b.remove();
              }, 3e3);
              await waitForLoad();
              const courseId = getUniqueCourseId();
              if (!courseId) {
                lib.$message.error({ content: "\u83B7\u53D6\u8BFE\u7A0B\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u5237\u65B0\u9875\u9762" });
                return;
              }
              const not_same_class = !ZJYProject.scripts.study.cfg.currentCourseId || ZJYProject.scripts.study.cfg.currentCourseId !== courseId;
              if (not_same_class || !ZJYProject.scripts.study.cfg.courseList) {
                const courseData = await getCourseData();
                if (!courseData) {
                  return;
                }
                ZJYProject.scripts.study.cfg.currentCourseId = courseId;
                ZJYProject.scripts.study.cfg.courseList = courseData;
              }
              const courseInfo = ZJYProject.scripts.study.cfg.courseList.find((i) => i.id === id);
              if (!courseInfo) {
                $console.error("\u83B7\u53D6\u8BFE\u7A0B\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u8DDF\u4F5C\u8005\u53CD\u9988\u3002");
                return;
              }
              const started_url = window.location.href;
              let msg = "\u5F00\u59CB\u5B66\u4E60\uFF1A" + courseInfo.fileType + "-" + courseInfo.name;
              lib.$message.success(msg);
              $console.info(msg);
              if (["ppt", "doc", "pptx", "docx", "pdf", "txt", "ppt\u6587\u6863"].some((i) => courseInfo.fileType === i)) {
                await watchFile();
              } else if (["video", "audio", "mp4", "mp3", "flv", "\u89C6\u9891"].some((i) => courseInfo.fileType === i)) {
                const text = ((_a = lib.$el(".guide")) == null ? void 0 : _a.textContent) || "";
                msg = `\u4EFB\u52A1\u70B9 ${courseInfo.name}\uFF0C\u4E0D\u652F\u6301\u64AD\u653E\u3002`;
                if (text.includes("\u5F88\u62B1\u6B49\uFF0C\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u64AD\u653E\u6B64\u7C7B\u6587\u4EF6") || text.includes("\u6B64\u89C6\u9891\u6682\u65E0\u6CD5\u64AD\u653E")) {
                  msg = `\u4EFB\u52A1\u70B9 ${courseInfo.name}\uFF0C\u4E0D\u652F\u6301\u64AD\u653E\u3002`;
                  lib.$message.error(msg);
                  $console.error(msg);
                } else {
                  await watchMedia$1();
                }
              } else if (["png", "jpg", "\u56FE\u7247"].some((i) => courseInfo.fileType === i)) {
                msg = `\u5DF2\u67E5\u770B\u56FE\u7247\u4EFB\u52A1\u70B9 ${courseInfo.name}\uFF0C\u5373\u5C06\u8DF3\u8FC7\u3002`;
                lib.$message.info(msg);
                $console.info(msg);
              } else {
                msg = `\u672A\u77E5\u7684\u4EFB\u52A1\u70B9 ${courseInfo.name}\uFF0C\u7C7B\u578B ${courseInfo.fileType}\uFF0C\u8BF7\u8DDF\u4F5C\u8005\u8FDB\u884C\u53CD\u9988\u3002`;
                lib.$message.error(msg);
                $console.error(msg);
              }
              if (started_url === window.location.href) {
                msg = courseInfo.name + " \u4EFB\u52A1\u70B9\u7ED3\u675F\uFF0C\u4E09\u79D2\u540E\u4E0B\u4E00\u7AE0";
                lib.$message.info(msg);
                $console.info(msg);
                await $.sleep(3e3);
                await next();
              }
            }
          };
        }
      }),
      work: new lib.Script({
        matches: work_pages,
        name: "\u270D\uFE0F \u4F5C\u4E1A\u8003\u8BD5\u811A\u672C",
        namespace: "zjy.work.main",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u81EA\u52A8\u7B54\u9898\u524D\u8BF7\u5728 \u201C\u901A\u7528-\u5168\u5C40\u8BBE\u7F6E\u201D \u4E2D\u8BBE\u7F6E\u9898\u5E93\u914D\u7F6E\u3002",
              "\u53EF\u4EE5\u642D\u914D \u201C\u901A\u7528-\u5728\u7EBF\u641C\u9898\u201D \u4E00\u8D77\u4F7F\u7528\u3002",
              "\u8BF7\u624B\u52A8\u8FDB\u5165\u4F5C\u4E1A\u8003\u8BD5\u9875\u9762\u624D\u80FD\u4F7F\u7528\u81EA\u52A8\u7B54\u9898\u3002"
            ]).outerHTML
          }
        },
        methods() {
          return {
            main: async () => {
              if (isWork() || isExam()) {
                await waitForQuestions();
                commonWork(this, {
                  workerProvider: (opt) => workOrExam(isWork() ? "work" : "exam", opt)
                });
              }
            }
          };
        }
      })
    }
  });
  async function watchMedia$1() {
    const media = await waitForMedia();
    media.volume = parseFloat(ZJYProject.scripts.study.cfg.volume.toString());
    media.playbackRate = parseFloat(ZJYProject.scripts.study.cfg.playbackRate.toString());
    state$1.media = media;
    const success = await playMedia(() => media.play());
    if (!success) {
      return;
    }
    return new Promise((resolve, reject) => {
      media.addEventListener("ended", () => {
        resolve();
      });
      media.addEventListener("pause", () => {
        setTimeout(() => {
          if (media.ended) {
            resolve();
          } else if (media.paused) {
            media.play();
            media.volume = parseFloat(ZJYProject.scripts.study.cfg.volume.toString());
            media.playbackRate = parseFloat(ZJYProject.scripts.study.cfg.playbackRate.toString());
          }
        }, 1e3);
      });
    });
  }
  async function watchFile() {
    var _a, _b;
    const vue = getVueBindElement();
    if (!vue) {
      return;
    }
    while (true) {
      const [current, total] = ((_b = (_a = document.querySelector(".preview .page")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.trim().replace("\u4E0A\u4E00\u9875", "").replace("\u4E0B\u4E00\u9875", "").split("/").map((i) => parseInt(i.trim()))) || [];
      if (!current || !total) {
        break;
      }
      if (current >= total) {
        break;
      }
      await $.sleep(500);
      try {
        vue.next && vue.next();
      } catch {
      }
      try {
        vue.skip && vue.skip();
      } catch {
      }
    }
  }
  function getUniqueCourseId() {
    var _a, _b, _c, _d;
    return ((_d = (_c = (_b = (_a = document.querySelector(".coursePreviewIndex")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.list) == null ? void 0 : _c[0]) == null ? void 0 : _d.courseId) || "";
  }
  function isZyk() {
    return location.href.includes("zyk.icve.com.cn");
  }
  function getVueBindElement() {
    var _a, _b;
    return ((_a = lib.$el(".guide")) == null ? void 0 : _a.__vue__) || ((_b = lib.$el(".teach")) == null ? void 0 : _b.__vue__);
  }
  async function next() {
    var _a;
    const id = new URL(window.location.href).searchParams.get("id");
    let nextObject;
    const data = ZJYProject.scripts.study.cfg.courseList;
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      if (["\u6D4B\u9A8C", "\u8BA8\u8BBA"].some((i) => item.fileType === i)) {
        continue;
      }
      if (item.id === id) {
        nextObject = data[index + 1];
        break;
      }
    }
    if (id && nextObject) {
      const vue = getVueBindElement();
      if (((_a = vue == null ? void 0 : vue.nextObj) == null ? void 0 : _a.id) && nextObject.id === vue.nextObj.id) {
        vue.preNext(vue.nextObj);
        return;
      }
      await $.sleep(3e3);
      const url = new URL(window.location.href);
      url.searchParams.set("id", nextObject.id);
      window.location.replace(url.href);
    } else {
      lib.$message.success({
        duration: 0,
        content: "\u5168\u90E8\u4EFB\u52A1\u5DF2\u5B8C\u6210\u3002"
      });
      $console.info("\u5168\u90E8\u4EFB\u52A1\u5DF2\u5B8C\u6210\u3002");
      CommonProject.scripts.settings.methods.notificationBySetting("\u5168\u90E8\u4EFB\u52A1\u70B9\u5DF2\u5B8C\u6210\uFF01", {
        duration: 0,
        extraTitle: "\u804C\u6559\u4E91\u5B66\u4E60\u811A\u672C"
      });
      state$1.studying = false;
    }
  }
  async function getCourseData() {
    var _a, _b;
    if (isZyk() === false) {
      const progress = lib.h("div");
      const modal_content = lib.h("div", [
        lib.h("div", { className: "notes card" }, [
          lib.$ui.notes([
            "\u804C\u6559\u4E91\u7531\u4E8E\u5927\u7AE0\u8282\u4E4B\u95F4\u65E0\u81EA\u52A8\u4E0B\u4E00\u8282\u6309\u94AE\uFF0C\u9700\u8981\u5728\u8BFE\u7A0B\u5F00\u59CB\u524D",
            "\u7531\u7A0B\u5E8F\u8BFB\u53D6\u5168\u90E8\u7AE0\u8282\u6570\u636E\uFF0C\u8FD9\u6837\u624D\u80FD\u81EA\u52A8\u8FD0\u884C",
            "\u6570\u636E\u53EA\u9700\u8BFB\u53D6\u4E00\u904D\u5373\u53EF\uFF0C\u540E\u7EED\u65E0\u9700\u91CD\u65B0\u8BFB\u53D6"
          ])
        ]),
        progress
      ]);
      let force_pause = false;
      const modal2 = lib.$modal.confirm({
        content: modal_content,
        maskCloseable: false,
        title: "\u6B63\u5728\u83B7\u53D6\u8BFE\u7A0B\u6570\u636E\u4E2D\uFF0C\u8BF7\u52FF\u64CD\u4F5C...",
        confirmButton: null,
        cancelButtonText: "\u5F3A\u5236\u6682\u505C",
        onCancel() {
          force_pause = true;
        }
      });
      const kejianListEl = document.querySelector(".kejianList");
      if (!kejianListEl) {
        lib.$message.error({ content: "\u83B7\u53D6\u8BFE\u7A0B\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u5237\u65B0\u9875\u9762" });
        return void 0;
      }
      if (kejianListEl.style.display === "none") {
        (_a = Array.from(document.querySelectorAll(".courseBtn div.customBtn")).find((el) => {
          var _a2;
          return (_a2 = el.textContent) == null ? void 0 : _a2.includes("\u8BFE\u4EF6\u76EE\u5F55");
        })) == null ? void 0 : _a.click();
        await $.sleep(1e3);
      }
      const folders = [];
      while (true) {
        const itemsElList = Array.from(document.querySelectorAll(".items"));
        const unsaved = itemsElList.find((item) => folders.includes(item) === false);
        if (!unsaved) {
          break;
        }
        if (force_pause) {
          const err = "\u5DF2\u5F3A\u5236\u6682\u505C\uFF0C\u8BF7\u624B\u52A8\u5237\u65B0\u9875\u9762\u540E\u624D\u80FD\u91CD\u65B0\u8FD0\u884C";
          lib.$message.error({ content: err, duration: 0 });
          lib.$modal.alert({ content: err });
          return void 0;
        }
        folders.push(unsaved);
        if (modal2) {
          progress.innerHTML = "<br><b>\u5F53\u524D\u5DF2\u83B7\u53D6 " + document.querySelectorAll(".fIteml,.iChild").length + " \u4E2A\u5C0F\u8282</b>";
        }
        unsaved.click();
        await $.sleep(2e3);
      }
      modal2 == null ? void 0 : modal2.remove();
    }
    const list = document.querySelector(".coursePreviewIndex").__vue__.list;
    const data = [];
    const temp = JSON.parse(JSON.stringify(list));
    while (temp.length > 0) {
      const item = temp.shift();
      if (((_b = item == null ? void 0 : item.children) == null ? void 0 : _b.length) > 0) {
        temp.unshift(...item.children);
      } else {
        data.push({
          name: item.name,
          id: item.id,
          fileType: item.fileType
        });
      }
    }
    return data;
  }
  function waitForLoad() {
    return waitForElement(() => getVueBindElement());
  }
  async function waitForQuestions() {
    return waitForElement(".subjectList");
  }
  function workOrExam(type, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "\u5F00\u59CB\u4F5C\u4E1A" });
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zjy"
    });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 == null ? void 0 : t2.innerText).join(",");
    };
    const worker = new OCSWorker({
      root: ".subjectDet",
      elements: {
        title: type === "work" ? "h2,h3,h4,h5,h6" : ".titleTest span:not(.xvhao)",
        options: ".optionList div , .tkInput .el-input, .tkInput .el-textarea"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: {
        type(ctx) {
          const options = ctx.elements.options;
          const radio_len = options.map((o) => o.querySelector('[type="radio"]')).reduce((a, b) => {
            return a + (b ? 1 : 0);
          }, 0);
          return radio_len > 0 ? radio_len === 2 ? "judgement" : "single" : options.some((o) => o.querySelector('[type="checkbox"]')) ? "multiple" : options.some((o) => o.querySelector('[type="text"]')) || options.some((o) => o.querySelector("textarea")) ? "completion" : void 0;
        },
        handler(type2, answer, option, ctx) {
          var _a, _b;
          if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
            if (((_a = option.querySelector("input")) == null ? void 0 : _a.checked) !== true) {
              (_b = option.querySelector("label")) == null ? void 0 : _b.click();
            }
          } else if (type2 === "completion" && answer.trim()) {
            const text = option.querySelector('input[type="text"]');
            const textarea = option.querySelector("textarea");
            if (text) {
              text.value = answer;
              text.dispatchEvent(new Event("input", { bubbles: true }));
            } else if (textarea) {
              textarea.value = answer;
              textarea.dispatchEvent(new Event("input", { bubbles: true }));
            }
          }
        }
      },
      onResultsUpdate(curr, _, res) {
        var _a;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        if ((_a = curr.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(simplifyWorkResult([curr], titleTransform));
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    worker.doWork({ enable_debug: true }).then(() => {
      lib.$message.info({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: `\u4F5C\u4E1A/\u8003\u8BD5\u5931\u8D25: ${err}`, duration: 0 });
    });
    return worker;
  }
  const state = {
    currentMedia: void 0,
    currentUrlHash: "",
    currentRunningScriptName: ""
  };
  const ICourseProject = lib.Project.create({
    name: "\u4E2D\u56FD\u5927\u5B66MOOC",
    domains: ["icourse163.org"],
    scripts: {
      dispatcher: new lib.Script({
        name: "\u8C03\u5EA6\u5668",
        hideInPanel: true,
        matches: [["\u6240\u6709\u9875\u9762", "icourse163.org"]],
        oncomplete() {
          setInterval(() => {
            var _a, _b;
            const hash = new URL(window.location.href).hash;
            if (state.currentUrlHash !== hash) {
              state.currentRunningScriptName = "";
            }
            state.currentUrlHash = hash;
            for (const key in ICourseProject.scripts) {
              if (Object.prototype.hasOwnProperty.call(ICourseProject.scripts, key)) {
                const script2 = ICourseProject.scripts[key];
                const runAtHash = Array.isArray(script2.cfg.runAtHash) ? script2.cfg.runAtHash : [script2.cfg.runAtHash];
                if (runAtHash.length && runAtHash.some((h2) => state.currentUrlHash.includes(h2))) {
                  if (state.currentRunningScriptName !== script2.name) {
                    state.currentRunningScriptName = script2.name;
                    (_b = (_a = script2.methods) == null ? void 0 : _a.main) == null ? void 0 : _b.call(_a, () => {
                      return state.currentUrlHash && runAtHash.some((h2) => state.currentUrlHash.includes(h2));
                    });
                  }
                  break;
                }
              }
            }
          }, 1e3);
        }
      }),
      guide: new lib.Script({
        name: "\u{1F4A1} \u4F7F\u7528\u63D0\u793A",
        matches: [["", "icourse163.org"]],
        namespace: "icourse.guide-v1",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["\u624B\u52A8\u8FDB\u5165\u4EFB\u610F\u8BFE\u7A0B\u91CC\u7684\u8BFE\u4EF6/\u4F5C\u4E1A\uFF0C\u5373\u53EF\u5F00\u59CB\u81EA\u52A8\u5B66\u4E60"]).outerHTML
          },
          runAtHash: {
            defaultValue: ["/home/course"]
          }
        },
        methods() {
          return {
            main: async () => {
              console.log(state, this.cfg.runAtHash);
              CommonProject.scripts.render.methods.pin(this);
            }
          };
        }
      }),
      study: new lib.Script({
        name: "\u{1F5A5}\uFE0F \u5B66\u4E60\u811A\u672C",
        namespace: "icourse.study-v1",
        matches: [
          ["MOOC\u4F5C\u4E1A\u9875\u9762", "icourse163.org/learn"],
          ["SPOC\u4F5C\u4E1A\u9875\u9762", "icourse163.org/spoc/learn"]
        ],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "\u8BF7\u52FF\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u6700\u5C0F\u5316\u6D4F\u89C8\u5668",
              "\u81EA\u52A8\u8BA8\u8BBA\u9ED8\u8BA4\u5173\u95ED\uFF0C\u5982\u9700\u5F00\u542F\u8BF7\u5728\u4E0B\u65B9\u8BBE\u7F6E\u4E2D\u8BBE\u7F6E",
              "\u4F5C\u4E1A\u8BF7\u5B8C\u6210\u8BFE\u7A0B\u540E\u624B\u52A8\u8FDB\u5165"
            ]).outerHTML
          },
          runAtHash: {
            defaultValue: "/learn/content?type=detail"
          },
          playbackRate,
          volume,
          readSpeed: {
            label: "PPT\u7FFB\u9605\u901F\u5EA6\uFF08\u79D2\uFF09",
            attrs: { type: "number", step: "1", min: "1", max: "10" },
            defaultValue: 1
          },
          discussionStrategy: {
            label: "\u8BA8\u8BBA\u81EA\u52A8\u56DE\u590D\u65B9\u5F0F",
            tag: "select",
            defaultValue: "not-reply",
            options: [
              ["not-reply", "\u4E0D\u8BA8\u8BBA\u56DE\u590D"],
              ["max-show-up", "\u83B7\u53D6\u51FA\u73B0\u6700\u591A\u7684\u8BC4\u8BBA\u8FDB\u884C\u56DE\u590D"],
              ["max-fav", "\u83B7\u53D6\u6700\u591A\u70B9\u8D5E\u7684\u8BC4\u8BBA\u8FDB\u884C\u56DE\u590D"],
              ["use-newest", "\u83B7\u53D6\u6700\u65B0\u7684\u8BC4\u8BBA\u8FDB\u884C\u56DE\u590D"]
            ]
          },
          enableChapterTest: {
            label: "\u968F\u5802\u6D4B\u9A8C\u81EA\u52A8\u7B54\u9898",
            attrs: {
              type: "checkbox",
              title: "\u662F\u5426\u5F00\u542F\u968F\u5802\u6D4B\u9A8C\u81EA\u52A8\u7B54\u9898\uFF0C\u9ED8\u8BA4\u5173\u95ED\uFF0C\u6D4B\u8BD5\u65F6\u53EA\u9700\u70B9\u51FB\u5373\u53EF\u5B8C\u6210\u6D4B\u9A8C\uFF0C\u4F46\u8FD9\u91CC\u4FDD\u7559\u9009\u9879\u9632\u6B62\u9700\u8981\u5F00\u542F\u3002"
            },
            defaultValue: false
          }
        },
        oncomplete() {
          this.onConfigChange("playbackRate", (playbackRate2) => {
            state.currentMedia && (state.currentMedia.playbackRate = parseFloat(playbackRate2.toString()));
          });
          this.onConfigChange("volume", (v) => state.currentMedia && (state.currentMedia.volume = v));
        },
        methods() {
          return {
            main: async (canRun) => {
              CommonProject.scripts.render.methods.pin(this);
              const remotePage = await RemotePlaywright.getCurrentPage();
              if (!remotePage) {
                return $playwright.showError();
              }
              $render.moveToEdge();
              const study2 = async () => {
                var _a, _b;
                const lessonName = (_a = document.querySelector(".j-lesson .j-up")) == null ? void 0 : _a.textContent;
                const currentUnitItem = document.querySelector(".j-unitslist  li.current");
                const unitName = (_b = currentUnitItem == null ? void 0 : currentUnitItem.querySelector(".unit-name")) == null ? void 0 : _b.textContent;
                $console.log(`\u6B63\u5728\u5B66\u4E60\uFF1A${lessonName || ""} - ${unitName || ""}`);
                const isJob = (iconName) => currentUnitItem == null ? void 0 : currentUnitItem.querySelector(`[class*=${iconName}]`);
                let hasJob = true;
                if (isJob("u-icon-video")) {
                  await waitForElement("video, audio");
                  await watchMedia(this.cfg.playbackRate, this.cfg.volume);
                  $console.log("\u89C6\u9891\u5B66\u4E60\u5B8C\u6210");
                } else if (isJob("u-icon-doc")) {
                  await waitForElement(".ux-pdf-reader");
                  await readPPT(remotePage, this.cfg.readSpeed);
                  $console.log("PPT\u5B8C\u6210");
                } else if (isJob("u-icon-discuss")) {
                  await waitForElement(".j-reply-all");
                  await discussion(remotePage, this.cfg.discussionStrategy);
                  $console.log("\u8BA8\u8BBA\u5B8C\u6210");
                } else if (isJob("u-icon-test")) {
                  const replay = await waitForElement(".j-replay");
                  if ((replay == null ? void 0 : replay.style.display) === "none") {
                    if (this.cfg.enableChapterTest) {
                      await new Promise((resolve) => {
                        ICourseProject.scripts.work.methods.start("chapter-test", canRun, (worker) => {
                          console.log("worker", worker);
                          worker.once("done", resolve);
                          worker.once("close", resolve);
                        });
                      });
                      $console.log("\u6D4B\u9A8C\u5B8C\u6210");
                    } else {
                      $console.warn("\u968F\u5802\u6D4B\u9A8C\u81EA\u52A8\u7B54\u9898\u529F\u80FD\u5DF2\u5173\u95ED\uFF08\u4E0A\u65B9\u83DC\u5355\u680F-\u4E2D\u56FD\u5927\u5B66MOOC-\u5B66\u4E60\u811A\u672C\u4E2D\u5F00\u542F\uFF09\uFF0C\u5373\u5C06\u8DF3\u8FC7\u3002");
                    }
                  } else {
                    $console.log("\u968F\u5802\u6D4B\u9A8C\u5DF2\u5B8C\u6210\uFF0C\u5373\u5C06\u8DF3\u8FC7\u3002");
                  }
                } else if (isJob("u-icon-text")) {
                  $console.log("\u6587\u6863\u65E0\u9700\u5904\u7406\uFF0C\u5373\u5C06\u8DF3\u8FC7\u3002");
                } else {
                  hasJob = false;
                }
                await $.sleep(3e3);
                if (canRun()) {
                  if (hasJob) {
                    $console.log("\u51C6\u5907\u8DF3\u8F6C\u4E0B\u4E00\u7AE0");
                  } else {
                    $console.warn("\u672A\u627E\u5230\u5B66\u4E60\u5185\u5BB9\uFF0C\u6216\u8005\u6B64\u7AE0\u8282\u4E0D\u652F\u6301\u81EA\u52A8\u5B66\u4E60\uFF01\u5373\u5C06\u8DF3\u8FC7\u672C\u7AE0\u8282");
                  }
                  await gotoNextJob();
                }
              };
              study2();
              async function gotoNextJob() {
                const list = await next2();
                for (const item of list) {
                  const el = typeof item === "function" ? item() : item;
                  if (el) {
                    await (remotePage == null ? void 0 : remotePage.click(el));
                  }
                }
                if (list.length === 0) {
                  lib.$message.success({ content: "\u6240\u6709\u7AE0\u8282\u5B66\u4E60\u5B8C\u6210\uFF01", duration: 0 });
                  $console.info("\u6240\u6709\u7AE0\u8282\u5B66\u4E60\u5B8C\u6210\uFF01");
                  CommonProject.scripts.settings.methods.notificationBySetting("\u6240\u6709\u7AE0\u8282\u5B66\u4E60\u5B8C\u6210\uFF01", {
                    duration: 0,
                    extraTitle: "\u4E2D\u56FD\u5927\u5B66MOOC\u5B66\u4E60\u811A\u672C"
                  });
                }
              }
              async function next2() {
                var _a;
                const nextEl = (_a = document.querySelector(".unitslist .current")) == null ? void 0 : _a.nextElementSibling;
                if (nextEl) {
                  return [nextEl.querySelector(".unit-name")];
                }
                const getName = (node) => {
                  var _a2;
                  return (_a2 = node == null ? void 0 : node.textContent) == null ? void 0 : _a2.replace(/\s/g, "");
                };
                const lessonName = getName(document.querySelector(".j-lesson .j-up"));
                if (!lessonName) {
                  throw Error("\u65E0\u6CD5\u8BFB\u53D6\u7AE0\u8282\u540D!");
                }
                const lessonList = Array.from(document.querySelectorAll(".j-lesson .j-list .list"));
                let nextLesson = void 0;
                for (const item of lessonList) {
                  const itemName = getName(item);
                  if (itemName === lessonName) {
                    if (item.nextElementSibling) {
                      nextLesson = item.nextElementSibling;
                      break;
                    }
                  }
                }
                if (nextLesson) {
                  return [
                    document.querySelector(".j-lesson"),
                    nextLesson
                  ];
                }
                const chapterName = getName(document.querySelector(".j-chapter .j-up"));
                if (!chapterName) {
                  throw Error("\u65E0\u6CD5\u8BFB\u53D6\u5355\u5143\u540D!");
                }
                const chapterList = Array.from(document.querySelectorAll(".j-chapter .j-list .list"));
                let nextChapter = void 0;
                for (const item of chapterList) {
                  const itemName = getName(item);
                  if (itemName === chapterName) {
                    if (item.nextElementSibling) {
                      nextChapter = item.nextElementSibling;
                      break;
                    }
                  }
                }
                if (nextChapter) {
                  return [
                    () => document.querySelector(".j-chapter"),
                    () => nextChapter,
                    () => document.querySelector(".j-lesson"),
                    () => document.querySelectorAll(".j-lesson .j-list .list")[0]
                  ];
                } else {
                  return [];
                }
              }
            }
          };
        }
      }),
      work: new lib.Script({
        name: "\u270D\uFE0F \u4F5C\u4E1A\u8003\u8BD5\u811A\u672C",
        namespace: "icourse.work-v2",
        matches: [
          ["MOOC\u4F5C\u4E1A\u9875\u9762", "icourse163.org/learn"],
          ["SPOC\u4F5C\u4E1A\u9875\u9762", "icourse163.org/spoc/learn"]
        ],
        configs: {
          notes: workNotes,
          runAtHash: {
            defaultValue: ["/learn/quiz", "/learn/examObject"]
          }
        },
        methods() {
          const start2 = async (type, canRun, onWorkerCreated) => {
            CommonProject.scripts.render.methods.pin(this);
            $render.moveToEdge();
            const remotePage = await RemotePlaywright.getCurrentPage();
            if (!remotePage) {
              return $playwright.showError();
            }
            await waitForQuestion();
            $console.log("\u5F00\u59CB\u7B54\u9898");
            CommonProject.scripts.render.methods.pin(this);
            commonWork(this, {
              workerProvider: (opts) => {
                const worker = workAndExam(remotePage, type, opts);
                worker.once("close", () => {
                  clearInterval(interval);
                });
                const interval = setInterval(() => {
                  if (canRun() === false) {
                    lib.$message.warn("\u68C0\u6D4B\u5230\u9875\u9762\u5207\u6362\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u7B54\u9898\uFF0C\u5C06\u5173\u95ED\u81EA\u52A8\u7B54\u9898\u3002");
                    clearInterval(interval);
                    worker.emit("close");
                  }
                }, 1e3);
                return worker;
              },
              onWorkerCreated
            });
          };
          return {
            main: async (canRun) => {
              if (location.hash.includes("learn/quizscore")) {
                lib.$message.success("\u5F53\u524D\u4F5C\u4E1A\u5DF2\u5B8C\u6210\uFF0C\u81EA\u52A8\u7B54\u9898\u5173\u95ED\u3002");
                return;
              }
              return start2("work-or-exam", canRun);
            },
            start: start2
          };
        }
      })
    }
  });
  function waitForQuestion() {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (document.querySelector(".u-questionItem")) {
          clearInterval(interval);
          resolve();
        }
      }, 1e3);
    });
  }
  function workAndExam(remotePage, type, {
    answererWrappers,
    period,
    thread,
    redundanceWordsText,
    upload,
    stopSecondWhenFinish,
    answerSeparators,
    answerMatchMode
  }) {
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "icourse"
    });
    const titleTransform = (titles) => {
      return removeRedundantWords(
        titles.map((t2) => t2 ? optimizationElementWithImage(t2, true).innerText : "").filter((t2) => t2.trim() !== "").join(",").replace(/[\u200A-\u200F]/g, ""),
        redundanceWordsText.split("\n")
      );
    };
    const worker = new OCSWorker({
      root: ".u-questionItem",
      elements: {
        title: ".j-title .j-richTxt",
        options: ".choices li,.inputArea"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n")
            });
          });
        } else {
          throw new Error("\u9898\u76EE\u4E3A\u7A7A\uFF0C\u8BF7\u67E5\u770B\u9898\u76EE\u662F\u5426\u4E3A\u7A7A\uFF0C\u6216\u8005\u5FFD\u7565\u6B64\u9898");
        }
      },
      work: {
        async handler(type2, answer, option) {
          if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
            const text = option.querySelector(".f-richEditorText");
            const input = option.querySelector("input");
            if (input && !(input == null ? void 0 : input.checked) && text) {
              await remotePage.click(text);
            }
          } else if (type2 === "completion" && answer.trim()) {
            const text = option.querySelector("textarea");
            if (text) {
              text.value = answer.trim();
              await remotePage.click(text);
            }
          }
        }
      },
      onElementSearched(elements2, root2) {
        elements2.options.forEach((el) => {
          const correct = el.querySelector(".u-icon-correct");
          const wrong = el.querySelector(".u-icon-wrong");
          if (correct) {
            correct.replaceWith("\u5BF9");
          }
          if (wrong) {
            wrong.replaceWith("\u9519");
          }
        });
      },
      onResultsUpdate(curr, _, res) {
        var _a;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        if ((_a = curr.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(simplifyWorkResult([curr], titleTransform));
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    worker.doWork().then(async (results) => {
      if (worker.isClose) {
        return;
      }
      if (type === "chapter-test") {
        lib.$message.info(`\u7B54\u9898\u5B8C\u6210\uFF0C\u5C06\u7B49\u5F85 ${stopSecondWhenFinish} \u79D2\u540E\u8FDB\u884C\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002`);
        $console.info(`\u7B54\u9898\u5B8C\u6210\uFF0C\u5C06\u7B49\u5F85 ${stopSecondWhenFinish} \u79D2\u540E\u8FDB\u884C\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002`);
        await $.sleep(stopSecondWhenFinish * 1e3);
        if (worker.isClose) {
          return;
        }
        await worker.uploadHandler({
          type: upload,
          results,
          async callback(finishedRate, uploadable) {
            const content = `\u5B8C\u6210\u7387 ${finishedRate.toFixed(2)}% :  ${uploadable ? "3\u79D2\u540E\u5C06\u81EA\u52A8\u63D0\u4EA4" : "3\u79D2\u540E\u5C06\u81EA\u52A8\u8DF3\u8FC7\uFF08\u6CA1\u4FDD\u5B58\u6309\u94AE\uFF09"} `;
            $console.info(content);
            lib.$message.success({ content, duration: 0 });
            await $.sleep(3e3);
            if (worker.isClose) {
              return;
            }
            if (uploadable) {
              const sumbit = document.querySelector(".j-submit");
              if (sumbit) {
                await remotePage.click(sumbit);
              } else {
                $console.warn("\u6CA1\u6709\u627E\u5230\u63D0\u4EA4\u6309\u94AE\uFF0C\u5C06\u8DF3\u8FC7\u63D0\u4EA4\u3002");
              }
            }
          }
        });
      } else {
        lib.$message.success({ content: "\u4F5C\u4E1A/\u8003\u8BD5\u5B8C\u6210\uFF0C\u8BF7\u81EA\u884C\u68C0\u67E5\u540E\u4FDD\u5B58\u6216\u63D0\u4EA4\u3002", duration: 0 });
      }
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: "\u7B54\u9898\u7A0B\u5E8F\u53D1\u751F\u9519\u8BEF : " + err.message, duration: 0 });
    });
    return worker;
  }
  async function watchMedia(playbackRate2, volume2) {
    return new Promise((resolve, reject) => {
      waitForMedia().then((video) => {
        video.playbackRate = playbackRate2;
        video.volume = volume2;
        state.currentMedia = video;
        playMedia(() => video == null ? void 0 : video.play());
        video.onpause = async () => {
          if (!(video == null ? void 0 : video.ended)) {
            video == null ? void 0 : video.play();
          }
        };
        video.onended = () => {
          resolve();
        };
      }).catch(reject);
    });
  }
  async function readPPT(remotePage, readSpeed) {
    var _a, _b, _c, _d;
    const reader = document.querySelector(".ux-pdf-reader");
    if (reader) {
      const total = parseInt(
        ((_c = (_b = (_a = document.querySelector(".ux-h5pdfreader_container_footer_pages_total")) == null ? void 0 : _a.childNodes[1]) == null ? void 0 : _b.textContent) == null ? void 0 : _c.replace(/\s/, "")) || "0"
      );
      const start2 = parseInt(
        ((_d = document.querySelector(".ux-h5pdfreader_container_footer_pages_in")) == null ? void 0 : _d.value) || "1"
      );
      for (let index = start2; index < total + 1; index++) {
        const next2 = document.querySelector(".ux-h5pdfreader_container_footer_pages_next");
        if (next2) {
          await remotePage.click(next2);
        } else {
          $console.error("\u672A\u627E\u5230PPT\u7684\u4E0B\u4E00\u9875\u6309\u94AE\uFF01");
        }
        await $.sleep(readSpeed * 1e3);
      }
    }
  }
  async function discussion(remotePage, discussionStrategy) {
    var _a, _b, _c, _d, _e;
    if (discussionStrategy === "not-reply") {
      return $console.warn("\u8BA8\u8BBA\u81EA\u52A8\u56DE\u590D\u529F\u80FD\u5DF2\u5173\u95ED\uFF08\u4E0A\u65B9\u83DC\u5355\u680F-\u4E2D\u56FD\u5927\u5B66MOOC-\u5B66\u4E60\u811A\u672C\u4E2D\u5F00\u542F\uFF09\u3002");
    }
    let res = "";
    if (discussionStrategy === "max-show-up") {
      const list = Array.from(document.querySelectorAll(".j-reply-all .f-pr .j-content"));
      const mapping = /* @__PURE__ */ new Map();
      for (const item of list) {
        mapping.set(item.textContent, (mapping.get(item.textContent) || 0) + 1);
      }
      const content = (_b = (_a = [...mapping.entries()].sort((a, b) => b[1] - a[1])) == null ? void 0 : _a[0]) == null ? void 0 : _b[0];
      if (!content) {
        $console.error("\u8BFB\u53D6\u51FA\u73B0\u6700\u591A\u8BC4\u8BBA\u5931\u8D25\uFF01");
      }
      res = content;
    } else if (discussionStrategy === "max-fav") {
      const list = Array.from(document.querySelectorAll(".j-reply-all .f-pr"));
      let max = 0;
      let maxEl = void 0;
      for (const item of list) {
        const num = parseInt(((_c = item.querySelector(".bar .num")) == null ? void 0 : _c.textContent) || "0");
        if (num > max) {
          max = num;
          maxEl = item;
        }
      }
      const content = ((_d = maxEl == null ? void 0 : maxEl.querySelector(".j-content")) == null ? void 0 : _d.textContent) || "";
      if (!content) {
        $console.error("\u8BFB\u53D6\u6700\u591A\u70B9\u8D5E\u8BC4\u8BBA\u5931\u8D25\uFF01");
      }
      res = content;
    } else if (discussionStrategy === "use-newest") {
      const content = ((_e = document.querySelector(".j-reply-all .f-pr .first .j-content")) == null ? void 0 : _e.textContent) || "";
      if (!content) {
        $console.error("\u8BFB\u53D6\u6700\u65B0\u8BC4\u8BBA\u5931\u8D25\uFF01");
      }
      res = content;
    }
    const p = document.querySelector(".j-reply-add div.ql-editor.ql-blank p");
    if (p) {
      p.innerText = res;
      await $.sleep(1e3);
      const submit = document.querySelector(".j-reply-add .editbtn");
      if (submit) {
        await remotePage.click(submit);
      } else {
        $console.error("\u83B7\u53D6\u63D0\u4EA4\u6309\u94AE\u5931\u8D25\uFF01");
      }
      await $.sleep(2e3);
    } else {
      $console.error("\u83B7\u53D6\u8BC4\u8BBA\u8F93\u5165\u6846\u5931\u8D25\uFF01");
    }
  }
  function definedProjects() {
    return [ZHSProject, CXProject, IcveMoocProject, ZJYProject, ICourseProject, CommonProject, BackgroundProject];
  }
  exports2.$ = $;
  exports2.$const = $const;
  exports2.$elements = lib.$elements;
  exports2.$store = lib.$store;
  exports2.$string = $string;
  exports2.AnswerWrapperParser = AnswerWrapperParser;
  exports2.BackgroundProject = BackgroundProject;
  exports2.CXProject = CXProject;
  exports2.CommonProject = CommonProject;
  exports2.ICourseProject = ICourseProject;
  exports2.IcveMoocProject = IcveMoocProject;
  exports2.OCSWorker = OCSWorker;
  exports2.RemotePlaywright = RemotePlaywright;
  exports2.RenderScript = RenderScript;
  exports2.StringUtils = StringUtils;
  exports2.ZHSProject = ZHSProject;
  exports2.ZJYProject = ZJYProject;
  exports2.answerExactMatch = answerExactMatch;
  exports2.answerSimilar = answerSimilar;
  exports2.clearString = clearString;
  exports2.defaultAnswerWrapperHandler = defaultAnswerWrapperHandler;
  exports2.defaultQuestionResolve = defaultQuestionResolve;
  exports2.defaultWorkTypeResolver = defaultWorkTypeResolver;
  exports2.definedProjects = definedProjects;
  exports2.domSearch = domSearch;
  exports2.domSearchAll = domSearchAll;
  exports2.isPlainAnswer = isPlainAnswer;
  exports2.removeRedundant = removeRedundant;
  exports2.request = request;
  exports2.resolvePlainAnswer = resolvePlainAnswer;
  exports2.splitAnswer = splitAnswer;
  exports2.start = lib.start;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});


const STYLE = `/** 默认字体 */
/** 输入框默认边距 */
ul,
ol {
	line-height: 26px;
	padding-left: 22px;
	margin: 0px;
}
a {
	color: #1890ff;
}
hr {
	border-style: solid;
	border-color: #63636346;
	border-width: 0px;
	border-bottom: 1px solid #63636346;
	margin-block-start: 1em;
	margin-block-end: 1em;
}
.base-style-active-form-control {
	border: 1px solid #ffffff00;
}
.base-style-active-form-control:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.base-style-active-form-control:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.base-style-active-form-control:hover {
	background-color: #ebeef4;
}
.base-style-input {
	outline: none;
	border: 1px solid #ffffff00;
	padding: 2px 8px;
	margin: 0px;
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
}
.base-style-input::placeholder {
	color: #bababa;
}
.base-style-switch {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	width: fit-content;
	min-width: 36px;
	height: 20px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	padding: 2px 4px;
	transition: all 0.2s ease-in-out;
	width: auto;
	background: gainsboro;
}
.base-style-switch:checked {
	background: #1890ff;
}
.base-style-switch:disabled {
	background-color: #f7f7f78b;
}
.base-style-switch:checked::before {
	transform: translate(100%, 0px);
}
.base-style-switch::before {
	background-color: #fff;
	border-radius: 9px;
	box-shadow: 0 2px 4px #00230b33;
	width: 14px;
	height: 14px;
	content: '';
}
.base-style-button {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
}
.base-style-button:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
.base-style-button + .base-style-button {
	margin-left: 12px;
}
.base-style-button:hover {
	background-color: #7abbff24;
}
.base-style-button.danger:hover {
	background-color: #ffdede86;
}
.base-style-button:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
.base-style-button.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
.base-style-button:disabled:active {
	box-shadow: none;
}
.base-style-button-secondary {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
	color: gray;
	background-color: white;
	border: 1px solid #dcdcdc;
}
.base-style-button-secondary:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
.base-style-button-secondary + .base-style-button-secondary {
	margin-left: 12px;
}
.base-style-button-secondary:hover {
	background-color: #7abbff24;
}
.base-style-button-secondary.danger:hover {
	background-color: #ffdede86;
}
.base-style-button-secondary:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
.base-style-button-secondary.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
.base-style-button-secondary:disabled:active {
	box-shadow: none;
}
container-element.close {
	display: none;
}
container-element.minimize {
	min-width: unset;
}
container-element {
	position: fixed;
	top: 10%;
	left: 10%;
	z-index: 99999;
	text-align: left;
	min-width: 300px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #636363;
	box-shadow: 0 0 24px -12px #3f3f3f;
	border-radius: 8px;
	letter-spacing: 0.5px;
	border: 1px solid #c1c1c1;
}
header-element {
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 8px 8px 0px 0px;
	user-select: none;
	padding: 4px;
	padding-bottom: 0px;
}
header-element .extra-menu-bar {
	width: 100%;
	padding: 4px;
	padding-bottom: 0px;
	margin-top: 4px;
	border-top: 1px solid #e8e8e8;
	/** 默认隐藏，一直到需要激活的时候再更改 */
	display: none;
}
header-element .extra-menu-bar .script-panel-link {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
	color: gray;
	background-color: white;
	border: 1px solid #dcdcdc;
	padding-bottom: 2px;
	margin-bottom: 0px;
}
header-element .extra-menu-bar .script-panel-link:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
header-element .extra-menu-bar .script-panel-link + header-element .extra-menu-bar .script-panel-link {
	margin-left: 12px;
}
header-element .extra-menu-bar .script-panel-link:hover {
	background-color: #7abbff24;
}
header-element .extra-menu-bar .script-panel-link.danger:hover {
	background-color: #ffdede86;
}
header-element .extra-menu-bar .script-panel-link:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
header-element .extra-menu-bar .script-panel-link.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
header-element .extra-menu-bar .script-panel-link:disabled:active {
	box-shadow: none;
}
header-element .extra-menu-bar .script-panel-link + .script-panel-link {
	margin-left: 4px;
}
header-element .profile {
	flex: 1;
	cursor: move;
}
header-element .switch:hover,
header-element .dropdown:hover {
	background-color: #f3f3f3;
}
header-element .close:hover {
	background-color: #ff000038;
}
header-element .switch,
header-element .close {
	cursor: pointer;
}
header-element .dropdown {
	line-height: 24px;
	text-decoration: underline;
}
header-element .switch,
header-element .close,
header-element .profile {
	display: inline-flex;
	align-items: center;
	padding: 0px 8px;
}
.logo {
	width: 18px;
	height: 18px;
	cursor: pointer;
}
.project-selector {
	display: flex;
	align-items: center;
}
.project-selector select {
	background: #ffffff00;
	border-radius: 4px;
	border: 1px solid #63636346;
	padding: 4px;
}
.project-selector.expand-all {
	display: none;
}
.body {
	overflow: auto;
	width: auto;
	height: 100%;
}
script-panel-element {
	display: block;
	background-color: white;
	border-radius: 0px 0px 8px 8px;
	padding: 0px 8px 12px 8px;
	overflow: auto;
}
script-panel-element .script-panel-body {
	padding: 0px 8px;
}
script-panel-element + script-panel-element {
	margin-top: 12px;
}
.card + .card {
	margin-top: 12px;
}
.card {
	background-color: white;
	border-radius: 2px;
	padding: 0px 8px;
}
.notes {
	background: #0099ff0e;
	border-left: 4px solid #0099ff65;
	width: -webkit-fill-available;
	margin: 0px 8px;
	line-height: 26px;
	letter-spacing: 1px;
}
.tooltip-container {
	z-index: 99999999999999;
	margin: 12px 0px 0px 12px;
	padding: 4px;
	color: black;
	background: #f0f0f0;
	box-shadow: 0px 0px 4px #949494;
	position: fixed;
	white-space: normal;
	max-width: 200px;
	height: auto;
	border-radius: 2px;
	line-height: 18px;
}
.configs-container.lock {
	filter: blur(1px);
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
.configs-container .lock-wrapper {
	cursor: not-allowed !important;
	border-radius: 4px;
	position: absolute;
	left: 0px;
	z-index: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
.configs-container .lock-message {
	background-color: #ffffff7d;
	border-radius: 4px;
	box-shadow: 0px 0px 12px #6a6a6a98;
	padding: 2px;
}
.configs {
	display: table;
	background: #e1e1e107;
	width: -webkit-fill-available;
}
.configs .configs-body {
	display: table-row-group;
}
.configs .configs-body config-element + config-element label {
	padding-top: 4px;
}
.configs .configs-body config-element + config-element .config-wrapper {
	padding-top: 4px;
}
.configs .configs-body config-element {
	width: 100%;
	display: table-row;
	line-height: 26px;
}
.configs .configs-body config-element label {
	white-space: nowrap;
	color: #4e5969;
	display: table-cell;
	padding-right: 12px;
	text-align: left;
	vertical-align: top;
	margin-right: 12px;
}
.configs .configs-body config-element .config-wrapper {
	display: table-cell;
	vertical-align: middle;
	/** check box 的样式 */
}
.configs .configs-body config-element .config-wrapper select {
	outline: none;
	border: none;
	border: 1px solid #e4e4e4;
	border-radius: 4px;
	padding: 2px 8px;
	border: 1px solid #ffffff00;
}
.configs .configs-body config-element .config-wrapper select:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.configs .configs-body config-element .config-wrapper select:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.configs .configs-body config-element .config-wrapper select:hover {
	background-color: #ebeef4;
}
.configs .configs-body config-element .config-wrapper textarea {
	padding: 2px 8px;
	outline: none;
	border: none;
	border: 1px solid #ffffff00;
}
.configs .configs-body config-element .config-wrapper textarea:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.configs .configs-body config-element .config-wrapper textarea:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.configs .configs-body config-element .config-wrapper textarea:hover {
	background-color: #ebeef4;
}
.configs .configs-body config-element .config-wrapper input:not([type='button']) {
	outline: none;
	padding: 2px 8px;
	margin: 0px;
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
	border: 1px solid #ffffff00;
}
.configs .configs-body config-element .config-wrapper input:not([type='button'])::placeholder {
	color: #bababa;
}
.configs .configs-body config-element .config-wrapper input:not([type='button']):focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.configs
	.configs-body
	config-element
	.config-wrapper
	input:not([type='button']):focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.configs .configs-body config-element .config-wrapper input:not([type='button']):hover {
	background-color: #ebeef4;
}
.configs .configs-body config-element .config-wrapper input[type='range'] {
	padding: 0px;
}
.configs .configs-body config-element .config-wrapper input[type='button'] {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
}
.configs .configs-body config-element .config-wrapper input[type='button']:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
.configs
	.configs-body
	config-element
	.config-wrapper
	input[type='button']
	+ .configs
	.configs-body
	config-element
	.config-wrapper
	input[type='button'] {
	margin-left: 12px;
}
.configs .configs-body config-element .config-wrapper input[type='button']:hover {
	background-color: #7abbff24;
}
.configs .configs-body config-element .config-wrapper input[type='button'].danger:hover {
	background-color: #ffdede86;
}
.configs .configs-body config-element .config-wrapper input[type='button']:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
.configs .configs-body config-element .config-wrapper input[type='button'].danger {
	color: #f36669;
	border-color: #dd5a5d;
}
.configs .configs-body config-element .config-wrapper input[type='button']:disabled:active {
	box-shadow: none;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox'] {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	width: fit-content;
	min-width: 36px;
	height: 20px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	padding: 2px 4px;
	transition: all 0.2s ease-in-out;
	width: auto;
	background: gainsboro;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']:checked {
	background: #1890ff;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']:disabled {
	background-color: #f7f7f78b;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']:checked::before {
	transform: translate(100%, 0px);
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']::before {
	background-color: #fff;
	border-radius: 9px;
	box-shadow: 0 2px 4px #00230b33;
	width: 14px;
	height: 14px;
	content: '';
}
.configs .configs-body config-element .config-wrapper input:not([type='checkbox'], [type='radio']),
.configs .configs-body config-element .config-wrapper textarea,
.configs .configs-body config-element .config-wrapper select {
	width: -webkit-fill-available;
	font-size: inherit;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox'],
.configs .configs-body config-element .config-wrapper input[type='radio'],
.configs .configs-body config-element .config-wrapper input[type='range'] {
	accent-color: #0e8ee2;
}
.configs .configs-body config-element .config-wrapper > *:not(.tooltip) {
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
	float: right;
}
.configs .configs-body config-element .config-wrapper > *:disabled {
	cursor: not-allowed;
	background-color: #f7f7f78b;
}
.message-container {
	margin-bottom: 4px;
	position: absolute;
	bottom: 100%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, 0px);
	min-width: 300px;
}
.message-container message-element {
	display: flex;
	border-radius: 4px;
	padding: 4px 12px;
	margin-bottom: 4px;
}
.message-container message-element .message-content-container {
	margin-right: 8px;
	flex: auto;
}
.message-container message-element .message-text {
	letter-spacing: 1px;
	font-weight: bold;
}
.message-container message-element .message-closer {
	width: 18px;
	min-width: 18px;
	cursor: pointer;
	background-color: #ffffffb3;
	color: #a1a1a1;
	border-radius: 100%;
	text-align: center;
	height: 18px;
	vertical-align: middle;
	font-size: 12px;
}
.message-container message-element.error {
	background-color: #ffe6e6;
	color: #c70208;
	border: 1px solid #ff6b6ded;
}
.message-container message-element.info {
	background-color: #c9e7ff;
	color: #004d95;
	border: 1px solid #1890ff69;
}
.message-container message-element.success {
	background-color: #e8ffe0;
	color: #3e8d0d;
	border: 1px solid #6fd91d;
}
.message-container message-element.warn {
	background-color: #ffefc8;
	color: #9b7400;
	border: 1px solid #ffc107;
}
modal-element {
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0px 0px 24px -12px black;
	border: 1px solid #929292;
	height: fit-content;
	transform: translate(-50%, -50%);
	padding: 12px 18px 18px 18px;
	font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
	z-index: 99999999999;
	line-height: 24px;
}
modal-element .modal-profile {
	zoom: 0.9;
	color: #969696;
	user-select: none;
	margin-bottom: 4px;
}
modal-element .modal-title {
	font-size: 18px;
	font-weight: bold;
	user-select: none;
}
modal-element .modal-body {
	margin: 12px 0px;
	overflow: auto;
}
modal-element .modal-footer {
	display: flex;
	white-space: nowrap;
	justify-content: end;
	align-items: end;
}
modal-element .modal-footer > * + * {
	margin-left: 12px;
}
modal-element .modal-input {
	outline: none;
	padding: 2px 8px;
	margin: 0px;
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
	border: 1px solid #ffffff00;
	width: -webkit-fill-available;
}
modal-element .modal-input::placeholder {
	color: #bababa;
}
modal-element .modal-input:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
modal-element .modal-input:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
modal-element .modal-input:hover {
	background-color: #ebeef4;
}
modal-element .modal-cancel-button {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
	color: gray;
	background-color: white;
	border: 1px solid #dcdcdc;
}
modal-element .modal-cancel-button:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
modal-element .modal-cancel-button + modal-element .modal-cancel-button {
	margin-left: 12px;
}
modal-element .modal-cancel-button:hover {
	background-color: #7abbff24;
}
modal-element .modal-cancel-button.danger:hover {
	background-color: #ffdede86;
}
modal-element .modal-cancel-button:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
modal-element .modal-cancel-button.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
modal-element .modal-cancel-button:disabled:active {
	box-shadow: none;
}
modal-element .modal-confirm-button {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
}
modal-element .modal-confirm-button:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
modal-element .modal-confirm-button + modal-element .modal-confirm-button {
	margin-left: 12px;
}
modal-element .modal-confirm-button:hover {
	background-color: #7abbff24;
}
modal-element .modal-confirm-button.danger:hover {
	background-color: #ffdede86;
}
modal-element .modal-confirm-button:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
modal-element .modal-confirm-button.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
modal-element .modal-confirm-button:disabled:active {
	box-shadow: none;
}
modal-element.alert .modal-input,
modal-element.alert .modal-cancel-button {
	display: none;
}
modal-element.alert .modal-confirm-button {
	margin: 0;
}
modal-element.prompt .modal-input,
modal-element.prompt .modal-cancel-button,
modal-element.prompt .modal-confirm-button {
	display: block;
}
modal-element.confirm .modal-input {
	display: none;
}
.modal-wrapper {
	width: 100%;
	height: 100%;
	z-index: 9999;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 9999999;
	background-color: rgba(0, 0, 0, 0.265);
	color: #636363;
	font: 14px Menlo, Monaco, Consolas, 'Courier New', monospace;
}
.pointer {
	cursor: pointer;
}
.separator {
	display: flex;
	align-items: center;
	text-align: center;
	padding: 4px 0px 8px 0px;
}
.separator::before,
.separator::after {
	content: '';
	flex: 1;
	border-bottom: 1px solid #63636346;
}
.separator:not(:empty)::before {
	margin-right: 0.25em;
}
.separator:not(:empty)::after {
	margin-left: 0.25em;
}
.minimize .body,
.minimize header-element .dropdown,
.minimize .footer {
	display: none;
}
.minimize header-element {
	padding: 8px;
	border-radius: 8px;
	box-shadow: 0px 0px 24px -12px black;
}
.user-guide > li {
	padding: 4px 0px;
}
.search-infos-num {
	width: 26px;
	margin: 2px;
	height: 20px;
	border-radius: 4px;
	display: inline-block;
	background-color: white;
	text-align: center;
	cursor: pointer;
	border: 1px solid #b6b6b6;
}
.search-infos-num.requested {
	border: 1px solid #63b4ff;
	color: #63b4ff;
}
.search-infos-num.active {
	background-color: #127de1 !important;
	color: white;
}
.search-infos-num.error {
	border: 1px solid #ff8789ed;
	background-color: #ff6b6ded;
	color: white;
}
.search-infos-num.finish {
	background-color: #63b4ff;
	border: 1px solid #63b4ff;
	color: white;
}
search-infos-element {
	display: block;
	overflow: auto;
}
search-infos-element .search-result {
	margin-bottom: 12px;
	padding-left: 12px;
}
search-infos-element .search-result .question {
	font-weight: bold;
}
search-infos-element .search-result .answer {
	color: #7c7c7c;
}
search-infos-element .search-result .answer code {
	background-color: #f3f3f3;
	padding: 2px 4px;
	border-radius: 2px;
	margin: 4px;
	line-height: 20px;
}
search-infos-element .error {
	color: #ff6b6ded;
	display: inline-block;
	padding-left: 12px;
}
.copy,
.question-title-extra-btn {
	margin-left: 4px;
	padding: 2px 4px;
	border-radius: 2px;
	box-shadow: 0 0 4px #b1b1b1;
	cursor: pointer !important;
	font-weight: normal;
	font-size: 12px;
}
.work-result-question-container {
	position: absolute;
	width: 400px;
	left: -100%;
	top: 0px;
	background: white;
	border: 1px solid #cbcbcb;
	border-radius: 4px;
	box-shadow: 0px 0px 12px #d1cfcf;
	padding: 12px;
}
.work-result-question-container .close-search-result {
	font-size: 12px;
	margin-left: 8px;
	text-decoration: underline;
	color: gray;
	cursor: pointer;
}
.console {
	max-height: 300px;
	max-width: 400px;
	overflow: auto;
	background-color: #292929;
	padding: 12px 6px;
	color: #ececec;
	font-size: 12px;
}
.console .item {
	padding: 3px 0px;
	border-radius: 2px;
}
.console .item .time {
	color: #757575;
}
.console .item .info {
	background-color: #2196f3a3;
}
.console .item .warn {
	background-color: #ffc107db;
}
.console .item .error {
	background-color: #f36c71cc;
}
.console .item .debug,
.console .item .log {
	background-color: #9e9e9ec4;
}
.console *::selection {
	background-color: #ffffff6b;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
	background: #ffffffd8;
	border-radius: 4px;
	margin: 4px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background: rgba(0, 0, 0, 0.253);
	box-shadow: inset006pxrgba(0, 0, 0, 0.3);
}
.markdown {
	max-width: 400px;
	max-height: 50vh;
	overflow: auto;
}
.markdown code {
	padding: 2px 4px;
	background-color: #f0f0f0;
	border-radius: 6px;
	font-size: 12px;
}
.markdown blockquote {
	padding: 4px 4px 4px 12px;
	margin: 0px;
	color: #b5b5b5;
	border-left: #ababab 2px solid;
}
.markdown blockquote p {
	margin: 0px;
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6,
.markdown p {
	margin: 8px 0px;
}
.dropdown {
	position: relative;
	display: inline-block;
}
.dropdown.active .dropdown-trigger-element {
	color: #1890ff;
}
.dropdown-trigger-element {
	cursor: pointer;
}
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #ffffff;
	overflow: auto;
	box-shadow: 0px 8px 16px 0px #00000033;
	z-index: 1;
	border-radius: 4px;
	padding: 12px;
	min-width: 120px;
}
.dropdown-content.show {
	display: block;
}
.dropdown-content {
	cursor: pointer;
	z-index: 999;
}
.dropdown-content .dropdown-option {
	white-space: nowrap;
}
.dropdown-content .dropdown-option:hover {
	background-color: #f3f3f3;
}
.dropdown-content .dropdown-option.active {
	color: #1890ff;
}
.space {
	display: inline-flex;
}
`;

/* eslint-disable no-undef */
/// <reference path="./global.d.ts" />

// 环境检测
if (
	[
		'GM_getTab',
		'GM_saveTab',
		'GM_setValue',
		'GM_getValue',
		'unsafeWindow',
		'GM_listValues',
		'GM_deleteValue',
		'GM_notification',
		'GM_xmlhttpRequest',
		'GM_getResourceText',
		'GM_addValueChangeListener',
		'GM_removeValueChangeListener'
	].some((api) => typeof Reflect.get(globalThis, api) === 'undefined')
) {
	const open = confirm(
		`OCS网课脚本不支持当前的脚本管理器（${GM_info.scriptHandler}）。` +
			'请前往 https://docs.ocsjs.com/docs/script 下载指定的脚本管理器，例如 “Scriptcat 脚本猫” 或者 “Tampermonkey 油猴”'
	);

	if (open) {
		window.location.href = 'https://docs.ocsjs.com/docs/script';
	}
	return;
}

const { start, definedProjects, CommonProject, RenderScript } = OCS;

const infos = GM_info;

(function () {
	'use strict';

	const projects = definedProjects();

	// 运行脚本
	start({
		projects: projects,
		renderConfig: {
			renderScript: RenderScript,
			styles: [STYLE],
			defaultPanelName: CommonProject.scripts.guide.namespace,
			title: `OCS-${infos.script.version}`
		},
		updatePage:
			GM_info.scriptHandler === 'Tampermonkey'
				? 'https://greasyfork.org/zh-CN/scripts/457151'
				: 'https://scriptcat.org/script-show-page/367'
	});
})();
