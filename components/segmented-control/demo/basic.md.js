webpackJsonp([79],{3:function(n,a,s){"use strict";s(7),s(6)},6:function(n,a){},7:function(n,a){},21:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),d=t(k),f=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,p=a.style,c=a.onClick,l=(0,d["default"])((n={},o(n,""+s,!0),o(n,s+"-"+t,!0),o(n,e,!!e),n));return r.createElement("div",{className:l,style:p,onClick:c})},a}(r.Component);a["default"]=f,f.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,s){"use strict";s(3),s(23)},23:function(n,a){},818:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(22),s(21)),p=t(e),o=(s(891),s(890)),c=t(o),l=s(1),u=t(l),i=s(4);t(i);n.exports={content:[],meta:{order:0,title:"\u5206\u6bb5\u63a7\u5236",filename:"components/segmented-control/demo/basic.md",id:"components-segmented-control-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> SegmentedControl<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> SegmentedControlExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`selectedIndex:</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>e<span class="token punctuation" >.</span>nativeEvent<span class="token punctuation" >.</span>selectedSegmentIndex<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onValueChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u7981\u7528<span class="token operator" >/</span>enabled<span class="token operator" >=</span><span class="token boolean" >false</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >enabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8bbe\u7f6e tintColor<span class="token operator" >/</span>style <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e09\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >tintColor</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'#ff0000\'</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token string" >\'0.8rem\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token string" >\'5rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d selectedIndex <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >selectedIndex</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e09\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u4e8b\u4ef6 onChange<span class="token operator" >/</span>onValueChange <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControl</span>\n          <span class="token attr-name" >values</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'\u5207\u6362\u4e00\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e8c\'</span><span class="token punctuation" >,</span> <span class="token string" >\'\u5207\u6362\u4e09\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onValueChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onValueChange<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SegmentedControlExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"SegmentedControlExample",onChange:function(n){console.log("selectedIndex:"+n.nativeEvent.selectedSegmentIndex)},onValueChange:function(n){console.log(n)},render:function(){return u["default"].createElement("div",null,u["default"].createElement("div",{style:{padding:16}},"\u7981\u7528/enabled=false"),u["default"].createElement(c["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c"],enabled:!1}),u["default"].createElement(p["default"],{size:"lg"}),u["default"].createElement("div",{style:{padding:16}},"\u8bbe\u7f6e tintColor/style "),u["default"].createElement(c["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],tintColor:"#ff0000",style:{height:"0.8rem",width:"5rem"}}),u["default"].createElement(p["default"],{size:"lg"}),u["default"].createElement("div",{style:{padding:16}},"\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d selectedIndex "),u["default"].createElement(c["default"],{selectedIndex:1,values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"]}),u["default"].createElement(p["default"],{size:"lg"}),u["default"].createElement("div",{style:{padding:16}},"\u4e8b\u4ef6 onChange/onValueChange "),u["default"].createElement(c["default"],{values:["\u5207\u6362\u4e00","\u5207\u6362\u4e8c","\u5207\u6362\u4e09"],onChange:this.onChange,onValueChange:this.onValueChange}))}});return u["default"].createElement(n,null)}}},890:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),d=t(k),f=s(12),g=t(f),m=function(n){function a(s){c(this,a);var t=l(this,n.call(this,s));return t.state={selectedIndex:s.selectedIndex},t}return u(a,n),a.prototype.componentWillReceiveProps=function(n){n.selectedIndex!==this.props.selectedIndex&&this.setState({selectedIndex:n.selectedIndex})},a.prototype.onClick=function(n,a,s){var t=this.props,e=t.enabled,p=t.onChange,o=t.onValueChange;e&&(n.nativeEvent.selectedSegmentIndex=a,n.nativeEvent.value=s,p(n),o(s),this.setState({selectedIndex:a}))},a.prototype.render=function(){var n,a=this,s=this.props,t=s.prefixCls,e=s.style,p=s.enabled,c=s.values,l=s.className,u=s.tintColor,i=(0,d["default"])((n={},o(n,l,!!l),o(n,""+t,!0),o(n,l,l),n)),k=this.state.selectedIndex,f=c.map(function(n,s){var e,p=(0,d["default"])((e={},o(e,t+"-item",!0),o(e,t+"-item-selected",s===k),e));return r.createElement("div",{className:p,key:s,onClick:function(t){return a.onClick(t,s,n)},style:{color:s===k?"#fff":u,backgroundColor:s===k?u:"#fff",borderColor:u}},n)}),m=p?1:.5,v=(0,g["default"])({},e,{opacity:m,borderColor:u});return r.createElement("div",{className:i,style:v},f)},a}(r.Component);a["default"]=m,m.defaultProps={prefixCls:"am-segment",selectedIndex:0,enabled:!0,values:[],onChange:function(){},onValueChange:function(){},tintColor:"#2DB7F5",style:{}},n.exports=a["default"]},891:function(n,a,s){"use strict";s(3),s(1313)},1313:function(n,a){}});