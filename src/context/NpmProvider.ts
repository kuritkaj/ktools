import { ContextProvider } from "./ContextProvider.js";
import which from "which";

export class NpmProvider {
  constructor(protected context: ContextProvider) {}

  getNpmToolLocation(npmToolName: string): string {
    return which.sync(npmToolName);
  }
}
