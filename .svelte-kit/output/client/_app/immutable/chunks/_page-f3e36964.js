import{I as s}from"./buffer-8e6379eb.js";const r=async({url:o})=>{const t=s.fromBase64(decodeURIComponent(o.searchParams.get("token")));try{const{clientId:e,displayName:a}=JSON.parse(t);return{hostId:e,hostDisplayName:a,url:o.pathname+`?${o.searchParams.toString()}`}}catch(e){throw e(500,e)}},c=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{c as _,r as l};