import { ContextProvider } from "./ContextProvider.js";
import { cosmiconfigSync } from "cosmiconfig";

interface KtoolsConfig {
  presets: string[];
}

const dummyConfig: KtoolsConfig = {
  presets: ["default"],
};

export class ConfigProvider {
  protected moduleName: string;
  protected defaultConfigFile: string;
  protected cnf: ReturnType<typeof cosmiconfigSync>;
  constructor(protected readonly context: ContextProvider) {
    this.moduleName = this.context.tools.name;

    this.defaultConfigFile = this.context.tools.config.filePath.absolutePath;

    this.cnf = cosmiconfigSync(this.moduleName, {});
  }

  getConfig(): KtoolsConfig {
    const projectConfig = this.getProjectConfig();
    const defaultConfig = this.getDefaultConfig();

    return {
      ...defaultConfig,
      ...projectConfig,
    };
  }

  getDefaultConfig(): KtoolsConfig {
    const result = this.cnf.load(this.defaultConfigFile);

    if (!result) {
      return dummyConfig;
    }

    return result.config;
  }

  getProjectConfig(): KtoolsConfig | null {
    const result = this.cnf.search();

    if (!result) {
      return null;
    }

    return result.config;
  }
}
