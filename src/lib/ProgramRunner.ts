import { execa } from "execa";
import { NpmProvider } from "../context/NpmProvider.js";
import { TaskRunner } from "./task/TaskRunner.js";
import path from "node:path";
import { Task } from "./task/Task.js";

export type ProgramArgs = readonly string[];

export class ProgramRunner {
  constructor(
    protected readonly npmProvider: NpmProvider,
    protected readonly taskRunner: TaskRunner,
  ) {}

  async run(processName: string, args: ProgramArgs): Promise<void> {
    await this.taskRunner.run([this.getRunTask(processName, args)]);
  }

  getRunTask(processName: string, args: ProgramArgs): Task {
    return {
      title: this.getTaskTitle(processName, args),
      async task(ctx, task) {
        const t = execa(processName, args, {
          cleanup: true,
          preferLocal: true,
          env: { ...process.env, FORCE_COLOR: "1" },
        });

        t.stdout?.pipe(task.stdout());
        t.stderr?.pipe(task.stdout());

        await t;
      },
    };
  }

  async runNpmTool(tool: string, args: ProgramArgs): Promise<void> {
    const bin = this.npmProvider.getNpmToolLocation(tool);

    return await this.run(bin, args);
  }
  getRunNpmToolTask(tool: string, args: ProgramArgs): Task {
    const bin = this.npmProvider.getNpmToolLocation(tool);

    return this.getRunTask(bin, args);
  }

  protected getTaskTitle(processName: string, args: ProgramArgs): string {
    const programName = path.basename(processName);
    const argsString = args.join(" ");
    return `${programName} ${argsString}`;
  }
}
