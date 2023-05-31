import { Context } from "../../context/context.js";
import { TaskList, createTaskGroup } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";

export class HandleConfig extends WorkflowStage {
  run(): TaskList {
    const { context } = Context;

    return [
      createTaskGroup("Check Config", () => {
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
