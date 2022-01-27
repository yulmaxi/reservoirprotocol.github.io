"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[849],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(h,a(a({ref:r},l),{},{components:t})):o.createElement(h,a({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4670:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=t(7462),n=t(3366),i=(t(7294),t(3905)),a=["components"],c={},s="Architecture",u={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"When designing an order book, you typically have two choices: optimize for cost (store orders off-chain) or optimize for openness (store orders on-chain). On Ethereum, where 80% of NFT value is traded, off-chain order books have dominated (Open Sea, Rarible, etc, because it's simply too expensive to store orders on-chain. Ironically, the more secure a chain is, the more it pushes storage off-chain.",source:"@site/docs/1-architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/1-architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Overview",permalink:"/docs/core-components/overview"}},l=[],d={toc:l};function p(e){var r=e.components,c=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,c,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"When designing an order book, you typically have two choices: optimize for cost (store orders off-chain) or optimize for openness (store orders on-chain). On Ethereum, where 80% of NFT value is traded, off-chain order books have dominated (Open Sea, Rarible, etc, because it's simply too expensive to store orders on-chain. Ironically, the more secure a chain is, the more it pushes storage off-chain."),(0,i.kt)("p",null,"Reservoir introduces a 3rd option. Orders are stored on-chain, but on a different chain. Because orders are self-contained signed messages, they don't need the full might of Ethereum to secure them. Instead, Reservoir uses Arweave as a low-cost \"Data Lake\" for raw order storage. It's cheap enough that marketplaces can still offer the free listing experience that users expect, and secure enough to guarantee permissionless data availability."),(0,i.kt)("p",null,"Anyone can run the open-source Reservoir Indexer that combines raw order data from Arweave, with ownership data from Ethereum, to trustlessly reconstruct the state of the order book. Sprinkle in an advanced metadata indexing engine and you get the Reservoir API, a one-stop shop for building liquidity-powered NFT applications."),(0,i.kt)("p",null,"Normally Arweave's five minute block times would be too slow for a fast-moving order book, but here's the cool part: we don't actually need to wait for blocks to be confirmed. Because the orders are targeted at a different chain, the Indexer can ingest them as soon as they hit the mempool, making the Reservoir Order Book real-time, highly available and globally consistent."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reservoir Stack",src:t(7551).Z})))}p.isMDXComponent=!0},7551:function(e,r,t){r.Z=t.p+"assets/images/reservoir2nd-e427d09ad040ceed1831050094ef203b.png"}}]);