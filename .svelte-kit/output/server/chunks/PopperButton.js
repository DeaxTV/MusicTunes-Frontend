import"./stores.js";import{c as n,h as l,v}from"./index.js";import{I as c}from"./Icon.js";/* empty css                                          */function s(o){return()=>{throw new Error(`Cannot call ${o}(...) on the server`)}}const y=s("goto"),f={code:".dd-button.svelte-1ki4j71{cursor:pointer;isolation:isolate;padding:.8rem;position:relative;touch-action:none}@media screen and (min-width:960px){.dd-button.svelte-1ki4j71{padding:.5rem}}.svelte-1ki4j71{color:#f2f2f2!important}@media(hover:hover){}",map:null},z=n((o,t,e,u)=>{let{items:d=[]}=t,{type:r=""}=t,{metadata:m={}}=t,{size:a="1.8rem"}=t,{tabindex:i=0}=t;return t.items===void 0&&e.items&&d!==void 0&&e.items(d),t.type===void 0&&e.type&&r!==void 0&&e.type(r),t.metadata===void 0&&e.metadata&&m!==void 0&&e.metadata(m),t.size===void 0&&e.size&&a!==void 0&&e.size(a),t.tabindex===void 0&&e.tabindex&&i!==void 0&&e.tabindex(i),o.css.add(f),`





<div class="dd-button svelte-1ki4j71" role="button" aria-label="menu"${l("tabindex",i,0)}>${v(c,"Icon").$$render(o,{color:"#f2f2f2",size:a,name:"dots"},{},{})}
</div>`});export{z as P,y as g};
