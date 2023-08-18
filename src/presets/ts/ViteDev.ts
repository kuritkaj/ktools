import { TaskList } from "../../lib/task/Task.js";
import { ViteBase } from "./ViteBase.js";

export class ViteDev extends ViteBase {
  run(): TaskList {
    return [this.runViteTask("dev")];
  }
}
