webpackJsonp([63],{3:function(n,t,e){"use strict";e(7),e(6)},6:function(n,t){},7:function(n,t){},13:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var c=e(1),i=s(c),f=e(18),d=a(f),m=e(16),k=a(m),h=e(17),b=a(h),y=e(19),v=a(y),g=e(2),w=a(g),O=function(n){function t(){return u(this,t),r(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,u=t.title,r=t.footer,l=(0,w["default"])((n={},p(n,e,!0),p(n,s,s),n));return i.createElement("div",{className:l,style:o},u?i.createElement(d["default"],null,u):null,a,r?i.createElement(b["default"],null,r):null)},t}(i.Component);O.defaultProps={prefixCls:"am-list"},O.Header=d["default"],O.Body=k["default"],O.Footer=b["default"],O.Item=v["default"],t["default"]=O,n.exports=t["default"]},15:function(n,t,e){"use strict";e(3),e(20)},16:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=e(1),i=s(c),f=e(2),d=a(f),m=function(n){function t(){return u(this,t),r(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,u=(0,d["default"])((n={},p(n,e+"-body",!0),p(n,s,s),n));return i.createElement("div",{className:u,style:o},a)},t}(i.Component);t["default"]=m,m.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},17:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=e(1),i=s(c),f=e(2),d=a(f),m=function(n){function t(){return u(this,t),r(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,u=t.onClick,r=(0,d["default"])((n={},p(n,e+"-footer",!0),p(n,s,s),n));return i.createElement("div",{className:r,style:o,onClick:u},a)},t}(i.Component);t["default"]=m,m.propTypes={prefixCls:c.PropTypes.string},m.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},18:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=e(1),i=s(c),f=e(2),d=a(f),m=function(n){function t(){return u(this,t),r(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,u=t.onClick,r=(0,d["default"])((n={},p(n,e+"-header",!0),p(n,s,s),n));return i.createElement("div",{className:r,style:o,onClick:u},a)},t}(i.Component);t["default"]=m,m.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},19:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=t.Brief=void 0;var c=e(1),i=s(c),f=e(2),d=a(f),m=t.Brief=function(n){function t(){return u(this,t),r(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){return i.createElement("div",{className:"am-list-brief"},this.props.children)},t}(i.Component),k=function(n){function t(e){u(this,t);var a=r(this,n.call(this,e));return a.onClick=function(n){a.props.onClick&&a.props.onClick(n)},a.onTouchStart=function(){a.props.onClick&&a.setState({hover:!0})},a.onTouchEnd=function(){a.props.onClick&&a.setState({hover:!1})},a.state={hover:!1},a}return l(t,n),t.prototype.render=function(){var n,t,e,a=this.props,s=a.prefixCls,o=a.thumb,u=a.arrow,r=a.error,l=a.children,c=a.extra,f=a.className,m=a.align,k=a.multipleLine,h=a.style,b=this.state.hover,y=void 0,v=void 0,g=(0,d["default"])((n={},p(n,s+"-item",!0),p(n,s+"-item-error",r),p(n,s+"-item-top","top"===m),p(n,s+"-item-middle","middle"===m),p(n,s+"-item-bottom","bottom"===m),p(n,s+"-item-hover",b),p(n,f,f),n)),w=(0,d["default"])((t={},p(t,s+"-line",!0),p(t,s+"-line-multiple",k),t)),O=(0,d["default"])((e={},p(e,s+"-arrow",!0),p(e,s+"-arrow-horizontal","horizontal"===u),p(e,s+"-arrow-vertical","down"===u||"up"===u),p(e,s+"-arrow-vertical-up","up"===u),e));return o&&(y="string"==typeof o?i.createElement("div",{className:s+"-thumb"},i.createElement("img",{src:o})):i.createElement("div",{className:s+"-thumb"},o)),v=""!==u?i.createElement("div",{className:O}):null,i.createElement("div",{className:g,onClick:this.onClick,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,style:h},y,i.createElement("div",{className:w},""!==l?i.createElement("div",{className:s+"-content"},l):null,""!==c?i.createElement("div",{className:s+"-extra"},c):null,v))},t}(i.Component);t["default"]=k,k.Brief=m,k.defaultProps={prefixCls:"am-list",thumb:"",arrow:"",children:"",extra:"",error:!1,multipleLine:!1,align:"middle"}},20:function(n,t){},413:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},i=e(1),f=s(i),d=e(2),m=a(d),k=e(12),h=a(k),b=e(500),y=a(b),v=function(n){function t(){return u(this,t),r(this,n.apply(this,arguments))}return l(t,n),t.prototype.componentDidMount=function(){this.refs.inputNumber.refs.input.setAttribute("disabled",!0)},t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.className,s=t.showNumber,o=(0,m["default"])((n={},p(n,a,!!a),p(n,"showNumber",!!s),n)),u=(0,h["default"])({},this.props);return["className","prefixCls","showNumber"].forEach(function(n){u.hasOwnProperty(n)&&delete u[n]}),f.createElement(y["default"],c({ref:"inputNumber",prefixCls:e,className:o},u))},t}(f.Component);t["default"]=v,v.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!0,showNumber:!1},n.exports=t["default"]},414:function(n,t,e){"use strict";e(3),e(482)},482:function(n,t){},500:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(){}function o(n){n.preventDefault()}Object.defineProperty(t,"__esModule",{value:!0});var p=e(31),u=a(p),r=e(11),l=a(r),c=e(1),i=a(c),f=e(2),d=a(f),m=e(501),k=a(m),h=i["default"].createClass({displayName:"InputNumber",propTypes:{onChange:c.PropTypes.func,onKeyDown:c.PropTypes.func,onFocus:c.PropTypes.func,onBlur:c.PropTypes.func,max:c.PropTypes.number,min:c.PropTypes.number,step:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string])},mixins:[k["default"]],getDefaultProps:function(){return{prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(){this.state.focused&&document.activeElement!==this.refs.input&&this.refs.input.focus()},onKeyDown:function(n){var t;38===n.keyCode?this.up(n):40===n.keyCode&&this.down(n);for(var e=arguments.length,a=Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];(t=this.props).onKeyDown.apply(t,[n].concat(a))},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},render:function(){var n,t=(0,l["default"])({},this.props),e=t.prefixCls,a=(0,d["default"])((n={},(0,u["default"])(n,e,!0),(0,u["default"])(n,t.className,!!t.className),(0,u["default"])(n,e+"-disabled",t.disabled),(0,u["default"])(n,e+"-focused",this.state.focused),n)),p="",r="",c=this.state.value;if(isNaN(c))p=e+"-handler-up-disabled",r=e+"-handler-down-disabled";else{var f=Number(c);f>=t.max&&(p=e+"-handler-up-disabled"),f<=t.min&&(r=e+"-handler-down-disabled")}var m=void 0;return m=this.state.focused?this.state.inputValue:this.state.value,void 0===m&&(m=""),delete t.defaultValue,delete t.prefixCls,i["default"].createElement("div",{className:a,style:t.style},i["default"].createElement("div",{className:e+"-handler-wrap"},i["default"].createElement("a",{unselectable:"unselectable",ref:"up",onClick:p?s:this.up,className:e+"-handler "+e+"-handler-up "+p},i["default"].createElement("span",{unselectable:"unselectable",className:e+"-handler-up-inner",onClick:o})),i["default"].createElement("a",{unselectable:"unselectable",ref:"down",onClick:r?s:this.down,className:e+"-handler "+e+"-handler-down "+r},i["default"].createElement("span",{unselectable:"unselectable",className:e+"-handler-down-inner",onClick:o}))),i["default"].createElement("div",{className:e+"-input-wrap"},i["default"].createElement("input",(0,l["default"])({},t,{style:null,className:e+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,autoFocus:t.autoFocus,readOnly:t.readOnly,disabled:t.disabled,max:t.max,min:t.min,name:t.name,onChange:this.onChange,ref:"input",value:m}))))}});t["default"]=h,n.exports=t["default"]},501:function(n,t){"use strict";function e(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={getDefaultProps:function(){return{max:1/0,min:-(1/0),step:1,style:{},defaultValue:null,onChange:e,onKeyDown:e,onFocus:e,onBlur:e}},getInitialState:function(){var n=void 0,t=this.props;return n="value"in t?t.value:t.defaultValue,n=this.toPrecisionAsStep(n),{inputValue:n,value:n,focused:t.autoFocus}},componentWillReceiveProps:function(n){if("value"in n){var t=this.toPrecisionAsStep(n.value);this.setState({inputValue:t,value:t})}},onChange:function(n){this.setInputValue(this.getValueFromEvent(n).trim())},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){var t;this.setState({focused:!1});var e=this.getCurrentValidValue(this.getValueFromEvent(n).trim());this.setValue(e);for(var a=arguments.length,s=Array(a>1?a-1:0),o=1;o<a;o++)s[o-1]=arguments[o];(t=this.props).onBlur.apply(t,[n].concat(s))},getCurrentValidValue:function(n){var t=n,e=this.props;return""===t?t="":isNaN(t)?t=this.state.value:(t=Number(t),t<e.min&&(t=e.min),t>e.max&&(t=e.max)),this.toPrecisionAsStep(t)},setValue:function(n){"value"in this.props||this.setState({value:n,inputValue:n});var t=isNaN(n)||""===n?void 0:n;t!==this.state.value?this.props.onChange(t):this.setState({inputValue:this.state.value})},setInputValue:function(n){this.setState({inputValue:n})},getPrecision:function(){var n=this.props,t=n.step.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+1),10);var e=0;return t.indexOf(".")>=0&&(e=t.length-t.indexOf(".")-1),e},getPrecisionFactor:function(){var n=this.getPrecision();return Math.pow(10,n)},toPrecisionAsStep:function(n){if(isNaN(n)||""===n)return n;var t=this.getPrecision();return Number(Number(n).toFixed(Math.abs(t)))},upStep:function(n){var t=this.props,e=t.step,a=t.min,s=this.getPrecisionFactor(),o=void 0;return o="number"==typeof n?(s*n+s*e)/s:a===-(1/0)?e:a,this.toPrecisionAsStep(o)},downStep:function(n){var t=this.props,e=t.step,a=t.min,s=this.getPrecisionFactor(),o=void 0;return o="number"==typeof n?(s*n-s*e)/s:a===-(1/0)?-e:a,this.toPrecisionAsStep(o)},step:function(n,t){t&&t.preventDefault();var e=this.props;if(!e.disabled){var a=this.getCurrentValidValue(this.state.value);if(this.setState({value:a}),!isNaN(a)){var s=this[n+"Step"](a);s>e.max||s<e.min||(this.setValue(s),this.setState({focused:!0}))}}},down:function(n){this.step("down",n)},up:function(n){this.step("up",n)}},n.exports=t["default"]},825:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(414),e(413)),o=a(s),p=(e(15),e(13)),u=a(p),r=e(1),l=a(r),c=e(4);a(c);n.exports={content:[["p","\u6570\u5b57\u8f93\u5165\u6846\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/stepper/demo/form.md",id:"components-stepper-demo-form"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Stepper <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'changed\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Header</span><span class="token punctuation" >></span></span>\u8868\u5355<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Header</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n        \u9ed8\u8ba4\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper showNumber max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n        \u663e\u793a\u6570\u503c\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper disabled max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n        \u7981\u7528\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper disabled max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> showNumber defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n        \u7981\u7528\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Body</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Header</span><span class="token punctuation" >></span></span>\u6b65\u8fdb\u5668<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Header</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Stepper showNumber max<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span> min<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span> defaultValue<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span> onChange<span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          \u9884\u5b9a\u4eba\u6570\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Body</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("changed",n)}return l["default"].createElement("div",null,l["default"].createElement(u["default"],null,l["default"].createElement(u["default"].Header,null,"\u8868\u5355"),l["default"].createElement(u["default"].Body,null,l["default"].createElement(u["default"].Item,{extra:l["default"].createElement(o["default"],{max:10,min:1,defaultValue:3,onChange:n})},"\u9ed8\u8ba4"),l["default"].createElement(u["default"].Item,{extra:l["default"].createElement(o["default"],{showNumber:!0,max:10,min:1,defaultValue:1,onChange:n})},"\u663e\u793a\u6570\u503c"),l["default"].createElement(u["default"].Item,{extra:l["default"].createElement(o["default"],{disabled:!0,max:10,min:1,defaultValue:3,onChange:n})},"\u7981\u7528"),l["default"].createElement(u["default"].Item,{extra:l["default"].createElement(o["default"],{disabled:!0,max:10,min:1,showNumber:!0,defaultValue:3,onChange:n})},"\u7981\u7528"))),l["default"].createElement(u["default"],null,l["default"].createElement(u["default"].Header,null,"\u6b65\u8fdb\u5668"),l["default"].createElement(u["default"].Body,null,l["default"].createElement(u["default"].Item,{extra:l["default"].createElement(o["default"],{showNumber:!0,max:10,min:1,defaultValue:3,onChange:n})},"\u9884\u5b9a\u4eba\u6570"))))}}}});