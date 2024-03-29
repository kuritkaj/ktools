import { ListrErrorTypes, ListrTask, ListrTaskWrapper } from "listr2";

export type TaskContext = any;
export type Task<Ctx = TaskContext> = ListrTask<Ctx>;
export type TaskWrapper<Ctx = TaskContext> = ListrTaskWrapper<Ctx, any>;
export type TaskList<Ctx = TaskContext> = Task<Ctx>[];
export const TaskErrorType = ListrErrorTypes;

export const createTaskGroup = <Ctx = TaskContext>(
  name: string,
  tasks: (ctx: Ctx, task: TaskWrapper<Ctx>) => TaskList<Ctx>,
): Task<Ctx> => ({
  title: name,
  task: (ctx, task) => {
    return task.newListr(tasks(ctx, task), {
      ctx,
      rendererOptions: {
        collapse: false,
        showSubtasks: true,
        clearOutput: false,
        collapseErrors: false,
        persistentOutput: true,
        removeEmptyLines: true,
      },
      concurrent: false,
    });
  },
});
