const c=async({url:e,params:t,fetch:a})=>{const o=await a(`/explore/${t.slug}.json`),{sections:n,data:s,header:r,type:l}=await o.json();let p=e.pathname;return{sections:n,header:r,data:s,type:l,path:p}},_=Object.freeze(Object.defineProperty({__proto__:null,load:c},Symbol.toStringTag,{value:"Module"}));export{_,c as l};