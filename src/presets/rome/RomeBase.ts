import { Context } from "../../context/context.js";
import { ProgramArgs } from "../../lib/ProgramRunner.js";
import { Task, TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";
import fs from "node:fs";

export enum RomeConfigFile {
  base = "rome.json",
}

export class RomeBase extends WorkflowStage {
  configFile: RomeConfigFile = RomeConfigFile.base;

  run(): TaskList {
    return [];
  }

  protected runRomeTask(taskName: string, args: ProgramArgs = []): Task {
    const configDir = this.getConfingPath();
    console.log(configDir);
    return Context.program.getRunNpmToolTask("rome", [
      taskName,
      ...args,
      "--config-path",
      configDir,
      Context.context.project.srcPath.relativePath,
    ]);
  }

  protected getConfingPath(): string {
    const configFile = Context.configTemplates.getConfigLocation(
      [this.configFile],
      "rome",
    );

    if (!configFile) {
      return "./";
    }

    return configFile.getParentAbsolutePath();
  }
}
