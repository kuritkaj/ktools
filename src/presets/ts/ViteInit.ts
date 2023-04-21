import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../flow/WorkflowStage.js";

export class ViteInit extends WorkflowStage {
  run(): TaskList {
    return [
      // Copy tsconfig.json which extends the ktools/templates/vite/tsconfig.json
      // IDE will be aware of TS features we are using
      // Any external tool depending on TS config can use it
      Context.fs.copyConfigWhenMissing(
        "vite/tsconfig.extends.json",
        "tsconfig.json",
      ),
    ];
  }
}
