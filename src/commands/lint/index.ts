import { Flags } from "@oclif/core";
import { BaseCommand } from "../../command/BaseCommand.js";
import { WorkflowStageName } from "../../lib/workflow/WorkflowStages.js";

export default class LintStage extends BaseCommand<typeof LintStage> {
  static description = "Lint sources";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public static readonly flags = {
    help: Flags.help({ char: "h" }),
  };

  public async run() {
    await this.presetRunner.runStage(WorkflowStageName.Lint);
  }
}
