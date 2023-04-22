import { WorkflowPresetList, WorkflowPresetsMap } from "./WorkflowStages.js";

export class WorkflowPresetRepository {
  constructor(protected readonly presets: WorkflowPresetsMap) {}

  getPresetsWithStage(
    presetNames: string[],
    stageName: string,
  ): WorkflowPresetList {
    return presetNames.reduce<WorkflowPresetList>((acc, name) => {
      const preset = this.presets[name];

      if (preset?.hasStage(stageName)) {
        acc.push(preset);
      }

      return acc;
    }, []);
  }

  getPresetNames(): string[] {
    return Object.keys(this.presets);
  }
}
