import { Context } from "../../context/context.js";
import { Task, TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../flow/WorkflowStage.js";

export const enum ViteConfigFile {
  build = "vite.ts.lib.js",
  dev = "vite.ts.js",
}

export class ViteBase extends WorkflowStage {
  configFile: ViteConfigFile = ViteConfigFile.dev;

  run(): TaskList {
    return [];
  }

  protected runViteTask(taskName: string): Task {
    const configFile = this.getConfingPath();
    return Context.program.getRunNpmToolTask("vite", [
      taskName,
      "-c",
      configFile || "",
    ]);
  }

  protected getConfingPath(): string {
    const configFile = Context.configTemplates.getConfigLocation(
      [this.configFile],
      "vite",
    )?.absolutePath;

    return configFile || "";
  }
}
