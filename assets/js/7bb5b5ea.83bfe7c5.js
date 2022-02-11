"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[339],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1973:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_label:"Get Token Prices",sidebar_position:3},l="Get Token Prices",c={unversionedId:"api/use-cases/get-token-prices",id:"api/use-cases/get-token-prices",title:"Get Token Prices",description:"A key feature of the Reservoir API is that it gives access to granular pricing data for every NFT. It's also designed to make it incredibly easy to access this data. For example:",source:"@site/docs/api/use-cases/get-token-prices.md",sourceDirName:"api/use-cases",slug:"/api/use-cases/get-token-prices",permalink:"/docs/api/use-cases/get-token-prices",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/use-cases/get-token-prices.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Get Token Prices",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hosted API",permalink:"/docs/api/hosted-api"},next:{title:"Explore Traits",permalink:"/docs/api/use-cases/explore-traits"}},p=[{value:"Tokens vs Orders",id:"tokens-vs-orders",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-token-prices"},"Get Token Prices"),(0,i.kt)("p",null,"A key feature of the Reservoir API is that it gives access to granular pricing data for every NFT. It's also designed to make it incredibly easy to access this data. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get tokens in a collection, sorted by price (",(0,i.kt)("a",{parentName:"li",href:"https://mainnet-api-v4.reservoir.tools/tokens?collection=blitmap"},"example"),")"),(0,i.kt)("li",{parentName:"ul"},"Get the price of every on-sale token, in one API (",(0,i.kt)("a",{parentName:"li",href:"https://mainnet-api-v4.reservoir.tools/tokens/floor?collection=blitmap"},"example"),")"),(0,i.kt)("li",{parentName:"ul"},"Get the last 100 sales for a collection(",(0,i.kt)("a",{parentName:"li",href:"https://mainnet-api-v4.reservoir.tools/sales?collection=blitmap&limit=100"},"example"),")"),(0,i.kt)("li",{parentName:"ul"},"Get the latest 1000 orders (",(0,i.kt)("a",{parentName:"li",href:"https://mainnet-api-v4.reservoir.tools/orders/all?limit=1000"},"example"),")")),(0,i.kt)("p",null,'If you find yourself thinking "I wish I could...." just let us know, and we can probably add it for you'),(0,i.kt)("h2",{id:"tokens-vs-orders"},"Tokens vs Orders"),(0,i.kt)("p",null,'Every token can have multiple orders. This might be because a user has re-listed at different prices, there are multiple owners (ERC-1155) or there are multiple bids (which can be placed by anyone). To simplify this, we return the "best" price for every token. In 99% of cases, this is all you will need, although you can also request the individual orders.'),(0,i.kt)("p",null,"Each token has two relevant prices:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"floorSellValue")," = the cheapest listing (sell order) on the token",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"topBuyValue")," = the highest bid (buy order) on the token"))}d.isMDXComponent=!0}}]);