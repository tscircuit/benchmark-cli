# benchmark-cli

A command line tool for tracking benchmarks and commenting to github

## Usage

```bash
benchmark run somefile.benchmark.ts --version 1.2.3
# writes to v1.2.3/timestamp-somefile.bm.json

benchmark run somefile.benchmark.ts --pr 23
# writes to pr23/timestamp-somefile.bm.json

{
  system: {
    os: "macOS",
    arch: "arm64",
    description: "M3 Mac"
  },
  timeSpentInFn: {
    FunctionName: 1102,
    OtherFunctionName: 2329
  }
  numFnCalls: {
    FunctionName: 32,
    OtherFunctionName: 1032
  }
}

benchmark compare main/file1.bm.json pr23/file1.bm.json
# Outputs the ordered difference between functions in markdown so
# you can tell how performance improved or regressed

# Test a new benchmark against the stable one (does not write out)
benchmark run-and-compare file1.benchmark.ts --stable main/file1.bm.json

benchmark run-and-compare file1.benchmark.ts --stable main
```
