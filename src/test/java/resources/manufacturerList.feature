Feature: As a user I want to see the product's manufacturer listed in the page so I can easily browse among them

  Scenario: Choosing a specific manufacturer
    Given I am at "silk" search results page
    When I click one of the products
    Then I should be at the product page
    And I should see the manufacturer name matched