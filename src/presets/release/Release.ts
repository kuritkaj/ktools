import { Context } from "../../context/context.js";
import { TaskList } from "../../lib/task/Task.js";
import { WorkflowStage } from "../../flow/WorkflowStage.js";

export class Release extends WorkflowStage {
  run(): TaskList {
    const releaseArgs = ["--debug"];

    if (process.env.NO_CI) {
      releaseArgs.push("--no-ci");
    }

    return [Context.program.getRunNpmToolTask("semantic-release", releaseArgs)];
  }
}
