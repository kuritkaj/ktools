import { Context } from "../../context/context.js";
import { Task, TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../flow/WorkflowStage.js";
import { ProgramArgs } from "../../task/ProgramRunner.js";

export class RomeBase extends WorkflowStage {
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
