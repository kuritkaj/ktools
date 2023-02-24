import { ContextProvider } from "./ContextProvider.js";
import which from "which";

export class NpmProvider {
  constructor(protected context: ContextProvider) {}

  getNpmToolLocation(npmToolName: string): string {
    const toolsRootPath = this.context.tools.rootPath.absolutePath;
    const toolsPackagesBinPath = this.context.tools.npmToolsPath.absolutePath;

    const paths = [undefined, toolsRootPath, toolsPackagesBinPath];

    const foundPaths = paths
      .map((path) => this.tryToFindPath(npmToolName, path))
      .filter(Boolean);

    return foundPaths[0] || "";
  }

  tryToFindPath(npmToolName: string, basePath?: string): string | null {
    return which.sync(npmToolName, {
      path: basePath,
      nothrow: true,
    });
  }
}
