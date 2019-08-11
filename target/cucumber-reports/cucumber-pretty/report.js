$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "As a registered user I want to be able to login in the Apparel page, so I can have a custom experience",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Successful login",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I fill out the login form with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" information",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the Sign in button in the login form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the logo off menu at the top\u0027s page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-login;;1"
    },
    {
      "cells": [
        "dcmu3@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1876060504,
  "status": "passed"
});
formatter.before({
  "duration": 1385593721,
  "status": "passed"
});
formatter.before({
  "duration": 1440155177,
  "status": "passed"
});
formatter.before({
  "duration": 1349547332,
  "status": "passed"
});
formatter.before({
  "duration": 1341286076,
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
  "duration": 2826246854,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I fill out the login form with \"dcmu3@gmail.com\" and \"123456\" information",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the Sign in button in the login form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the logo off menu at the top\u0027s page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu3@gmail.com",
      "offset": 32
    },
    {
      "val": "123456",
      "offset": 54
    }
  ],
  "location": "LoginUser.iFillOutTheLoginFormWithAndInformation(String,String)"
});
formatter.result({
  "duration": 280319044,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iClickOnTheSignInButtonInTheLoginForm()"
});
formatter.result({
  "duration": 1080776559,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iShouldSeeTheLogoOffMenuAtTheTopSPage()"
});
formatter.result({
  "duration": 26546657,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Unsuccessful login",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;unsuccessful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I fill out the login form with not valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" information",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on the Sign in button in the login form",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see a message error",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;unsuccessful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;unsuccessful-login;;1"
    },
    {
      "cells": [
        "dcmu3@gmail",
        "123456"
      ],
      "line": 20,
      "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;unsuccessful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1396615979,
  "status": "passed"
});
formatter.before({
  "duration": 1390861787,
  "status": "passed"
});
formatter.before({
  "duration": 1443847254,
  "status": "passed"
});
formatter.before({
  "duration": 1432197641,
  "status": "passed"
});
formatter.before({
  "duration": 1414518041,
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
  "duration": 2299028272,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Unsuccessful login",
  "description": "",
  "id": "as-a-registered-user-i-want-to-be-able-to-login-in-the-apparel-page,-so-i-can-have-a-custom-experience;unsuccessful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I fill out the login form with not valid \"dcmu3@gmail\" and \"123456\" information",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on the Sign in button in the login form",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see a message error",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu3@gmail",
      "offset": 42
    },
    {
      "val": "123456",
      "offset": 60
    }
  ],
  "location": "LoginUser.iFillOutTheLoginFormWithNotValidAndInformation(String,String)"
});
formatter.result({
  "duration": 339694038,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iClickOnTheSignInButtonInTheLoginForm()"
});
formatter.result({
  "duration": 663592662,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iShouldSeeAMessageError()"
});
formatter.result({
  "duration": 19350027,
  "status": "passed"
});
formatter.scenarioOutline({
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
  "duration": 1435516046,
  "status": "passed"
});
formatter.before({
  "duration": 1456982744,
  "status": "passed"
});
formatter.before({
  "duration": 1480014682,
  "status": "passed"
});
formatter.before({
  "duration": 1475946262,
  "status": "passed"
});
formatter.before({
  "duration": 1416891581,
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
  "duration": 2561450124,
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
  "duration": 2049883386,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iClickOnTheLogOffButton()"
});
formatter.result({
  "duration": 1407143713,
  "status": "passed"
});
formatter.match({
  "location": "LoginUser.iShouldSeeALoginAvailable()"
});
formatter.result({
  "duration": 27833255,
  "status": "passed"
});
formatter.uri("manufacturerList.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to see the product\u0027s manufacturer listed in the page so I can easily browse among them",
  "description": "",
  "id": "as-a-user-i-want-to-see-the-product\u0027s-manufacturer-listed-in-the-page-so-i-can-easily-browse-among-them",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1471569889,
  "status": "passed"
});
formatter.before({
  "duration": 1485385391,
  "status": "passed"
});
formatter.before({
  "duration": 1488260210,
  "status": "passed"
});
formatter.before({
  "duration": 1522769789,
  "status": "passed"
});
formatter.before({
  "duration": 1451337746,
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
  "duration": 2478859336,
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
  "duration": 1476913744,
  "status": "passed"
});
formatter.match({
  "location": "Manufacturer.iShouldSeeTheHeadingOfManufacturerSProductList()"
});
formatter.result({
  "duration": 26737954,
  "status": "passed"
});
formatter.uri("purchase.feature");
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
  "line": 17,
  "name": "",
  "description": "",
  "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;",
  "rows": [
    {
      "cells": [
        "category"
      ],
      "line": 18,
      "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;;1"
    },
    {
      "cells": [
        "Women"
      ],
      "line": 19,
      "id": "as-a-logged-user-i-want-to-be-able-to-do-a-checkout-so-i-can-purchase-items;adding-products-to-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1489121066,
  "status": "passed"
});
formatter.before({
  "duration": 1649828383,
  "status": "passed"
});
formatter.before({
  "duration": 1521810612,
  "status": "passed"
});
formatter.before({
  "duration": 1505233084,
  "status": "passed"
});
formatter.before({
  "duration": 1504400591,
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
  "duration": 3113609815,
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
  "duration": 2160425512,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
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
  "duration": 1912853636,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iAddAProductToTheCart()"
});
formatter.result({
  "duration": 170100265,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToPlaceTheOrder()"
});
formatter.result({
  "duration": 1436513666,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheSummaryOrder()"
});
formatter.result({
  "duration": 875415967,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheAddressOrder()"
});
formatter.result({
  "duration": 784594037,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheShippingOrder()"
});
formatter.result({
  "duration": 993929930,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmThePaymentMethod()"
});
formatter.result({
  "duration": 667343035,
  "status": "passed"
});
formatter.match({
  "location": "Purchase.iShouldBeAbleToConfirmTheFinalOrder()"
});
formatter.result({
  "duration": 1347241503,
  "status": "passed"
});
formatter.uri("register.feature");
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
  "line": 12,
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
      "line": 13,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register;;1"
    },
    {
      "cells": [
        "dcmu5@gmail.com",
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
      "line": 14,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;successful-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1491938958,
  "status": "passed"
});
formatter.before({
  "duration": 1491540301,
  "status": "passed"
});
formatter.before({
  "duration": 1485593767,
  "status": "passed"
});
formatter.before({
  "duration": 1361324835,
  "status": "passed"
});
formatter.before({
  "duration": 1379961819,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "name": "I fill out a valid \"dcmu5@gmail.com\"",
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
  "duration": 2907520130,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToSignIn()"
});
formatter.result({
  "duration": 1041229490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu5@gmail.com",
      "offset": 20
    }
  ],
  "location": "RegisterUser.iFillOutAValid(String)"
});
formatter.result({
  "duration": 190852121,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToCreateAccount()"
});
formatter.result({
  "duration": 89193406,
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
  "duration": 2132993745,
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
  "duration": 971015927,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 1289213740,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iShouldBeRegistered()"
});
formatter.result({
  "duration": 14406322,
  "status": "passed"
});
formatter.scenarioOutline({
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
  "line": 25,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see an error notification",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
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
      "line": 28,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register;;1"
    },
    {
      "cells": [
        "dcmu16@gmail.com",
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
      "line": 29,
      "id": "as-a-user-i-want-to-register-in-the-apparel-page-so-i-can-manage-my-billing-data;unsuccessful-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1409679303,
  "status": "passed"
});
formatter.before({
  "duration": 1421072309,
  "status": "passed"
});
formatter.before({
  "duration": 1449688506,
  "status": "passed"
});
formatter.before({
  "duration": 1425738355,
  "status": "passed"
});
formatter.before({
  "duration": 1465484371,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
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
  "name": "I fill out a valid \"dcmu16@gmail.com\"",
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
  "line": 25,
  "name": "I click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see an error notification",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterUser.iAmAtHomePage()"
});
formatter.result({
  "duration": 2965981777,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToSignIn()"
});
formatter.result({
  "duration": 1155204447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dcmu16@gmail.com",
      "offset": 20
    }
  ],
  "location": "RegisterUser.iFillOutAValid(String)"
});
formatter.result({
  "duration": 174412166,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickToCreateAccount()"
});
formatter.result({
  "duration": 79595417,
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
  "duration": 2108358291,
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
  "duration": 985791476,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 775511317,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 808105928,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUser.iShouldSeeAnErrorNotification()"
});
formatter.result({
  "duration": 16260531,
  "status": "passed"
});
formatter.uri("search.feature");
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
  "name": "I should see the expected number of results",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see results for \"\u003ccategory\u003e\"",
  "keyword": "And "
});
formatter.examples({
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
  "duration": 1558859500,
  "status": "passed"
});
formatter.before({
  "duration": 1524156598,
  "status": "passed"
});
formatter.before({
  "duration": 1551485724,
  "status": "passed"
});
formatter.before({
  "duration": 1597050860,
  "status": "passed"
});
formatter.before({
  "duration": 1686211799,
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
  "duration": 2940703552,
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
  "name": "I should see the expected number of results",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see results for \"Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
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
  "duration": 121780528,
  "status": "passed"
});
formatter.match({
  "location": "searchProducts.iClickOnTheSearchButton()"
});
formatter.result({
  "duration": 1331430453,
  "status": "passed"
});
formatter.match({
  "location": "searchProducts.iShouldSeeTheExpectedNumberOfResults()"
});
formatter.result({
  "duration": 54055743,
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
  "duration": 204798841,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertTrue(Assert.java:44)\n\tat org.testng.Assert.assertTrue(Assert.java:54)\n\tat simplilearn.com.steps.searchProducts.iShouldSeeResultsFor(searchProducts.java:51)\n\tat ✽.And I should see results for \"Dress\"(search.feature:10)\n",
  "status": "failed"
});
formatter.before({
  "duration": 1715406673,
  "status": "passed"
});
formatter.before({
  "duration": 1629493270,
  "status": "passed"
});
formatter.before({
  "duration": 1653342577,
  "status": "passed"
});
formatter.before({
  "duration": 1587064544,
  "status": "passed"
});
formatter.before({
  "duration": 1737438039,
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
  "duration": 2886530981,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Performing a no results search",
  "description": "",
  "id": "as-a-user-i-want-to-search-for-a-product-so-i-can-easily-find-it-in-the-page;performing-a-no-results-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I type \"smith\" in the search field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see zero results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 8
    }
  ],
  "location": "searchProducts.iTypeInTheSearchField(String)"
});
formatter.result({
  "duration": 104892782,
  "status": "passed"
});
formatter.match({
  "location": "searchProducts.iClickOnTheSearchButton()"
});
formatter.result({
  "duration": 1010284782,
  "status": "passed"
});
formatter.match({
  "location": "searchProducts.iShouldSeeZeroResults()"
});
formatter.result({
  "duration": 23764559,
  "status": "passed"
});
});