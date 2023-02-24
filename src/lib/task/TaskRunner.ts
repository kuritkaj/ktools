import { Listr } from "listr2";
import { createTaskGroup, TaskContext, TaskList, TaskWrapper } from "./Task.js";

export class TaskRunner {
  run<Ctx = TaskContext>(tasks: TaskList<Ctx>, ctx?: Ctx): Promise<Ctx> {
    return new Listr(tasks, {
      ctx,
      renderer: "default",
      rendererOptions: {
        collapse: false,
        showSubtasks: true,
        clearOutput: false,
        collapseErrors: false,
        persistentOutput: true,
        removeEmptyLines: true,
      },
    }).run(ctx);
  }

  runGrouped<Ctx = TaskContext>(
    groupName: string,
    tasks: (ctx: Ctx, task: TaskWrapper<Ctx>) => TaskList<Ctx>,
    ctx?: Ctx,
  ): Promise<Ctx> {
    return this.run([createTaskGroup(groupName, tasks)], ctx);
  }
}
