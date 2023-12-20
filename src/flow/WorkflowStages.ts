import { WorkflowContext } from "./WorkflowStage.js";
import { ActionGroup, ActionGroupPure } from "../lib/flow/ActionGroup.js";

export enum WorkflowStageName {
  Init = "init",
  Generate = "generate",
  Build = "build",
  Dev = "dev",
  Preview = "preview",
  Lint = "lint",
  Format = "format",
  Release = "release",
}
export class WorkflowPreset extends ActionGroup<
  WorkflowStageName,
  WorkflowContext
> {}

export type KActions = ActionGroupPure<WorkflowStageName, WorkflowContext>;

export type WorkflowPresetList = WorkflowPreset[];

export type WorkflowPresetsMap = Record<string, WorkflowPreset>;
