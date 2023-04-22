import { Task, createTaskGroup } from "../task/Task.js";
import { TaskRunner } from "../task/TaskRunner.js";
import { WorkflowPresetRepository } from "./WorkflowPresetRepository.js";
import { WorkflowContext, WorkflowStage } from "./WorkflowStage.js";
import { WorkflowPreset, WorkflowPresetList } from "./WorkflowStages.js";

export class WorkflowPresetRunner {
  constructor(
    protected readonly taskRunner: TaskRunner,
    protected readonly presets: WorkflowPresetRepository,
  ) {}
  async run(
    presetNames: string[],
    stageName: string,
    ctx?: WorkflowContext,
  ): Promise<void> {
    const presets = this.presets.getPresetsWithStage(presetNames, stageName);

    await this.runStageOnPresets(presets, stageName, ctx);
  }

  async runStageOnPresets(
    presets: WorkflowPresetList,
    stageName: string,
    ctx?: WorkflowContext,
  ): Promise<void> {
    const tsk = presets.map((preset) => {
      return this.mapPresetToTask(preset, stageName, ctx);
    });

    await this.taskRunner.run(tsk);
  }

  mapPresetToTask(
    preset: WorkflowPreset,
    stageName: string,
    ctx?: WorkflowContext,
  ): Task {
    const stages = preset.getActionsForStage(stageName) || [];

    return createTaskGroup(`${preset.name}`, () =>
      stages.map((stage) => {
        return this.mapStageToTask(stage, ctx);
      }),
    );
  }

  mapStageToTask(stage: WorkflowStage, ctx?: WorkflowContext): Task {
    return createTaskGroup(stage.constructor.name, () => [
      ...stage.preRun(ctx),
      ...stage.run(ctx),
      ...stage.postRun(ctx),
    ]);
  }
}
