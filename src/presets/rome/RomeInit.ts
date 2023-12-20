import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../flow/WorkflowStage.js";

export class RomeInit extends WorkflowStage {
  run(): TaskList {
    return [Context.fs.copyConfigWhenMissing("rome/rome.json", "rome.json")];
  }
}
