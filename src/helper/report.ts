const report = require("multiple-cucumber-html-reporter");

// Capture current timestamps

const endTime = new Date();
const startTime = new Date(endTime.getTime() - 5 * 60000);

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright BDD Report",
  pageTitle: "Bookcart App test report",
  metadata: {
    browser: {
      name: "chrome",
      version: "138.0.7204.97",
    },
    device: "Dhanush Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
      { label: "Execution Start Time", value: startTime.toLocaleString() },
      { label: "Execution End Time", value: endTime.toLocaleString() }
    ],
  },
});
