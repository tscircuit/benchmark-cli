#!/usr/bin/env node

import { Command } from "commander"
import { registerRun } from "./run/register"
import { registerCompare } from "./compare/register"
import { registerRunAndCompare } from "./run-and-compare/register"
import pkg from "../package.json"
import semver from "semver"

const program = new Command()

program
  .name("benchmark")
  .description("CLI tool for tracking benchmarks and commenting to github")
  .version(semver.inc(pkg.version, "patch") ?? pkg.version)

// Register all command modules
registerRun(program)
registerCompare(program)
registerRunAndCompare(program)

program.parse()
