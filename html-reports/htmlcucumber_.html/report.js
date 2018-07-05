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
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.i_Verify_hello_world_is_print()"
});
formatter.result({
  "status": "skipped"
});
});