import type { Command } from "commander"
import { run } from "./run"

export const registerRun = (program: Command) => {
  program
    .command("run <inputFile>")
    .description("Run a benchmark")
    .option("--version <version>", "Version number for output directory")
    .option("--pr <number>", "PR number for output directory")
    .action(async (inputFile, options) => {
      await run({
        inputFilePath: inputFile,
        version: options.version,
        prNumber: options.pr,
      })
    })
}
