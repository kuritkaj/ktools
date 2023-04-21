import { TaskList } from "../task/Task.js";

export type ActionName = string;

export type ActionContex = unknown;
export interface Action<Ctx = ActionContex> {
  preRun(ctx?: ActionContex): TaskList;
  run(ctx?: ActionContex): TaskList;
  postRun(ctx?: ActionContex): TaskList;
}

export type ActionList<Ctx = ActionContex> = ReadonlyArray<Action<Ctx>>;
