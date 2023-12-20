import { Flags } from "@oclif/core";
import { BaseCommand } from "../../command/BaseCommand.js";
import { WorkflowStageName } from "../../flow/WorkflowStages.js";

export default class PreviewStage extends BaseCommand<typeof PreviewStage> {
  static description = "Preview production build";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public static readonly flags = {
    help: Flags.help({ char: "h" }),
  };

  public async run() {
    await this.presetRunner.runStage(WorkflowStageName.Preview);
  }
}
