import { TaskList } from "../../lib/task/Task.js";
import { ViteBase, ViteConfigFile } from "./ViteBase.js";

export class ViteBuild extends ViteBase {
  configFile = ViteConfigFile.build;

  run(): TaskList {
    return [this.runViteTask("build")];
  }
}
