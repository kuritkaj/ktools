import fg from "fast-glob";
import { filter, pipe, toArray, toAsync } from "iter-ops";
import { FSPath, FSPathList } from "../Location.js";

export type Glob = string;
export type GlobList = Glob[];

export interface FinderFilter {
  filter(path: FSPath): Promise<boolean>;
}

export type FinderFilterList = FinderFilter[];

export interface FinderOptions {
  cwd?: FSPath;
  filters?: FinderFilterList;
}

const defaultOptions: FinderOptions = {
  filters: [],
};

export class Finder {
  protected cwd?: FSPath;
  protected filters: FinderFilterList = [];

  constructor({ cwd, filters }: FinderOptions = defaultOptions) {
    this.cwd = cwd;
    this.filters = filters || [];
  }

  clone({ cwd, filters }: FinderOptions) {
    return new Finder({ ...this, cwd, filters });
  }

  inPath(path: FSPath) {
    return this.clone({ cwd: path });
  }

  addFilters(filters: FinderFilterList) {
    return this.clone({
      filters: this.filters.concat(filters),
    });
  }

  async findMatching(patterns: GlobList) {
    const paths = await fg(patterns, {
      cwd: this.cwd,
    });

    if (!this.filters.length) {
      return paths;
    }

    return await this.filterResult(paths);
  }

  protected async filterResult(paths: FSPathList) {
    const pathFilter = this.createPathFilter();

    const r = await pipe(toAsync(paths), filter(pathFilter), toArray()).first;

    return r || [];
  }

  protected createPathFilter() {
    return async (path: FSPath) => {
      for (const f of this.filters) {
        if (!(await f.filter(path))) {
          return false;
        }
      }
      return true;
    };
  }
}
