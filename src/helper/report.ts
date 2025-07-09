const report = require("multiple-cucumber-html-reporter");

const { Timer } = require("./timer");

const startDate = Timer.getStartTime(); // ✅ read from file
const endDate = new Date();
const durationMs = endDate.getTime() - startDate.getTime();
const duration = `${Math.floor(durationMs / 1000)} seconds`;

report.generate({
  jsonDir: "test-results",
  reportPath: "reports",
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
      { label: "Execution Start Time", value: startDate.toLocaleString() },
      { label: "Execution End Time", value: endDate.toLocaleString() },
      { label: "Total Duration" , value : duration}
    ],
  },
});
