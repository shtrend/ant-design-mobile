webpackJsonp([94],{3:function(n,a,s){"use strict";s(7),s(6)},6:function(n,a){},7:function(n,a){},217:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=s(1),i=e(r),k=s(2),f=t(k),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.text,e=s.prefixCls,p=s.overflowCount,c=s.className,l=s.style,u=s.children,r=this.props.dot,k=this.props.size,d=this.props.corner;t=t>p?p+"+":t,r&&(t="");var g=!(t&&"0"!==t||r),m=(0,f["default"])((n={},o(n,e+"-dot",r),o(n,e+"-dot-large",r&&"large"===k),o(n,e+"-text",!r&&!d),o(n,e+"-corner",d),o(n,e+"-corner-large",d&&"large"===k),n)),y=(0,f["default"])((a={},o(a,c,!!c),o(a,e,!0),o(a,e+"-not-a-wrapper",!u),o(a,e+"-corner-wrapper",d),o(a,e+"-corner-wrapper-large",d&&"large"===k),a));return i.createElement("span",{className:y,title:t},u,!g&&i.createElement("sup",{className:m,style:l},t))},a}(i.Component);a["default"]=d,d.propTypes={prefixCls:r.PropTypes.string,text:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.number]),dot:r.PropTypes.bool,corner:r.PropTypes.bool,overflowCount:r.PropTypes.number,size:r.PropTypes.string},d.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=a["default"]},218:function(n,a,s){"use strict";s(3),s(32),s(236)},236:function(n,a){},724:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(218),s(217)),p=t(e),o=s(1),c=t(o),l=s(4);t(l);n.exports={content:[["p","\u6570\u5b57\u5927\u4e8e99\uff0c\u4f1a\u663e\u793a ",["code","99+"]]],meta:{order:3,title:"\u5927\u6570\u5b57",filename:"components/badge/demo/99plus.md",id:"components-badge-demo-99plus"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'40px 16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >99</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >108</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{className:"badge-container",style:{padding:"40px 16px"}},c["default"].createElement(p["default"],{text:99},c["default"].createElement("span",{className:"head-example"})),c["default"].createElement("p",{style:{marginBottom:20}}),c["default"].createElement(p["default"],{text:108},c["default"].createElement("span",{className:"head-example"})))}}}});