import { ActionContex, ActionList, ActionName } from "./Action.js";

export type ActionGroupPure<
  AN extends ActionName = ActionName,
  Ctx = ActionContex,
> = Partial<Record<AN, ActionList<Ctx>>>;

export type ActionGroupList<
  AN extends ActionName = ActionName,
  Ctx = ActionContex,
> = ReadonlyArray<ActionGroup<AN, Ctx>>;

export class ActionGroup<
  AN extends ActionName = ActionName,
  Ctx = ActionContex,
> {
  constructor(
    public readonly name: string,
    protected readonly theMap: ActionGroupPure<AN, Ctx>,
  ) {}

  getActions(name: AN): ActionList | undefined {
    return this.theMap[name];
  }

  hasAction(name: AN): boolean {
    return !!this.getActions(name);
  }
}
