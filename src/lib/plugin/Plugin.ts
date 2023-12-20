import { ActionList, ActionName } from "../flow/Action.js";
import { ActionGroupPure } from "../flow/ActionGroup.js";

export type PluginConfig = unknown;
export type PluginName = string;
export type PluginActionName = ActionName;
export type PluginActionNameList = PluginActionName[];
export type PluginActionList<Ctx extends PluginConfig = PluginConfig> =
  ActionList<Ctx>;
export type PluginActionsGroup<
  Action extends PluginActionName = PluginActionName,
  Ctx extends PluginConfig = PluginConfig,
> = ActionGroupPure<Action, Ctx>;
export type PluginCtorList<
  Actions extends PluginActionName,
  Config extends PluginConfig = PluginConfig,
> = typeof GenericPlugin<Actions, Config>[];

export class GenericPlugin<
  PluginAction extends PluginActionName = PluginActionName,
  Config extends PluginConfig = PluginConfig,
> {
  static pluginName: PluginName;

  constructor(protected readonly config: Partial<Config>) {}

  get actions(): PluginActionsGroup {
    return {};
  }

  getActionHandlers(name: PluginAction): PluginActionList | undefined {
    return this.actions[name];
  }

  hasActionHandler(name: PluginAction): boolean {
    return !!this.getActionHandlers(name);
  }
}
