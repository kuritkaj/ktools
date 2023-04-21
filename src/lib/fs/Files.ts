import jetpack from "fs-jetpack";
import { FSPath } from "./Location.js";

export class Files {
  async exists(path: FSPath) {
    const result = await jetpack.existsAsync(path);

    return result === "file";
  }

  async readIfExists(path: FSPath) {
    if (!(await this.exists(path))) {
      return null;
    }

    return await jetpack.readAsync(path, "utf8");
  }

  async copyFile(from: FSPath, to: FSPath) {
    return await jetpack.copyAsync(from, to);
  }

  async moveFile(from: FSPath, to: FSPath) {
    return await jetpack.moveAsync(from, to);
  }
}
