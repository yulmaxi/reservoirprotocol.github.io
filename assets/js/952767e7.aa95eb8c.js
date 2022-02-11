"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[225],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9472:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={},s="Introduction",c={unversionedId:"protocol/intro",id:"protocol/intro",title:"Introduction",description:"The NFT market exploded in 2021, yet it still remains relatively immature and illiquid. Most secondary trading happens on a single marketplace, orders are stored in centralized databases and the market making industry consists of a few bots making low-ball offers.",source:"@site/docs/protocol/0-intro.md",sourceDirName:"protocol",slug:"/protocol/intro",permalink:"/docs/protocol/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/protocol/0-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/docs/protocol/architecture"}},u=[],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The NFT market exploded in 2021, yet it still remains relatively immature and illiquid. Most secondary trading happens on a single marketplace, orders are stored in centralized databases and the market making industry consists of a few bots making low-ball offers."),(0,i.kt)("p",null,"This is largely because NFT marketplaces follow a monolithic model, tightly coupling their front-ends, order books and swap contracts, which fragments liquidity and creates bottlenecks for innovation."),(0,i.kt)("p",null,"Reservoir unbundles this model with an open and permissionless order book that aggregates all liquidity into a single shared pool."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reservoir Modular Architecture",src:r(7223).Z})),(0,i.kt)("p",null,"Reservoir\u2019s modular architecture is a new primitive that unlocks powerful possibilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"An abundance of marketplaces can emerge, all trying different approaches or focusing on different communities, without fragmenting liquidity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tools can specialize on one segment of the market, like wallets offering built-in sell functionality, or a rarity explorer that is focused on the buying experience.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Novel new forms of liquidity (AMMs, collection-wide offers, etc) can quickly find adoption by feeding into all of the marketplaces and interfaces leveraging the shared order book.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Anyone can provide liquidity, without worrying about API keys or rate limits, making it more accessible to both professional market makers and regular collectors."))),(0,i.kt)("p",null,"Reservoir is not another marketplace. It's a new layer in the stack, designed to complement the layers above and below. WAGMI."),(0,i.kt)("p",null,"By fully embracing the web3 principles of open data and composability, Reservoir aims to unleash a wave of innovation at all layers of the stack, bringing vastly improved liquidity to NFTs."))}d.isMDXComponent=!0},7223:function(e,t,r){t.Z=r.p+"assets/images/reservoir1st-a824ac03eef485a59a082cf02474983b.png"}}]);