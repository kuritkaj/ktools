import { ViteBase } from "./ViteBase.js";
import { TaskList } from "../../lib/task/Task.js";

export class VitePreview extends ViteBase {
  run(): TaskList {
    return [this.runViteTask("preview")];
  }
}
