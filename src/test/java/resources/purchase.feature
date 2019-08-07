Feature: As a logged user I want to be able to do a checkout so I can purchase items

  Background:
    Given I am at "home" page

  Scenario Outline: Adding products to the cart
    When I type "<category>" in the search field
    And I click on the Add to cart button
    Then I should be able to place the order
    And I should see a notification message
    Examples:
      | category |
      | test1 |
      | test2 |
      | test3 |
