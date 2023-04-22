import { NpmProvider } from "../context/NpmProvider.js";
import { Task, TaskContext } from "./task/Task.js";
import { TaskRunner } from "./task/TaskRunner.js";
import { execa } from "execa";
import path from "node:path";

export type ProgramArgs = readonly string[];

export class ProgramRunner {
  constructor(
    protected readonly npmProvider: NpmProvider,
    protected readonly taskRunner: TaskRunner,
  ) {}

  async run(processName: string, args: ProgramArgs): Promise<void> {
    await this.taskRunner.run([this.getRunTask(processName, args)]);
  }

  getRunTask<Ctx = TaskContext>(
    processName: string,
    args: ProgramArgs,
  ): Task<Ctx> {
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
      options: {
        persistentOutput: true,
      },
    };
  }

  getRunNpmToolTask(tool: string, args: ProgramArgs): Task {
    interface RunNpmToolTaskCtx {
      toolPath: string;
    }

    return {
      title: "NPM Tool",
      task: (ctx, task) =>
        task.newListr<RunNpmToolTaskCtx>([
          {
            title: "Find tool location",
            task: (ctx, t) => {
              ctx.toolPath = this.npmProvider.getNpmToolLocation(tool);
              t.title = `${t.title}: ${ctx.toolPath}`;
            },
          },
          {
            task: (ctx, subTask) =>
              subTask.newListr([
                {
                  title: "Run tool",
                  enabled: () => !!ctx.toolPath,
                  ...this.getRunTask(ctx.toolPath, args),
                },
                {
                  title: "Run tool with NPX",
                  enabled: () => !ctx.toolPath,
                  ...this.getRunTask("npx", [tool, ...args]),
                },
              ]),
          },
        ]),
    };
  }

  protected getTaskTitle(processName: string, args: ProgramArgs): string {
    const programName = path.basename(processName);
    const argsString = args.join(" ");
    return `${programName} ${argsString}`;
  }
}
