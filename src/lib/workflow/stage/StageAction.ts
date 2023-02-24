import { TaskList } from "../../task/Task.js";

export type StageActionContext = unknown;
export interface StageAction<Ctx = StageActionContext> {
  preRun(ctx?: StageActionContext): TaskList;
  run(ctx?: StageActionContext): TaskList;
  postRun(ctx?: StageActionContext): TaskList;
}

export type StageActionList<Ctx = StageActionContext> = ReadonlyArray<
  StageAction<Ctx>
>;
