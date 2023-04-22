import { TaskRunner } from "../lib/task/TaskRunner.js";
import { WorkflowPresetRepository } from "../lib/workflow/WorkflowPresetRepository.js";
import { WorkflowPresetRunner } from "../lib/workflow/WorkflowPresetRunner.js";
import { presets } from "../presets/presets.js";
import { ConfigProvider } from "./ConfigProvider.js";
import { StageRunner } from "./StageRunner.js";

export class PresetWorkflowProvider {
  static createRepository() {
    return new WorkflowPresetRepository(presets);
  }

  static createWorkflowPresetRunner(taskRunner: TaskRunner) {
    return new WorkflowPresetRunner(taskRunner, this.createRepository());
  }

  static createPresetRunner(config: ConfigProvider, taskRunner: TaskRunner) {
    return new StageRunner(config, this.createWorkflowPresetRunner(taskRunner));
  }
}
