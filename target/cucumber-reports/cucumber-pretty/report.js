$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/search.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to search for a product so I can easily find it in the page",
  "description": "",
  "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Performing a successful search",
  "description": "",
  "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page;performing-a-successful-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I type \"\u003ccategory\u003e\" in the search field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see results for \"\u003ccategory\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#    And I should see the expected number of results"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page;performing-a-successful-search;",
  "rows": [
    {
      "cells": [
        "category"
      ],
      "line": 12,
      "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page;performing-a-successful-search;;1"
    },
    {
      "cells": [
        "Dress"
      ],
      "line": 13,
      "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page;performing-a-successful-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1556482764,
  "status": "passed"
});
formatter.before({
  "duration": 1156210715,
  "status": "passed"
});
formatter.before({
  "duration": 1246124634,
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
  "name": "I am at the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "searchProducts.iAmAtPage()"
});
formatter.result({
  "duration": 3978460747,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Performing a successful search",
  "description": "",
  "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page;performing-a-successful-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I type \"Dress\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see results for \"Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Dress",
      "offset": 8
    }
  ],
  "location": "searchProducts.iTypeInTheSearchField(String)"
});
formatter.result({
  "duration": 125747589,
  "status": "passed"
});
formatter.match({
  "location": "searchProducts.iClickOnTheSearchButton()"
});
formatter.result({
  "duration": 1587550095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dress",
      "offset": 26
    }
  ],
  "location": "searchProducts.iShouldSeeResultsFor(String)"
});
formatter.result({
  "duration": 142232262,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertTrue(Assert.java:44)\n\tat org.testng.Assert.assertTrue(Assert.java:54)\n\tat simplilearn.com.steps.searchProducts.iShouldSeeResultsFor(searchProducts.java:52)\n\tat ✽.Then I should see results for \"Dress\"(src/test/java/resources/search.feature:9)\n",
  "status": "failed"
});
});