import { S as Ae, i as Ee, T as Te, aq as ce, k, w as Ie, a as F, q as U, l as S, m as w, x as Pe, h as _, c as Q, r as Y, G as N, n as h, b as q, I as m, y as ke, L as X, W as xe, u as J, g as Me, t as ee, d as Ve, f as te, z as Se, D as Le, V as D, P as qe, $ as de, e as se, a1 as Ce, A as B, B as le, M as Ge } from "./index-02d4e276.js"; import { e as De, l as y, b as Ne, i as Re, C as Fe, j as Qe, n as fe, o as ie, k as he, E as pe, A as _e } from "./window-19724ee6.js"; import { p as Be } from "./stores-5cf8d32a.js"; import { I as Ue } from "./Icon-53721fee.js"; import { C as Ye, f as ze } from "./contexts-267137aa.js"; import { s as je, b as Oe } from "./PopperButton-b3b94d20.js"; import { g as we } from "./navigation-8392efd7.js"; import { S as We } from "./url-fcaf9571.js"; const He = { "View Artist": () => ({ text: "View Artist", icon: "artist" }), "Add to Queue": () => ({ text: "Add to Queue", icon: "queue" }), "Play Next": () => ({ text: "Play Next", icon: "queue" }), Favorite: () => ({ text: "Favorite", icon: "heart" }), "Start Group Session": () => ({ text: "Start Group Session", icon: "users" }), Share: () => ({ text: "Share", icon: "share" }), "Go to Album": () => ({ text: "Go to Album", icon: "album" }), "Invite Group Session": () => ({ text: "Invite Group Session", icon: "send" }), "View Playlist": () => ({ text: "View Playlist", icon: "list" }), "Play Song Radio": () => ({ text: "Play Song Radio", icon: "radio" }), "Remove From Playlist": () => ({ text: "Remove From Playlist", icon: "x" }), "Add to Playlist": () => ({ text: "Add to Playlist", icon: "list-plus" }), "Add to Favorites": () => ({ text: "Add to Favorites", icon: "heart" }), "Share Group Session": () => ({ text: "Share Group Session", icon: "share" }), Shuffle: () => ({ text: "Shuffle", icon: "shuffle" }), "Shuffle Playlist": () => ({ text: "Shuffle Playlist", icon: "shuffle" }), "Album Radio": () => ({ text: "Album Radio", icon: "album" }), "Edit Playlist": () => ({ icon: "edit", text: "Edit Playlist" }), "Remove from Queue": () => ({ icon: "x", text: "Remove from Queue" }) }; function Xe() { const t = []; return { add: function (...e) { const [s, n] = e; if (!s && !n) return this; const l = He[s](); return l.action = n, t.push(l), this }, build: function () { return t } } } function ge(t, e, s) { const n = t.slice(); return n[22] = e[s], n } function ye(t) { let e, s, n, l, a; return { c() { e = k("div"), s = k("img"), this.h() }, l(i) { e = S(i, "DIV", { class: !0 }); var r = w(e); s = S(r, "IMG", { decoding: !0, loading: !0, src: !0, width: !0, height: !0, alt: !0, class: !0 }), r.forEach(_), this.h() }, h() { var i, r, d; h(s, "decoding", "async"), h(s, "loading", "lazy"), de(s.src, n = (i = t[0].thumbnails[0]) == null ? void 0 : i.url) || h(s, "src", n), h(s, "width", l = (r = t[0].thumbnails[0]) == null ? void 0 : r.width), h(s, "height", a = (d = t[0].thumbnails[0]) == null ? void 0 : d.height), h(s, "alt", "thumbnail"), h(s, "class", "svelte-m8ocey"), h(e, "class", "thumbnail svelte-m8ocey") }, m(i, r) { q(i, e, r), m(e, s) }, p(i, r) { var d, p, g; r & 1 && !de(s.src, n = (d = i[0].thumbnails[0]) == null ? void 0 : d.url) && h(s, "src", n), r & 1 && l !== (l = (p = i[0].thumbnails[0]) == null ? void 0 : p.width) && h(s, "width", l), r & 1 && a !== (a = (g = i[0].thumbnails[0]) == null ? void 0 : g.height) && h(s, "height", a) }, d(i) { i && _(e) } } } function me(t) { let e, s, n; return { c() { e = k("span"), s = k("span"), n = U("Explicit"), this.h() }, l(l) { e = S(l, "SPAN", { class: !0 }); var a = w(e); s = S(a, "SPAN", { class: !0 }); var i = w(s); n = Y(i, "Explicit"), i.forEach(_), a.forEach(_), this.h() }, h() { h(s, "class", "sr-only"), h(e, "class", "explicit") }, m(l, a) { q(l, e, a), m(e, s), m(s, n) }, d(l) { l && _(e) } } } function ve(t) { let e, s = t[0].subtitle, n = []; for (let l = 0; l < s.length; l += 1)n[l] = be(ge(t, s, l)); return { c() { for (let l = 0; l < n.length; l += 1)n[l].c(); e = se() }, l(l) { for (let a = 0; a < n.length; a += 1)n[a].l(l); e = se() }, m(l, a) { for (let i = 0; i < n.length; i += 1)n[i].m(l, a); q(l, e, a) }, p(l, a) { if (a & 1) { s = l[0].subtitle; let i; for (i = 0; i < s.length; i += 1) { const r = ge(l, s, i); n[i] ? n[i].p(r, a) : (n[i] = be(r), n[i].c(), n[i].m(e.parentNode, e)) } for (; i < n.length; i += 1)n[i].d(1); n.length = s.length } }, d(l) { Ce(n, l), l && _(e) } } } function Je(t) { let e, s = t[22].text + "", n, l; return { c() { e = k("span"), n = U(s), l = F(), this.h() }, l(a) { e = S(a, "SPAN", { class: !0 }); var i = w(e); n = Y(i, s), l = Q(i), i.forEach(_), this.h() }, h() { h(e, "class", "svelte-m8ocey") }, m(a, i) { q(a, e, i), m(e, n), m(e, l) }, p(a, i) { i & 1 && s !== (s = a[22].text + "") && J(n, s) }, d(a) { a && _(e) } } } function Ke(t) { let e, s = t[22].text + "", n, l, a, i; function r() { return t[12](t[22]) } return { c() { e = k("a"), n = U(s), this.h() }, l(d) { e = S(d, "A", { class: !0, href: !0 }); var p = w(e); n = Y(p, s), p.forEach(_), this.h() }, h() { h(e, "class", "artist secondary svelte-m8ocey"), h(e, "href", l = `/artist/${t[22].browseId}`) }, m(d, p) { q(d, e, p), m(e, n), a || (i = X(e, "click", Ge(r)), a = !0) }, p(d, p) { t = d, p & 1 && s !== (s = t[22].text + "") && J(n, s), p & 1 && l !== (l = `/artist/${t[22].browseId}`) && h(e, "href", l) }, d(d) { d && _(e), a = !1, i() } } } function be(t) { let e; function s(a, i) { var r; return (r = a[22]) != null && r.browseId ? Ke : Je } let n = s(t), l = n(t); return { c() { l.c(), e = se() }, l(a) { l.l(a), e = se() }, m(a, i) { l.m(a, i), q(a, e, i) }, p(a, i) { n === (n = s(a)) && l ? l.p(a, i) : (l.d(1), l = n(a), l && (l.c(), l.m(e.parentNode, e))) }, d(a) { l.d(a), a && _(e) } } } function Ze(t) { var l, a; let e, s = ((((a = (l = t[0]) == null ? void 0 : l.length) == null ? void 0 : a.text) ?? t[0].length) || "") + "", n; return { c() { e = k("span"), n = U(s), this.h() }, l(i) { e = S(i, "SPAN", { class: !0 }); var r = w(e); n = Y(r, s), r.forEach(_), this.h() }, h() { var i; h(e, "class", "length svelte-m8ocey"), N(e, "hidden", !((i = t[0]) != null && i.length)) }, m(i, r) { q(i, e, r), m(e, n) }, p(i, r) { var d, p, g; r & 1 && s !== (s = ((((p = (d = i[0]) == null ? void 0 : d.length) == null ? void 0 : p.text) ?? i[0].length) || "") + "") && J(n, s), r & 1 && N(e, "hidden", !((g = i[0]) != null && g.length)) }, i: le, o: le, d(i) { i && _(e) } } } function $e(t) { let e, s, n, l, a; return s = new Oe({ props: { tabindex: 0, items: t[5] } }), { c() { e = k("div"), Ie(s.$$.fragment), this.h() }, l(i) { e = S(i, "DIV", { class: !0, tabindex: !0 }); var r = w(e); Pe(s.$$.fragment, r), r.forEach(_), this.h() }, h() { h(e, "class", "length svelte-m8ocey"), h(e, "tabindex", "0") }, m(i, r) { q(i, e, r), ke(s, e, null), n = !0, l || (a = X(e, "focus", t[13]), l = !0) }, p: le, i(i) { n || (te(s.$$.fragment, i), n = !0) }, o(i) { ee(s.$$.fragment, i), n = !1 }, d(i) { i && _(e), Se(s), l = !1, a() } } } function et(t) { var oe; let e, s, n, l, a, i, r = t[1] + 1 + "", d, p, g, L, o, u, x = t[0].title + "", A, R, z, M, j = Array.isArray(t[0].subtitle), O, E, T, V, W, f; l = new Ue({ props: { name: "play", color: "inherit", size: "1.5em" } }); let b = t[0].thumbnails.length !== 0 && ye(t), P = ((oe = t[0]) == null ? void 0 : oe.explicit) && me(), I = j && ve(t); const ae = [$e, Ze], C = []; function ne(c, v) { return c[4] || c[2] ? 0 : 1 } return E = ne(t), T = C[E] = ae[E](t), { c() { e = k("article"), s = k("div"), n = k("span"), Ie(l.$$.fragment), a = F(), i = k("span"), d = U(r), p = F(), g = k("div"), b && b.c(), L = F(), o = k("div"), u = k("span"), A = U(x), R = F(), P && P.c(), z = F(), M = k("div"), I && I.c(), O = F(), T.c(), this.h() }, l(c) { e = S(c, "ARTICLE", { class: !0, tabindex: !0 }); var v = w(e); s = S(v, "DIV", { class: !0 }); var G = w(s); n = S(G, "SPAN", {}); var H = w(n); Pe(l.$$.fragment, H), H.forEach(_), a = Q(G), i = S(G, "SPAN", {}); var re = w(i); d = Y(re, r), re.forEach(_), G.forEach(_), p = Q(v), g = S(v, "DIV", { class: !0 }); var K = w(g); b && b.l(K), L = Q(K), o = S(K, "DIV", { class: !0 }); var Z = w(o); u = S(Z, "SPAN", { class: !0 }); var $ = w(u); A = Y($, x), R = Q($), P && P.l($), $.forEach(_), z = Q(Z), M = S(Z, "DIV", { class: !0 }); var ue = w(M); I && I.l(ue), ue.forEach(_), Z.forEach(_), K.forEach(_), O = Q(v), T.l(v), v.forEach(_), this.h() }, h() { N(n, "hidden", t[3] !== !0 && t[2] !== !0), N(i, "hidden", t[3] !== !1 || t[2] !== !1), h(s, "class", "index svelte-m8ocey"), h(u, "class", "title svelte-m8ocey"), h(M, "class", "artists secondary svelte-m8ocey"), h(o, "class", "column svelte-m8ocey"), h(g, "class", "metadata svelte-m8ocey"), h(e, "class", "m-item svelte-m8ocey"), h(e, "tabindex", "0"), N(e, "isPlaying", t[3]) }, m(c, v) { q(c, e, v), m(e, s), m(s, n), ke(l, n, null), m(s, a), m(s, i), m(i, d), m(e, p), m(e, g), b && b.m(g, null), m(g, L), m(g, o), m(o, u), m(u, A), m(u, R), P && P.m(u, null), m(o, z), m(o, M), I && I.m(M, null), m(e, O), C[E].m(e, null), V = !0, W || (f = [X(e, "click", xe(t[6])), X(e, "pointerenter", t[14]), X(e, "pointerleave", t[15])], W = !0) }, p(c, [v]) { var H; (!V || v & 12) && N(n, "hidden", c[3] !== !0 && c[2] !== !0), (!V || v & 2) && r !== (r = c[1] + 1 + "") && J(d, r), (!V || v & 12) && N(i, "hidden", c[3] !== !1 || c[2] !== !1), c[0].thumbnails.length !== 0 ? b ? b.p(c, v) : (b = ye(c), b.c(), b.m(g, L)) : b && (b.d(1), b = null), (!V || v & 1) && x !== (x = c[0].title + "") && J(A, x), (H = c[0]) != null && H.explicit ? P || (P = me(), P.c(), P.m(u, null)) : P && (P.d(1), P = null), v & 1 && (j = Array.isArray(c[0].subtitle)), j ? I ? I.p(c, v) : (I = ve(c), I.c(), I.m(M, null)) : I && (I.d(1), I = null); let G = E; E = ne(c), E === G ? C[E].p(c, v) : (Me(), ee(C[G], 1, 1, () => { C[G] = null }), Ve(), T = C[E], T ? T.p(c, v) : (T = C[E] = ae[E](c), T.c()), te(T, 1), T.m(e, null)), (!V || v & 8) && N(e, "isPlaying", c[3]) }, i(c) { V || (te(l.$$.fragment, c), te(T), V = !0) }, o(c) { ee(l.$$.fragment, c), ee(T), V = !1 }, d(c) { c && _(e), Se(l), b && b.d(), P && P.d(), I && I.d(), C[E].d(), W = !1, Le(f) } } } const tt = ({ item: t, idx: e, SITE_ORIGIN_URL: s, dispatch: n, page: l }) => Xe().add("View Artist", async () => { we(`/artist/${t != null && t.artistInfo ? t.artistInfo.artist[0].browseId : t == null ? void 0 : t.subtitle[0].browseId}`), await B(), window.scrollTo({ behavior: "smooth", top: 0, left: 0 }) }).add("Play Song Radio", async () => { console.log(t), y.initAutoMixSession({ videoId: t.videoId, loggingContext: t == null ? void 0 : t.loggingContext }) }).add("Add to Playlist", async () => { var a; if ((a = t.endpoint) != null && a.pageType.match(/PLAYLIST|ALBUM|SINGLE/)) { const d = await (await fetch("/api/v1/get_queue.json?playlistId=" + t.playlistId)).json(); fe.set({ state: !0, item: [...d] }) } else fe.set({ state: !0, item: t }); n("change") }).add("Favorite", () => { je.sendMessage("create", "favorite", t) }).add(l === "queue" ? "Remove from Queue" : null, l === "queue" ? () => { y.removeTrack(e) } : null).add("Share", async () => { var i, r, d, p, g, L, o, u, x; let a = { title: t.title, url: `${s}/listen?id=${t.videoId}` }; (r = (i = t.endpoint) == null ? void 0 : i.pageType) != null && r.includes("MUSIC_PAGE_TYPE_PLAYLIST") && (a = { title: t.title, url: `${s}/playlist/${(d = t.endpoint) == null ? void 0 : d.browseId}` }), (g = (p = t.endpoint) == null ? void 0 : p.pageType) != null && g.includes("MUSIC_PAGE_TYPE_ALBUM") && (a = { title: t.title, url: `${s}/release?id=${(L = t.endpoint) == null ? void 0 : L.browseId}` }), (u = (o = t.endpoint) == null ? void 0 : o.pageType) != null && u.includes("MUSIC_PAGE_TYPE_ARTIST") && (a = { title: t.title, text: `${t.title} on MusicTunes`, url: `${s}/artist/${(x = t.endpoint) == null ? void 0 : x.browseId}` }); try { navigator.canShare ? (await navigator.share(a), ie("Shared successfully", "success")) : (await navigator.clipboard.writeText(a.url), ie("Link copied successfully", "success")) } catch (A) { ie("Error: " + A, "error") } }).build(); function st(t, e, s) { let n, l, a, i, r, d, p, g, L; D(t, De, f => s(7, l = f)), D(t, y, f => s(16, a = f)), D(t, We, f => s(17, i = f)), D(t, Ne, f => s(8, r = f)), D(t, Re, f => s(9, d = f)), D(t, Be, f => s(10, p = f)), D(t, Fe, f => s(11, g = f)), D(t, Qe, f => s(4, L = f)); let { item: o } = e, { idx: u } = e; const x = qe(), { page: A, parentPlaylistId: R = null, visitorData: z } = Ye.get(); let M = !1; const j = tt({ item: o, idx: u, SITE_ORIGIN_URL: i, dispatch: x, page: A }); async function O(f) { var P, I; const b = f.target; if (!(b && b.nodeName === "A")) { if (A === "queue") if (he.initialized && he.hasActiveSession) { if (u === 0) return pe(void 0, u === 0 ? 1 : u), y.updatePosition(1), _e.previous(!1); if (u === l.length - 1) { y.updatePosition(u === 0 ? 0 : u - 1), y.next(!0, !0), await B(); return } y.updatePosition(u === 0 ? 0 : u - 1), pe(void 0, u === 0 ? 0 : u - 1), await B(), y.next(!0, !0) } else { if (u === 0) return y.updatePosition(1), await B(), _e.previous(!1); y.updatePosition(u - 1), await B(), y.next(!0, !1) } else if (A === "playlist") { if (o.playlistId === a.currentMixId) { y.updatePosition(u - 1), await y.next(); return } y.updatePosition(u), await B(), await y.initPlaylistSession({ playlistId: o.playlistId, visitorData: z, clickTrackingParams: o.playlistId === a.currentMixId && ((P = l[u]) == null ? void 0 : P.clickTrackingParams) || (o == null ? void 0 : o.clickTrackingParams), index: u, params: (o == null ? void 0 : o.itct) ?? o.playerParams, playlistSetVideoId: o == null ? void 0 : o.playlistSetVideoId, videoId: o == null ? void 0 : o.videoId }) } else if (A === "library") y.updatePosition(u), x("initLocalPlaylist", { idx: u }); else if (A === "release") { if (o.playlistId === a.currentMixId) { y.updatePosition(u - 1), await y.next(); return } y.updatePosition(u), await y.initAutoMixSession({ playlistId: o.playlistId, clickTracking: o.playlistId === a.currentMixId && ((I = l[u]) == null ? void 0 : I.clickTrackingParams) || (o == null ? void 0 : o.clickTrackingParams), keyId: u, loggingContext: o == null ? void 0 : o.loggingContext, videoId: o == null ? void 0 : o.videoId }), await y.getMoreLikeThis({ playlistId: o.playlistId ?? R }) } else await y.initAutoMixSession({ videoId: o.videoId, playlistId: o.playlistId ?? R, playlistSetVideoId: o == null ? void 0 : o.playlistSetVideoId, keyId: u, clickTracking: (o == null ? void 0 : o.clickTrackingParams) ?? void 0, loggingContext: o == null ? void 0 : o.loggingContext, config: { playerParams: o == null ? void 0 : o.playerParams, type: o == null ? void 0 : o.musicVideoType } }); x("setPageIsPlaying", { id: R }) } } const E = f => { we(`/artist/${f.browseId}`), ze.set("closed") }, T = () => s(2, M = !0), V = f => { s(2, M = !0) }, W = () => { s(2, M = !1) }; return t.$$set = f => { "item" in f && s(0, o = f.item), "idx" in f && s(1, u = f.idx) }, t.$$.update = () => { t.$$.dirty & 3971 && s(3, n = (A !== "queue" && A !== "release" ? g.has(p.params.slug) : !0) && l.length > 0 && d === u && r.videoId === o.videoId) }, [o, u, M, n, L, j, O, l, r, d, p, g, E, T, V, W] } class dt extends Ae { constructor(e) { super(), Ee(this, e, st, et, Te, { item: 0, idx: 1 }) } get item() { return this.$$.ctx[0] } set item(e) { this.$$set({ item: e }), ce() } get idx() { return this.$$.ctx[1] } set idx(e) { this.$$set({ idx: e }), ce() } } export { dt as L, Xe as b };