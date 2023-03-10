
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const black: string;
	export const brightWhite: string;
	export const WINDOWID: string;
	export const cyan: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const yellow: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const npm_config_cache: string;
	export const NVM_INC: string;
	export const brightGreen: string;
	export const CSF_DrawPluginDefaults: string;
	export const NODE: string;
	export const monitor4: string;
	export const monitor2: string;
	export const monitor1: string;
	export const monitor0: string;
	export const CSF_LANGUAGE: string;
	export const CSF_MIGRATION_TYPES: string;
	export const npm_package_engines_npm: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const CSF_OCCTResourcePath: string;
	export const npm_config_globalconfig: string;
	export const CSF_STEPDefaults: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const ANDROID_NDK: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const DRAWHOME: string;
	export const npm_config_init_module: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const CSF_StandardLiteDefaults: string;
	export const TERMINAL: string;
	export const WINDOWPATH: string;
	export const blue: string;
	export const MOTD_SHOWN: string;
	export const GDM_LANG: string;
	export const MANGOHUD: string;
	export const HOME: string;
	export const USERNAME: string;
	export const LANG: string;
	export const HISTFILE: string;
	export const npm_package_version: string;
	export const KEYTIMEOUT: string;
	export const brightMagenta: string;
	export const LLVM_DIR: string;
	export const INIT_CWD: string;
	export const ANDROID_NDK_HOME: string;
	export const CSF_ShadersDirectory: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const CSF_XmlOcafResource: string;
	export const brightBlack: string;
	export const ALACRITTY_SOCKET: string;
	export const npm_lifecycle_script: string;
	export const NVM_DIR: string;
	export const CSF_SHMessage: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const brightRed: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const bar_size: string;
	export const red: string;
	export const CUDA_PATH: string;
	export const CSF_StandardDefaults: string;
	export const CSF_IGESDefaults: string;
	export const DISPLAY: string;
	export const CSF_XCAFDefaults: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const CHROME_EXECUTABLE: string;
	export const GIT_EDITOR: string;
	export const brightBlue: string;
	export const XDG_VTNR: string;
	export const CSF_PluginDefaults: string;
	export const UBUNTU_MENUPROXY: string;
	export const CSF_TObjMessage: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const CASROOT: string;
	export const brightYellow: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const GO111MODULE: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const CSF_XSMessage: string;
	export const MMGT_CLEAR: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const CSF_TObjDefaults: string;
	export const npm_config_node_gyp: string;
	export const ALACRITTY_LOG: string;
	export const GDMSESSION: string;
	export const white: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const green: string;
	export const NVM_BIN: string;
	export const MAIL: string;
	export const brightCyan: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const DRAWDEFAULT: string;
	export const npm_node_execpath: string;
	export const magenta: string;
	export const OLDPWD: string;
	export const GOPATH: string;
	export const npm_package_engines_node: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		black: string;
		brightWhite: string;
		WINDOWID: string;
		cyan: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		yellow: string;
		CSF_MDTVTexturesDirectory: string;
		npm_config_cache: string;
		NVM_INC: string;
		brightGreen: string;
		CSF_DrawPluginDefaults: string;
		NODE: string;
		monitor4: string;
		monitor2: string;
		monitor1: string;
		monitor0: string;
		CSF_LANGUAGE: string;
		CSF_MIGRATION_TYPES: string;
		npm_package_engines_npm: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		CSF_OCCTResourcePath: string;
		npm_config_globalconfig: string;
		CSF_STEPDefaults: string;
		EDITOR: string;
		GTK_MODULES: string;
		ANDROID_NDK: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		DRAWHOME: string;
		npm_config_init_module: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		XAUTHORITY: string;
		CSF_StandardLiteDefaults: string;
		TERMINAL: string;
		WINDOWPATH: string;
		blue: string;
		MOTD_SHOWN: string;
		GDM_LANG: string;
		MANGOHUD: string;
		HOME: string;
		USERNAME: string;
		LANG: string;
		HISTFILE: string;
		npm_package_version: string;
		KEYTIMEOUT: string;
		brightMagenta: string;
		LLVM_DIR: string;
		INIT_CWD: string;
		ANDROID_NDK_HOME: string;
		CSF_ShadersDirectory: string;
		CSF_EXCEPTION_PROMPT: string;
		CSF_XmlOcafResource: string;
		brightBlack: string;
		ALACRITTY_SOCKET: string;
		npm_lifecycle_script: string;
		NVM_DIR: string;
		CSF_SHMessage: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		brightRed: string;
		npm_config_prefix: string;
		USER: string;
		bar_size: string;
		red: string;
		CUDA_PATH: string;
		CSF_StandardDefaults: string;
		CSF_IGESDefaults: string;
		DISPLAY: string;
		CSF_XCAFDefaults: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		CHROME_EXECUTABLE: string;
		GIT_EDITOR: string;
		brightBlue: string;
		XDG_VTNR: string;
		CSF_PluginDefaults: string;
		UBUNTU_MENUPROXY: string;
		CSF_TObjMessage: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		CASROOT: string;
		brightYellow: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		GO111MODULE: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		CSF_XSMessage: string;
		MMGT_CLEAR: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_metrics_registry: string;
		CSF_TObjDefaults: string;
		npm_config_node_gyp: string;
		ALACRITTY_LOG: string;
		GDMSESSION: string;
		white: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		green: string;
		NVM_BIN: string;
		MAIL: string;
		brightCyan: string;
		ALACRITTY_WINDOW_ID: string;
		DRAWDEFAULT: string;
		npm_node_execpath: string;
		magenta: string;
		OLDPWD: string;
		GOPATH: string;
		npm_package_engines_node: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
