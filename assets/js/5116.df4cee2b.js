(self.webpackChunkpathfinder=self.webpackChunkpathfinder||[]).push([[5116],{996:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});n(6540);var s=n(4164),r=n(1312),o=n(5260),a=n(4848);function c(){return(0,a.jsx)(r.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,a.jsx)(r.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,a.jsx)(o.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(4741);function m(e){let{className:t}=e;return(0,a.jsx)(u.A,{type:"caution",title:(0,a.jsx)(c,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,a.jsx)(i,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{}),(0,a.jsx)(m,{...e})]})}},1351:(e,t,n)=>{"use strict";n.d(t,{x7t:()=>r});var s=n(1414);function r(e){return(0,s.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M48 112h288M192 64v48m80 336 96-224 96 224m-162.5-64h133M281.3 112S257 206 199 277 80 384 80 384"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 336s-35-27-72-75-56-85-56-85"},child:[]}]})(e)}},1414:(e,t,n)=>{"use strict";n.d(t,{k5:()=>h});var s=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=s.createContext&&s.createContext(r),a=["attr","size","title"];function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return e&&e.map(((e,t)=>s.createElement(e.tag,d({key:t},e.attr),m(e.child))))}function h(e){return t=>s.createElement(f,i({attr:d({},e.attr)},t),m(e.child))}function f(e){var t=t=>{var n,{attr:r,size:o,title:l}=e,u=c(e,a),m=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),s.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:d(d({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return void 0!==o?s.createElement(o.Consumer,null,(e=>t(e))):t(r)}},2125:(e,t,n)=>{"use strict";n.d(t,{A:()=>ie});var s=n(6540),r=n(8453),o=n(5260),a=n(2303),c=n(4164),i=n(5293),l=n(6342);function d(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,i.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(7559),m=n(8426),h=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},v={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},x=Object.keys(g);function b(e,t){const n=e.map((e=>{const{start:n,end:s}=v[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function j(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:r,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);case"vb":case"vba":case"visual-basic":return b(["vb","rem"],t);case"vbnet":return b(["vbnet","rem"],t);case"batch":return b(["rem"],t);case"basic":return b(["rem","f90"],t);case"fsharp":return b(["js","ml"],t);case"ocaml":case"sml":return b(["ml"],t);case"fortran":return b(["f90"],t);case"cobol":return b(["cobol"],t);default:return b(x,t)}}(s,r),c=n.split("\n"),i=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<c.length;){const e=c[h].match(a);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${h},`:d[t]?i[d[t]].start=h:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${h-1},`),c.splice(h,1)}n=c.join("\n");const m={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const y={codeBlockContainer:"codeBlockContainer_Ckt0"};var N=n(4848);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,r]=e;const o=t[s];o&&"string"==typeof r&&(n[o]=r)})),n}(d());return(0,N.jsx)(t,{...n,style:s,className:(0,c.A)(n.className,y.codeBlockContainer,u.G.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function A(e){let{children:t,className:n}=e;return(0,N.jsx)(C,{as:"pre",tabIndex:0,className:(0,c.A)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,N.jsx)("code",{className:k.codeBlockLines,children:t})})}var w=n(9532);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,r]=(0,s.useState)(),o=(0,s.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=B);const r=(0,w._q)(t),o=(0,w.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(1765);const T={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function O(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:r,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=r({line:t,className:(0,c.A)(n,s&&T.codeLine)}),i=t.map(((e,t)=>(0,N.jsx)("span",{...o({token:e})},t)));return(0,N.jsxs)("span",{...a,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:T.codeLineNumber}),(0,N.jsx)("span",{className:T.codeLineContent,children:i})]}):i,(0,N.jsx)("br",{})]})}var H=n(1312);function M(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function _(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function z(e){let{code:t,className:n}=e;const[r,o]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),s&&s.focus()}(t),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,N.jsx)("button",{type:"button","aria-label":r?(0,H.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",n,S.copyButton,r&&S.copyButtonCopied),onClick:i,children:(0,N.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,N.jsx)(M,{className:S.copyButtonIcon}),(0,N.jsx)(_,{className:S.copyButtonSuccessIcon})]})})}function I(e){return(0,N.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,N.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const U={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){let{className:t,onClick:n,isEnabled:s}=e;const r=(0,H.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,N.jsx)("button",{type:"button",onClick:n,className:(0,c.A)("clean-btn",t,s&&U.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,N.jsx)(I,{className:U.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:r,title:o,showLineNumbers:a,language:i}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.p)(),h=function(e){return e?.toLowerCase()}(i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),p=d(),g=function(){const[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),o=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return L(o,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:a}}(),v=function(e){return e?.match(f)?.groups.title??""}(r)||o,{lineClassNames:x,code:b}=j(t,{metastring:r,language:h,magicComments:m}),y=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return(0,N.jsxs)(C,{as:"div",className:(0,c.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[v&&(0,N.jsx)("div",{className:k.codeBlockTitle,children:v}),(0,N.jsxs)("div",{className:k.codeBlockContent,children:[(0,N.jsx)(E.f4,{theme:p,code:b,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:o}=e;return(0,N.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,c.A)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,N.jsx)("code",{className:(0,c.A)(k.codeBlockLines,y&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,N.jsx)(O,{line:e,getLineProps:r,getTokenProps:o,classNames:x[t],showLineNumbers:y},t)))})})}}),(0,N.jsxs)("div",{className:k.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,N.jsx)(P,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,N.jsx)(z,{className:k.codeButton,code:b})]})]})]})}function V(e){let{children:t,...n}=e;const r=(0,a.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof o?R:A;return(0,N.jsx)(c,{...n,children:o},String(r))}function W(e){return(0,N.jsx)("code",{...e})}var D=n(8774);var $=n(3427),q=n(1422);const G={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function Z(e,t){return!!e&&(e===t||Z(e.parentElement,t))}function J(e){let{summary:t,children:n,...r}=e;(0,$.A)().collectAnchor(r.id);const o=(0,a.A)(),i=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,q.u)({initialState:!r.open}),[u,m]=(0,s.useState)(r.open),h=s.isValidElement(t)?t:(0,N.jsx)("summary",{children:t??"Details"});return(0,N.jsxs)("details",{...r,ref:i,open:u,"data-collapsed":l,className:(0,c.A)(G.details,o&&G.isBrowser,r.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&Z(t,i.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,N.jsx)(q.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,N.jsx)("div",{className:G.collapsibleContent,children:n})})]})}const Y={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...t}=e;return(0,N.jsx)(J,{...t,className:(0,c.A)(K,Y.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),r=(0,N.jsx)(N.Fragment,{children:t.filter((e=>e!==n))});return(0,N.jsx)(Q,{...e,summary:n,children:r})}var ee=n(1107);function te(e){return(0,N.jsx)(ee.A,{...e})}const ne={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,c.A)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const re={img:"img_ev3q"};var oe=n(4741),ae=n(418);const ce={Head:o.A,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,N.jsx)(W,{...e}):(0,N.jsx)(V,{...e})},a:function(e){return(0,N.jsx)(D.A,{...e})},pre:function(e){return(0,N.jsx)(N.Fragment,{children:e.children})},ul:function(e){return(0,N.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,$.A)().collectAnchor(e.id),(0,N.jsx)("li",{...e})},img:function(e){return(0,N.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,c.A)(t,re.img))});var t},h1:e=>(0,N.jsx)(te,{as:"h1",...e}),h2:e=>(0,N.jsx)(te,{as:"h2",...e}),h3:e=>(0,N.jsx)(te,{as:"h3",...e}),h4:e=>(0,N.jsx)(te,{as:"h4",...e}),h5:e=>(0,N.jsx)(te,{as:"h5",...e}),h6:e=>(0,N.jsx)(te,{as:"h6",...e}),admonition:oe.A,mermaid:ae.A};function ie(e){let{children:t}=e;return(0,N.jsx)(r.x,{components:ce,children:t})}},2153:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});n(6540);var s=n(4164),r=n(1312),o=n(7559),a=n(8774);const c={iconEdit:"iconEdit_Z9Sw"};var i=n(4848);function l(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(c.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,i.jsxs)(a.A,{to:t,className:o.G.common.editThisPage,children:[(0,i.jsx)(l,{}),(0,i.jsx)(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(4586);function m(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,u.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,u.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function h(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=m({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(r.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(r.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:o.G.common.lastUpdated,children:[(0,i.jsx)(r.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(h,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(f,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const g={lastUpdated:"lastUpdated_JAkA"};function v(e){let{className:t,editUrl:n,lastUpdatedAt:r,lastUpdatedBy:o}=e;return(0,i.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(d,{editUrl:n})}),(0,i.jsx)("div",{className:(0,s.A)("col",g.lastUpdated),children:(r||o)&&(0,i.jsx)(p,{lastUpdatedAt:r,lastUpdatedBy:o})})]})}},3028:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});n(6540);var s=n(4164),r=n(1312),o=n(7559);const a={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};var c=n(4848);function i(e){let{type:t,className:n,children:r}=e;return(0,c.jsx)("div",{className:(0,s.A)(o.G.common.admonition,o.G.common.admonitionType(t),a.admonition,n),children:r})}function l(e){let{icon:t,title:n}=e;return(0,c.jsxs)("div",{className:a.admonitionHeading,children:[(0,c.jsx)("span",{className:a.admonitionIcon,children:t}),n]})}function d(e){let{children:t}=e;return t?(0,c.jsx)("div",{className:a.admonitionContent,children:t}):null}function u(e){const{type:t,icon:n,title:s,children:r,className:o}=e;return(0,c.jsxs)(i,{type:t,className:o,children:[s||n?(0,c.jsx)(l,{title:s,icon:n}):null,(0,c.jsx)(d,{children:r})]})}function m(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const h={icon:(0,c.jsx)(m,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,c.jsx)(u,{...h,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function p(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,c.jsx)(p,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,c.jsx)(u,{...g,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function x(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,c.jsx)(x,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function j(e){return(0,c.jsx)(u,{...b,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function y(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,c.jsx)(y,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const k={icon:(0,c.jsx)(C,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const A={icon:(0,c.jsx)(y,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const w={...{note:f,tip:v,info:j,warning:function(e){return(0,c.jsx)(u,{...N,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(u,{...k,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(f,{title:"secondary",...e}),important:e=>(0,c.jsx)(j,{title:"important",...e}),success:e=>(0,c.jsx)(v,{title:"success",...e}),caution:function(e){return(0,c.jsx)(u,{...A,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}}},4741:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var s=n(6540),r=n(4848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,r.jsx)(r.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var a=n(8746);function c(e){const t=o(e),n=(s=t.type,a.A[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),a.A.info));var s;return(0,r.jsx)(n,{...t})}},5066:(e,t,n)=>{"use strict";n.d(t,{YV_:()=>r});var s=n(1414);function r(e){return(0,s.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 20.777a8.942 8.942 0 0 1 -2.48 -.969"},child:[]},{tag:"path",attr:{d:"M14 3.223a9.003 9.003 0 0 1 0 17.554"},child:[]},{tag:"path",attr:{d:"M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592"},child:[]},{tag:"path",attr:{d:"M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305"},child:[]},{tag:"path",attr:{d:"M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356"},child:[]},{tag:"path",attr:{d:"M9 12l2 2l4 -4"},child:[]}]})(e)}},5195:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var s=n(6540),r=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):s.push(r)})),s}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>c(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function l(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=l();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:a}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let r=t;r<=n;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:a}),l=i(c,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:r}=e;return t.length?(0,m.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:u,...h}=e;const p=(0,r.p)(),g=l??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>a({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:g,maxHeadingLevel:v}}),[c,i,g,v])),(0,m.jsx)(f,{toc:x,className:n,linkClassName:c,...h})}},7613:(e,t,n)=>{"use strict";n.d(t,{Uo9:()=>r});var s=n(1414);function r(e){return(0,s.k5)({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M235.79,48c-4.27-5.48-12.4-12-26.88-12-17.86,0-40.5,11.7-60.57,31.3-3,2.89-5.74,5.85-8.34,8.84V56a12,12,0,0,0-24,0V76.14c-2.6-3-5.38-6-8.34-8.84C87.59,47.7,65,36,47.09,36c-14.48,0-22.61,6.54-26.88,12C7,65,12,93.91,19.28,122.66c5.75,22.64,17.8,33,28.88,37.69A48.12,48.12,0,0,0,92,228a47.87,47.87,0,0,0,36-16.28A48,48,0,0,0,212,180a48.51,48.51,0,0,0-4.14-19.65c11.08-4.67,23.13-15,28.88-37.69C244,93.91,249,65,235.79,48ZM92,204a24,24,0,0,1-24-24,24.36,24.36,0,0,1,21.31-24.07,12,12,0,0,0-2.64-23.86A47.63,47.63,0,0,0,65.17,140c-8.19-.29-18-4.92-22.63-23.24-7.41-29.18-8.55-47.35-3.39-54C39.74,62,41.3,60,47.09,60,58.3,60,75.91,69.83,90.9,84.47c15.25,14.9,25.1,31.86,25.1,43.2V180A24,24,0,0,1,92,204Zm121.45-87.25C208.81,135.07,199,139.7,190.82,140a47.54,47.54,0,0,0-21.51-7.92,12,12,0,1,0-2.64,23.86A24.36,24.36,0,0,1,188,180a24,24,0,1,1-48,0V127.67c0-11.34,9.85-28.3,25.1-43.2C180.09,69.83,197.7,60,208.91,60c5.79,0,7.35,2,7.94,2.76C222,69.4,220.87,87.57,213.46,116.75Z"},child:[]}]})(e)}},7763:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});n(6540);var s=n(4164),r=n(5195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=n(4848);const c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function l(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,s.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(r.A,{...n,linkClassName:c,linkActiveClassName:i})})}},8027:(e,t,n)=>{"use strict";n.d(t,{Mbp:()=>r});var s=n(1414);function r(e){return(0,s.k5)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"},child:[]}]})(e)}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,r,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);