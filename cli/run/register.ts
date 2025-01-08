import type { Command } from "commander"

export const registerRun = (program: Command) => {
  program
    .command("run")
    .description("Run a benchmark")
    .action(() => {
      console.log("Running a benchmark")
    })
}
