import { WorkflowPreset } from "../../lib/workflow/WorkflowStages.js";
import { Release } from "./Release.js";
import { ReleaseInit } from "./ReleaseInit.js";

export const semanticReleasePreset = new WorkflowPreset("Semantic Release", {
  init: [new ReleaseInit()],
  release: [new Release()],
});
