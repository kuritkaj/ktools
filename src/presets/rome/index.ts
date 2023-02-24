import { WorkflowPreset } from "../../lib/workflow/WorkflowStages.js";
import { RomeFormat } from "./RomeFormat.js";
import { RomeInit } from "./RomeInit.js";
import { RomeLint } from "./RomeLint.js";

export const romePreset = new WorkflowPreset("Rome", {
  init: [new RomeInit()],
  lint: [new RomeLint()],
  format: [new RomeFormat()],
});
