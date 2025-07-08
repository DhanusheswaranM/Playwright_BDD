module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    paths: ["src/test/features/**/*.feature"],
    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    format: [
      "progress-bar",
      "html:reports/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    requireModule: ["ts-node/register"],

    parallel: 4
  },
  rerun:{
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    paths: ["@rerun.txt"],
    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:reports/cucumber-RerunReport.html",
      "json:test-results/cucumber-RerunReport.json",
      "rerun:@rerun.txt"
    ],
    parallel: 4
  }
};