$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/purchase.feature");
formatter.feature({
  "line": 1,
  "name": "As a logged user I want to be able to do a checkout so I can purchase items",
  "description": "",
  "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Adding products to the cart",
  "description": "",
  "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I filter by \"\u003ccategory\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add a product to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to place the order",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to confirm the summary order",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to confirm the address order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to confirm the shipping order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to confirm the payment method",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to confirm the final order",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "#    And I should see a notification message"
    }
  ],
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;",
  "rows": [
    {
      "cells": [
        "category"
      ],
      "line": 19,
      "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;;1"
    },
    {
      "cells": [
        "Women"
      ],
      "line": 20,
      "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1880241174,
  "status": "passed"
});
formatter.before({
  "duration": 1357043370,
  "status": "passed"
});
formatter.before({
  "duration": 1404083620,
  "status": "passed"
});
formatter.before({
  "duration": 1396843155,
  "status": "passed"
});
formatter.before({
  "duration": 1296529111,
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
formatter.step({
  "line": 5,
  "name": "I\u0027m logged in the Apparel website with valid \"dcmu3@gmail.com\" and \"123456\" information",
  "keyword": "And "
});
formatter.match({
  "location": "searchProducts.iAmAtPage()"
});
formatter.result({
  "duration": 2957112468,
  "status": "passed"
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
  "duration": 1974252848,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Adding products to the cart",
  "description": "",
  "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I filter by \"Women\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add a product to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to place the order",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to confirm the summary order",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to confirm the address order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to confirm the shipping order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to confirm the payment method",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to confirm the final order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 13
    }
  ],
  "location": "Purchase.iFilterBy(String)"
});
formatter.result({
  "duration": 1747604511,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iAddAProductToTheCart()"
});
formatter.result({
  "duration": 164163952,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToPlaceTheOrder()"
});
formatter.result({
  "duration": 1351516123,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheSummaryOrder()"
});
formatter.result({
  "duration": 806530085,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheAddressOrder()"
});
formatter.result({
  "duration": 749987189,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheShippingOrder()"
});
formatter.result({
  "duration": 877795009,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmThePaymentMethod()"
});
formatter.result({
  "duration": 659279171,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheFinalOrder()"
});
formatter.result({
  "duration": 1035435919,
  "status": "passed"
});
formatter.after({
  "duration": 157102427,
  "status": "passed"
});
});