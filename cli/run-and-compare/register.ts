import type { Command } from "commander"

export const registerRunAndCompare = (program: Command) => {
  program
    .command("run-and-compare")
    .description("Run a benchmark and compare it")
    .action(() => {
      console.log("Running a benchmark and comparing it")
    })
}
