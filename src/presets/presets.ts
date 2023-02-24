import { tsPreset } from "./ts/ts.js";
import { WorkflowPresetsMap } from "../lib/workflow/WorkflowStages.js";
import { defaultPreset } from "./default/defaultPreset.js";
import { romePreset } from "./rome/index.js";
import { semanticReleasePreset } from "./release/index.js";

export const presets: WorkflowPresetsMap = {
  default: defaultPreset,
  ts: tsPreset,
  rome: romePreset,
  semanticRelease: semanticReleasePreset,
};
