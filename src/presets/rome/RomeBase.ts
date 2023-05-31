import { Context } from "../../context/context.js";
import { ProgramArgs } from "../../lib/ProgramRunner.js";
import { Task, TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";

export enum RomeConfigFile {
  base = "rome.json",
}

export class RomeBase extends WorkflowStage {
  configFile: RomeConfigFile = RomeConfigFile.base;

  run(): TaskList {
    return [];
  }

  protected runRomeTask(taskName: string, args: ProgramArgs = []): Task {
    return Context.program.getRunNpmToolTask("rome", [
      taskName,
      ...args,
      Context.context.project.srcPath.relativePath,
    ]);
  }
}
