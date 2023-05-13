import { c as I, a as f, k as S, h as p, j as T } from "./index.js"; import { w as h } from "./index3.js"; import { E } from "./utils.js"; import { S as R } from "./url.js"; const U = { title: "MusicTunes", description: "Unlock your music", url: "https://MusicTunes.ml/", type: "website", image: "https://MusicTunes.ml/favicon.png", "og:image": "/favicon.png", "og:description": "Unlock your music", "og:type": "website", "og:url": "https://MusicTunes.ml/" }, w = () => { const { subscribe: g, set: a, update: i } = h(U); let m = "https://MusicTunes.ml"; const u = t => i(e => ({ ...e, description: t, "og:description": t })), n = t => i(e => ({ ...e, title: t, "og:title": t })), s = t => i(e => ({ ...e, "og:url": m + t, url: m + t })), b = t => i(e => ({ ...e, image: t, "og:image": t })); return { subscribe: g, set: a, title: n, url: s, desc: u, image: b, init: (t, e, c, l, r = t + "/favicon.png") => { t && (m = m), e && n(e), c && s(c), l && u(l), r && b(r) } } }, _ = w(), y = I((g, a, i, m) => { let u, n, s, b, d, t; n = f(R, o => u = o), b = f(_, o => s = o), t = f(E, o => d = o); let { title: e } = a, { desc: c = "" } = a, { url: l } = a, { image: r = "/favicon.png" } = a; return _.init(u, e, l, c, r), a.title === void 0 && i.title && e !== void 0 && i.title(e), a.desc === void 0 && i.desc && c !== void 0 && i.desc(c), a.url === void 0 && i.url && l !== void 0 && i.url(l), a.image === void 0 && i.image && r !== void 0 && i.image(r), n(), b(), t(), `${g.head += `<!-- HEAD_svelte-7i77lp_START -->${S(Object.entries(s), ([o, v]) => `${v ? `${["title", "description", "image"].includes(o) ? `<meta${p("name", o, 0)}${p("content", v, 0)}>` : `<meta${p("property", o, 0)}${p("content", v, 0)}>`}` : ""}`)}${g.title = `<title>${T(d || s.title)} - MusicTunes</title>`, ""}<!-- HEAD_svelte-7i77lp_END -->`, ""}` }); export { y as H };