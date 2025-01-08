import type { Command } from "commander"
import { compare } from "./compare"

export const registerCompare = (program: Command) => {
  program
    .command("compare <stableFile> <testFile>")
    .description("Compare benchmarks")
    .action(async (stableFile, testFile) => {
      await compare({
        stableFilePath: stableFile,
        testFilePath: testFile,
      })
    })
}
