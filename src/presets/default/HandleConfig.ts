import { WorkflowStage } from "../../flow/WorkflowStage.js";
import { TaskList } from "../../lib/task/Task.js";
import { Context } from "../../context/context.js";

export class HandleConfig extends WorkflowStage {
  run(): TaskList {
    const configFile = Context.context.tools.config.fileName;
    return [Context.fs.copyConfigWhenMissing(configFile, configFile)];
  }
}
