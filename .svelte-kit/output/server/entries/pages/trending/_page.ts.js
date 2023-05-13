import{e as n}from"../../../chunks/index2.js";const e=async({fetch:o})=>await o("/trending.json?q=browse").then(t=>{if(!t.ok)throw n(t.status,t.statusText);return t.json()});export{e as load};
