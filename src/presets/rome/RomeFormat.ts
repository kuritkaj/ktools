import { TaskList } from "../../lib/task/Task.js";
import { RomeBase } from "./RomeBase.js";

export class RomeFormat extends RomeBase {
  run(): TaskList {
    return [this.runRomeTask("format", ["--write"])];
  }
}
