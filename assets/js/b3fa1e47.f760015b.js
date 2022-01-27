"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[772],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2153:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_label:"Data Lake",sidebar_position:2},c="Reservoir Data Lake",l={unversionedId:"core-components/data-lake",id:"core-components/data-lake",title:"Reservoir Data Lake",description:"The Reservoir Data Lake is an open and permissionless data repository built on top of Arweave. It is designed to bring off-chain liquidity on-chain, so that it's publicly available for anyone to leverage. This is critical for building composable protocols and applications that aren't dependent on a single centralized gatekeeper.",source:"@site/docs/core-components/data-lake.md",sourceDirName:"core-components",slug:"/core-components/data-lake",permalink:"/docs/core-components/data-lake",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/core-components/data-lake.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Data Lake",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/core-components/overview"},next:{title:"Order Book",permalink:"/docs/core-components/order-book"}},p=[],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reservoir-data-lake"},"Reservoir Data Lake"),(0,a.kt)("p",null,"The Reservoir Data Lake is an open and permissionless data repository built on top of Arweave. It is designed to bring off-chain liquidity on-chain, so that it's publicly available for anyone to leverage. This is critical for building composable protocols and applications that aren't dependent on a single centralized gatekeeper."),(0,a.kt)("p",null,"Similar to data lakes used in analytics, Reservoir's Data Lake is purely focused on storing raw order data, without actually checking if they are valid. This is partly to keep costs as low as possible, and partly because validity checking requires understanding the state of the parent blockchain, to know who owns which tokens. This validation is performed at a higher level, by an Indexer node, which can reconstruct the state of the Order Book from the raw data on each chain."),(0,a.kt)("p",null,"The Data Lake is a light-weight protocol on top of Arweave, with transaction that are published with the following tags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"App-Name: Reservoir Protocol\nApp-Version: 0.0.1\nNetwork: mainnet / rinkeby\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://viewblock.io/arweave/tx/DomOJe5Efye10uJudxLQMubQPQtyFJTTxLoNO0ttjIw"},"Example Transaction")),(0,a.kt)("p",null,"The data is an array of objects, each with a kind:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "kind":"string",\n    "data":"object"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://b2ey4jpoir7spnos4jxhoewqgltnapiloikjju6exigtws3nrsga.arweave.net/DomOJe5Efye10uJudxLQMubQPQtyFJTTxLoNO0ttjIw"},"Example Blob")),(0,a.kt)("p",null,"The system is designed to be extensible, with new kinds added over time. This can either be new exchanges, with their own order formats, or any other data that might be relevant. For example, mutable NFT metadata like collection descriptions or royalties could be stored in Reservoir's Data Lake, instead of needing to be configured on each NFT marketplace."))}u.isMDXComponent=!0}}]);