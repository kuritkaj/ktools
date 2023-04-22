import { WorkflowPresetsMap } from "../lib/workflow/WorkflowStages.js";
import { defaultPreset } from "./default/defaultPreset.js";
import { semanticReleasePreset } from "./release/index.js";
import { romePreset } from "./rome/index.js";
import { tsPreset } from "./ts/ts.js";

export const presets: WorkflowPresetsMap = {
  default: defaultPreset,
  ts: tsPreset,
  rome: romePreset,
  semanticRelease: semanticReleasePreset,
};
