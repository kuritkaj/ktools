import { FSTasks } from "../lib/FSTasks.js";
import { ProgramRunner } from "../lib/ProgramRunner.js";
import { TaskRunner } from "../lib/task/TaskRunner.js";
import { ConfigProvider } from "./ConfigProvider.js";
import { ConfigTemplatesProvider } from "./ConfigTemplatesProvider.js";
import { ContextProvider } from "./ContextProvider.js";
import { NpmProvider } from "./NpmProvider.js";
import { PresetWorkflowProvider } from "./PresetWorkflowProvider.js";

export class Context {
  static taskRunner = new TaskRunner();
  static context = new ContextProvider();
  static configTemplates = new ConfigTemplatesProvider(this.context);
  static config = new ConfigProvider(this.context);
  static npmProvider = new NpmProvider(this.context);
  static program = new ProgramRunner(this.npmProvider, this.taskRunner);
  static fs = new FSTasks(this.context);
  static presetRunner = PresetWorkflowProvider.createPresetRunner(
    this.config,
    this.taskRunner,
  );
}
