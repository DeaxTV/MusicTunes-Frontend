import { c as d, v as n, j as p, h as l } from "../../../chunks/index.js"; import "../../../chunks/utils.js"; import { H as m } from "../../../chunks/Header.js"; import { B as u } from "../../../chunks/Button.js"; const y = d((t, o, s, c) => {
	let { data: e } = o; const { hostId: h, hostDisplayName: a, url: r } = e; let i; return o.data === void 0 && s.data && e !== void 0 && s.data(e), `${n(m, "Header").$$render(t, { title: `${a}'s MusicTunes Group Session`, desc: `Join ${a}'s Group Session on MusicTunes`, url: r }, {}, {})}
<main><h2>Join ${p(a)}&#39;s Group Session</h2>
	<p>Please enter a display name below in order to continue with joining.</p>
	<br>
	<div class="input"><input type="text" placeholder="Display Name"${l("value", i, 0)}></div>
	<br>

	${n(u, "Button").$$render(t, { disabled: !i }, {}, { default: () => "Join Session" })}
</main>`}); export { y as default };
