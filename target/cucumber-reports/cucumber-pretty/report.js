$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/register.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to register in the Apparel page so I can manage my billing data",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful register",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill out a valid \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click to create account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill out the personal info \"\u003ctitle\u003e\"\"\u003cfirstName\u003e\"\"\u003clastName\u003e\"\"\u003cpassword\u003e\"\"\u003cdays\u003e\"\"\u003cmonths\u003e\"\"\u003cyears\u003e\"\"\u003cnewsletter\u003e\"\"\u003coffers\u003e\"with the correct information",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill out the additional info \"\u003ccompany\u003e\"\"\u003caddress\u003e\"\"\u003caddress2\u003e\"\"\u003ccity\u003e\"\"\u003cstate\u003e\"\"\u003czip\u003e\"\"\u003ccountry\u003e\"\"\u003cadditionalInfo\u003e\"\"\u003chomePhone\u003e\"\"\u003cmobilePhone\u003e\"\"\u003caddressAlias\u003e\" with the correct information",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be registered",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "#    And I should see a notification"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register;",
  "rows": [
    {
      "cells": [
        "email",
        "title",
        "firstName",
        "lastName",
        "password",
        "days",
        "months",
        "years",
        "newsletter",
        "offers",
        "company",
        "address",
        "address2",
        "city",
        "state",
        "zip",
        "country",
        "additionalInfo",
        "homePhone",
        "mobilePhone",
        "addressAlias"
      ],
      "line": 14,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register;;1"
    },
    {
      "cells": [
        "dcmu3@gmail.com",
        "Mr",
        "Carolina",
        "Machado",
        "123456",
        "8",
        "9",
        "1990",
        "y",
        "y",
        "Huge",
        "calle 2",
        "calle 100",
        "Bogota",
        "3",
        "11000",
        "21",
        "none",
        "3002114915",
        "13300776732",
        "hugeDir"
      ],
      "line": 15,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1708292599,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Successful register",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill out a valid \"dcmu3@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click to create account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill out the personal info \"Mr\"\"Carolina\"\"Machado\"\"123456\"\"8\"\"9\"\"1990\"\"y\"\"y\"with the correct information",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill out the additional info \"Huge\"\"calle 2\"\"calle 100\"\"Bogota\"\"3\"\"11000\"\"21\"\"none\"\"3002114915\"\"13300776732\"\"hugeDir\" with the correct information",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUser.iAmAtHomePage()"
});
formatter.result({
  "duration": 3959425351,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToSignIn()"
});
formatter.result({
  "duration": 1310858566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu3@gmail.com",
      "offset": 20
    }
  ],
  "location": "RegisterUser.iFillOutAValid(String)"
});
formatter.result({
  "duration": 151042786,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToCreateAccount()"
});
formatter.result({
  "duration": 65465462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 30
    },
    {
      "val": "Carolina",
      "offset": 34
    },
    {
      "val": "Machado",
      "offset": 44
    },
    {
      "val": "123456",
      "offset": 53
    },
    {
      "val": "8",
      "offset": 61
    },
    {
      "val": "9",
      "offset": 64
    },
    {
      "val": "1990",
      "offset": 67
    },
    {
      "val": "y",
      "offset": 73
    },
    {
      "val": "y",
      "offset": 76
    }
  ],
  "location": "RegisterUser.iFillOutThePersonalInfoWithTheCorrectInformation(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2160486710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Huge",
      "offset": 32
    },
    {
      "val": "calle 2",
      "offset": 38
    },
    {
      "val": "calle 100",
      "offset": 47
    },
    {
      "val": "Bogota",
      "offset": 58
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "11000",
      "offset": 69
    },
    {
      "val": "21",
      "offset": 76
    },
    {
      "val": "none",
      "offset": 80
    },
    {
      "val": "3002114915",
      "offset": 86
    },
    {
      "val": "13300776732",
      "offset": 98
    },
    {
      "val": "hugeDir",
      "offset": 111
    }
  ],
  "location": "RegisterUser.iFillOutTheAdditionalInfoWithTheCorrectInformation(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 752217161,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 1250195541,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iShouldBeRegistered()"
});
formatter.result({
  "duration": 12667478,
  "status": "passed"
});
});