import { ConfigProvider } from "./ConfigProvider.js";
import { WorkflowPresetRunner } from "../lib/workflow/WorkflowPresetRunner.js";

export class StageRunner {
  protected enabledPresets: string[];
  constructor(
    protected readonly config: ConfigProvider,
    protected readonly workflowRunner: WorkflowPresetRunner,
  ) {
    this.enabledPresets = this.config.getConfig().presets;
  }

  runStage(name: string) {
    return this.workflowRunner.run(this.enabledPresets, name);
  }
}
