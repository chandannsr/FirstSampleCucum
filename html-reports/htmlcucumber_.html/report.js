$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sampletest.feature");
formatter.feature({
  "line": 2,
  "name": "Hello WORLD program",
  "description": "",
  "id": "hello-world-program",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featureLevelTag"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "I installed eclipse",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Install Eclipse",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_Install_Eclipse()"
});
formatter.result({
  "duration": 108530806,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I used to print hello world program",
  "description": "",
  "id": "hello-world-program;i-used-to-print-hello-world-program",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@scenarioLevelTag_Helloworld"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I Logged in to eclipse",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Write program to print hello world",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Verify hello world is print",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_Logged_in_to_eclipse()"
});
formatter.result({
  "duration": 103080,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_Write_program_to_print_hello_world()"
});
formatter.result({
  "duration": 50973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_Verify_hello_world_is_print()"
});
formatter.result({
  "duration": 42667,
  "status": "passed"
});
});