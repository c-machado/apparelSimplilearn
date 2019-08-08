$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/register.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to register in the Apparel page so I can manage my billing data",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1622520851,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful register",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterUser.iAmAtHomePage()"
});
formatter.result({
  "duration": 3943440752,
  "status": "passed"
});
});