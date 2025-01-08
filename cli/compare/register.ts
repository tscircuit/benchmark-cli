import type { Command } from "commander"
import { compare } from "./compare"

export const registerCompare = (program: Command) => {
  program
    .command("compare")
    .description("Compare benchmarks")
    .action(() => {
      await compare()
    })
}
