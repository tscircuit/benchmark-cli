import type { Command } from "commander"

export const registerRunAndCompare = (program: Command) => {
  program
    .command("run-and-compare <inputFile>")
    .description("Run a benchmark and compare it")
    .option("--stable <path>", "Path to stable benchmark or directory")
    .action(async (inputFile, options) => {
      await runAndCompare({
        inputFilePath: inputFile,
        stablePath: options.stable,
      })
    })
}
