import { ContextProvider } from "../context/ContextProvider.js";
import { Task } from "./task/Task.js";
import jetpack from "fs-jetpack";

export class FSTasks {
  constructor(protected context: ContextProvider) {}

  projectPathExists(path: string): Task<{ projectConfigExists: boolean }> {
    const file = this.context.project.rootPath.join(path).relativePath;

    return {
      title: `[FS] File exist ${file}`,
      task: async (ctx, task) => {
        ctx.projectConfigExists = !!(await jetpack.existsAsync(file));

        task.output = `${ctx.projectConfigExists}`;
      },
    };
  }

  copyConfig(localConfig: string, destination: string): Task {
    const localFile =
      this.context.tools.templatesPath.join(localConfig).absolutePath;
    const projectFile =
      this.context.project.rootPath.join(destination).relativePath;

    return {
      title: `[FS] Copy config ${projectFile}`,
      task: async (ctx, task) => {
        await jetpack.copyAsync(localFile, projectFile);
        task.title = `[FS] New config created ${projectFile}`;
      },
    };
  }

  projectWriteFile(destination: string, content: any): Task {
    const projectFile =
      this.context.project.rootPath.join(destination).relativePath;

    return {
      title: `[FS] Write file ${projectFile}`,
      task: async () => {
        await jetpack.writeAsync(projectFile, content);
      },
    };
  }
}
