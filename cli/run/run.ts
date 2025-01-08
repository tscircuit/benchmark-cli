interface Params {
  inputFilePath: string
  version?: string
  prNumber?: string
}

export const run = async ({ inputFilePath, version, prNumber }: Params) => {
  const outputDir = version
    ? `v${version}`
    : prNumber
      ? `pr${prNumber}`
      : "default"
  console.log(`Running benchmark from ${inputFilePath}`)
  console.log(`Will write to ${outputDir}/timestamp-${inputFilePath}.bm.json`)
}
