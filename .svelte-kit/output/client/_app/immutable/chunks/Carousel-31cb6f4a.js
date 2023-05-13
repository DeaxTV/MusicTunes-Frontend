import{S as me,i as _e,T as he,k as D,a as U,q as Y,w as H,l as S,m as y,c as G,r as Z,h as g,x as Q,n as M,G as X,b as N,I as E,y as j,L as x,U as de,u as ae,f as V,g as fe,d as ce,t as W,z as J,a1 as pe,D as ge,V as be,o as we,ar as ke,e as ie,Q as ve,B as ue}from"./index-02d4e276.js";import{C as ee}from"./CarouselItem-7ef249ed.js";import{I as ne}from"./Icon-53721fee.js";import{p as Ee}from"./stores-5cf8d32a.js";import{l as Ie}from"./observer-238713e4.js";function se(r,e,i){const t=r.slice();return t[24]=e[i],t[26]=i,t}function re(r){var l;let e,i=((l=r[0])==null?void 0:l.subheading)+"",t;return{c(){e=D("p"),t=Y(i),this.h()},l(s){e=S(s,"P",{class:!0});var a=y(e);t=Z(a,i),a.forEach(g),this.h()},h(){M(e,"class","subheading svelte-4lb2a1")},m(s,a){N(s,e,a),E(e,t)},p(s,a){var I;a&1&&i!==(i=((I=s[0])==null?void 0:I.subheading)+"")&&ae(t,i)},d(s){s&&g(e)}}}function Ae(r){let e,i,t;return{c(){e=D("a"),i=D("small"),t=Y("See All"),this.h()},l(l){e=S(l,"A",{href:!0});var s=y(e);i=S(s,"SMALL",{});var a=y(i);t=Z(a,"See All"),a.forEach(g),s.forEach(g),this.h()},h(){M(e,"href",r[10].playlist)},m(l,s){N(l,e,s),E(e,i),E(i,t)},p:ue,d(l){l&&g(e)}}}function Be(r){let e,i,t;return{c(){e=D("a"),i=D("small"),t=Y("See All"),this.h()},l(l){e=S(l,"A",{href:!0});var s=y(e);i=S(s,"SMALL",{});var a=y(i);t=Z(a,"See All"),a.forEach(g),s.forEach(g),this.h()},h(){M(e,"href",r[11])},m(l,s){N(l,e,s),E(e,i),E(i,t)},p:ue,d(l){l&&g(e)}}}function Re(r){let e,i;return e=new ee({props:{type:"new",aspectRatio:r[24].aspectRatio,item:r[24],index:r[26]}}),{c(){H(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,l){j(e,t,l),i=!0},p(t,l){const s={};l&2&&(s.aspectRatio=t[24].aspectRatio),l&2&&(s.item=t[24]),e.$set(s)},i(t){i||(V(e.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function Le(r){let e,i;return e=new ee({props:{type:r[2],kind:r[3],aspectRatio:r[24].aspectRatio,isBrowseEndpoint:!!r[24].endpoint,item:r[24],index:r[26]}}),{c(){H(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,l){j(e,t,l),i=!0},p(t,l){const s={};l&4&&(s.type=t[2]),l&8&&(s.kind=t[3]),l&2&&(s.aspectRatio=t[24].aspectRatio),l&2&&(s.isBrowseEndpoint=!!t[24].endpoint),l&2&&(s.item=t[24]),e.$set(s)},i(t){i||(V(e.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function De(r){let e,i;return e=new ee({props:{type:"trending",kind:r[3],aspectRatio:r[24].aspectRatio,item:r[24],isBrowseEndpoint:!!r[24].endpoint,index:r[26]}}),{c(){H(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,l){j(e,t,l),i=!0},p(t,l){const s={};l&8&&(s.kind=t[3]),l&2&&(s.aspectRatio=t[24].aspectRatio),l&2&&(s.item=t[24]),l&2&&(s.isBrowseEndpoint=!!t[24].endpoint),e.$set(s)},i(t){i||(V(e.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function oe(r){let e,i,t,l;const s=[De,Le,Re],a=[];function I(f,k){return f[2]==="trending"?0:f[2]==="artist"||f[2]==="home"?1:f[2]==="new"?2:-1}return~(e=I(r))&&(i=a[e]=s[e](r)),{c(){i&&i.c(),t=ie()},l(f){i&&i.l(f),t=ie()},m(f,k){~e&&a[e].m(f,k),N(f,t,k),l=!0},p(f,k){let d=e;e=I(f),e===d?~e&&a[e].p(f,k):(i&&(fe(),W(a[d],1,1,()=>{a[d]=null}),ce()),~e?(i=a[e],i?i.p(f,k):(i=a[e]=s[e](f),i.c()),V(i,1),i.m(t.parentNode,t)):i=null)},i(f){l||(V(i),l=!0)},o(f){W(i),l=!1},d(f){~e&&a[e].d(f),f&&g(t)}}}function Se(r){var m;let e,i,t,l=r[0].title+"",s,a,I,f,k,d,A,R,b,w,B,O,v,_,T,q,h=((m=r[0])==null?void 0:m.subheading)&&re(r);function z(n,o){if(o&1&&(I=null),o&1&&(f=null),I==null&&(I=!!(!n[0].title.includes("Videos")&&n[0].browseId)),I)return Be;if(f==null&&(f=!!(n[9]&&n[0].title.includes("Videos"))),f)return Ae}let P=z(r,-1),p=P&&P(r);R=new ne({props:{name:"chevron-left",size:"1.5em"}}),B=new ne({props:{name:"chevron-right",size:"1.5em"}});let C=r[1],u=[];for(let n=0;n<C.length;n+=1)u[n]=oe(se(r,C,n));const K=n=>W(u[n],1,1,()=>{u[n]=null});return{c(){e=D("div"),h&&h.c(),i=U(),t=D("span"),s=Y(l),a=U(),p&&p.c(),k=U(),d=D("div"),A=D("div"),H(R.$$.fragment),b=U(),w=D("div"),H(B.$$.fragment),O=U(),v=D("div");for(let n=0;n<u.length;n+=1)u[n].c();this.h()},l(n){e=S(n,"DIV",{class:!0});var o=y(e);h&&h.l(o),i=G(o),t=S(o,"SPAN",{class:!0});var L=y(t);s=Z(L,l),L.forEach(g),a=G(o),p&&p.l(o),o.forEach(g),k=G(n),d=S(n,"DIV",{class:!0});var c=y(d);A=S(c,"DIV",{class:!0});var F=y(A);Q(R.$$.fragment,F),F.forEach(g),b=G(c),w=S(c,"DIV",{class:!0});var te=y(w);Q(B.$$.fragment,te),te.forEach(g),O=G(c),v=S(c,"DIV",{class:!0,id:!0});var le=y(v);for(let $=0;$<u.length;$+=1)u[$].l(le);le.forEach(g),c.forEach(g),this.h()},h(){M(t,"class","h2"),M(e,"class","header resp-content-width"),M(A,"class","left svelte-4lb2a1"),X(A,"showMoreBtn",!r[4]),M(w,"class","right svelte-4lb2a1"),X(w,"showMoreBtn",!r[5]),M(v,"class","scroll svelte-4lb2a1"),M(v,"id","scrollItem"),M(d,"class","section svelte-4lb2a1")},m(n,o){N(n,e,o),h&&h.m(e,null),E(e,i),E(e,t),E(t,s),E(e,a),p&&p.m(e,null),N(n,k,o),N(n,d,o),E(d,A),j(R,A,null),E(d,b),E(d,w),j(B,w,null),E(d,O),E(d,v);for(let L=0;L<u.length;L+=1)u[L].m(v,null);r[16](v),_=!0,T||(q=[x(A,"click",r[14]),x(w,"click",r[15]),x(v,"scroll",r[8]),de(Ie.call(null,v))],T=!0)},p(n,[o]){var L;if((L=n[0])!=null&&L.subheading?h?h.p(n,o):(h=re(n),h.c(),h.m(e,i)):h&&(h.d(1),h=null),(!_||o&1)&&l!==(l=n[0].title+"")&&ae(s,l),P===(P=z(n,o))&&p?p.p(n,o):(p&&p.d(1),p=P&&P(n),p&&(p.c(),p.m(e,null))),(!_||o&16)&&X(A,"showMoreBtn",!n[4]),(!_||o&32)&&X(w,"showMoreBtn",!n[5]),o&14){C=n[1];let c;for(c=0;c<C.length;c+=1){const F=se(n,C,c);u[c]?(u[c].p(F,o),V(u[c],1)):(u[c]=oe(F),u[c].c(),V(u[c],1),u[c].m(v,null))}for(fe(),c=C.length;c<u.length;c+=1)K(c);ce()}},i(n){if(!_){V(R.$$.fragment,n),V(B.$$.fragment,n);for(let o=0;o<C.length;o+=1)V(u[o]);_=!0}},o(n){W(R.$$.fragment,n),W(B.$$.fragment,n),u=u.filter(Boolean);for(let o=0;o<u.length;o+=1)W(u[o]);_=!1},d(n){n&&g(e),h&&h.d(),p&&p.d(),n&&g(k),n&&g(d),J(R),J(B),pe(u,n),r[16](null),T=!1,ge(q)}}}function ye(r,e,i){var K;let t;be(r,Ee,m=>i(22,t=m));let{header:l}=e,{items:s=[]}=e,{type:a=""}=e,{kind:I="normal"}=e,{isBrowseEndpoint:f}=e,{visitorData:k=""}=e,d,A,R,b,w,B,O=!1,v=!1;const _={left:0,width:-1,right:0};function T(m,n){if(!b)return;const o={scrollWidth:b.scrollWidth,scrollLeft:b.scrollLeft};B===void 0&&(B=m);const L=m-B;!O&&_.width<0&&(O=!0,i(7,_.width=o.scrollWidth,_));const c=o.scrollLeft;i(4,d=!(c<15)),i(7,_.left=c,_),i(5,A=_.left<_.width-R-15),i(7,_.right=_.width-c-15,_),L<100?w=requestAnimationFrame(F=>T(F,n)):(cancelAnimationFrame(w),n==="left"?i(6,b.scrollLeft-=Math.ceil(_.width/s.length*2),b):n==="right"&&i(6,b.scrollLeft+=Math.ceil(_.width/s.length*2),b),w=void 0,B=void 0,v=!1)}function q(m,n){w||(R||(R=b.clientWidth),!v&&(v=!0,requestAnimationFrame(o=>T(o,n))))}we(()=>{b&&q()}),ke(()=>{cancelAnimationFrame(w),i(6,b=null),w=null});const h=t.url.pathname.includes("/artist/"),z={playlist:`/playlist/${l==null?void 0:l.browseId}`,trending:`/trending/new/${l==null?void 0:l.browseId}${l!=null&&l.params?`?params=${l.params}`:""}${l!=null&&l.itct?`&itct=${encodeURIComponent(l==null?void 0:l.itct)}`:""}`,artist:`${l.browseId}/releases?visitorData=${k}&params=${l==null?void 0:l.params}&itct=${l==null?void 0:l.itct}`};let P=l!=null&&l.browseId&&h?z.artist:(K=l.browseId)!=null&&K.includes("VLP")?z.playlist:z.trending;const p=()=>{!s||_.left<=25||q(null,"left")},C=()=>{!s||_.right<=25||q(null,"right")};function u(m){ve[m?"unshift":"push"](()=>{b=m,i(6,b)})}return r.$$set=m=>{"header"in m&&i(0,l=m.header),"items"in m&&i(1,s=m.items),"type"in m&&i(2,a=m.type),"kind"in m&&i(3,I=m.kind),"isBrowseEndpoint"in m&&i(12,f=m.isBrowseEndpoint),"visitorData"in m&&i(13,k=m.visitorData)},[l,s,a,I,d,A,b,_,q,h,z,P,f,k,p,C,u]}class qe extends me{constructor(e){super(),_e(this,e,ye,Se,he,{header:0,items:1,type:2,kind:3,isBrowseEndpoint:12,visitorData:13})}}export{qe as C};