interface Params {
  testFilePath: string
  stableFilePath: string
}

export const compare = async ({ testFilePath, stableFilePath }: Params) => {
  console.log(`Comparing benchmarks:`)
  console.log(`- Stable: ${stableFilePath}`)
  console.log(`- Test: ${testFilePath}`)
  // TODO: Implement actual comparison and markdown output
}
