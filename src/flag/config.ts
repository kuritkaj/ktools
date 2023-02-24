import { Flags } from "@oclif/core";
import { Context } from "../context/context.js";
import { LocationPath, LocationPathList } from "../lib/fs/LocationResolver.js";
import { FlagProps, OptionFlag } from "@oclif/core/lib/interfaces/parser";

type ConfigFlagOptions = {
  configFiles: LocationPathList;
  localConfigDir?: LocationPath;
};

export const ConfigFlag = (
  options: ConfigFlagOptions & Partial<FlagProps>,
): OptionFlag<LocationPath> => {
  const { configFiles, localConfigDir, ...flOpts } = options;

  return Flags.file({
    char: "c",
    description: "config file path",
    exists: true,
    ...flOpts,
    default: async () =>
      Context.configTemplates.getConfigLocation(configFiles, localConfigDir)
        ?.absolutePath || "",
  });
};
