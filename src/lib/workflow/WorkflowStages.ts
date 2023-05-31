import { WorkflowContext, WorkflowStageList } from "./WorkflowStage.js";
import { StagePreset } from "./stage/StagePreset.js";

export enum WorkflowStageName {
  Init = "init",
  Build = "build",
  Dev = "dev",
  Preview = "preview",
  Lint = "lint",
  Format = "format",
  Release = "release",
}

export type WorkflowStagePreset = {
  [K in WorkflowStageName]?: WorkflowStageList;
};

export class WorkflowPreset extends StagePreset<WorkflowContext> {}

export type WorkflowPresetList = WorkflowPreset[];

export type WorkflowPresetsMap = Record<string, WorkflowPreset>;
