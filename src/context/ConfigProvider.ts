import { ContextProvider } from "./ContextProvider.js";
import { cosmiconfigSync } from "cosmiconfig";
import path from "path";
import { Finder } from "../lib/fs/finder/Finder.js";
import { IgnoreFinderFilter } from "../lib/fs/finder/IgnoreFinderFilter.js";
import { Files } from "../lib/fs/Files.js";

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

  async getConfigAsync(): Promise<KtoolsConfig> {
    const gitIgnoreFilePath = this.context.project.ignoreFile.relativePath;

    const fs = new Files();
    const gitIgnoreFile = await fs.readIfExists(".gitignore");

    const filters = [];

    if (gitIgnoreFile) {
      filters.push(new IgnoreFinderFilter(gitIgnoreFile));
    }

    const finder = new Finder({
      filters,
    });

    const files = await finder.findMatching(["**/*.*?js", "**/*.ts"]);

    // console.log(this.context.project.ignoreFile.relativePath);
    // console.log(files);
    console.log(files.map(getFirstDirectory));

    return this.getConfig();
  }
}

function getFirstDirectory(filePath: string): string {
  const firstDirectory = path.dirname(filePath).split(path.sep)[0];
  return firstDirectory || ".";
}
