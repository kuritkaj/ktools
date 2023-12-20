import { WorkflowStage } from "../../flow/WorkflowStage.js";
import { TaskList } from "../../lib/task/Task.js";
import { Context } from "../../context/context.js";

export class HandleConfig extends WorkflowStage {
  run(): TaskList {
    const { context } = Context;

    return [
      Context.fs.copyConfigWhenMissing(
        context.tools.config.filePath.absolutePath,
        context.tools.config.fileName,
      ),
    ];
  }
}
