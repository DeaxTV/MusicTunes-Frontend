
import root from '__GENERATED__/root.svelte';
import { respond } from '../../node_modules/@sveltejs/kit/src/runtime/server/index.js';
import { set_paths, assets, base } from '../../node_modules/@sveltejs/kit/src/runtime/paths.js';
import { set_building, set_version } from '../../node_modules/@sveltejs/kit/src/runtime/env.js';
import { set_private_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-private.js';
import { set_public_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-public.js';

const app_template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html\n\tlang=\"en\"\n\tclass=\"\"\n>\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta\n\t\t\tname=\"viewport\"\n\t\t\tcontent=\"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0\"\n\t\t/>\n\t\t<link\n\t\t\trel=\"icon\"\n\t\t\thref=\"/assets/favicon.ico\"\n\t\t/>\n\t\t<link\n\t\t\trel=\"shortcut icon\"\n\t\t\ttype=\"image/svg\"\n\t\t\thref=\"/logo.svg\"\n\t\t/>\n\t\t<link\n\t\t\trel=\"shortcut icon\"\n\t\t\ttype=\"image/png\"\n\t\t\thref=\"/favicon.png\"\n\t\t/>\n\n\t\t<meta\n\t\t\tname=\"application-name\"\n\t\t\tcontent=\"MusicTunes\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"msapplication-TileColor\"\n\t\t\tcontent=\"#da532c\"\n\t\t/>\n\n\t\t<meta\n\t\t\tname=\"og:site_name\"\n\t\t\tcontent=\"MusicTunes\"\n\t\t/>\n\n\t\t<!-- Apple Metatags-->\n\t\t<meta\n\t\t\tname=\"apple-mobile-web-app-capable\"\n\t\t\tcontent=\"yes\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"apple-mobile-web-app-status-bar-style\"\n\t\t\tcontent=\"black-translucent\"\n\t\t/>\n\t\t<meta\n\t\t\tcontent=\"yes\"\n\t\t\tname=\"apple-touch-fullscreen\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"apple-mobile-web-app-title\"\n\t\t\tcontent=\"MusicTunes\"\n\t\t/>\n\t\t<link\n\t\t\trel=\"apple-touch-icon\"\n\t\t\tsizes=\"180x180\"\n\t\t\thref=\"/apple-touch-icon.png\"\n\t\t/>\n\t\t<link\n\t\t\trel=\"mask-icon\"\n\t\t\thref=\"/assets/safari-pinned-tab.svg\"\n\t\t\tcolor=\"#5bbad5\"\n\t\t/>\n\t\t<link\n\t\t\trel=\"preload\"\n\t\t\ttype=\"image/svg+xml\"\n\t\t\thref=\"/icons.svg\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"theme-color\"\n\t\t\tcontent=\"#17171d\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"apple-mobile-web-app-orientations\"\n\t\t\tcontent=\"portrait\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"apple-mobile-web-app-status-bar-style\"\n\t\t\tcontent=\"black\"\n\t\t/>\n\n\t\t<!-- SvelteKit tags -->\n\t\t<link\n\t\t\trel=\"manifest\"\n\t\t\thref=\"/manifest.json\"\n\t\t/>\n\n\t\t<script>\n\t\t\tvar parcelRequire;\n\n\t\t\t// if (!(\"appearance\" in localStorage)) {\n\t\t\t// \tlocalStorage.theme = \"Dark\";\n\t\t\t// }\n\t\t\tconst hasSettings = localStorage.settings;\n\t\t\tif (!hasSettings) document.documentElement.classList.add(\"Dark\");\n\t\t\telse document.documentElement.classList.add(JSON.parse(hasSettings)?.appearance?.Theme ?? \"Dark\");\n\t\t</script>\n\t\t" + head + "\n\t</head>\n\t<div id=\"app\">" + body + "</div>\n</html>\n";

const error_template = ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({ "base": "", "assets": "" });
set_version("1684008270896");

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_building(settings.building);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
			csrf: {
				check_origin: true,
			},
			dev: false,
			embedded: false,
			handle_error: (error, event) => {
				return this.options.hooks.handleError({ error, event }) ?? {
					message: event.route.id != null ? 'Internal Error' : 'Not Found'
				};
			},
			hooks: null,
			manifest,
			paths: { base, assets },
			public_env: {},
			read,
			root,
			service_worker: true,
			app_template,
			app_template_contains_nonce: false,
			error_template,
			version: "1684008270896"
		};
	}

	/**
	 * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
	 * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
	 * been done already.
	 */
	async init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;

		if (!this.options.hooks) {
			const module = await import("..\\..\\src\\hooks.server.ts");

			this.options.hooks = {
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				handleFetch: module.handleFetch || (({ request, fetch }) => fetch(request))
			};
		}
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
