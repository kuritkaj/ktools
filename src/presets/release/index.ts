import { WorkflowPreset } from "../../lib/workflow/WorkflowStages.js";
import { ReleaseInit } from "./ReleaseInit.js";
import { Release } from "./Release.js";

export const semanticReleasePreset = new WorkflowPreset("Semantic Release", {
  init: [new ReleaseInit()],
  release: [new Release()],
});
