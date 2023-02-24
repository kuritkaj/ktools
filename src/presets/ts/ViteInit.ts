import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";

export class ViteInit extends WorkflowStage {
  run(): TaskList {
    return [
      Context.fs.projectPathExists("tsconfig.json"),
      // Copy tsconfig.json which extends the ktools/templates/vite/tsconfig.json
      // IDE will be aware of TS features we are using
      // Any external tool depending on TS config can use it
      {
        skip: (ctx) => ctx.projectConfigExists,
        ...Context.fs.copyConfig("vite/tsconfig.extends.json", "tsconfig.json"),
      },
    ];
  }
}
