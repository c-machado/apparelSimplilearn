Feature: As a user I want to see the product's manufacturer listed in the page so I can easily browse among them

  Scenario: Choosing a specific manufacturer
    Given I am at the search results page
    When I choose the "http://automationpractice.com/index.php?id_manufacturer=1&controller=manufacturer" needed
    Then I should see the heading of manufacturer's product list

