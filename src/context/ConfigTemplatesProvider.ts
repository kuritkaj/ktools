import { FSLocation } from "../lib/fs/Location";
import { LocationPath, LocationPathList } from "../lib/fs/LocationResolver.js";
import { ContextProvider } from "./ContextProvider.js";

export class ConfigTemplatesProvider {
  constructor(protected context: ContextProvider) {}

  getConfigLocation = (
    configs: LocationPathList,
    localConfigDir: LocationPath = ".",
  ): FSLocation | undefined => {
    const projectConfigs = configs.map((name) => this.getProjectConfig(name));

    const localConfigs = configs.flatMap((name) => [
      this.getLocalConfig(name, localConfigDir),
      this.getLocalConfig(`${name}.template`, localConfigDir),
    ]);

    return [...projectConfigs, ...localConfigs].find((loc) => loc.exists());
  };
  getLocalConfig = (path: LocationPath, localConfigDir: LocationPath = ".") => {
    return this.context.tools.templatesPath.join(localConfigDir, path);
  };
  getProjectConfig = (path: LocationPath) => {
    return this.context.project.rootPath.join(path);
  };
}
