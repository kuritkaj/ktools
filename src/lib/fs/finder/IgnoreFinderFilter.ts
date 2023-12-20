import ignore, { Ignore } from "ignore";
import { FinderFilter } from "./Finder.js";
import { FSPath } from "../Location.js";

export class IgnoreFinderFilter implements FinderFilter {
  protected ig: Ignore;
  constructor(ignoreDefinition: string) {
    this.ig = ignore().add(ignoreDefinition);
  }
  async filter(path: FSPath) {
    return !this.ig.ignores(path);
  }
}
