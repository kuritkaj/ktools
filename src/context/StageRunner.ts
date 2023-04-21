import { ConfigProvider } from "./ConfigProvider.js";
import { WorkflowPresetRunner } from "../flow/WorkflowPresetRunner.js";
import { WorkflowStageName } from "../flow/WorkflowStages.js";

export class StageRunner {
  protected enabledPresets: string[];
  constructor(
    protected readonly config: ConfigProvider,
    protected readonly workflowRunner: WorkflowPresetRunner,
  ) {
    this.enabledPresets = this.config.getConfig().presets;
  }

  async runStage(name: WorkflowStageName) {
    return this.workflowRunner.run(this.enabledPresets, name);
  }
}
