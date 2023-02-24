import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";
import { createTaskGroup, TaskList } from "../../lib/task/Task.js";
import { Context } from "../../context/context.js";

export class HandleConfig extends WorkflowStage {
  run(): TaskList {
    const { context } = Context;

    return [
      createTaskGroup("Check Config", (groupCtx, groupTask) => {
        return [
          Context.fs.projectPathExists(context.tools.config.fileName),
          {
            skip: (ctx) => ctx.projectConfigExists,
            ...Context.fs.copyConfig(
              context.tools.config.filePath.absolutePath,
              context.tools.config.fileName,
            ),
          },
        ];
      }),
    ];
  }
}
