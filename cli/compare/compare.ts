interface Params {
  testFilePath: string
  stableFilePath: string
}

export const compare = async ({ testFilePath, stableFilePath }: Params) => {
  console.log("Comparing benchmarks")
}
