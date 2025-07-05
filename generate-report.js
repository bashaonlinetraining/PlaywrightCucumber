const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'cucumber-html-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false
});