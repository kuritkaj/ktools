import { tsPreset } from "./ts/ts.js";
import { WorkflowPresetsMap } from "../flow/WorkflowStages.js";
import { defaultPreset } from "./default/defaultPreset.js";
import { romePreset } from "./rome/index.js";
import { semanticReleasePreset } from "./release/index.js";
import { GitPlugin } from "../plugins/git/GitPlugin.js";
import { KPluginCtorList } from "../kplugin/KPlugin.js";

export const presets: WorkflowPresetsMap = {
  default: defaultPreset,
  ts: tsPreset,
  rome: romePreset,
  semanticRelease: semanticReleasePreset,
};

export const plugins: KPluginCtorList = [GitPlugin];
