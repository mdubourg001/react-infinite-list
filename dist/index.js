!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e=e||self)["react-infinite-list"]=t(e.React)}(this,function(e){"use strict";var t="default"in e?e.default:e;return({rows:n,fetchData:i,limit:r,containerClasses:o,containerStyle:a,fetchThreshold:l,children:s})=>{const[c,f]=e.useState(0),u=e.useRef(null),[d,h]=e.useState(new Map),p=l||5,g=(e,t)=>{const n=t.getBoundingClientRect(),i=e.getBoundingClientRect();return i.top+i.height>=n.top&&i.top<n.top+n.height};return e.useEffect(()=>{0===n.length&&i(c),f(n.length)},[n]),t.createElement("div",{ref:u,onScroll:()=>{for(let e=d.size-p<0?0:d.size-p;e<d.size;e++)if(g(d.get(e),u.current)){i(c,r);break}},className:o,style:a||{width:"200px",maxHeight:"100px",overflowY:"scroll",marginTop:"100px",marginLeft:"auto",marginRight:"auto"}},n.map((e,n)=>t.createElement("div",{key:n,ref:e=>h(d.set(n,e))},s(e))))}});
