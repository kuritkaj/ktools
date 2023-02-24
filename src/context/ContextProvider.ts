import { FSLocation } from "../lib/fs/Location.js";

const toolsRootPath = new URL("../../", import.meta.url).pathname;
const projectRootPath = process.cwd();

export class ContextProvider {
  tools: {
    name: string;
    rootPath: FSLocation;
    templatesPath: FSLocation;
    npmToolsPath: FSLocation;
    config: {
      fileName: string;
      filePath: FSLocation;
    };
  };
  project: {
    templatesPath: FSLocation;
    distPath: FSLocation;
    testPath: FSLocation;
    srcPath: FSLocation;
    rootPath: FSLocation;
  };

  constructor() {
    const toolsRootLocation = new FSLocation(toolsRootPath);
    const projectRootLocation = new FSLocation(projectRootPath);

    const toolsTemplates = toolsRootLocation.join("templates");

    const configFileName = ".ktoolsrc.json";

    this.tools = {
      name: "ktools",
      rootPath: toolsRootLocation,
      templatesPath: toolsRootLocation.join("templates"),
      npmToolsPath: toolsRootLocation.join("node_modules", ".bin"),
      config: {
        fileName: configFileName,
        filePath: toolsTemplates.join(configFileName),
      },
    } as const;

    this.project = {
      rootPath: projectRootLocation,
      srcPath: projectRootLocation.join("src"),
      distPath: projectRootLocation.join("dist"),
      testPath: projectRootLocation.join("test"),
      templatesPath: projectRootLocation.join("templates"),
    } as const;
  }
}
