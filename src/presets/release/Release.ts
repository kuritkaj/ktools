import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../lib/workflow/WorkflowStage.js";

export class Release extends WorkflowStage {
  run(): TaskList {
    return [
      Context.program.getRunNpmToolTask("semantic-release", [
        "--debug",
        "--no-ci",
      ]),
    ];
  }
}
