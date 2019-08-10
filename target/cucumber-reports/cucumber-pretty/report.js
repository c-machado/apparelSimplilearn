$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a registered user I want to be able to login in the Apparel page, so I can have a custom experience",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#    Scenario Outline:  Successful login"
    },
    {
      "line": 7,
      "value": "#      When I fill out the login form with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" information"
    },
    {
      "line": 8,
      "value": "#      And I click on the Sign in button in the login form"
    },
    {
      "line": 9,
      "value": "#      Then I should see the logo off menu at the top\u0027s page"
    },
    {
      "line": 10,
      "value": "#      Examples:"
    },
    {
      "line": 11,
      "value": "#        | username            | password |"
    },
    {
      "line": 12,
      "value": "#        | dcmu3@gmail.com | 123456 |"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 14,
      "value": "#    Scenario Outline: Unsuccessful login"
    },
    {
      "line": 15,
      "value": "#      When I fill out the login form with not valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" information"
    },
    {
      "line": 16,
      "value": "#      And I click on the Sign in button in the login form"
    },
    {
      "line": 17,
      "value": "#      Then I should see a message error"
    },
    {
      "line": 18,
      "value": "#      Examples:"
    },
    {
      "line": 19,
      "value": "#        | username    | password |"
    },
    {
      "line": 20,
      "value": "#        | dcmu3@gmail | 123456 |"
    }
  ],
  "line": 22,
  "name": "Successful log off",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-log-off",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I\u0027m logged in the Apparel website with valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" information",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on the log off button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should see a login available",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-log-off;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-log-off;;1"
    },
    {
      "cells": [
        "dcmu3@gmail.com",
        "123456"
      ],
      "line": 28,
      "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-log-off;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1668793837,
  "status": "passed"
});
formatter.before({
  "duration": 1167030703,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The login form is displayed in the Apparel Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginUser.theLoginFormIsDisplayedInTheApparelHomepage()"
});
formatter.result({
  "duration": 3103007595,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successful log off",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-log-off;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I\u0027m logged in the Apparel website with valid \"dcmu3@gmail.com\" and \"123456\" information",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on the log off button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should see a login available",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu3@gmail.com",
      "offset": 46
    },
    {
      "val": "123456",
      "offset": 68
    }
  ],
  "location": "LoginUser.iMLoggedInTheApparelWebsiteWithValidAndInformation(String,String)"
});
formatter.result({
  "duration": 2185900169,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iClickOnTheLogOffButton()"
});
formatter.result({
  "duration": 1473613499,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iShouldSeeALoginAvailable()"
});
formatter.result({
  "duration": 21800403,
  "status": "passed"
});
});