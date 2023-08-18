import { Context } from "../context/context.js";
import { ConfigFlag } from "../flag/config.js";
import { WorkflowStageName } from "../lib/workflow/WorkflowStages.js";
import { Command } from "@oclif/core";
import { InferredFlags } from "@oclif/core/lib/interfaces";
import { InferredArgs } from "@oclif/core/lib/interfaces/args";
import { WorkflowStageName } from "../flow/WorkflowStages.js";

export type Flags<T extends typeof Command> = InferredFlags<
  typeof BaseCommand["baseFlags"] & T["flags"]
>;
export type Args<T extends typeof Command> = InferredArgs<T["args"]>;

export abstract class BaseCommand<T extends typeof Command> extends Command {
  context = Context.context;
  taskRunner = Context.taskRunner;
  configProvider = Context.configTemplates;
  npmProvider = Context.npmProvider;
  program = Context.program;

  presetRunner = Context.presetRunner;

  toolsConfig = Context.config;

  static baseFlags = {
    ignoreFile: ConfigFlag({
      configFiles: [".gitignore"],
      char: "i",
    }),
  };

  async getParsed() {
    const { flags, args } = await this.parse(this.ctor);

    return { flags, args } as { flags: Flags<T>; args: Args<T> };
  }

  async init() {
    await super.init();

    await this.presetRunner.runStage(WorkflowStageName.Init);
  }
}
