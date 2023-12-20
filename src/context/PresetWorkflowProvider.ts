import { WorkflowPresetRepository } from "../flow/WorkflowPresetRepository.js";
import { presets } from "../presets/presets.js";
import { ConfigProvider } from "./ConfigProvider.js";
import { WorkflowPresetRunner } from "../flow/WorkflowPresetRunner.js";
import { TaskRunner } from "../lib/task/TaskRunner.js";
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
