#!/usr/bin/env ts-node-esm

import { spawnSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { createRequire as req } from "module";
import * as path from "path";
import * as process from "process";
import type { Adapter, MusicTunesSchema, Platforms } from "./build.types";
import type { SvelteConfig, SvelteConfigJSON } from "./svelte.types";

const require = req(import.meta.url);
console.log(test);

const MusicTunes_config_path = path.resolve("./MusicTunes.conf.json");
const default_config = path.resolve("./scripts/.internals/svelte.config.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const svelte_config_js: SvelteConfigJSON = require(default_config);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const json_config = require(MusicTunes_config_path);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require(path.resolve("./package.json"));

/**
 * @type {import('./build.types').MusicTunesSchema}
 */
const json: MusicTunesSchema = json_config as MusicTunesSchema;

const adapter: Adapter = (json["environment"]!["adapter"]! as Adapter) ?? "vercel";

const rootPath = path.resolve(".");

const svelteConfigPath = path.join(rootPath, "svelte.config.js");
const originalSvelteConfig = readFileSync(svelteConfigPath, { encoding: "utf-8" });
let modifiedSvelteConfig = "";

const adapterImportRegexp = /(?=@sveltejs\/adapter).+(?=")/gm;

type Platform = {
	[key in keyof Platforms]: Platforms[key];
};

export class Logger {
	static info(...args: Array<unknown>): void {
		console.info(...args);
	}
	static log(...args: Array<unknown>): void {
		console.log(...args);
	}
	static err(...args: Array<unknown>): void {
		console.error(...args);
	}
}

async function installAdapter(adapter: Adapter, options: Platform) {
	try {
		modifiedSvelteConfig = originalSvelteConfig.replace(adapterImportRegexp, `@sveltejs/adapter-${adapter}`);
		if (adapter.match(/vercel|node|netlify/g)) {
			modifiedSvelteConfig = modifiedSvelteConfig.replace(/adapter\(.[^,]+/gm, `adapter(${JSON.stringify(options)})`);
		}

		writeFileSync(svelteConfigPath, modifiedSvelteConfig, { encoding: "utf-8" });
		return true;
	} catch (err) {
		Logger.err(err);
	}
}

async function main() {
	process.stdout.clearScreenDown(() => {
		return false;
	});
	try {
		if (!MusicTunes_config_path) {
			Logger.err(`No config file was found. Please create a file named 'MusicTunes.config.json' at ${rootPath}`);
			return;
		}
		Logger.info(`---MusicTunes-------------------\nConfig path: ${MusicTunes_config_path}\n`);

		const options = adapter.match(/node|vercel|netlify/g) ? json["platform"][adapter] : null;

		if (!pkg.devDependencies[`@sveltejs/adapter-${adapter}`]) {
			Logger.info(`Adapter @sveltejs/adapter-${adapter} was not found. Installing...`);

			spawnSync(`npm`, [`i`, `-D`, `@sveltejs/adapter-${adapter}@next`], {
				stdio: "inherit",
				env: process.env,
				cwd: rootPath,
				shell: true,
			});

			Logger.info(`Installed successfully. Starting build...`);
		}

		/// Setup config
		Logger.info(`Setting up svelte.config.js with user provided config...`);
		const adapter_installed = installAdapter(adapter, options);

		Logger.info(`Building MusicTunes, please wait...`);

		/// If installAdapter doesn't return a truthy value, then there was an error
		/// so we abort
		if (!adapter_installed) Logger.info("Error installing config.");

		/// run the build
		spawnSync("npx", ["vite", "build"], {
			stdio: "inherit",
			env: { ...process.env, BB_ADAPTER: adapter },
			cwd: rootPath,
			shell: true,
		});
		Logger.info(`Finished build`);
	} catch (err) {
		Logger.err(err);
	}
}
// main();
