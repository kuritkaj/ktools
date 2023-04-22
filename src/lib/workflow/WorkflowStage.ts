import { TaskList } from "../task/Task.js";
import { StageAction } from "./stage/StageAction.js";

export type WorkflowContext = any;
export type WorkflowStageList = WorkflowStage[];

export class WorkflowStage implements StageAction<WorkflowContext> {
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
