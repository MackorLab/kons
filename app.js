!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=6)}([function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,l,s;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function l(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function s(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],u=r[s]||0,c="".concat(s," ").concat(u);r[s]=u+1;var d=l(c),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:m(p,e),references:1}),t.push(c)}return t}function u(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function b(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,g=0;function m(n,e){var r,t,o;if(e.singleton){var i=g++;r=f||(f=u(e)),t=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=u(e),t=b.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=l(r[t]);a[o].references--}for(var i=s(n,e),u=0;u<r.length;u++){var c=l(r[u]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}r=i}}}},function(n,e,r){var t=r(1),o=r(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t)()(!1);o.push([n.i,"*, html, body, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n#app {\r\n    position: relative;\r\n}\r\n\r\n/*Sidebar*/\r\n.sidebar {\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 0 15px 15px 0;\r\n    width: 280px;\r\n    background-color: #FFFFFF;\r\n    overflow-y: auto;\r\n    padding: 20px;\r\n    z-index: 20;\r\n}\r\n\r\n.Block {\r\n    padding: 10px;\r\n    background-color: #F0F0F0;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    overflow: hidden;\r\n    height: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.sidebar h4 {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    color: #000000;\r\n    margin: 10px auto;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar p {\r\n    text-align: center;\r\n    color: #555;\r\n    padding: 5px;\r\n}\r\n\r\nform {\r\n    padding: 10px 0 20px;\r\n}\r\nlabel {\r\n    padding-top: 9px;\r\n    font-size: 0.8rem;\r\n    color: #555;\r\n}\r\n.radio-left, .radio-center, .radio-right {\r\n    flex-grow: 1;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n}\r\ninput, select {\r\n    width: 100%;\r\n    margin: 5px 0 0 0;\r\n    padding: 5px 8px;\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\ninput.range, select.range {\r\n    width: 30%;\r\n}\r\n\r\n.btn {\r\n    border-radius: 12px;\r\n    background-color: #5b92e5;\r\n   \r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 7px;\r\n    width: 250px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n     border-color: #bde4fc; \r\n}\r\n.btn:hover {\r\n    /*background-color: #88e2e4;*/\r\n    opacity: .8;\r\n}\r\n.btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.btn-delete-block {\r\n    background: #b94040;\r\n    color: white;\r\n}\r\n\r\n/* Content */\r\n.content {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 320px;\r\n    width: calc(100vw - 340px);\r\n    height: calc(100vh - 40px);\r\n    overflow-y: auto;\r\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.col-sm {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    flex-basis: 100%;\r\n}\r\n\r\n.block-content {\r\n    flex-grow: 1;\r\n}\r\n.block-content:focus {\r\n    border-width: 1px !important;\r\n    border-color: #000000 !important;\r\n}\r\n\r\n.content img {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n}\r\n\r\n.content a {\r\n    text-decoration: none;\r\n    color: #0bb5b5;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 30px;\r\n    background-color: #0d1f1a;\r\n    color: #999;\r\n}\r\n\r\nfooter a {\r\n    color: #fff;\r\n}\r\nfooter a:hover {\r\n    color: orange;\r\n}\r\n\r\n.show {\r\n    height: auto;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.buttonics {\r\n    border-radius: 12px;\r\n    background-color: #5b92e5;\r\n   \r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding: 7px;\r\n    width: 170px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n     border-color: #bde4fc;\r\n  }\r\n\r\n\r\n",""]),e.default=o},function(n,e,r){var t=r(1),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t)()(!1);o.push([n.i,"/* -------------------- css burger menu ------------------------ */\r\n.burger-menu__button {\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    z-index: 30;\r\n    width: 70px;\r\n    height: 60px;\r\n    border-radius: 5%;\r\n    background-color: rgba(16, 31, 41, 0.5);\r\n    transition: 0.4s;\r\n}\r\n\r\n.burger-menu__lines,\r\n.burger-menu__lines::after,\r\n.burger-menu__lines::before {\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 6px;\r\n    background-color: #fff;\r\n    transition: 0.3s;\r\n}\r\n\r\n.burger-menu__lines {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.burger-menu__lines::before {\r\n    content: '';\r\n    top: -12px;\r\n}\r\n\r\n.burger-menu__lines::after {\r\n    content: '';\r\n    top: 12px;\r\n}\r\n\r\n.burger-menu_active .burger-menu__button,\r\n.burger-menu_active .burger-menu__lines {\r\n    background-color: transparent;\r\n}\r\n\r\n.burger-menu_active .burger-menu__lines::before {\r\n    top: 0;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.burger-menu_active .burger-menu__lines::after {\r\n    top: 0;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.burger-menu_active .burger-menu__nav {\r\n    left: 0;\r\n}\r\n\r\n/*.burger-menu__overlay {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 10;\r\n}\r\n\r\n.burger-menu_active .burger-menu__overlay {\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}*/\r\n\r\n.hidden {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n/* ------------------Responsive css -------------------- */\r\n@media (max-width: 720px) {\r\n    .burger-menu__button {\r\n        display: inline-block;\r\n    }\r\n\r\n    .burger-menu {\r\n        top: 0;\r\n        left: -100%;\r\n        width: 80%;\r\n        height: 100vh;\r\n        background-color: rgba(16, 31, 41, 0.7);\r\n        overflow-y: auto;\r\n        transition: .5s;\r\n    }\r\n\r\n    .burger-menu_active {\r\n        left: 0;\r\n    }\r\n\r\n    .burger-menu_active .burger-menu__button {\r\n        bottom: 10px;\r\n        right: 23%;\r\n    }\r\n\r\n    .Block {\r\n        height: auto;\r\n    }\r\n}",""]),e.default=o},function(n,e,r){"use strict";r.r(e);r.p;class t{constructor(n,e,r){this.value=n,this.options=e,this.rowId=r}toHtml(){throw new Error("Method toHtml should be created!")}}class o extends t{constructor(n,e,r){super(n,e,r)}toHtml(){const{styles:n}=this.options;return s(this.value.map((e,r)=>u(e,function(n={}){return Object.keys(n).map(e=>`${e}: ${n[e]}`).join(";")}(n),r)).join(""),this.rowId)}}const i=function(){const n=localStorage.getItem("siteData");if(n)return JSON.parse(n);return[]}();console.log(i);const a=i.map((n,e)=>new o(n.value,n.options,e));function l(n){localStorage.setItem("siteData",JSON.stringify(n))}function s(n,e=0){return`<div class="row" data-row-id="${e}">${n}</div>`}function u(n,e="",r=0){return`<div class="col-sm"><div class="block-content" data-col-id="${r}" style="${e}">${n}</div></div>`}function c(){const n={};return document.querySelectorAll("input, select").forEach(e=>{n[e.name]=e.value+e.dataset.unit}),console.log(n.bors),delete n.columns,n}var d;r(2),r(4);const p=new class{constructor(n){this.$el=document.querySelector(n)}render(n){this.$el.innerHTML="",n.forEach(n=>{this.$el.insertAdjacentHTML("beforeend",n.toHtml())})}}("#site"),b=(new class{constructor(n,e){this.$addEl=document.querySelector(n),this.update=e,this.init()}init(){this.$addEl.innerHTML=this.template,this.$addEl.addEventListener("click",this.addBlock.bind(this))}get template(){return function(n="button"){return`\n<a href="#" class="burger-menu__button">\n    <span class="burger-menu__lines"></span>\n</a>\n\n<div class="Settings">\n    <div class="Block" id="Base-Settings">\n        <h4>Базовые настройки</h4>\n        <div class="row">\n            <label for="columns">Количество колонок</label>\n            <input type="number" id="columns" name="columns" class="range input" value="1" min="1" max="6" data-unit="">\n        </div>\n        <div class="row">\n            <label for="margin">Внешний отступ</label>\n            <input type="number" id="margin" name="margin" class="range input" min="0" max="100" step="5" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="padding">Внутренний отступ</label>\n            <input type="number" id="padding" name="padding" class="range input" min="0" max="100" step="5" value="0"\n                data-unit="px">\n        </div>\n    </div>\n    <div class="Block" id="Background-Font">\n        <h4>Фон и шрифт</h4>\n        <div class="row">\n            <label for="background">Цвет фона</label>\n            <input type="color" id="background" name="background" class="range input" value="#ffffff" data-unit="">\n        </div>\n        <div class="row">\n            <label for="color">Цвет текста</label>\n            <input type="color" id="color" name="color" class="range input" value="#333333" data-unit="">\n        </div>\n        <div class="row">\n            <label for="font-size">Размер шрифта</label>\n            <input type="range" id="font-size" name="font-size" class="range input" min="8" max="50" value="16"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="text-align">Позиционирование</label>\n            <select type="select" name="text-align" id="text-align" class="range input" data-unit="">\n                <option value="left" selected>Влево</option>\n                <option value="center">Центр</option>\n                <option value="right">Вправо</option>\n            </select>\n        </div>\n    </div>\n\n    \x3c!-- <div class="Block" id="Position">\n    <p onclick='document.getElementById("Position").style.height === "auto" ? document.getElementById("Position").style.height = "50px" : document.getElementById("Position").style.height = "auto"'>Позиционирование</p>\n    <input type="radio" id="radio-left" name="text-align" class="range input" value="left" data-unit="">\n    <input type="radio" id="radio-center" name="text-align" class="range input" value="center" data-unit="" checked>\n    <input type="radio" id="radio-right" name="text-align" class="range input" value="left" data-unit="">\n    <div class="row">\n        <label for="radio-left" class="radio-left">Влево</label>\n        <label for="radio-center" class="radio-center">Центр</label>\n        <label for="radio-right" class="radio-right">Вправо</label>\n    </div> \n    </div> --\x3e\n\n    <div class="Block" id="Row-Border">\n        <h4>Рамка колонки</h4>\n        <div class="row">\n            <label for="border-width">Ширина рамки</label>\n            <input type="range" id="border-width" name="border-width" class="range input" min="0" max="10" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="border-radius">Радиус скругления (px)</label>\n            <input type="range" id="border-radius" name="border-radius" class="range input" min="0" max="50" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="border-style">Тип рамки</label>\n            <select type="select" name="border-style" id="border-style" class="range input" data-unit="">\n                <option value="solid" selected>Линия</option>\n                <option value="dashed">Пунктир</option>\n                <option value="dotted">Точки</option>\n            </select>\n        </div>\n        <div class="row">\n            <label for="border-color">Цвет рамки</label>\n            <input type="color" id="border-color" name="border-color" class="range input" value="#333333" data-unit="">\n        </div>\n    </div>\n\n\n    <div class="Block" id="Buttons">\n    <h4>Настройки кнопки</h4>\n    <div class="row">\n        <label for="border-width">Ширина рамки</label>\n        <input type="range" id="borde" name="bord" class="range input" min="0" max="10" value="0"\n            data-unit="px">\n    </div>\n    <div class="row">\n        <label for="border-radius">Радиус скругления (px)</label>\n        <input type="range" id="bord" name="borde" class="range input" min="0" max="50" value="0"\n            data-unit="px">\n    </div>\n    \n\n\n    \n    <div class="row">\n        <label for="border-color">Цвет рамки</label>\n        <input type="color" id="bor" name="bor" class="range input" value="#333333" data-unit="">\n    </div>\n\n\n\n    <div class="row">\n    <p><input id="bors" name="bors"  value="Надпись на кнопке" data-unit=""" size="40">\n</div>\n\n\n\n\n</div>\n\n\n\n</div>\n\n<button type="${n}" class="btn btn-create-block">Создать новый блок</button>\n<button type="${n}" class="btn btn-add-img">Добавить картинку в блок</button>\n<button type="${n}" class="btn btn-add-link">Добавить кнопку в блок</button> \n\n<br>\n<button type="${n}" class="btn btn-delete-block">Удалить выделенный блок</button>\n<br><br>\n<button type="${n}" class="btn btn-input-vk">Подключить ВК</button>\n<button type="${n}" class="btn btn-save-site">Сохранить в АП</button>\n\n\n    `}()}addBlock(n){if("H4"===n.target.tagName){n.target.closest(".Block").classList.toggle("show")}if(!n.target.classList.contains("btn-create-block"))return;const e=parseInt(document.querySelector("#columns").value),r=c(),t=new Array(e).fill("Кликни сюда, чтобы изменить текст"),i=a.length,l=new o(t,{styles:r},i);this.update(l)}}("#panel",n=>{a.push(n),l(a),p.render(a)}),document.querySelector(".btn-delete-block")),f=document.querySelector(".btn-add-img"),g=document.querySelector(".btn-add-link"),m=document.querySelector(".btn-save-site"),v=document.querySelector(".btn-input-vk");let h,x;p.render(a),document.querySelector("#site").addEventListener("click",n=>{if(!n.target.classList.contains("block-content"))return;const e=n.target;h=parseInt(e.closest(".row").dataset.rowId),x=parseInt(e.dataset.colId),function(n,e){const{styles:r}=a[n].options,t={};for(let n in r)r[n].includes("px")?t[n]=parseInt(r[n]):t[n]=r[n];const o=document.querySelectorAll("input, select");Array.from(o).splice(1).map(n=>n.value=t[n.name])}(h),function(n){n.setAttribute("contenteditable","true"),n.focus();const e=parseInt(n.closest(".row").dataset.rowId),r=parseInt(n.dataset.colId);n.addEventListener("blur",()=>{const t=n.innerHTML;a[e].value[r]=t,l(a)})}(e)}),m.addEventListener("click",(function(){if(null==h||null==x)return;const n=prompt("Введите ссылку на команду сожранения в Автопилоте.");if(n){var e=document.getElementById("site").outerHTML;var r=(p=e,window.btoa(unescape(encodeURIComponent(p))));console.log(r);var t=function(n){return decodeURIComponent(escape(window.atob(n)))}(r);console.log(t);var o={api:1,sid:d,monet:r},i=String(Math.random()).slice(2),a="--"+i+"\r\n",l="--"+i+"--\r\n",s=["\r\n"];for(var u in o)s.push('Content-Disposition: form-data; name="'+u+'"\r\n\r\n'+o[u]+"\r\n");s=s.join(a)+l;var c=new XMLHttpRequest;c.open("POST",n,!0),c.setRequestHeader("Content-Type","multipart/form-data; boundary="+i),c.onreadystatechange=function(){4==this.readyState&&console.log(this.responseText)},c.send(s)}var p})),f.addEventListener("click",(function(){if(null==h||null==x)return;const n=prompt("Введите ссылку на картинку, чтобы добавить её в выделенный блок.");if(n){let e=`${a[h].value[x]} <img src="${n}">`;a[h].value[x]=e,l(a),p.render(a)}})),g.addEventListener("click",(function(){const n=c();if(console.log(n.bors),null==h||null==x)return;const e=prompt("Введите ссылку на команду в Автопелоте,от кнопки.");if(e){let r=`${a[h].value[x]} <button class="buttonics" onclick="myFunction()">${n.bors}</button>\n\n       \n         \n         <script>\n         function myFunction() {\n            $.get( "${e}",  {sid: 535939344}, function( data ) {\n            \n         \n            });\n     \n         }\n         <\/script>`;a[h].value[x]=r,l(a),p.render(a)}})),b.addEventListener("click",(function(){if(null==h||null==x)return;const n=a[h].value[x];if(!confirm(`Точно хотите удалить блок "${n}"?`))return;a[h].value.length<=1?a.splice(h,1):a[h].value.splice(x,1);l(a),p.render(a),h=x=void 0})),document.querySelector("#panel").addEventListener("input",(function(n){if(null==h||null==x)return;a[h].value[x],n.target.value;const e=c();a[h].options.styles=e,l(a),p.render(a)}));const y=document.querySelector("body"),w=document.querySelector(".burger-menu"),k=w.querySelector(".burger-menu__button");w.querySelector(".burger-menu__overlay");k.addEventListener("click",n=>{n.preventDefault(),w.classList.toggle("burger-menu_active"),y.classList.toggle("hidden")}),v.addEventListener("click",(function(){VK.init({apiId:8123910}),VK.Auth.login((function(n){if("connected"===n.status){console.log(n),toastr.info("ВКонтакте подключен","Оповещение "),toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var e=n.session.user;d=e.id}else("not_authorized"===n.status||"unknown"===n.status)&&(toastr.error("ВКонтакте ошибка подключения!","Оповещение "),toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"})})),console.log("Rabotaet")}))}]);
