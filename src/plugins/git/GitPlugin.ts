import { FSPath } from "../../lib/fs/Location.js";
import { HandleConfig } from "./HandleConfig.js";
import { KPlugin } from "../../kplugin/KPlugin.js";

interface GitPluginConfig {
  gitIgnoreTemplate: FSPath;
}

interface GitPluginUserConfig {
  hooks: {
    preCommit: boolean;
    lint: boolean;
  };
}

export class GitPlugin extends KPlugin<GitPluginConfig> {
  static pluginName = "git";

  get actions() {
    return {
      init: [new HandleConfig()],
    };
  }
}
