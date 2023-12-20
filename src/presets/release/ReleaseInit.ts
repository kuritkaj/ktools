import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../flow/WorkflowStage.js";

export class ReleaseInit extends WorkflowStage {
  run(): TaskList {
    return [
      Context.fs.copyConfigWhenMissing(
        "release.config.cjs",
        "release.config.cjs",
      ),
    ];
  }
}
