import{c as m,j as p,v as s}from"../../../../../chunks/index.js";import{C as c}from"../../../../../chunks/CarouselItem.js";import{G as l}from"../../../../../chunks/GridItem.svelte_svelte_type_style_lang.js";import"../../../../../chunks/stores.js";import"../../../../../chunks/utils.js";const _=m((e,a,r,f)=>{let{data:t}=a;const{header:o,contents:n=[]}=t;return a.data===void 0&&r.data&&t!==void 0&&r.data(t),`<main><h1>${p(o?.artist)}</h1>

	${s(l,"Grid").$$render(e,{heading:o?.type,items:n},{},{item:({item:i,index:d})=>`${s(c,"CarouselItem").$$render(e,{isBrowseEndpoint:!0,kind:"trending",slot:"item",index:d,item:i,aspectRatio:i.aspectRatio},{},{})}`})}
</main>`});export{_ as default};
