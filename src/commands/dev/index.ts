import { Flags } from "@oclif/core";
import { BaseCommand } from "../../command/BaseCommand.js";
import { WorkflowStageName } from "../../flow/WorkflowStages.js";

export default class DevStage extends BaseCommand<typeof DevStage> {
  static description = "Run dev server";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public static readonly flags = {
    help: Flags.help({ char: "h" }),
  };

  public async run() {
    await this.presetRunner.runStage(WorkflowStageName.Dev);
  }
}
