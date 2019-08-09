$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/register.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to register in the Apparel page so I can manage my billing data",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  Scenario Outline: Successful register"
    },
    {
      "line": 4,
      "value": "#    Given I am at home page"
    },
    {
      "line": 5,
      "value": "#    When I click to sign in"
    },
    {
      "line": 6,
      "value": "#    And I fill out a valid \"\u003cemail\u003e\""
    },
    {
      "line": 7,
      "value": "#    And I click to create account"
    },
    {
      "line": 8,
      "value": "#    And I fill out the personal info \"\u003ctitle\u003e\"\"\u003cfirstName\u003e\"\"\u003clastName\u003e\"\"\u003cpassword\u003e\"\"\u003cdays\u003e\"\"\u003cmonths\u003e\"\"\u003cyears\u003e\"\"\u003cnewsletter\u003e\"\"\u003coffers\u003e\"with the correct information"
    },
    {
      "line": 9,
      "value": "#    And I fill out the additional info \"\u003ccompany\u003e\"\"\u003caddress\u003e\"\"\u003caddress2\u003e\"\"\u003ccity\u003e\"\"\u003cstate\u003e\"\"\u003czip\u003e\"\"\u003ccountry\u003e\"\"\u003cadditionalInfo\u003e\"\"\u003chomePhone\u003e\"\"\u003cmobilePhone\u003e\"\"\u003caddressAlias\u003e\" with the correct information"
    },
    {
      "line": 10,
      "value": "#    And I click on the Register button"
    },
    {
      "line": 11,
      "value": "#    Then I should be registered"
    },
    {
      "line": 12,
      "value": "#    Examples:"
    },
    {
      "line": 13,
      "value": "#      | email               | title | firstName | lastName | password | days | months | years | newsletter | offers | company | address | address2  | city   | state | zip   | country | additionalInfo| homePhone  | mobilePhone | addressAlias |"
    },
    {
      "line": 14,
      "value": "#      | dcmu4@gmail.com | Mr    | Carolina  | Machado  | 123456   | 8    | 9      | 1990  | y          | y      | Huge    | calle 2 | calle 100 | Bogota | 3     | 11000 | 21      | none          | 3002114915 | 13300776732 | hugeDir     |"
    }
  ],
  "line": 17,
  "name": "Unsuccessful register",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill out a valid \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click to create account",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I fill out the personal info \"\u003ctitle\u003e\"\"\u003cfirstName\u003e\"\"\u003clastName\u003e\"\"\u003cpassword\u003e\"\"\u003cdays\u003e\"\"\u003cmonths\u003e\"\"\u003cyears\u003e\"\"\u003cnewsletter\u003e\"\"\u003coffers\u003e\"with the correct information",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I fill out the additional info \"\u003ccompany\u003e\"\"\u003caddress\u003e\"\"\u003caddress2\u003e\"\"\u003ccity\u003e\"\"\u003cstate\u003e\"\"\u003czip\u003e\"\"\u003ccountry\u003e\"\"\u003cadditionalInfo\u003e\"\"\u003chomePhone\u003e\"\"\u003cmobilePhone\u003e\"\"\u003caddressAlias\u003e\" with the correct information",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Then I should not be registered"
    },
    {
      "line": 26,
      "value": "#And I should see a notification error"
    }
  ],
  "line": 27,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error notification",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register;",
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
      "line": 30,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register;;1"
    },
    {
      "cells": [
        "dcmu4@gmail.com",
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
        "1100",
        "blank",
        "none",
        "3002114915",
        "13300776732",
        "hugeDir"
      ],
      "line": 31,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1548029350,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Unsuccessful register",
  "description": "",
  "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I fill out a valid \"dcmu4@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click to create account",
  "keyword": "And "
});
formatter.step({
  "line": 22,
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
  "line": 23,
  "name": "I fill out the additional info \"Huge\"\"calle 2\"\"calle 100\"\"Bogota\"\"3\"\"1100\"\"blank\"\"none\"\"3002114915\"\"13300776732\"\"hugeDir\" with the correct information",
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
  "line": 24,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Then I should not be registered"
    },
    {
      "line": 26,
      "value": "#And I should see a notification error"
    }
  ],
  "line": 27,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see an error notification",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUser.iAmAtHomePage()"
});
formatter.result({
  "duration": 56868968097,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToSignIn()"
});
formatter.result({
  "duration": 4253154269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu4@gmail.com",
      "offset": 20
    }
  ],
  "location": "RegisterUser.iFillOutAValid(String)"
});
formatter.result({
  "duration": 125822307,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToCreateAccount()"
});
formatter.result({
  "duration": 65682725,
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
  "duration": 2028773509,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".account_creation #id_gender1\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.43.600229 (3fae4d0cda5334b4f533bede5a4787f7b832d052),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027machadoca-macbookpro2.roam.corp.google.com\u0027, ip: \u0027fe80:0:0:0:147b:3f80:88c8:cf5f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002712\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600229 (3fae4d0cda5334..., userDataDir: /var/folders/3t/4kks_j5124d...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65259}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: eaf99443a8ce1923893da5db0e187805\n*** Element info: {Using\u003dcss selector, value\u003d.account_creation #id_gender1}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:413)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\n\tat simplilearn.com.pages.Register.checkTitle(Register.java:93)\n\tat simplilearn.com.steps.RegisterUser.iFillOutThePersonalInfoWithTheCorrectInformation(RegisterUser.java:54)\n\tat ✽.And I fill out the personal info \"Mr\"\"Carolina\"\"Machado\"\"123456\"\"8\"\"9\"\"1990\"\"y\"\"y\"with the correct information(src/test/java/resources/register.feature:22)\n",
  "status": "failed"
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
      "val": "1100",
      "offset": 69
    },
    {
      "val": "blank",
      "offset": 75
    },
    {
      "val": "none",
      "offset": 82
    },
    {
      "val": "3002114915",
      "offset": 88
    },
    {
      "val": "13300776732",
      "offset": 100
    },
    {
      "val": "hugeDir",
      "offset": 113
    }
  ],
  "location": "RegisterUser.iFillOutTheAdditionalInfoWithTheCorrectInformation(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUser.iClickOnTheRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUser.iClickOnTheRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterUser.iShouldSeeAnErrorNotification()"
});
formatter.result({
  "status": "skipped"
});
});