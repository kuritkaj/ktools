import { TaskList } from "../../lib/task/Task.js";
import { RomeBase } from "./RomeBase.js";

export class RomeLint extends RomeBase {
  run(): TaskList {
    return [this.runRomeTask("check", ["--apply"])];
  }
}
