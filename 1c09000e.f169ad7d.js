(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,O=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?o.a.createElement(O,i(i({ref:t},l),{},{components:n})):o.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(139)),c={id:"_components_.virtuosogridprops",title:"Interface: VirtuosoGridProps",sidebar_label:"VirtuosoGridProps"},i={unversionedId:"api/interfaces/_components_.virtuosogridprops",id:"api/interfaces/_components_.virtuosogridprops",isDocsHomePage:!1,title:"Interface: VirtuosoGridProps",description:'"components".VirtuosoGridProps',source:"@site/docs/api/interfaces/_components_.virtuosogridprops.md",slug:"/api/interfaces/_components_.virtuosogridprops",permalink:"/api/interfaces/_components_.virtuosogridprops",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.virtuosogridprops.md",version:"current",sidebar_label:"VirtuosoGridProps"},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"atBottomStateChange",id:"atbottomstatechange",children:[]},{value:"atTopStateChange",id:"attopstatechange",children:[]},{value:"components",id:"components",children:[]},{value:"computeItemKey",id:"computeitemkey",children:[]},{value:"endReached",id:"endreached",children:[]},{value:"isScrolling",id:"isscrolling",children:[]},{value:"itemClassName",id:"itemclassname",children:[]},{value:"itemContent",id:"itemcontent",children:[]},{value:"listClassName",id:"listclassname",children:[]},{value:"overscan",id:"overscan",children:[]},{value:"rangeChanged",id:"rangechanged",children:[]},{value:"scrollSeekConfiguration",id:"scrollseekconfiguration",children:[]},{value:"scrollerRef",id:"scrollerref",children:[]},{value:"startReached",id:"startreached",children:[]},{value:"totalCount",id:"totalcount",children:[]},{value:"useWindowScroll",id:"usewindowscroll",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".VirtuosoGridProps"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"unknown"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"VirtuosoGridProps")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"atbottomstatechange"},"atBottomStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atBottomStateChange"),": (atBottom: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L275"}),"components.tsx:275"))),Object(a.b)("p",null,"Called with true / false when the list has reached the bottom / gets scrolled up.\nCan be used to load newer items, like ",Object(a.b)("inlineCode",{parentName:"p"},"tail -f"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"attopstatechange"},"atTopStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atTopStateChange"),": (atTop: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L280"}),"components.tsx:280"))),Object(a.b)("p",null,"Called with ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," when the list has reached the top / gets scrolled down."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"components"},"components"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"components"),": GridProps",'["',"components",'"]'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L229"}),"components.tsx:229"))),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"components")," property for advanced customization of the elements rendered by the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"computeitemkey"},"computeItemKey"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"computeItemKey"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.computeitemkey"}),"ComputeItemKey")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L241"}),"components.tsx:241"))),Object(a.b)("p",null,"If specified, the component will use the function to generate the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," property for each list item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"endreached"},"endReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"endReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L259"}),"components.tsx:259"))),Object(a.b)("p",null,"Gets called when the user scrolls to the end of the list.\nReceives the last item index as an argument. Can be used to implement endless scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"isscrolling"},"isScrolling"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"isScrolling"),": (isScrolling: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L253"}),"components.tsx:253"))),Object(a.b)("p",null,"Called when the list starts/stops scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemclassname"},"itemClassName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemClassName"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L295"}),"components.tsx:295"))),Object(a.b)("p",null,"Sets the grid items' className"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemcontent"},"itemContent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemContent"),": GridProps",'["',"itemContent",'"]'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L224"}),"components.tsx:224"))),Object(a.b)("p",null,"Set the callback to specify the contents of the item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"listclassname"},"listClassName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"listClassName"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L290"}),"components.tsx:290"))),Object(a.b)("p",null,"Sets the className for the list DOM element"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"overscan"},"overscan"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"overscan"),": number ","|"," { main: number ; reverse: number  }"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L236"}),"components.tsx:236"))),Object(a.b)("p",null,'Set the overscan property to make the component "chunk" the rendering of new items on scroll.\nThe property causes the component to render more items than the necessary, but reduces the re-renders on scroll.\nSetting { main: number, reverse: number } lets you extend the list in both the main and the reverse scrollable directions.'),Object(a.b)("hr",null),Object(a.b)("h3",{id:"rangechanged"},"rangeChanged"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"rangeChanged"),": (range: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.listrange"}),"ListRange"),") => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L269"}),"components.tsx:269"))),Object(a.b)("p",null,"Called with the new set of items each time the list items are rendered due to scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollseekconfiguration"},"scrollSeekConfiguration"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollSeekConfiguration"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekconfiguration"}),"ScrollSeekConfiguration")," ","|"," false"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L248"}),"components.tsx:248"))),Object(a.b)("p",null,"Use to display placeholders if the user scrolls fast through the list."),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"components.ScrollSeekPlaceholder")," to change the placeholder content."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollerref"},"scrollerRef"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollerRef"),": (ref: HTMLElement ","|"," null) => any"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L285"}),"components.tsx:285"))),Object(a.b)("p",null,"Provides access to the root DOM element"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"startreached"},"startReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"startReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L264"}),"components.tsx:264"))),Object(a.b)("p",null,"Called when the user scrolls to the start of the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"totalcount"},"totalCount"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"totalCount"),": GridProps",'["',"totalCount",'"]'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L219"}),"components.tsx:219"))),Object(a.b)("p",null,"The total amount of items to be rendered."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usewindowscroll"},"useWindowScroll"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"useWindowScroll"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/1875027/src/components.tsx#L300"}),"components.tsx:300"))),Object(a.b)("p",null,"Uses the document scroller rather than wrapping the grid in its own."))}s.isMDXComponent=!0}}]);