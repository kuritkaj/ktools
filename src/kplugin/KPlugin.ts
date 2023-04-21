import { GenericPlugin, PluginConfig } from "../lib/plugin/Plugin.js";
import { ContextProvider } from "../context/ContextProvider.js";

export const enum KPluginAction {
  Init = "init",
  Generate = "generate",
  Build = "build",
  Dev = "dev",
  Preview = "preview",
  Lint = "lint",
  Format = "format",
  Release = "release",
}

export type KPluginCtorList<Config extends PluginConfig = PluginConfig> =
  typeof KPlugin<Config>[];

export class KPlugin<
  Config extends PluginConfig = PluginConfig,
> extends GenericPlugin<KPluginAction, Config> {
  constructor(
    protected readonly context: ContextProvider,
    protected readonly config: Partial<Config>,
  ) {
    super(config);
  }
}
