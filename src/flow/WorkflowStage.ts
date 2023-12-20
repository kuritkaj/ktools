import { Action } from "../lib/flow/Action.js";
import { TaskList } from "../lib/task/Task.js";

export type WorkflowContext = any;
export type WorkflowStageList = WorkflowStage[];

export class WorkflowStage implements Action<WorkflowContext> {
  postRun(ctx?: WorkflowContext): TaskList {
    return [];
  }

  preRun(ctx?: WorkflowContext): TaskList {
    return [];
  }

  run(ctx?: WorkflowContext): TaskList {
    return [];
  }
}
