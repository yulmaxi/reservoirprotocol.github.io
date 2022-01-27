"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[177],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(h,s(s({ref:r},p),{},{components:t})):n.createElement(h,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2083:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={},l="Create Sell (List for Sale)",c={unversionedId:"core-components/SDK/create-sell",id:"core-components/SDK/create-sell",title:"Create Sell (List for Sale)",description:"In order to list something for sale, you need to create a sell order.",source:"@site/docs/core-components/SDK/1-create-sell.md",sourceDirName:"core-components/SDK",slug:"/core-components/SDK/create-sell",permalink:"/docs/core-components/SDK/create-sell",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/core-components/SDK/1-create-sell.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/core-components/SDK/overview"},next:{title:"Create Buy (Make Offer)",permalink:"/docs/core-components/SDK/create-buy"}},p=[{value:"Steps",id:"steps",children:[{value:"1. Check that wallet owns the token",id:"1-check-that-wallet-owns-the-token",children:[],level:3},{value:"2. Check that UserProxy is deployed",id:"2-check-that-userproxy-is-deployed",children:[],level:3},{value:"3. Check that UserProxy is approved to transfer NFT",id:"3-check-that-userproxy-is-approved-to-transfer-nft",children:[],level:3},{value:"4. Use Reservoir API to build order",id:"4-use-reservoir-api-to-build-order",children:[],level:3},{value:"5. Sign order with SDK",id:"5-sign-order-with-sdk",children:[],level:3},{value:"6. Submit to Order Book",id:"6-submit-to-order-book",children:[],level:3}],level:2},{value:"Bonus: Cross-post to Open Sea",id:"bonus-cross-post-to-open-sea",children:[{value:"1. Build a new order for Open Sea",id:"1-build-a-new-order-for-open-sea",children:[],level:3},{value:"2. Submit to Open Sea API",id:"2-submit-to-open-sea-api",children:[],level:3}],level:2}],d={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-sell-list-for-sale"},"Create Sell (List for Sale)"),(0,o.kt)("p",null,"In order to list something for sale, you need to create a sell order."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-check-that-wallet-owns-the-token"},"1. Check that wallet owns the token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const owner = await collectionContract.connect(signer).ownerOf(tokenId)\n\nconst signerAddress = await signer.getAddress()\n\nif (owner.toLowerCase() !== signerAddress.toLowerCase()) {\n  console.error('Signer is not the token owner')\n  return null\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L23"},"View on Github")),(0,o.kt)("h3",{id:"2-check-that-userproxy-is-deployed"},"2. Check that UserProxy is deployed"),(0,o.kt)("p",null,"When interacting with the Wyvern Exchange, every user needs to have a proxy contract deployed. This is a one time action. Any user who has sold tokens on Open Sea will have already done this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const userProxy = await proxyRegistryContract\n  .connect(signer)\n  .proxies(signerAddress)\n")),(0,o.kt)("p",null,"If not, Deploy & Register UserProxy (on chain, one-time)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// If the user has no associated proxy, then register one\nlet { wait } = (await proxyRegistryContract\n.connect(signer)\n.registerProxy()) as ContractTransaction\n\n// Wait for the transaction to get mined\nawait wait()\n\n// Retrieve user proxy\nconst userProxy = await proxyRegistryContract\n.connect(signer)\n.proxies(signerAddress)\n\nreturn userProxy\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L33"},"View on Github")),(0,o.kt)("h3",{id:"3-check-that-userproxy-is-approved-to-transfer-nft"},"3. Check that UserProxy is approved to transfer NFT"),(0,o.kt)("p",null,"For every NFT contract that the user wants to sell, they need to approve their proxy contract to transfer on their behalf. This is only required once per NFT contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const signerAddress = await signer.getAddress()\n    // Check approval on the user proxy\n    let isApproved = await collectionContract\n      .connect(signer)\n      .isApprovedForAll(signerAddress, userProxy)\n\n    if (!isApproved) {\n      const approvedAddress = await collectionContract\n        .connect(signer)\n        .getApproved(tokenId)\n      isApproved = approvedAddress.toLowerCase() === signerAddress.toLowerCase()\n    }\n\n    if (isApproved) {\n      // Set success\n      return true\n    } else {\n      // Set the approval on the user proxy\n      const { wait } = (await collectionContract\n        .connect(signer)\n        .setApprovalForAll(userProxy, true)) as ContractTransaction\n\n      // Wait for the transaction to get mined\n      await wait()\n\n      return true\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L70"},"View on Github")),(0,o.kt)("h3",{id:"4-use-reservoir-api-to-build-order"},"4. Use Reservoir API to build order"),(0,o.kt)("p",null,"The API has a convenience method for building order objects. Just pass the relevant parameters, and it returns a response that is ready to pass into the SDK (you can also build manually with the SDK if you prefer)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const query: Parameters<typeof listTokenForSell>['3'] = {\n  contract,\n  maker,\n  side: 'sell',\n  price: ethers.utils.parseEther(listingPrice).toString(),\n  fee,\n  feeRecipient: collection?.collection?.royalties?.recipient || maker,\n  tokenId: token?.token?.tokenId,\n  expirationTime: expirationValue,\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let url = new URL('/orders/build', apiBase)\n\nsetParams(url, query)\n\nlet res = await fetch(url.href)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/components/ListModal.tsx#L163"},"View on Github")),(0,o.kt)("h3",{id:"5-sign-order-with-sdk"},"5. Sign order with SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Use SDK to create order object\nconst sellOrder = new WyvernV2.Order(chainId, order.params)\n\n// Sign selling order\nawait sellOrder.sign(signer)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L273"},"View on Github")),(0,o.kt)("h3",{id:"6-submit-to-order-book"},"6. Submit to Order Book"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let url2 = new URL('/orders', apiBase)\n\nawait fetch(url2.href, {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    orders: [\n      {\n        kind: 'wyvern-v2',\n        data: sellOrder.params,\n      },\n    ],\n  }),\n})\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/makeOffer.ts#L152"},"View on Github")),(0,o.kt)("h2",{id:"bonus-cross-post-to-open-sea"},"Bonus: Cross-post to Open Sea"),(0,o.kt)("p",null,"The SDK can also be used to sign orders that can be sent to Open Sea. This is useful in scenarios where the user wants to simultaneously list an NFT for sale within the Reservoir network and on Open Sea. This requires a second signature, because the order parameters are slightly different."),(0,o.kt)("h3",{id:"1-build-a-new-order-for-open-sea"},"1. Build a new order for Open Sea"),(0,o.kt)("p",null,"The order must a contain a fee to Open Sea that is 2.5% + royalties, or else it will be rejected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Modify the order, to make it compatible with Open Sea\nconst buyOrder = new WyvernV2.Order(chainId, {\n  ...params,\n  takerRelayerFee: params.takerRelayerFee + 250,\n  // Fee + royalty goes to Open Sea\n  feeRecipient: '0x5b3256965e7c3cf26e11fcaf296dfc8807c01073',\n  // Set listing time 2 minutes in the past to make sure on-chain validation passes\n  listingTime: Math.floor(Date.now() / 1000) - 120,\n  // Adjust date format for OpenSea\n  expirationTime: +params.expirationTime.toString().slice(0, -3),\n  salt: BigNumber.from(randomBytes(32)).toString(),\n})\n\n// Sign the order\nawait buyOrder.sign(signer)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/makeOffer.ts#L195"},"View on Github")),(0,o.kt)("h3",{id:"2-submit-to-open-sea-api"},"2. Submit to Open Sea API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create request object in the form that open sea expects\nconst order = {\n  exchange: buyOrder.params.exchange,\n  maker: buyOrder.params.maker,\n  taker: buyOrder.params.taker,\n  makerRelayerFee: buyOrder.params.makerRelayerFee,\n  takerRelayerFee: buyOrder.params.takerRelayerFee,\n  makerProtocolFee: '0',\n  takerProtocolFee: '0',\n  makerReferrerFee: '0',\n  feeMethod: 1,\n  feeRecipient: buyOrder.params.feeRecipient,\n  side: buyOrder.params.side,\n  saleKind: buyOrder.params.saleKind,\n  target: buyOrder.params.target,\n  howToCall: buyOrder.params.howToCall,\n  calldata: buyOrder.params.calldata,\n  replacementPattern: buyOrder.params.replacementPattern,\n  staticTarget: buyOrder.params.staticTarget,\n  staticExtradata: buyOrder.params.staticExtradata,\n  paymentToken: buyOrder.params.paymentToken,\n  quantity: '1',\n  basePrice: buyOrder.params.basePrice,\n  extra: buyOrder.params.extra,\n  listingTime: buyOrder.params.listingTime,\n  expirationTime: buyOrder.params.expirationTime,\n  salt: buyOrder.params.salt,\n  metadata: {\n    asset: {\n      id: tokenId,\n      address: contract,\n    },\n    schema: 'ERC721',\n  },\n  v: buyOrder.params.v,\n  r: buyOrder.params.r,\n  s: buyOrder.params.s,\n  hash: buyOrder.hash(),\n}\n\n// Post buy order to OpenSea (API Key required)\nconst res = await fetch(\n  `https://${\n    chainId === 4 ? 'testnets-api.' : ''\n  }opensea.io/wyvern/v1/orders/post`,\n  {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'x-api-key': apiKey,\n    },\n    body: JSON.stringify(order),\n  }\n)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/makeOffer.ts#L212"},"View on Github")))}u.isMDXComponent=!0}}]);