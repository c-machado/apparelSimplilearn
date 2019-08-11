Feature: As a logged user I want to be able to do a checkout so I can purchase items

  Background:
    Given I am at the home page
    And I'm logged in the Apparel website with valid "dcmu3@gmail.com" and "123456" information

  Scenario Outline: Adding products to the cart
    When I filter by "<category>"
    And I add a product to the cart
    And I should be able to place the order
    And I should be able to confirm the summary order
    And I should be able to confirm the address order
    And I should be able to confirm the shipping order
    And I should be able to confirm the payment method
    Then I should be able to confirm the final order

    Examples:
      | category |
      | Women    |
#      | Dresses  |
#      | T-shirts |
