import type { Command } from "commander"

export const registerCompare = (program: Command) => {
  program
    .command("compare")
    .description("Compare benchmarks")
    .action(() => {
      console.log("Comparing benchmarks")
    })
}
