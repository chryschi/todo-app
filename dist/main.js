(()=>{"use strict";var n,e,t,o,r,a,i,c,s,d,l,p,u,m,f={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  font-family: "Noto Sans", sans-serif;\n  font-size: 20px;\n}\n\nbody,\nhtml {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n  background-color: #d8d8d8;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n/* sidebar */\n.sidebar {\n  background-color: #faf0e7;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 15px;\n  max-width: 500px;\n}\n\n.sidebar button {\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n}\n\n.sidebar .nav_add-todo_button {\n  border: 2px solid #7c18ac;\n  border-radius: 6px;\n  background-color: #d8d8d8;\n  color: #7c18ac;\n  padding: 4px 0px;\n}\n\nnav > ul > li {\n  margin-top: 8px;\n}\n\n.projects_list_element ul li {\n  margin-top: 4px;\n}\n\n.nav_project-list {\n  margin-left: 15px;\n}\n\n/* main */\nmain {\n  padding: 20px 15px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nmain button {\n  border: none;\n  background: none;\n}\n\nh1 {\n  margin-bottom: 30px;\n}\n\n.todo-container {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  width: 700px;\n}\n\n.list_item_icon-container {\n  display: flex;\n  gap: 10px;\n}\n\n.list_item_options_icon-container {\n  margin-left: auto;\n}\n\n.list_of_tasks {\n  margin-left: 15px;\n}\n\n.list_of_tasks > li {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.time_left {\n  display: flex;\n  align-items: center;\n  background-color: #d3c9c9;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return f[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),t=v(795),o=v.n(t),r=v(569),a=v.n(r),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),p=v.n(l),u=v(426),(m={}).styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,(()=>{const n=["Gardening","Music Production"],e=["clean up","go to work","make homework","water the plants"],t=(document.querySelector(".nav_add-todo_button"),document.querySelector(".nav_project-list"));for(let e=0;e<n.length;e++){const o=document.createElement("li");t.appendChild(o);const r=document.createElement("button");r.textContent=n[e],o.appendChild(r)}const o=document.querySelector("main"),r=document.createElement("h1");r.textContent="Inbox",o.appendChild(r);const a=document.createElement("ul");a.classList.add("main_project-list"),o.appendChild(a);for(let n=0;n<e.length;n++){const t=document.createElement("li");t.classList.add("project_todo"),a.appendChild(t);const o=document.createElement("div");o.classList.add("todo-container"),t.appendChild(o);const r=document.createElement("button");o.appendChild(r);const i=document.createElement("span");i.classList.add("material-symbols-outlined"),i.textContent="radio_button_unchecked",r.appendChild(i);const c=document.createElement("p");c.textContent=e[n],o.appendChild(c);const s=document.createElement("div");s.classList.add("list_item_icon-container"),o.appendChild(s);const d=document.createElement("div");d.classList.add("time_left"),s.appendChild(d);const l=document.createElement("span");l.classList.add("material-symbols-outlined"),l.textContent="schedule",d.appendChild(l),d.textContent="2 months left";const p=document.createElement("button");s.appendChild(p);const u=document.createElement("span");u.classList.add("material-symbols-outlined"),u.textContent="keyboard_arrow_down",p.appendChild(u);const m=document.createElement("button");m.classList.add("list_item_options_icon-container"),o.appendChild(m);const f=document.createElement("span");f.classList.add("material-symbols-outlined"),f.textContent="more_horiz",m.appendChild(f)}})()})();