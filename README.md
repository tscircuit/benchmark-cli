# benchmark-cli

A command line tool for tracking benchmarks and commenting to github

## Usage

```bash
benchmark run somefile.benchmark.ts --version 1.2.3
# writes to v1.2.3/timestamp-somefile.bm.json on remote github repo

benchmark run somefile.benchmark.ts --pr 23
# writes to pr23/timestamp-somefile.bm.json on remote github repo

{
  system: {
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

benchmark delta main/file1.bm.json pr23/file1.bm.json
# Outputs the ordered difference between functions so you can
# tell how performance changed

benchmark delta main/file1.bm.json pr23/file1.bm.json --comment-on-github

# Local testing of benchmarks

benchmark run-and-compare file1.benchmark.ts
# Outputs delta between this file and the last good run
```
