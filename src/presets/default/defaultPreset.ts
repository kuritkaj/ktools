import { WorkflowPreset } from "../../lib/workflow/WorkflowStages.js";
import { HandleConfig } from "./HandleConfig.js";

export const defaultPreset = new WorkflowPreset("Default", {
  init: [new HandleConfig()],
});
