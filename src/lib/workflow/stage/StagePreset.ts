import { StageActionContext, StageActionList } from "./StageAction.js";

export type StagePresetMap<Ctx = StageActionContext> = Record<
  string,
  StageActionList<Ctx>
>;
export type StagePresetMapList<Ctx = StageActionContext> = ReadonlyArray<
  StagePreset<Ctx>
>;
export class StagePreset<Ctx = StageActionContext> {
  constructor(
    public readonly name: string,
    protected readonly stageMap: StagePresetMap<Ctx>,
  ) {}

  getActionsForStage(name: string): StageActionList | undefined {
    return this.stageMap[name];
  }

  hasStage(name: string): boolean {
    return !!this.getActionsForStage(name);
  }
}
