import fs from "node:fs";
import {
  join as pathJoin,
  resolve as pathResolve,
  relative as pathResolveRelative,
  parse as pathParse,
  isAbsolute,
} from "node:path";
import { ParsedPath } from "path";

export type LocationPath = string;
export type LocationPathList = LocationPath[];

export class LocationResolver {
  join(...paths: LocationPathList): LocationPath {
    return pathJoin(...paths);
  }

  resolve(...paths: LocationPathList): LocationPath {
    return pathResolve(...paths);
  }

  parse(path: LocationPath): ParsedPath {
    return pathParse(path);
  }

  isAbsolute(path: LocationPath): boolean {
    return isAbsolute(path);
  }

  isRelative(path: LocationPath): boolean {
    return !this.isAbsolute(path);
  }

  resolveRelative(from: LocationPath, to: LocationPath): LocationPath {
    return pathResolveRelative(from, to);
  }

  locationExists = (location: LocationPath) => fs.existsSync(location);
  getFirstExistingLocation = (locations: LocationPathList) =>
    locations.find((location) => this.locationExists(location));
  getOnlyExistingLocations = (locations: LocationPathList) =>
    locations.filter((location) => this.locationExists(location));
}
