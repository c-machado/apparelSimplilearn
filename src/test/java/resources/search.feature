Feature: As a user I want to search for a product so I can easily find it in the page

  Background:
    Given I am at "home" page

  Scenario Outline: Performing a successful search
    When I type "<category>" in the search field
    And I click on the search button
    Then I should see results for "silk"
    And I should see the expected number of results
    Examples:
      | category |
      | test1 |
      | test2 |
      | test3 |

  Scenario: Performing a no results search
    When I type "smith" in the search field
    And I click on the search button
    Then I should see zero results
