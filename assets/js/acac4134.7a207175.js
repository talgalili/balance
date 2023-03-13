"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[403],{3905:function(a,e,t){t.r(e),t.d(e,{MDXContext:function(){return i},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return o}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(){return s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},s.apply(this,arguments)}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var i=n.createContext({}),o=function(a){return function(e){var t=d(e.components);return n.createElement(a,s({},e,{components:t}))}},d=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},c=function(a){var e=d(a.components);return n.createElement(i.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},x=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,r=a.parentName,i=l(a,["components","mdxType","originalType","parentName"]),o=d(t),c=m,x=o["".concat(r,".").concat(c)]||o[c]||N[c]||s;return t?n.createElement(x,p(p({ref:e},i),{},{components:t})):n.createElement(x,p({ref:e},i))}));function h(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=x;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},66736:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return N},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return d}});var n=t(83117),m=t(80102),s=(t(67294),t(3905)),r=["components"],p={id:"poststratify",title:"Post-Stratification",description:"Post-Stratification",sidebar_position:3,keywords:["Post-Stratification","poststratify"]},l=void 0,i={unversionedId:"docs/statistical_methods/poststratify",id:"docs/statistical_methods/poststratify",title:"Post-Stratification",description:"Post-Stratification",source:"@site/docs/docs/statistical_methods/poststratify.md",sourceDirName:"docs/statistical_methods",slug:"/docs/statistical_methods/poststratify",permalink:"/docs/docs/statistical_methods/poststratify",draft:!1,editUrl:"https://github.com/facebookresearch/balance/tree/main/website/docs/docs/statistical_methods/poststratify.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"poststratify",title:"Post-Stratification",description:"Post-Stratification",sidebar_position:3,keywords:["Post-Stratification","poststratify"]},sidebar:"docsSidebar",previous:{title:"Covariate Balancing Propensity Score",permalink:"/docs/docs/statistical_methods/cbps"},next:{title:"Contributing",permalink:"/docs/docs/contributing"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Methodology",id:"methodology",level:2},{value:"References",id:"references",level:2}],c={toc:d};function N(a){var e=a.components,t=(0,m.Z)(a,r);return(0,s.mdx)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"introduction"},"Introduction"),(0,s.mdx)("p",null,"Post-stratification is one of the most common weighing approaches in survey statistics. It origins from a stratified sample, where the population is divided into subpopulations (strata) and the sample is conducted independently on each of them. However, when one doesn't know in advance the subpopulations to sample from (for example, when the stratum of the units in the sample is unknown in advance), or when non-response is presented, stratification can be done after the sample has been selected."),(0,s.mdx)("p",null,"The goal of post-stratification is to have the sample match exactly the joint-distribution of the target population. However, this is also the main limitation of this method. It is limited by the number of variables we are able to use for adjustment due to the nature of fitting the target exactly, and thus require a minimal number of respondent in each strata. Hence, usually at most 2 to 4 variables are used (with limited number of buckets). In addition, continues variables cannot be used for adjustment (unless bucketed). A more general approach is the inverse propensity score weighting (",(0,s.mdx)("a",{parentName:"p",href:"../ipw"},"ipw"),")."),(0,s.mdx)("h2",{id:"methodology"},"Methodology"),(0,s.mdx)("p",null,"The idea behind post-stratification is simple. For each cell (strata) in the population, compute the percent of the total population in this cell. Then fit weights so that they adjust the sample so to have the same proportions for each strata as in the population."),(0,s.mdx)("p",null,"We will illustrate this with an example. Assume that we have sampled people from a certain population to a survey and asked for their age and gender so to use these for weighing. Assume also that the joint distribution of age and gender in this population is known from a census, and is the following:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null}),(0,s.mdx)("th",{parentName:"tr",align:null},"Young adults"),(0,s.mdx)("th",{parentName:"tr",align:null},"Adults"),(0,s.mdx)("th",{parentName:"tr",align:null},"Total"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Female"),(0,s.mdx)("td",{parentName:"tr",align:null},"120"),(0,s.mdx)("td",{parentName:"tr",align:null},"380"),(0,s.mdx)("td",{parentName:"tr",align:null},"500")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Male"),(0,s.mdx)("td",{parentName:"tr",align:null},"80"),(0,s.mdx)("td",{parentName:"tr",align:null},"420"),(0,s.mdx)("td",{parentName:"tr",align:null},"500")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Total"),(0,s.mdx)("td",{parentName:"tr",align:null},"200"),(0,s.mdx)("td",{parentName:"tr",align:null},"800"),(0,s.mdx)("td",{parentName:"tr",align:null},"1000")))),(0,s.mdx)("p",null,"In addition, assume that for the specific survey we ran young adults tend to reply more, so that the distribution of responses in the survey is the following:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null}),(0,s.mdx)("th",{parentName:"tr",align:null},"Young adults"),(0,s.mdx)("th",{parentName:"tr",align:null},"Adults"),(0,s.mdx)("th",{parentName:"tr",align:null},"Total"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Female"),(0,s.mdx)("td",{parentName:"tr",align:null},"30"),(0,s.mdx)("td",{parentName:"tr",align:null},"10"),(0,s.mdx)("td",{parentName:"tr",align:null},"40")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Male"),(0,s.mdx)("td",{parentName:"tr",align:null},"50"),(0,s.mdx)("td",{parentName:"tr",align:null},"10"),(0,s.mdx)("td",{parentName:"tr",align:null},"60")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Total"),(0,s.mdx)("td",{parentName:"tr",align:null},"80"),(0,s.mdx)("td",{parentName:"tr",align:null},"20"),(0,s.mdx)("td",{parentName:"tr",align:null},"100")))),(0,s.mdx)("p",null,"The post-stratification weights are then computed as follows:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Proportion of Female young adults in the population is ",(0,s.mdx)("span",{parentName:"li",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"120"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"1000"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"0.12")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"120/1000 = 0.12")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"120/1000"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"0.12")))))),(0,s.mdx)("li",{parentName:"ul"},"Proportion of Female young adults in the sample is ",(0,s.mdx)("span",{parentName:"li",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"30"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"100"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"0.3")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"30/100 = 0.3")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"30/100"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"0.3"))))))),(0,s.mdx)("p",null,"Inflation factor - this is the inverse probability factor indicating by how much we need to multiply the total sample size to get to the total population size. It is equal to population size / sample size. In our case it is: ",(0,s.mdx)("span",{parentName:"p",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"1000"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"100"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"10")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1000/100 = 10")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"1000/100"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"10"))))),"."),(0,s.mdx)("p",null,"Calculate weights for each Female young adult in the sample: (population %) / (sample %) ",(0,s.mdx)("em",{parentName:"p"}," (inflation factor). In our example this is: $0.12/0.3 ")," 10= 0.4 * 10= 4$."),(0,s.mdx)("p",null,"This means that the assigned weight of each Female young adult in the sample is 4."),(0,s.mdx)("p",null,"Similarly, we can compute the weight for people from each cell in the table:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null}),(0,s.mdx)("th",{parentName:"tr",align:null},"Young adults"),(0,s.mdx)("th",{parentName:"tr",align:null},"Adults"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Female"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("span",{parentName:"td",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"0.12"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"0.3"),(0,s.mdx)("mo",{parentName:"mrow"},"\u2217"),(0,s.mdx)("mn",{parentName:"mrow"},"10"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"4")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.12/0.3 * 10 = 4")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"0.12/0.3"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.mdx)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"10"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"4")))))),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("span",{parentName:"td",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"0.38"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"0.1"),(0,s.mdx)("mo",{parentName:"mrow"},"\u2217"),(0,s.mdx)("mn",{parentName:"mrow"},"10"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"38")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.38/0.1 * 10 = 38")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"0.38/0.1"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.mdx)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"10"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"38"))))))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Male"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("span",{parentName:"td",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"0.08"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"0.5"),(0,s.mdx)("mo",{parentName:"mrow"},"\u2217"),(0,s.mdx)("mn",{parentName:"mrow"},"10"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"1.6")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.08/0.5 * 10 = 1.6")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"0.08/0.5"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.mdx)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"10"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"1.6")))))),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("span",{parentName:"td",className:"math math-inline"},(0,s.mdx)("span",{parentName:"span",className:"katex"},(0,s.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,s.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.mdx)("semantics",{parentName:"math"},(0,s.mdx)("mrow",{parentName:"semantics"},(0,s.mdx)("mn",{parentName:"mrow"},"0.42"),(0,s.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.mdx)("mn",{parentName:"mrow"},"0.1"),(0,s.mdx)("mo",{parentName:"mrow"},"\u2217"),(0,s.mdx)("mn",{parentName:"mrow"},"10"),(0,s.mdx)("mo",{parentName:"mrow"},"="),(0,s.mdx)("mn",{parentName:"mrow"},"42")),(0,s.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0.42/0.1 *10 = 42")))),(0,s.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"0.42/0.1"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.mdx)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"10"),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,s.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.mdx)("span",{parentName:"span",className:"base"},(0,s.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.mdx)("span",{parentName:"span",className:"mord"},"42"))))))))),(0,s.mdx)("h2",{id:"references"},"References"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"More about post-stratification: ",(0,s.mdx)("a",{parentName:"li",href:"https://docs.wfp.org/api/documents/WFP-0000121326/download/"},"Introduction to post-stratification")),(0,s.mdx)("li",{parentName:"ul"},"Kolenikov, Stas. 2016. \u201cPost-Stratification or Non-Response Adjustment?\u201d Survey Practice 9 (3). ",(0,s.mdx)("a",{parentName:"li",href:"https://doi.org/10.29115/SP-2016-0014"},"https://doi.org/10.29115/SP-2016-0014"),".")))}N.isMDXComponent=!0}}]);