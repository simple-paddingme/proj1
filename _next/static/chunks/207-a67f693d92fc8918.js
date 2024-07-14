"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[207],{5437:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let r=n(7851),a=n(8848);t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},3980:function(e,t,n){var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(7851),i=n(8848),l=(r=n(9370))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},7e3:function(e,t,n){var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(7851),i=n(8848),l=(r=n(9370))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:u,dataLayer:c}=e;void 0===a&&(a=n);let d="dataLayer"!==n?"&l=".concat(n):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(n,"');")}}),(0,o.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(r?"&gtm_auth=".concat(r):"").concat(u?"&gtm_preview=".concat(u,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},1783:function(e,t,n){n.d(t,{default:function(){return a.a}});var r=n(3009),a=n.n(r)},9370:function(e,t,n){n.r(t),n.d(t,{default:function(){return a.a}});var r=n(434),a=n.n(r),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},8121:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&l.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(o(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},434:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m}});let r=n(7251),a=n(6431),o=n(7851),i=r._(n(7023)),l=a._(n(8848)),u=n(6705),c=n(8121),d=n(9896),s=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],g=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:d}=e,h=n||t;if(h&&f.has(h))return;if(s.has(t)){f.add(h),s.get(t).then(r,u);return}let y=()=>{a&&a(),f.add(h)},m=document.createElement("script"),_=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",y()):i?(m.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(m.src=t,s.set(t,_)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===l&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",l),d&&g(d),document.body.appendChild(m)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:s,stylesheets:p,...g}=e,{updateScripts:y,scripts:m,getIsSsr:_,appDir:v,nonce:w}=(0,l.useContext)(u.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(a&&e&&f.has(e)&&a(),b.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>h(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(m[c]=(m[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:s,...g}]),y(m)):_&&_()?f.add(t||n):_&&!_()&&h(e)),v){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:w}:{as:"script",nonce:w}),(0,o.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...g,id:t}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:w}:{as:"script",nonce:w})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let v=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);