import { Flags } from "@oclif/core";
import { BaseCommand } from "../../command/BaseCommand.js";
import { WorkflowStageName } from "../../lib/workflow/WorkflowStages.js";

export default class BuildStage extends BaseCommand<typeof BuildStage> {
  static description = "Build sources action";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public static readonly flags = {
    help: Flags.help({ char: "h" }),
  };

  public async run() {
    await this.presetRunner.runStage(WorkflowStageName.Build);
  }
}
