"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[237],{3905:function(t,e,r){r.r(e),r.d(e,{MDXContext:function(){return s},MDXProvider:function(){return f},mdx:function(){return m},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){return function(e){var r=p(e.components);return n.createElement(t,i({},e,{components:r}))}},p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},f=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=p(r),f=o,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||i;return r?n.createElement(d,c(c({ref:e},s),{},{components:r})):n.createElement(d,c({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79849:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(67294);r(72389);function o(t){var e=t.docFile,r=function(t){t.contentWindow.document;t.height=t.contentWindow.document.body.scrollHeight+"px"},o=(0,n.useRef)(null);return n.createElement("iframe",{ref:o,src:e,style:{marginTop:"0",marginLeft:"0",marginRight:"0",minHeight:"900px"},frameBorder:"0",width:"100%",scrolling:"no",onLoad:function(t){var e=t.target,n=e.contentWindow.document;new MutationObserver((function(t,n){r(e)})).observe(n.body,{attributes:!0,childList:!0,subtree:!0}),r(e)}})}},71069:function(t,e,r){r.r(e),r.d(e,{assets:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return b}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=r(79849),c=r(44996),u=["components"],s={title:"Quickstart_cbps",sidebar_position:3,hide_table_of_contents:!0,hide_title:!0},l=void 0,p={unversionedId:"tutorials/quickstart_cbps",id:"tutorials/quickstart_cbps",title:"Quickstart_cbps",description:"Link to notebook: balancequickstartcbps.ipynb",source:"@site/docs/tutorials/quickstart_cbps.mdx",sourceDirName:"tutorials",slug:"/tutorials/quickstart_cbps",permalink:"/docs/tutorials/quickstart_cbps",draft:!1,editUrl:"https://github.com/facebookresearch/balance/tree/main/website/docs/tutorials/quickstart_cbps.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Quickstart_cbps",sidebar_position:3,hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialsSidebar",previous:{title:"Quickstart",permalink:"/docs/tutorials/quickstart"},next:{title:"balance_transformations_and_formulas",permalink:"/docs/tutorials/balance_transformations_and_formulas"}},f={},b=[],d={toc:b};function m(t){var e=t.components,r=(0,o.Z)(t,u);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Link to notebook: ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/balance/blob/main/tutorials/balance_quickstart_cbps.ipynb"},"balance_quickstart_cbps.ipynb")),(0,i.mdx)(a.Z,{docFile:(0,c.default)("html/tutorials/balance_quickstart_cbps.html"),mdxType:"HTMLLoader"}))}m.isMDXComponent=!0}}]);