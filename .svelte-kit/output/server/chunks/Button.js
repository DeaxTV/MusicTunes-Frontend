import{c as f,h as v,j as m,v as s}from"./index.js";import{I as n}from"./Icon.js";const _=f((u,e,t,c)=>{let{icon:a=void 0}=e,{outlined:o=!1}=e,{disabled:l=!1}=e,{type:d="button"}=e,{class:i=""}=e;return e.icon===void 0&&t.icon&&a!==void 0&&t.icon(a),e.outlined===void 0&&t.outlined&&o!==void 0&&t.outlined(o),e.disabled===void 0&&t.disabled&&l!==void 0&&t.disabled(l),e.type===void 0&&t.type&&d!==void 0&&t.type(d),e.class===void 0&&t.class&&i!==void 0&&t.class(i),`<button${v("type",d,0)} class="${["button "+m(i,!0),o?"outlined":""].join(" ").trim()}" ${l?"disabled":""}>${a?`${s(n,"Icon").$$render(u,{name:a.name,size:a.size??"1em"},{},{})}`:""}${c.default?c.default({}):""}</button>`});export{_ as B};