import jetpack from "fs-jetpack";
import { ContextProvider } from "../context/ContextProvider.js";
import { createTaskGroup, Task } from "../lib/task/Task.js";
import { Files } from "../lib/fs/Files.js";

export class FSTasks {
  constructor(protected context: ContextProvider, protected files: Files) {}

  projectPathExists(path: string): Task<{ projectConfigExists: boolean }> {
    const file = this.context.project.rootPath.join(path).relativePath;

    return {
      title: `[FS] File exist ${file}`,
      task: async (ctx, task) => {
        ctx.projectConfigExists = !!(await this.files.exists(file));

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
        await this.files.copyFile(localFile, projectFile);
        task.title = `[FS] New config created ${projectFile}`;
      },
    };
  }

  moveConfig(original: string, destination: string): Task {
    const originalFile =
      this.context.project.rootPath.join(original).relativePath;
    const destinationFile =
      this.context.project.rootPath.join(destination).relativePath;

    return {
      title: `[FS] Move config ${originalFile}`,
      task: async (ctx, task) => {
        await this.files.moveFile(originalFile, destinationFile);
        task.title = `[FS] Config moved ${destinationFile}`;
      },
    };
  }

  copyConfigWhenMissing(localConfig: string, destination: string): Task {
    return createTaskGroup("[FS] Copy config when missing", (ctx) => [
      this.projectPathExists(destination),
      {
        skip: (ctx) => ctx.projectConfigExists,
        ...this.copyConfig(localConfig, destination),
      },
    ]);
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
