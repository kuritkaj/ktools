import { ViteBuild } from "./ViteBuild.js";
import { WorkflowPreset } from "../../flow/WorkflowStages.js";
import { ViteDev } from "./ViteDev.js";
import { VitePreview } from "./VitePreview.js";
import { ViteInit } from "./ViteInit.js";

export const tsPreset = new WorkflowPreset("TS", {
  init: [new ViteInit()],
  build: [new ViteBuild()],
  dev: [new ViteDev()],
  preview: [new VitePreview()],
});
