import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";

export class ReleaseInit extends WorkflowStage {
  run(): TaskList {
    return [
      Context.fs.projectPathExists("release.config.cjs"),
      {
        skip: (ctx) => ctx.projectConfigExists,
        ...Context.fs.copyConfig("release.config.cjs", "release.config.cjs"),
      },
    ];
  }
}
