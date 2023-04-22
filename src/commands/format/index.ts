import { BaseCommand } from "../../command/BaseCommand.js";
import { WorkflowStageName } from "../../lib/workflow/WorkflowStages.js";
import { Flags } from "@oclif/core";

export default class FormatStage extends BaseCommand<typeof FormatStage> {
  static description = "Format sources";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public static readonly flags = {
    help: Flags.help({ char: "h" }),
  };

  public async run() {
    await this.presetRunner.runStage(WorkflowStageName.Format);
  }
}
