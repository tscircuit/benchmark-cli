interface Params {
  inputFilePath: string
  stablePath: string
}

export const runAndCompare = async ({ inputFilePath, stablePath }: Params) => {
  console.log(`Running benchmark from ${inputFilePath}`)
  console.log(`Will compare against stable path: ${stablePath}`)
  // TODO: Implement running benchmark and comparing against stable
}
