import { WorkflowPreset } from "../../lib/workflow/WorkflowStages.js";
import { ViteBuild } from "./ViteBuild.js";
import { ViteDev } from "./ViteDev.js";
import { ViteInit } from "./ViteInit.js";
import { VitePreview } from "./VitePreview.js";

export const tsPreset = new WorkflowPreset("TS", {
  init: [new ViteInit()],
  build: [new ViteBuild()],
  dev: [new ViteDev()],
  preview: [new VitePreview()],
});
