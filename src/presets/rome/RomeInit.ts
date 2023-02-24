import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";

export class RomeInit extends WorkflowStage {
  run(): TaskList {
    return [
      Context.fs.projectPathExists("rome.json"),
      {
        skip: (ctx) => ctx.projectConfigExists,
        ...Context.fs.copyConfig("rome/rome.json", "rome.json"),
      },
    ];
  }
}
