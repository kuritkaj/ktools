import { BaseCommand } from "../../command/BaseCommand.js";
import { WorkflowStageName } from "../../lib/workflow/WorkflowStages.js";
import { Flags } from "@oclif/core";

export default class ReleaseStage extends BaseCommand<typeof ReleaseStage> {
  static description = "Release sources action";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public static readonly flags = {
    help: Flags.help({ char: "h" }),
  };

  public async run() {
    await this.presetRunner.runStage(WorkflowStageName.Release);
  }
}
