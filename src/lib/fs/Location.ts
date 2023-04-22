import { LocationResolver } from "./LocationResolver.js";
import fs from "node:fs";
import { join as pathJoin, resolve as pathResolve } from "node:path";

export type FSLocationPath = string;
export type FSLocationPathList = FSLocationPath[];

interface FSLocationConfig {
  root?: FSLocation;
  parent?: FSLocation;
}

export class FSLocation {
  root?: FSLocation;
  parent?: FSLocation;

  relativePath: FSLocationPath;
  relativePathRoot: FSLocationPath;
  absolutePath: FSLocationPath;
  locationResolver = new LocationResolver();
  constructor(
    protected readonly path: FSLocationPath,
    config: FSLocationConfig = {},
  ) {
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

  getParentAbsolutePath(): FSLocationPath {
    return (this.parent || this).absolutePath;
  }

  getRootAbsolutePath(): FSLocationPath {
    return (this.root || this).absolutePath;
  }

  join(...paths: FSLocationPathList): FSLocation {
    return new FSLocation(pathJoin(...paths), {
      root: this.root || this,
      parent: this,
    });
  }

  resolve(...paths: FSLocationPathList): FSLocation {
    return new FSLocation(pathResolve(...paths), {
      root: this.root || this,
      parent: this,
    });
  }

  exists(): boolean {
    return fs.existsSync(this.absolutePath);
  }
}
