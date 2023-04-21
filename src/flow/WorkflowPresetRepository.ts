import {
  WorkflowPresetList,
  WorkflowPresetsMap,
  WorkflowStageName,
} from "./WorkflowStages.js";

export class WorkflowPresetRepository {
  constructor(protected readonly presets: WorkflowPresetsMap) {}

  getPresetsWithStage(
    presetNames: string[],
    stageName: WorkflowStageName,
  ): WorkflowPresetList {
    return presetNames.reduce<WorkflowPresetList>((acc, name) => {
      const preset = this.presets[name];

      if (preset && preset.hasAction(stageName)) {
        acc.push(preset);
      }

      return acc;
    }, []);
  }

  getPresetNames(): string[] {
    return Object.keys(this.presets);
  }
}
