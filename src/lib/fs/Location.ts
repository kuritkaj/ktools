import fs from "node:fs";
import { join as pathJoin, resolve as pathResolve } from "node:path";
import { LocationResolver } from "./LocationResolver.js";

export type FSPath = string;
export type FSPathList = FSPath[];

interface FSLocationConfig {
  root?: FSLocation;
  parent?: FSLocation;
}

export class FSLocation {
  root?: FSLocation;
  parent?: FSLocation;

  relativePath: FSPath;
  relativePathRoot: FSPath;
  absolutePath: FSPath;
  locationResolver = new LocationResolver();
  constructor(protected readonly path: FSPath, config: FSLocationConfig = {}) {
    this.root = config.root;
    this.parent = config.parent || this.root;

    if (this.locationResolver.isAbsolute(path)) {
      this.absolutePath = path;
    } else {
      this.absolutePath = this.locationResolver.resolve(
        this.getParentAbsolutePath(),
        path,
      );
    }

    this.relativePath = this.locationResolver.resolveRelative(
      this.getParentAbsolutePath(),
      path,
    );
    this.relativePathRoot = this.locationResolver.resolveRelative(
      this.getRootAbsolutePath(),
      path,
    );
  }

  getParentAbsolutePath(): FSPath {
    return (this.parent || this).absolutePath;
  }

  getRootAbsolutePath(): FSPath {
    return (this.root || this).absolutePath;
  }

  join(...paths: FSPathList): FSLocation {
    return new FSLocation(pathJoin(...paths), {
      root: this.root || this,
      parent: this,
    });
  }

  resolve(...paths: FSPathList): FSLocation {
    return new FSLocation(pathResolve(...paths), {
      root: this.root || this,
      parent: this,
    });
  }

  exists(): boolean {
    return fs.existsSync(this.absolutePath);
  }
}
