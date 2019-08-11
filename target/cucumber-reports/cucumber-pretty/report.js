$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/manufacturerList.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to see the product\u0027s manufacturer listed in the page so I can easily browse among them",
  "description": "",
  "id": "as-a-user-i-want-to-see-the-product\u0027s-manufacturer-listed-in-the-page-so-i-can-easily-browse-among-them",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1530705644,
  "status": "passed"
});
formatter.before({
  "duration": 1102952839,
  "status": "passed"
});
formatter.before({
  "duration": 1117258231,
  "status": "passed"
});
formatter.before({
  "duration": 1129196977,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Choosing a specific manufacturer",
  "description": "",
  "id": "as-a-user-i-want-to-see-the-product\u0027s-manufacturer-listed-in-the-page-so-i-can-easily-browse-among-them;choosing-a-specific-manufacturer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am at the search results page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I choose the \"http://automationpractice.com/index.php?id_manufacturer\u003d1\u0026controller\u003dmanufacturer\" needed",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the heading of manufacturer\u0027s product list",
  "keyword": "Then "
});
formatter.match({
  "location": "Manufacturer.iAmAtTheSearchResultsPage()"
});
formatter.result({
  "duration": 2425156275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?id_manufacturer\u003d1\u0026controller\u003dmanufacturer",
      "offset": 14
    }
  ],
  "location": "Manufacturer.iChooseTheNeeded(String)"
});
formatter.result({
  "duration": 1778290032,
  "status": "passed"
});
formatter.match({
  "location": "Manufacturer.iShouldSeeTheHeadingOfManufacturerSProductList()"
});
formatter.result({
  "duration": 23173805,
  "status": "passed"
});
formatter.after({
  "duration": 136562161,
  "status": "passed"
});
});