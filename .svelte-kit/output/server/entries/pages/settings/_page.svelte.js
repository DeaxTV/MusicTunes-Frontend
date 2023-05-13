import { c, a as r, v as o, k as l, h as t, j as a } from "../../../chunks/index.js"; import { H as v } from "../../../chunks/Header.js"; import { G as m } from "../../../chunks/utils.js"; const $ = { code: '.input-container.svelte-12dx92q.svelte-12dx92q{max-width:32ch!important;min-width:15ch!important;width:100%}label.svelte-12dx92q.svelte-12dx92q{display:inline-block;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:1em;font-variant:unset;text-transform:none!important}@media screen and (min-width:40em){label.svelte-12dx92q~.svelte-12dx92q:last-child{margin-left:auto}}section.svelte-12dx92q.svelte-12dx92q{-webkit-margin-after:1em;display:flex;flex-direction:column;margin-block-end:1em}section.svelte-12dx92q.svelte-12dx92q:not(:last-child){border-bottom:.01em solid hsla(0,0%,85%,.082)}.setting.svelte-12dx92q.svelte-12dx92q{color:inherit;display:inline-flex;flex-direction:column;gap:1em;margin-block:1em;vertical-align:top}.setting.svelte-12dx92q.svelte-12dx92q:first-of-type{-webkit-margin-before:0;margin-block-start:0}.setting.svelte-12dx92q.svelte-12dx92q:last-of-type{-webkit-margin-after:2em;margin-block-end:2em}@media screen and (min-width:40em){.setting.svelte-12dx92q.svelte-12dx92q{align-items:center;flex-direction:row}}.switch.svelte-12dx92q.svelte-12dx92q{align-items:center;background-color:hsla(0,0%,43%,.35);border-radius:1.25rem;cursor:pointer;display:inline-flex;height:2em;overflow:hidden;position:relative;transition:background-color .3s;width:3.8125em}.switch.svelte-12dx92q.svelte-12dx92q:after{--size:calc(2em - 4px);background-color:#fff;border-radius:9999em;box-shadow:0 0 5px .5px rgba(0,0,0,.384);content:"";height:var(--size);left:.125em;position:absolute;transition:left .3s;width:var(--size)}[type=checkbox].svelte-12dx92q:checked+.switch.svelte-12dx92q:after{left:2em}[type=checkbox].svelte-12dx92q:checked+.switch.svelte-12dx92q{background-color:#00cd6a}[type=checkbox].svelte-12dx92q.svelte-12dx92q{display:none}', map: null }, g = c((i, p, x, u) => {
	let s, n; n = r(m, e => s = e); const d = ["Dark", "Dim", "Midnight", "YTM"]; return i.css.add($), n(), `${o(v, "Header").$$render(i, { title: "Settings", url: "/settings", desc: "Configure your app settings" }, {}, {})}
<main class="resp-content-width"><section class="svelte-12dx92q"><span class="h5">Appearance</span>
		<div class="setting svelte-12dx92q"><label for="theme" class="svelte-12dx92q">Theme </label>
			<div class="select svelte-12dx92q"><select name="theme" id="theme">${l(d, e => `<option${t("value", e, 0)} ${s.appearance.Theme === e ? "selected" : ""}>${a(e)}</option>`)}</select></div></div>
		<div class="setting svelte-12dx92q"><label class="svelte-12dx92q">Immersive Queue</label>
			<input type="checkbox" name="immersive-queue" id="immersive-queue" class="svelte-12dx92q"${t("checked", s.appearance["Immersive Queue"], 1)}>
			<label for="immersive-queue" class="switch svelte-12dx92q"></label></div></section>
	<section class="svelte-12dx92q"><span class="h5">Playback</span>
		<div class="setting svelte-12dx92q"><label class="svelte-12dx92q">Dedupe Automix</label>

			<input name="dedupe" id="dedupe" type="checkbox" class="svelte-12dx92q"${t("value", s.playback["Dedupe Automix"], 0)}>
			<label for="dedupe" class="switch svelte-12dx92q"></label></div>
		<div class="setting svelte-12dx92q"><label for="quality" class="svelte-12dx92q">Quality</label>
			<div class="select svelte-12dx92q"><select name="quality" disabled id="quality">${l(["Normal", "High"], e => `<option${t("value", e, 0)} ${s.playback.Quality === e ? "selected" : ""}>${a(e)}</option>`)}</select></div></div>
		<div class="setting svelte-12dx92q"><label for="stream" class="svelte-12dx92q">Stream
				<i>(reload MusicTunes after setting)</i></label>
			<div class="select svelte-12dx92q"><select name="stream" id="stream">${l(["HTTP", "HLS"], e => `<option${t("value", e, 0)} ${s.playback.Stream === e ? "selected" : ""}>${a(e)}</option>`)}</select></div></div></section>
	<section class="svelte-12dx92q"><span class="h5">Network</span>
		<div class="setting svelte-12dx92q"><label for="proxy" class="svelte-12dx92q">Audio Proxy Server </label>
			<div class="input-container svelte-12dx92q"><div class="input no-btn mb-1"><input type="url" pattern="http://.*" placeholder="https://yt-hls-rewriter.onrender.com/"${t("value", s.network["HLS Stream Proxy"], 0)}></div>
				<span class="link">Reset to default</span></div></div></section>
	<section class="svelte-12dx92q"><span class="h5">Search</span>
		<div class="setting svelte-12dx92q"><label for="preserve" class="svelte-12dx92q">Preserve </label>
			<div class="select svelte-12dx92q"><select name="preserve" id="preserve">${l(["Category", "Query", "Category + Query", "None"], e => `<option${t("value", e, 0)} ${s.playback.Stream === e ? "selected" : ""}>${a(e)}</option>`)}</select></div></div></section>
</main>`}); export { g as default };
